<template>
    <el-dialog :title="form.id ? $t('common.editBtn') : $t('common.addBtn')" v-model="visible"
               :close-on-click-modal="false" draggable>
        <el-form ref="dataFormRef" :model="form" :rules="dataRules" formDialogRef label-width="90px"
                 v-loading="loading">
            <el-row :gutter="24">
                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenantPackge.name')" prop="name">
                        <el-input v-model="form.name" :placeholder="$t('tenantPackge.inputNameTip')"/>
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenantPackge.menuIds')" prop="menuIds">
                        <!--<el-input v-model="form.menuIds" :placeholder="$t('tenantPackge.inputMenuIdsTip')"/>-->
                        <div class="flex items-center justify-between">
                            <div class="flex mr-16">
                                <el-checkbox label="展开/折叠" @change="handleExpand"/>
                                <el-checkbox label="全选/不全选" @change="handleSelectAll"/>
                            </div>
                        </div>
                        <el-scrollbar class="h-[400px] sm:h-[600px]">
                            <el-tree
                                    v-loading="loading"
                                    ref="menuTree"
                                    :data="state.treeData"
                                    :default-checked-keys="state.checkedKeys"
                                    :check-strictly="!checkStrictly"
                                    :props="state.defaultProps"
                                    class="filter-tree"
                                    node-key="id"
                                    highlight-current
                                    show-checkbox
                            />
                        </el-scrollbar>
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenantPackge.remark')" prop="remark">
                        <el-input v-model="form.remark"
                                  :placeholder="$t('tenantPackge.inputRemarkTip')"/>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
        <span class="dialog-footer">
          <el-button @click="visible = false">{{ $t('common.cancelButtonText') }}</el-button>
          <el-button type="primary" @click="onSubmit"
                     :disabled="loading">{{ $t('common.confirmButtonText') }}</el-button>
        </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts" name="SysTenantPackageDialog">
    import {useDict} from '/@/hooks/dict';
    import {useMessage} from "/@/hooks/message";
    import {getObj, addObj, putObj} from '/@/api/admin/tenantPackge'
    import { fetchTenantPackageTree } from '/@/api/admin/tenantPackge';
    import {rule} from '/@/utils/validate';
    import {useI18n} from 'vue-i18n';
    import { Ref } from 'vue';
    import {CheckboxValueType} from 'element-plus';
    import {pageList} from "/@/api/admin/menu";
    import other from "/@/utils/other";
    import {useUserInfo} from "/@/stores/userInfo";

    const emit = defineEmits(['refresh']);
    const menuTree = ref();
    const checkStrictly = ref(true);
    const checkedKeys: Ref<any[]> = ref([]);

    // 定义变量内容
    const stores = useUserInfo();
    const { userInfos } = storeToRefs(stores);
    const dataFormRef = ref();
    const visible = ref(false)
    const loading = ref(false)
    const {t} = useI18n();

    const state = reactive({
        checkedKeys: [] as any[],
        treeData: [] as any[],
        defaultProps: {
            label: 'name',
            value: 'id',
        },
    });
    // 定义字典

    // 提交表单数据
    const form = reactive({
        id: '',
        name: '',
        status: '',
        remark: '',
        menuIds: '',
    });

    // 定义校验规则
    const dataRules = ref({
        name: [{required: true, message: t('tenantPackge.inputNameRule'), trigger: 'blur'}],
    })

    // 打开弹窗
    const openDialog = (id: string) => {
        visible.value = true
        form.id = ''

        state.checkedKeys = [];
        state.treeData = [];
        checkedKeys.value = [];

        // 重置表单数据
        nextTick(() => {
            dataFormRef.value?.resetFields();
        });

        // 获取sysTenantPackage信息
        if (id) {
            form.id = id
            getsysTenantPackageData(id)
        }

        pageList().then(r => {
                state.treeData = r.data;
                state.checkedKeys = other.resolveAllEunuchNodeId(state.treeData, checkedKeys.value, []);
            })
    };

    // 提交
    const onSubmit = async () => {
        const valid = await dataFormRef.value.validate().catch(() => {
        });
        if (!valid) return false;

        try {
            loading.value = true;
            const menuIds = menuTree.value.getCheckedKeys().join(',').concat(',').concat(menuTree.value.getHalfCheckedKeys().join(','));
            form.menuIds = menuIds;
            form.id ? await putObj(form) : await addObj(form);
            useMessage().success(t(form.id ? 'common.editSuccessText' : 'common.addSuccessText'));
            visible.value = false;
            emit('refresh');
        } catch (err: any) {
            useMessage().error(err.msg);
        } finally {
            loading.value = false;
        }
    };


    // 初始化表单数据
    const getsysTenantPackageData = (id: string) => {
        // 获取数据
        loading.value = true
        getObj(id).then((res: any) => {
            Object.assign(form, res.data)
            checkedKeys.value = form.menuIds.split(',');
        }).finally(() => {
            loading.value = false
        })
    };

    const handleExpand = (check: CheckboxValueType) => {
        const treeList = state.treeData;
        for (let i = 0; i < treeList.length; i++) {
            //@ts-ignore
            menuTree.value.store.nodesMap[treeList[i].id].expanded = check;
        }
    };

    const handleSelectAll = (check: CheckboxValueType) => {
        if (check) {
            menuTree.value?.setCheckedKeys(state.treeData.map((item) => item.id));
        } else {
            menuTree.value?.setCheckedKeys([]);
        }
    };

    // 暴露变量
    defineExpose({
        openDialog
    });
</script>
