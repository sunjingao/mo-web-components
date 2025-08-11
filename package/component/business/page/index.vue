<template>
  <div :class="[`m-page`, $attrs.class]" :style="$attrs.style">
    <!--顶部tab切换-->
    <page-tabs
      v-if="pageTopTabs"
      v-model="pageTopTabsConfigRf.data"
      :tabsConfig="pageTopTabs"
      @change="handlePageTopTabChange"
    />
    <!--搜索条件-->
    <m-form
      v-if="condition"
      ref="formCompRef"
      v-model="formConfigRef.data"
      v-bind="condition"
      :type="FORM_TYPE.tableCondition"
      @query="handleFormQuery"
      @reset="handleFormReset"
    />
    <!--功能按钮区域-->
    <ability
      ref="abilityRef"
      v-model="abilityConfigRef.multipleConfig"
      class="ability mt-8px"
      :ability="ability"
      :getParamsAsync="getParamsAsync"
      @openResizeModal="handleOpenResizeModal"
      @fullScreen="handleFullScreen"
    />
    <!--位于功能按钮以及table中间的切换-->
    <page-tabs
      v-if="tableAboveTabs"
      v-model="tableAboveTabsConfigRef.data"
      class="mt-8px"
      :tabsConfig="tableAboveTabs"
      @change="handleTableAboveTabChange"
    />
    <div v-if="$slots.tableAbove" class="mt-8px">
      <slot name="tableAbove" />
    </div>
    <div ref="tableContainerDomRef" class="table-container">
      <!--table左边的插槽-->
      <div v-if="$slots.tableLeft" class="table-slot">
        <slot name="tableLeft" />
      </div>
      <m-table
        ref="antTableComponentRef"
        v-model:paginationParams="tableConfigRef.condition"
        class="flex-1"
        v-bind="getProps($attrs)"
        :sticky="stickyRef"
        :columns="pageConfigRef.shownColumns"
        :operationsColumn="operationsColumn"
        :dataSource="tableConfigRef.table.data"
        :loading="tableConfigRef.isLoading"
        :multiple="abilityConfigRef.multipleConfig"
        :pagination="tableConfigRef.table.pageable"
        :paginationMap="paginationMap"
        @change="handlePaginationChange"
        @cancelMultiple="handleCancelMultiple"
      >
        <!--多余的也不会显示，索性已全部导入，还方便-->
        <template v-for="(_, name) in $slots" #[name]="bindValue">
          <slot v-bind="bindValue" :key="name" :name="name" />
        </template>
      </m-table>
      <!--table右边的插槽-->
      <div v-if="$slots.tableRight" class="table-slot">
        <slot name="tableRight" />
      </div>
    </div>
    <!--操作列弹窗-->
    <custom-columns-modal
      v-if="isShowCustomColumnsModalRef"
      v-model:open="isShowCustomColumnsModalRef"
      :config="pageConfigRef.config"
      @change="handleCustomColumnsChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, ref, computed, nextTick } from 'vue';
import { cloneDeep } from 'lodash-es';
import { EMITS_DEC, PROPS_DES } from './config';
import { useAntForm } from './hook/use-ant-form';
import { useAntTable } from './hook/use-ant-table';
import ability from './component/ability/index.vue';
import customColumnsModal from './component/custom-columns-modal/index.vue';
import pageTabs from './component/tabs/index.vue';
import { useFullscreen } from './hook/use-fullscreen';
import { TYPE as FORM_TYPE } from '@/component/basic/form/const';
import { useCachedColumns } from '@/component/business/page/hook/use-cached-columns';

