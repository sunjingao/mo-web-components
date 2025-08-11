import { watch } from 'vue';
import { useVModel } from '@vueuse/core/index';

function setItemDefaultValue(formModelRef, item) {
  let componentValue = formModelRef.value[item.uploadKey];
  if ([null, undefined].includes(componentValue)) {
    componentValue = item.defaultValue;
  }
  formModelRef.value[item.uploadKey] = componentValue;
}

export function useFormModel(itemsCp, emit, props) {
  const antFormModelVM = useVModel(props, 'modelValue', emit);

  function resetFormModel() {
    itemsCp.value.forEach((itemVal) => {
      if (!itemVal.uploadKey || itemVal.hidden) {
        return;
      }
      setItemDefaultValue(antFormModelVM, itemVal);
    });
  }

  function changeItemByHidden(item) {
    if (item.hidden) {
      delete antFormModelVM.value[item.uploadKey];
    } else {
      if (!antFormModelVM.value.hasOwnProperty(item.uploadKey)) {
        setItemDefaultValue(antFormModelVM, item);
      }
    }
  }

  // 非深度监听，只有改变对象才触发
  watch(
    [() => props.modelValue],
    () => {
      resetFormModel();
    },
    {
      immediate: true
    }
  );

  // 只有hidden改变时，那一项内容才会改变
  watch(
    itemsCp,
    () => {
      itemsCp.value.forEach((item) => {
        changeItemByHidden(item);
      });
    },
    {
      deep: true
    }
  );

  return {
    antFormModelVM
  };
}
