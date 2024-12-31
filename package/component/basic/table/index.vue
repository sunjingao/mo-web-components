<template>
  <div
    ref="tableDomRef"
    :class="[`m-table-part`, $attrs.class]"
    :style="{
      ...$attrs.style
    }"
  >
    <div class="table-content" :style="{ width: `${tablePartWidthRef}px` }">
      <a-table
        v-if="isTableShowRef"
        ref="antTableComponentRef"
        v-bind="getProps($attrs)"
        :loading="loading"
        :columns="columnsRef"
        :data-source="dataSourceRef"
        :row-selection="rowSelectionConfig"
        :pagination="paginationConfigRef"
        :sticky="getSticky(antTableComponentRef)"
        :scroll="{ x: scrollWidthRef }"
        @change="handleChange"
        @resizeColumn="handleResizeColumn"
      >
        <template #bodyCell="bindValue">
          <!--索引区-->
          <div v-if="bindValue.column.dataIndex === INDEX_COLUMN.dataIndex">
            {{ calcIndex(bindValue.index) }}
          </div>
          <!--操作区-->
          <template v-if="bindValue.column.dataIndex === OPERATIONS_COLUMN.dataIndex">
            <!--常规按钮-->
            <template v-for="(item, index) in bindValue.record[OPERATIONS_COLUMN.dataIndex]">
              <m-button
                v-if="item.type === OPERATIONS_COLUMN_BTN_TYPE.normal"
                :key="index"
                class="operation-button"
                :disabled="item._disabled"
                size="small"
                @click="handleOpeItemClick(item, bindValue)"
              >
                {{ item.label }}
              </m-button>
            </template>
            <!--下拉部分-->
            <template v-for="(item, index) in bindValue.record[OPERATIONS_COLUMN.dataIndex]">
              <m-dropdown v-if="item.type === OPERATIONS_COLUMN_BTN_TYPE.drop" :key="index">
                <down-outlined class="drop-icon" />
                <template #overlay>
                  <m-menu>
                    <template v-for="(dropItem, itemIndex) in item.items" :key="itemIndex">
                      <m-menuItem
                        v-if="!dropItem._hidden"
                        :disabled="dropItem._disabled"
                        @click="handleOpeItemClick(dropItem, bindValue)"
                      >
                        {{ dropItem.label }}
                      </m-menuItem>
                    </template>
                  </m-menu>
                </template>
              </m-dropdown>
            </template>
          </template>
          <template
            v-if="
              bindValue.column.typeConfig && bindValue.column.typeConfig.type !== COLUMN_TYPE.words
            "
          >
            <template v-if="bindValue.column.typeConfig.type === COLUMN_TYPE.button">
              <m-button
                size="small"
                :disabled="handleColumnBtnDisabled(bindValue)"
                @click="handleColumnBtnClick(bindValue)"
                >{{ bindValue.text }}</m-button
              >
            </template>
            <template
              v-if="
                bindValue.column.typeConfig.type === COLUMN_TYPE.copy &&
                (!bindValue.column.typeConfig.getEnable ||
                  bindValue.column.typeConfig.getEnable(bindValue))
              "
            >
              <m-button size="small" @click="handleColumnCopy(bindValue.text)">{{
                bindValue.text
              }}</m-button>
            </template>
            <template v-if="bindValue.column.typeConfig.type === COLUMN_TYPE.jump">
              <m-link
                type="link"
                :disabled="handleColumnJumpDisabled(bindValue)"
                @click="handleColumnJumpClick(bindValue)"
                >{{ bindValue.text }}</m-link
              >
            </template>
            <template v-if="bindValue.column.typeConfig.type === COLUMN_TYPE.switch">
              {{ bindValue.column.typeConfig.getLeftLabel(bindValue) }}
              <m-switch
                :checked="handleColumnSwitchChecked(bindValue)"
                :disabled="handleColumnSwitchDisabled(bindValue)"
                @click="handleColumnSwitchClick(bindValue)"
              />
              {{ bindValue.column.typeConfig.getRightLabel(bindValue) }}
            </template>
            <template v-if="bindValue.column.typeConfig.type === COLUMN_TYPE.status">
              <div class="flex items-center">
                <div
                  :style="{
                    width: '10px',
                    height: '10px',
                    'border-radius': '50%',
                    'background-color':
                      bindValue.column.typeConfig[bindValue.column.typeConfig.getStatus(bindValue)]
                        .chartColor
                  }"
                />
                <span
                  class="ml-8px"
                  :style="{
                    color:
                      bindValue.column.typeConfig[bindValue.column.typeConfig.getStatus(bindValue)]
                        .color
                  }"
                  >{{ bindValue.text }}</span
                >
              </div>
            </template>
            <template v-if="bindValue.column.typeConfig.type === COLUMN_TYPE.previewDownload">
              <div class="flex items-center">
                <m-preview-download
                  :url="bindValue.column.typeConfig.getUrl(bindValue)"
                  :enablePreview="bindValue.column.typeConfig.getEnablePreview(bindValue)"
                  :enableDownload="bindValue.column.typeConfig.getEnableDownload(bindValue)"
                  v-bind="bindValue.column.typeConfig"
                />
              </div>
            </template>
          </template>
          <slot v-if="$slots.bodyCell" name="bodyCell" v-bind="bindValue" />
        </template>

        <template v-for="(_, name) in getSlots($slots)" #[name]="bindValue">
          <slot v-bind="bindValue" :key="name" :name="name" />
        </template>
      </a-table>
    </div>

    <!--多选时展示下方吸盘-->
    <div v-if="isFooterShowCp" class="footer">
      <span class="des">已选中{{ mulSelectedRowKeysRef.length }}条数据</span>
      <div class="operations">
        <m-button @click="handleMulSelectionCancel">取消</m-button>
        <template v-for="item in multipleConfigRef.items">
          <m-button
            v-if="!item.hidden"
            :key="item.label"
            :mode="item.mode"
            :disabled="getIsMulFooterBtnDisabled(item)"
            :loading="item.loading"
            @click="handleMulSelectionBtn(item)"
            >{{ item.label }}
          </m-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import { Table as aTable } from 'ant-design-vue';
