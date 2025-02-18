import { computed } from 'vue';
import { EMITS } from '../../config';

const CHECKED_STATUS = {
  none: 0, // 未选中
  part: 1, // 部分选中
  all: 2 // 全选
};

export function useMultiple(multipleCp, valueCp, optionsCp, fieldNamesCp, emit) {
  // 获得所有的values
  function getAllValues(ops, allValues = []) {
    ops.forEach((item) => {
      if (multipleCp.value) {
        allValues.push([item.value || 'value']);
      } else {
        allValues.push(item[fieldNamesCp.value || 'value']);
      }
    });

    return allValues;
  }

  const isMultipleRef = computed(() => {
    return multipleCp.value;
  });

  const multipleCheckedStatus = computed(() => {
    if (valueCp.value.length === 0) {
      return CHECKED_STATUS.none;
    } else if (
      valueCp.value.length === optionsCp.value.length &&
      valueCp.value.every((item) => item.length === 1)
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
