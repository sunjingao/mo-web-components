import { computed } from 'vue';
import { Cascader } from 'ant-design-vue';
import { EMITS } from '../../config';
import { CHECKED_STATUS } from '../../const';

// 获得组件映射后的key的名字
export function getKeyName(fieldNamesCp, key) {
  return (fieldNamesCp.value && fieldNamesCp.value[key]) || key;
}

export function useMultiple(
  multipleCp,
  valueCp,
  optionsCp,
  fieldNamesCp,
  showCheckedStrategyCp,
  emit
) {
  function getAllItem(options, parentValue = [], allItem = []) {
    options.forEach((item) => {
      if (
        item[getKeyName(fieldNamesCp, 'children')] &&
        item[getKeyName(fieldNamesCp, 'children')].length > 0
      ) {
        parentValue.push(item[getKeyName(fieldNamesCp, 'value')]);
        getAllItem(item[getKeyName(fieldNamesCp, 'children')], parentValue, allItem);
        parentValue.pop();
      } else {
        parentValue.push(item[getKeyName(fieldNamesCp, 'value')]);
        allItem.push([...parentValue]);
        parentValue.pop();
      }
    });

    return allItem;
  }

  // 获得所有的values
  function getAllValues(ops, allValues = []) {
    if (showCheckedStrategyCp.value === Cascader.SHOW_CHILD) {
      allValues.push(...getAllItem(optionsCp.value));
    } else {
      ops.forEach((item) => {
        allValues.push([item[getKeyName(fieldNamesCp, 'value')]]);
      });
    }

    return allValues;
  }

  const isMultipleRef = computed(() => {
    return multipleCp.value;
  });

  const multipleCheckedStatus = computed(() => {
    if (valueCp.value.length === 0) {
      return CHECKED_STATUS.none;
    } else if (
      (showCheckedStrategyCp.value === Cascader.SHOW_CHILD &&
        valueCp.value.length === getAllValues(optionsCp.value).length) ||
      (valueCp.value.length === getAllValues(optionsCp.value).length &&
        valueCp.value.every((item) => item.length === 1))
    ) {
      return CHECKED_STATUS.all;
    } else {
      return CHECKED_STATUS.part;
    }
  });

  // 是否选中状态
  const checkboxValueCp = computed(() => {
    if (!isMultipleRef.value) {
      return false;
    }
    return multipleCheckedStatus.value === CHECKED_STATUS.all;
  });

  const checkboxIndeterminateCp = computed(() => {
    if (!isMultipleRef.value) {
      return false;
    }
    return multipleCheckedStatus.value === CHECKED_STATUS.part;
  });

  function handleCheckAllChange() {
    if (!isMultipleRef) {
      return false;
    }
    const allValues = getAllValues(optionsCp.value);
    if (checkboxValueCp.value) {
      emit(EMITS.updateValue, []);
    } else {
      emit(EMITS.updateValue, allValues);
    }
  }

  return {
    isMultipleRef,
    checkboxValueCp,
    checkboxIndeterminateCp,
    handleCheckAllChange
  };
}