import { OPERATIONS_COLUMN_BTN_TYPE, OPERATIONS_COLUMN, INDEX_COLUMN, COLUMN_TYPE } from './const';
import { EMITS_DEC, PROPS_DES, EMITS } from './config';
import { useProps } from './hook/use-props';
import { useMultiple } from './hook/use-multiple';
import { useTableWidth } from './hook/use-table-width';
import { useSticky } from './hook/use-sticky';
import { useColumns } from './hook/use-columns';
import { useDataSource } from './hook/use-data-source';
import { usePagination } from './hook/use-pagination';
import { useSlots } from './hook/use-slots';
import { useResize } from './hook/use-resize';
import { useChange } from './hook/use-change';
import { useTypeConfig } from './hook/use-type-config/index';
import { useOperation } from './hook/use-operation/index';
import { useScrollWidth } from './hook/use-scroll-width/index';
import { MODE } from '@/component/basic/button/const';

export default defineComponent({
  components: {
    aTable,
    DownOutlined
  },

  inheritAttrs: false,

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props, { emit, expose }) {
    // 整体的dom
    const tableDomRef = ref(null);
    // table组件实例
    const antTableComponentRef = ref(null);

    const {
      handleColumnBtnDisabled,
      handleColumnBtnClick,
      handleColumnCopy,
      handleColumnJumpDisabled,
      handleColumnJumpClick,
      handleColumnSwitchChecked,
      handleColumnSwitchDisabled,
      handleColumnSwitchClick
    } = useTypeConfig();

    const { getProps } = useProps();

    const { paginationConfigRef, paginationMapCp } = usePagination(
      toRef(props, 'pagination'),
      toRef(props, 'paginationMap')
    );

    const { columnsRef } = useColumns(toRef(props, 'columns'), toRef(props, 'operationsColumn'));

    const { scrollWidthRef, setScrollWidth } = useScrollWidth(columnsRef);

    const { calcIndex, dataSourceRef } = useDataSource(
      toRef(props, 'dataSource'),
      toRef(props, 'operationsColumn'),
      paginationConfigRef
    );

    const { handleOpeItemClick } = useOperation();

    const { getSticky } = useSticky(toRef(props, 'sticky'));

    const { getSlots } = useSlots();

    const { handleResizeColumn } = useResize(columnsRef, setScrollWidth, emit, EMITS);

    const {
      multipleConfigRef,
      rowSelectionConfig,
      mulSelectedRowKeysRef,
      changeSelectByPagination,
      resetSelectByPagination,
      isFooterShowCp,
      handleMulSelectionBtn,
      getIsMulFooterBtnDisabled,
      handleMulSelectionCancel
    } = useMultiple(toRef(props, 'multiple'), dataSourceRef, emit, EMITS);

    const { isTableShowRef, handleChange, reset } = useChange(
      paginationConfigRef,
      paginationMapCp,
      changeSelectByPagination,
      resetSelectByPagination,
      emit,
      EMITS
    );

    const { tablePartWidthRef } = useTableWidth(tableDomRef);

    expose({
      antTableComponent: antTableComponentRef,
      reset,
      paginationMap: paginationMapCp
    });

    return {
      antTableComponentRef,
      columnsRef,
      dataSourceRef,
      rowSelectionConfig,
      mulSelectedRowKeysRef,
      handleChange,
      tableDomRef,
      OPERATIONS_COLUMN,
      INDEX_COLUMN,
      COLUMN_TYPE,
      calcIndex,
      OPERATIONS_COLUMN_BTN_TYPE,
      isFooterShowCp,
      handleMulSelectionBtn,
      getIsMulFooterBtnDisabled,
      handleMulSelectionCancel,
      MODE,
      scrollWidthRef,
      paginationConfigRef,
      tablePartWidthRef,
      getProps,
      getSticky,
      multipleConfigRef,
      getSlots,
      handleResizeColumn,
      isTableShowRef,
      handleColumnBtnDisabled,
      handleColumnBtnClick,
      handleColumnCopy,
      handleColumnJumpDisabled,
      handleColumnJumpClick,
      handleColumnSwitchChecked,
      handleColumnSwitchDisabled,
      handleColumnSwitchClick,
      handleOpeItemClick
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