export default defineComponent({
  components: {
    pageTabs,
    ability,
    customColumnsModal
  },

  inheritAttrs: false,

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props, { expose }) {
    const { pageConfigRef, isShowCustomColumnsModalRef, handleCustomColumnsChange } =
      useCachedColumns(toRef(props, 'columns'));

    const { formCompRef } = useAntForm();

    const { antTableComponentRef, getProps } = useAntTable();

    const { tableContainerDomRef, stickyRef, handleFullScreen } = useFullscreen();

    const pageTopTabsConfigRf = ref({
      data: ''
    });

    const formConfigRef = ref({
      data: {}
    });

    const abilityRef = ref(null);
    const abilityConfigRef = ref({
      multipleConfig: {}
    });

    const tableAboveTabsConfigRef = ref({
      data: ''
    });

    const tableConfigRef = ref({
      isFirstGetTable: true,
      isLoading: false,
      table: {
        data: [],
        pageable: {}
      },
      condition: {}
    });

    async function getParamsAsync() {
      let params = {};
      // pageTopTabs参数
      if (pageTopTabsConfigRf.value.data) {
        const pageTopParams = {
          [props.pageTopTabs.uploadKey]: pageTopTabsConfigRf.value.data
        };
        Object.assign(params, pageTopParams);
      }
      // form参数
      if (formConfigRef.value.data) {
        const formParams = cloneDeep(formConfigRef.value.data);
        Object.assign(params, cloneDeep(formParams));
      }
      // tableAboveTabs参数
      if (tableAboveTabsConfigRef.value.data) {
        const tableAboveParams = {
          [props.tableAboveTabs.uploadKey]: tableAboveTabsConfigRef.value.data
        };
        Object.assign(params, tableAboveParams);
      }
      // table的分页、过滤、排序等等
      if (tableConfigRef.value.condition.pagination) {
        Object.assign(params, tableConfigRef.value.condition.pagination);
      }
      // 其它参数处理
      if (props.getTableDataExtraParamsAsync) {
        params = await props.getTableDataExtraParamsAsync(params);
      }
      return Promise.resolve(params);
    }

    async function getTableData() {
      tableConfigRef.value.isLoading = true;
      try {
        // 如果首次获取table数据需要延时，常见于获取table数据前，需要api请求
        if (tableConfigRef.value.isFirstGetTable && props.delayFirstAsync) {
          await props.delayFirstAsync();
          tableConfigRef.value.isFirstGetTable = false;
        }

        const params = await getParamsAsync();

        const response = await props.getTableDataAsync(params);
        tableConfigRef.value.table.data = response.data;
        tableConfigRef.value.table.pageable = response.pageable;
        /* eslint-disable-next-line */
      } catch (err) {
        tableConfigRef.value.table.data = [];
      } finally {
        tableConfigRef.value.isLoading = false;
      }
    }

    // 取消table的多选
    function handleCancelMultiple(...params) {
      abilityRef.value.handleCancelMultiple(...params);
    }

    function handlePageTopTabChange() {
      formConfigRef.value.data = {};
      nextTick(() => {
        antTableComponentRef.value.reset();
      });
    }

    // 点击页面顶部的tab或者table上面的tab切换
    function handleTableAboveTabChange() {
      antTableComponentRef.value.reset();
    }

    // 搜索条件点击查询
    function handleFormQuery() {
      antTableComponentRef.value.reset();
    }

    // 搜索条件点击重置
    function handleFormReset() {
      formConfigRef.value.data = {};
      nextTick(() => {
        antTableComponentRef.value.reset();
      });
    }

    // 分页改变
    function handlePaginationChange() {
      getTableData();
    }

    // 打开自定义列弹窗
    function handleOpenResizeModal() {
      isShowCustomColumnsModalRef.value = true;
    }

    expose({
      antFormComponent: computed(() => {
        return (formCompRef.value && formCompRef.value.antFormComponent) || null;
      }),
      antTableComponent: computed(() => {
        return antTableComponentRef.value.antTableComponent;
      }),
      handleFormQuery, // 点击搜索
      getTableData // 获取table数据
    });

    return {
      formCompRef,
      antTableComponentRef,
      tableConfigRef,
      formConfigRef,
      getProps,
      handleFormQuery,
      handleFormReset,
      handleCancelMultiple,
      pageTopTabsConfigRf,
      tableAboveTabsConfigRef,
      FORM_TYPE,
      abilityConfigRef,
      handlePaginationChange,
      handlePageTopTabChange,
      handleTableAboveTabChange,
      pageConfigRef,
      isShowCustomColumnsModalRef,
      handleOpenResizeModal,
      handleCustomColumnsChange,
      abilityRef,
      handleFullScreen,
      stickyRef,
      tableContainerDomRef,
      getParamsAsync
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
