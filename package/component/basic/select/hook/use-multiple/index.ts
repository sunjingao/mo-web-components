import { computed } from 'vue';
import { EMITS } from '../../config';

// 获得组件映射后的key的名字
export function getKeyName(fieldNamesCp, key) {
  return (fieldNamesCp.value && fieldNamesCp.value[key]) || key;
}

export function useMultiple(modeCp, valueCp, optionsCp, fieldNamesCp, emit) {
  // 获得所有的values
  function getAllValues(ops, allValues = []) {
    ops.forEach((item) => {
      allValues.push(item[getKeyName(fieldNamesCp, 'value')]);
    });

    return allValues;
  }

  const isMultipleRef = computed(() => {
    return ['multiple', 'tags'].includes(modeCp.value);
  });

  // 是否选中状态
  const checkboxValueCp = computed(() => {
    if (!isMultipleRef.value) {
      return false;
    }
    const allValues = getAllValues(optionsCp.value);
    return valueCp.value.length === allValues.length;
  });

  const checkboxIndeterminateCp = computed(() => {
    if (!isMultipleRef.value) {
      return false;
    }
    const allValues = getAllValues(optionsCp.value);
    return valueCp.value.length > 0 && valueCp.value.length < allValues.length;
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
