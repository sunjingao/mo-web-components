import { ref, computed, watch } from 'vue';
import { cloneDeep } from 'lodash-es';
import { Table } from 'ant-design-vue';
import { MULTIPLE } from '../../const.ts';

function getKeys(dataSource, keysArr) {
  dataSource.forEach((item) => {
    keysArr.push(item.key);
    if (item.children) {
      getKeys(item.children, keysArr);
    }
  });
}

export function useMultiple(multiplePropsRef, dataSourcePropsRef, emit, EMITS) {
  const multipleConfigRef = ref({});
  const mulSelectedRowKeysRef = ref([]); // 多选内容的key值
  const mulSelectedRowsRef = ref([]); // 多选内容选中的item值
  const currentPageKeysCp = computed(() => {
    const keys = [];
    getKeys(dataSourcePropsRef.value, keys);
    return keys;
  });

  // 是否展示footer
  const isFooterShowCp = computed(
    () =>
      multipleConfigRef.value.visible && multipleConfigRef.value.items.some((item) => !item.hidden)
  );

  function resetMultipleConfig() {
    const multipleClone = cloneDeep(multiplePropsRef.value);
    Object.assign(multipleClone, cloneDeep(MULTIPLE.content), cloneDeep(multipleClone));
    if (multipleClone.items) {
      Object.assign(multipleClone.items, cloneDeep(MULTIPLE.items), cloneDeep(multipleClone.items));
    }
    multipleConfigRef.value = multipleClone;
  }

  function onChange(selectedRowKeys) {
    for (let index = currentPageKeysCp.value.length - 1; index >= 0; index--) {
      const isSelected = selectedRowKeys.includes(currentPageKeysCp.value[index]);
      const key = currentPageKeysCp.value[index];
      if (isSelected) {
        const findIndex = mulSelectedRowKeysRef.value.findIndex((itemKey) => itemKey === key);
        if (findIndex === -1) {
          mulSelectedRowKeysRef.value.push(key);
          mulSelectedRowsRef.value.push(dataSourcePropsRef.value.find((item) => item.key === key));
        }
      } else {
        const findIndex = mulSelectedRowKeysRef.value.findIndex((itemKey) => itemKey === key);
        if (findIndex !== -1) {
          mulSelectedRowKeysRef.value.splice(findIndex, 1);
          mulSelectedRowsRef.value.splice(findIndex, 1);
        }
      }
    }
  }

  function getCheckboxDisabled(record) {
    if (multipleConfigRef.value.getCheckboxProps) {
      return multipleConfigRef.value.getCheckboxProps(record);
    }
    return {
      disabled: false
    };
  }

  // 多选配置
  const rowSelectionConfig = computed(() => {
    if (!multipleConfigRef.value.visible) {
      return null;
    }
    return {
      selectedRowKeys: mulSelectedRowKeysRef.value,
      onChange: onChange,
      getCheckboxProps: getCheckboxDisabled,
      selections: [
        Table.SELECTION_INVERT,
        {
          key: 'clearCurrentPage',
          text: '清空当页',
          onSelect: () => {
            onChange([]);
          }
        }
      ]
    };
  });

  function changeSelectByPagination() {
    if (!multipleConfigRef.value.enableCrossPage) {
      mulSelectedRowKeysRef.value = [];
      mulSelectedRowsRef.value = [];
    }
  }

  function resetSelectByPagination() {
    mulSelectedRowKeysRef.value = [];
    mulSelectedRowsRef.value = [];
  }

  function handleMulSelectionBtn(item) {
    item.loading = true;
    item
      .confirmAsync(cloneDeep(mulSelectedRowsRef.value), cloneDeep(mulSelectedRowKeysRef.value))
      .then(() => {
        mulSelectedRowKeysRef.value = [];
        mulSelectedRowsRef.value = [];
      })
      .finally(() => {
        item.loading = false;
      });
  }

  function getIsMulFooterBtnDisabled(item) {
    return mulSelectedRowKeysRef.value.length === 0 || item.disabled;
  }

  function handleMulSelectionCancel() {
    mulSelectedRowKeysRef.value = [];
    mulSelectedRowsRef.value = [];
    emit(EMITS.cancelMultiple);
  }

  // 因为存在多选时存在点击另外一个多选按钮的情况，所以在此做判断
  watch(
    multiplePropsRef,
    () => {
      resetMultipleConfig();
    },
    {
      immediate: true,
      deep: true
    }
  );

  return {
    multipleConfigRef,
    rowSelectionConfig,
    mulSelectedRowKeysRef,
    changeSelectByPagination,
    resetSelectByPagination,
    isFooterShowCp,
    handleMulSelectionBtn,
    getIsMulFooterBtnDisabled,
    handleMulSelectionCancel
  };
}
