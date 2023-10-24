<template>
  <div class="layout-padding">
    <div class="layout-padding-auto layout-padding-view">
      <el-row v-show="showSearch">
        <el-form :model="state.queryForm" ref="queryRef" :inline="true" @keyup.enter="getDataList">
      <el-form-item :label="$t('teant.name')" prop="name" >
        <el-input :placeholder="$t('teant.inputNameTip')" v-model="state.queryForm.name" />
      </el-form-item>
      <el-form-item :label="$t('teant.status')" prop="status">
            <el-select v-model="state.queryForm.status" :placeholder="$t('teant.inputStatusTip')">
              <el-option :label="$t('common.pleaseSelect')" value="0"></el-option>
            </el-select>
      </el-form-item>
          <el-form-item>
            <el-button icon="search" type="primary" @click="getDataList">
              {{ $t('common.queryBtn') }}
            </el-button>
            <el-button icon="Refresh" @click="resetQuery">{{ $t('common.resetBtn') }}</el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
        <div class="mb8" style="width: 100%">
          <el-button icon="folder-add" type="primary" class="ml10" @click="formDialogRef.openDialog()"
            v-auth="'admin_teant_add'">
            {{ $t('common.addBtn') }}
          </el-button>
          <el-button plain :disabled="multiple" icon="Delete" type="primary"
            v-auth="'admin_teant_del'" @click="handleDelete(selectObjs)">
            {{ $t('common.delBtn') }}
          </el-button>
          <right-toolbar v-model:showSearch="showSearch" :export="'admin_teant_export'"
                @exportExcel="exportExcel" class="ml10 mr20" style="float: right;"
            @queryTable="getDataList"></right-toolbar>
        </div>
      </el-row>
      <el-table :data="state.dataList" v-loading="state.loading" border 
        :cell-style="tableStyle.cellStyle" :header-cell-style="tableStyle.headerCellStyle"
				@selection-change="selectionChangHandle"
        @sort-change="sortChangeHandle">
        <el-table-column type="selection" width="40" align="center" />
        <el-table-column type="index" label="#" width="40" />
          <el-table-column prop="name" :label="$t('teant.name')"  show-overflow-tooltip/>
          <el-table-column prop="contactUserId" :label="$t('teant.contactUserId')"  show-overflow-tooltip/>
          <el-table-column prop="contactName" :label="$t('teant.contactName')"  show-overflow-tooltip/>
          <el-table-column prop="contactMobile" :label="$t('teant.contactMobile')"  show-overflow-tooltip/>
          <el-table-column prop="status" :label="$t('teant.status')"  show-overflow-tooltip/>
          <el-table-column prop="domain" :label="$t('teant.domain')"  show-overflow-tooltip/>
          <el-table-column prop="packageId" :label="$t('teant.packageId')"  show-overflow-tooltip/>
          <el-table-column prop="expireTime" :label="$t('teant.expireTime')"  show-overflow-tooltip/>
          <el-table-column prop="accountCount" :label="$t('teant.accountCount')"  show-overflow-tooltip/>
        <el-table-column :label="$t('common.action')" width="150">
          <template #default="scope">
            <el-button icon="edit-pen" text type="primary" v-auth="'admin_teant_edit'"
              @click="formDialogRef.openDialog(scope.row.id)">{{ $t('common.editBtn') }}</el-button>
            <el-button icon="delete" text type="primary" v-auth="'admin_teant_del'" @click="handleDelete([scope.row.id])">{{ $t('common.delBtn') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination @size-change="sizeChangeHandle" @current-change="currentChangeHandle" v-bind="state.pagination" />
    </div>

    <!-- 编辑、新增  -->
    <form-dialog ref="formDialogRef" @refresh="getDataList(false)" />

  </div>
</template>

<script setup lang="ts" name="systemSysTenant">
import { BasicTableProps, useTable } from "/@/hooks/table";
import { fetchList, delObjs } from "/@/api/admin/teant";
import { useMessage, useMessageBox } from "/@/hooks/message";
import { useDict } from '/@/hooks/dict';
import { useI18n } from 'vue-i18n';


// 引入组件
const FormDialog = defineAsyncComponent(() => import('./form.vue'));
// 定义查询字典

// 定义变量内容
const formDialogRef = ref()
// 搜索变量
const queryRef = ref()
const showSearch = ref(true)
// 多选变量
const selectObjs = ref([]) as any
const multiple = ref(true)
const { t } = useI18n();

const state: BasicTableProps = reactive<BasicTableProps>({
  queryForm: {},
  pageList: fetchList
})

//  table hook
const {
  getDataList,
  currentChangeHandle,
  sizeChangeHandle,
  sortChangeHandle,
  downBlobFile,
	tableStyle
} = useTable(state)

// 清空搜索条件
const resetQuery = () => {
  // 清空搜索条件
  queryRef.value?.resetFields()
  // 清空多选
  selectObjs.value = []
  getDataList()
}

// 导出excel
const exportExcel = () => {
  downBlobFile('/admin/teant/export',Object.assign(state.queryForm, { ids: selectObjs }), 'teant.xlsx')
}

// 多选事件
const selectionChangHandle = (objs: { id: string }[]) => {
  selectObjs.value = objs.map(({ id }) => id);
  multiple.value = !objs.length;
};

// 删除操作
const handleDelete = async (ids: string[]) => {
  try {
    await useMessageBox().confirm(t('common.delConfirmText'));
  } catch {
    return;
  }

  try {
    await delObjs(ids);
    getDataList();
    useMessage().success(t('delSuccessText'));
  } catch (err: any) {
    useMessage().error(err.msg);
  }
};
</script>