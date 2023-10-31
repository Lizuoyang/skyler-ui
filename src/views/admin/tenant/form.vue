<template>
    <el-dialog :title="form.id ? $t('common.editBtn') : $t('common.addBtn')" v-model="visible"
               :close-on-click-modal="false" draggable>
        <el-form ref="dataFormRef" :model="form" :rules="dataRules" formDialogRef label-width="90px"
                 v-loading="loading">
            <el-row :gutter="24">
                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenant.name')" prop="name">
                        <el-input v-model="form.name" :placeholder="$t('tenant.inputNameTip')"/>
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenant.contactName')" prop="contactName">
                        <el-input v-model="form.contactName" :placeholder="$t('tenant.inputContactNameTip')"/>
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenant.contactMobile')" prop="contactMobile">
                        <el-input v-model="form.contactMobile" :placeholder="$t('tenant.inputContactMobileTip')"/>
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenant.userName')" prop="userName">
                        <el-input v-model="form.userName" :placeholder="$t('tenant.inputUserNameTip')"/>
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenant.userPwd')" prop="userPwd">
                        <el-input v-model="form.userPwd" :placeholder="$t('tenant.inputUserPwdTip')" type="password"/>
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenant.packageId')" prop="packageId">
                        <el-select :placeholder="$t('tenant.inputPackageIdTip')" class="w100" clearable
                                   v-model="form.packageId">
                            <el-option :key="item.id" :label="item.name" :value="item.id"
                                       v-for="item in tenantPackageList"/>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenant.expireTime')" prop="expireTime">
                        <el-date-picker
                                :end-placeholder="$t('tenant.inputExpireTimeTip')"
                                :start-placeholder="$t('tenant.inputExpireTimeTip')"
                                range-separator="To"
                                type="datetime"
                                v-model="form.expireTime"
                                value-format="YYYY-MM-DD HH:mm:ss"
                        />
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenant.accountCount')" prop="accountCount">
                        <el-input v-model="form.accountCount" :placeholder="$t('tenant.inputAccountCountTip')"/>
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="mb20">
                    <el-form-item :label="$t('tenant.domain')" prop="domain">
                        <el-input v-model="form.domain" :placeholder="$t('tenant.inputDomainTip')"/>
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

<script setup lang="ts" name="SysTenantDialog">
    import {useDict} from '/@/hooks/dict';
    import {useMessage} from "/@/hooks/message";
    import {getObj, addObj, putObj} from '/@/api/admin/tenant'
    import {fetchTenantPackageAll} from '/@/api/admin/tenantPackge'
    import {rule} from '/@/utils/validate';
    import {useI18n} from 'vue-i18n';
    import {list as roleList} from "/@/api/admin/role";

    const emit = defineEmits(['refresh']);

    // 定义变量内容
    const dataFormRef = ref();
    const visible = ref(false)
    const loading = ref(false)
    const {t} = useI18n();

    // 定义字典

    // 提交表单数据
    const form = reactive({
        id: '',
        name: '',
        contactUserId: '',
        contactName: '',
        contactMobile: '',
        status: '',
        domain: '',
        packageId: '',
        expireTime: '',
        accountCount: '',
    });

    const tenantPackageList = ref<any[]>([]);

    // 定义校验规则
    const dataRules = ref({
        name: [{required: true, message: t('tenant.inputNameRule'), trigger: 'blur'}],
        contactUserId: [{required: true, message: t('tenant.inputContactUserIdRule'), trigger: 'blur'}],
        contactName: [{required: true, message: t('tenant.inputContactNameRule'), trigger: 'blur'}],
        contactMobile: [{required: true, message: t('tenant.inputContactMobileRule'), trigger: 'blur'}],
        userName: [{required: true, message: t('tenant.inputUserNameRule'), trigger: 'blur'}],
        userPwd: [{required: true, message: t('tenant.inputUserPwdRule'), trigger: 'blur'}],
    })

    // 打开弹窗
    const openDialog = (id: string) => {
        visible.value = true
        form.id = ''

        // 重置表单数据
        nextTick(() => {
            dataFormRef.value?.resetFields();
        });

        getTenantPackageData();

        // 获取sysTenant信息
        if (id) {
            form.id = id
            getsysTenantData(id)
        }
    };

    // 提交
    const onSubmit = async () => {
        const valid = await dataFormRef.value.validate().catch(() => {
        });
        if (!valid) return false;

        try {
            loading.value = true;
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
    const getsysTenantData = (id: string) => {
        // 获取数据
        loading.value = true
        getObj(id).then((res: any) => {
            Object.assign(form, res.data)
        }).finally(() => {
            loading.value = false
        })
    };

    // 租户套餐数据
    const getTenantPackageData = () => {
        // 获取租户套餐列表
        fetchTenantPackageAll().then(res => {
            tenantPackageList.value = res.data
        })
    };

    // 暴露变量
    defineExpose({
        openDialog
    });
</script>
