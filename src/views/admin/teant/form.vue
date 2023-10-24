<template>
    <el-dialog :title="form.id ? $t('common.editBtn') : $t('common.addBtn')" v-model="visible"
      :close-on-click-modal="false" draggable>
      <el-form ref="dataFormRef" :model="form" :rules="dataRules" formDialogRef label-width="90px" v-loading="loading">
       <el-row :gutter="24">
    <el-col :span="12" class="mb20">
      <el-form-item :label="$t('teant.name')" prop="name">
        <el-input v-model="form.name" :placeholder="$t('teant.inputNameTip')"/>
      </el-form-item>
      </el-col>

    <el-col :span="12" class="mb20">
      <el-form-item :label="$t('teant.contactUserId')" prop="contactUserId">
        <el-input v-model="form.contactUserId" :placeholder="$t('teant.inputContactUserIdTip')"/>
      </el-form-item>
      </el-col>

    <el-col :span="12" class="mb20">
      <el-form-item :label="$t('teant.contactName')" prop="contactName">
        <el-input v-model="form.contactName" :placeholder="$t('teant.inputContactNameTip')"/>
      </el-form-item>
      </el-col>

    <el-col :span="12" class="mb20">
      <el-form-item :label="$t('teant.contactMobile')" prop="contactMobile">
        <el-input v-model="form.contactMobile" :placeholder="$t('teant.inputContactMobileTip')"/>
      </el-form-item>
      </el-col>

    <el-col :span="12" class="mb20">
      <el-form-item :label="$t('teant.status')" prop="status">
        <el-input v-model="form.status" :placeholder="$t('teant.inputStatusTip')"/>
      </el-form-item>
      </el-col>

    <el-col :span="12" class="mb20">
      <el-form-item :label="$t('teant.domain')" prop="domain">
        <el-input v-model="form.domain" :placeholder="$t('teant.inputDomainTip')"/>
      </el-form-item>
      </el-col>

    <el-col :span="12" class="mb20">
      <el-form-item :label="$t('teant.packageId')" prop="packageId">
        <el-input v-model="form.packageId" :placeholder="$t('teant.inputPackageIdTip')"/>
      </el-form-item>
      </el-col>

    <el-col :span="12" class="mb20">
      <el-form-item :label="$t('teant.expireTime')" prop="expireTime">
        <el-input v-model="form.expireTime" :placeholder="$t('teant.inputExpireTimeTip')"/>
      </el-form-item>
      </el-col>

    <el-col :span="12" class="mb20">
      <el-form-item :label="$t('teant.accountCount')" prop="accountCount">
        <el-input v-model="form.accountCount" :placeholder="$t('teant.inputAccountCountTip')"/>
      </el-form-item>
      </el-col>

			</el-row>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="visible = false">{{ $t('common.cancelButtonText') }}</el-button>
          <el-button type="primary" @click="onSubmit" :disabled="loading">{{ $t('common.confirmButtonText') }}</el-button>
        </span>
      </template>
    </el-dialog>
</template>

<script setup lang="ts" name="SysTenantDialog">
import { useDict } from '/@/hooks/dict';
import { useMessage } from "/@/hooks/message";
import { getObj, addObj, putObj } from '/@/api/admin/teant'
import { rule } from '/@/utils/validate';
import {useI18n} from 'vue-i18n';
const emit = defineEmits(['refresh']);

// 定义变量内容
const dataFormRef = ref();
const visible = ref(false)
const loading = ref(false)
const {t} = useI18n();

// 定义字典

// 提交表单数据
const form = reactive({
		id:'',
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

// 定义校验规则
const dataRules = ref({
        name: [{required: true, message: t('teant.inputNameRule'), trigger: 'blur'}],
        contactUserId: [{required: true, message: t('teant.inputContactUserIdRule'), trigger: 'blur'}],
        contactName: [{required: true, message: t('teant.inputContactNameRule'), trigger: 'blur'}],
        contactMobile: [{required: true, message: t('teant.inputContactMobileRule'), trigger: 'blur'}],
        status: [{required: true, message: t('teant.inputStatusRule'), trigger: 'blur'}],
        domain: [{required: true, message: t('teant.inputDomainRule'), trigger: 'blur'}],
        packageId: [{required: true, message: t('teant.inputPackageIdRule'), trigger: 'blur'}],
        expireTime: [{required: true, message: t('teant.inputExpireTimeRule'), trigger: 'blur'}],
        accountCount: [{required: true, message: t('teant.inputAccountCountRule'), trigger: 'blur'}],
})

// 打开弹窗
const openDialog = (id: string) => {
  visible.value = true
  form.id = ''

  // 重置表单数据
	nextTick(() => {
		dataFormRef.value?.resetFields();
	});

  // 获取sysTenant信息
  if (id) {
    form.id = id
    getsysTenantData(id)
  }
};

// 提交
const onSubmit = async () => {
	const valid = await dataFormRef.value.validate().catch(() => {});
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

// 暴露变量
defineExpose({
  openDialog
});
</script>