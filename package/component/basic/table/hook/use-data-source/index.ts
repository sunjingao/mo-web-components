import { ref, watch } from 'vue';
import { cloneDeep } from 'lodash-es';
import {
  OPERATIONS_COLUMN_BTN_TYPE,
  OPERATIONS_COLUMN,
  OPERATIONS_COLUMNS_ITEM
} from '../../const.ts';

const calcIndex = (index: number) => index + 1;

function initOperationsColumnItemsClone(operationsColumnItemsClone) {
  if (!operationsColumnItemsClone) {
    return [];
  }

  return operationsColumnItemsClone.map((item, index) => {
    return Object.assign(
      operationsColumnItemsClone[index],
      cloneDeep(OPERATIONS_COLUMNS_ITEM),
      cloneDeep(operationsColumnItemsClone[index])
    );
  });
}

function setMultiple(dataSource, paginationConfig, deep = 1) {
  // 为了多选功能
  dataSource.forEach((dataSourceItem, index) => {
    if (!paginationConfig) {
      dataSource[index].key = `${index}${deep}`;
    } else if (!dataSourceItem.key) {
      dataSource[index].key = `${
        (paginationConfig.current - 1) * paginationConfig.pageSize + index
      }${deep}`;
    }
    if (dataSourceItem.children) {
      setMultiple(dataSourceItem.children, paginationConfig, ++deep);
    }
  });
}

function setSourceItem(dataSourceRef, operationsColumnRef) {
  // 设置每行的操作内容
  for (const dataSourceItem of Object.values(dataSourceRef.value)) {
    let operationsColumnItemsClone = initOperationsColumnItemsClone(
      cloneDeep(operationsColumnRef.value.items)
    );

    for (const operationsColumnItemsItem of Object.values(operationsColumnItemsClone)) {
      if (operationsColumnItemsItem.getHidden) {
        operationsColumnItemsItem._hidden = operationsColumnItemsItem.getHidden(
          cloneDeep(dataSourceItem)
        );
      } else {
        operationsColumnItemsItem._hidden = false;
      }
      if (operationsColumnItemsItem.getDisabled) {
        operationsColumnItemsItem._disabled = operationsColumnItemsItem.getDisabled(
          cloneDeep(dataSourceItem)
        );
      } else {
        operationsColumnItemsItem._disabled = false;
      }
    }
    operationsColumnItemsClone = operationsColumnItemsClone.filter((item) => !item._hidden);
    // 对超过3个的按钮进行处理
    if (operationsColumnItemsClone.length > 2) {
      const dropOps = operationsColumnItemsClone.slice(2);
      operationsColumnItemsClone = operationsColumnItemsClone.slice(0, 2);
      operationsColumnItemsClone.push({
        type: OPERATIONS_COLUMN_BTN_TYPE.drop,
        items: dropOps
      });
    }
    dataSourceItem[OPERATIONS_COLUMN.dataIndex] = operationsColumnItemsClone;

    if (dataSourceItem.children) {
      setSourceItem(dataSourceItem.children, operationsColumnRef.value);
    }
  }
}

export function useDataSource(dataSourcePropsRef, operationsColumnPropsRef, paginationConfigRef) {
  // 里面有异步函数，所以没有用computed
  const dataSourceCloneRef = ref([]);

  function setDataSource() {
    dataSourceCloneRef.value = cloneDeep(dataSourcePropsRef.value);

    setMultiple(dataSourceCloneRef.value, paginationConfigRef.value);

    if (
      !operationsColumnPropsRef.value ||
      !operationsColumnPropsRef.value.items ||
      operationsColumnPropsRef.value.items.length === 0
    ) {
      return dataSourceCloneRef.value;
    }

    setSourceItem(dataSourceCloneRef, operationsColumnPropsRef);
  }

  watch(
    dataSourcePropsRef,
    () => {
      setDataSource();
    },
    {
      immediate: true,
      deep: true
    }
  );

  return {
    calcIndex,
    dataSourceRef: dataSourceCloneRef
  };
}
