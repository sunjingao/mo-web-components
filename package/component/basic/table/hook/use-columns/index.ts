import { ref, watch } from 'vue';
import { cloneDeep } from 'lodash-es';
import {
  COLUMN_TYPE,
  INDEX_COLUMN,
  OPERATIONS_COLUMN,
  TYPE_CONFIG,
  ADD_COLUMNS_PROPS
} from '../../const.ts';
import { get_COLUMNS, EFFECT_COLUMNS_PROPS } from '../../depend.ts';

// 规则：columns中不设置width的项至少有一个
// 规则：columns如果设置宽度，宽度的类型必须为数字
function checkColumnsCorrect(columns) {
  const noWidthLen = columns.filter((item) => item.width === undefined);

  if (noWidthLen.length === columns.length) {
    throw new Error('columns中设置width的项至少有一个');
  }

  if (!noWidthLen || noWidthLen.length < 1) {
    throw new Error('columns中不设置width的项至少有一个');
  }

  const unCorrectWidthLen = columns.filter(
    (item) => item.width !== undefined && typeof item.width !== 'number'
  );
  if (unCorrectWidthLen && unCorrectWidthLen.length > 0) {
    throw new Error('columns如果设置宽度，宽度的类型必须为数字');
  }
}

function getOperationsColumnWidth(operationsColumnItems) {
  // label中文字个数与长度的对应关系，超过3个，每个字符增加14
  const btnLength = {
    1: 30,
    2: 48,
    3: 58,
    space: 14
  };
  // 按钮之间的间距
  const btnSpace = 8;
  // 按钮与下拉的间距
  const btnAndDropSpace = 8;
  // 当按钮个数超过3个的时候，下拉图标的长度
  const iconLen = 10;
  // 边界与按钮的padding
  const padding = 16 * 2;
  // 操作列长度
  let opsColumnLen = 0;

  const showBtns =
    operationsColumnItems.length < 3 ? operationsColumnItems : operationsColumnItems.slice(0, 2);

  showBtns.forEach((val, index) => {
    // 计算每个按钮的大小
    if (String(val.label).length <= 3) {
      opsColumnLen = opsColumnLen + btnLength[String(val.label).length];
    } else {
      opsColumnLen =
        opsColumnLen + btnLength['3'] + (String(val.label).length - 3) * btnLength.space;
    }
    // 非第一个时，减去border
    if (index > 0) {
      opsColumnLen = opsColumnLen + btnSpace;
    }
  });

  if (showBtns.length < operationsColumnItems.length) {
    // 添加图标大小
    opsColumnLen = opsColumnLen + btnAndDropSpace + iconLen;
  }

  // 添加整体的padding
  opsColumnLen = opsColumnLen + padding;

  return opsColumnLen;
}

function initOriColumns(columns) {
  // 获取列数据部分
  if (!columns || columns.length === 0) {
    return [];
  }

  checkColumnsCorrect(columns);

  columns.forEach((item, index) => {
    const COLUMN_CLONE = cloneDeep(item);
    // 属性初始化
    for (const val of Object.values(EFFECT_COLUMNS_PROPS)) {
      delete COLUMN_CLONE[val];
    }
    Object.assign(COLUMN_CLONE, get_COLUMNS(item), cloneDeep(COLUMN_CLONE));

    // 列的类型初始化
    if (!COLUMN_CLONE[ADD_COLUMNS_PROPS.typeConfig]) {
      COLUMN_CLONE[ADD_COLUMNS_PROPS.typeConfig] = TYPE_CONFIG[COLUMN_TYPE.words];
    }

    Object.assign(
      COLUMN_CLONE[ADD_COLUMNS_PROPS.typeConfig],
      TYPE_CONFIG[COLUMN_CLONE[ADD_COLUMNS_PROPS.typeConfig].type],
      cloneDeep(COLUMN_CLONE[ADD_COLUMNS_PROPS.typeConfig])
    );

    columns[index] = COLUMN_CLONE;
  });
}

function addColumns(columns, operationsColumnPropsRef) {
  columns.unshift(INDEX_COLUMN);

  if (operationsColumnPropsRef.value.items && operationsColumnPropsRef.value.items.length > 0) {
    const opeColumnWidth =
      operationsColumnPropsRef.value.width ||
      getOperationsColumnWidth(operationsColumnPropsRef.value.items);
    columns.push({
      ...OPERATIONS_COLUMN,
      width: opeColumnWidth
    });
  }
}

export function useColumns(columnsPropsRef, operationsColumnPropsRef) {
  const columnsRef = ref([]);

  function setColumns() {
    let columnsClone = cloneDeep(columnsPropsRef.value);

    initOriColumns(columnsClone);
    addColumns(columnsClone, operationsColumnPropsRef);

    columnsRef.value = columnsClone;
  }

  watch(
    columnsPropsRef,
    () => {
      setColumns();
    },
    {
      deep: true,
      immediate: true
    }
  );

  return {
    columnsRef
  };
}
