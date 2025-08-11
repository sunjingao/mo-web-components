import { cloneDeep } from 'lodash-es';
import { EMITS } from '@/component/basic/form/config.ts';
import { EFFECT_FORM_ITEM_COMPONENT_EXE_FUNCTION } from '@/component/basic/form/depend.ts';

// 执行组件配置的方法
function exeComponentOri(componentProps, cbName, args) {
  if (componentProps.hasOwnProperty(EFFECT_FORM_ITEM_COMPONENT_EXE_FUNCTION[cbName])) {
    componentProps[EFFECT_FORM_ITEM_COMPONENT_EXE_FUNCTION[cbName]](...args);
  }
}

export function useCondition(antFormModelVM, formCompRef, emit) {
  // 重置
  function handleReset() {
    const formModelClone = cloneDeep(antFormModelVM.value);
    const formInstance = formCompRef.value;
    emit(EMITS.reset, formModelClone, formInstance);
  }

  // 查询
  function handleQuery() {
    const formModelClone = cloneDeep(antFormModelVM.value);
    const formInstance = formCompRef.value;
    emit(EMITS.query, formModelClone, formInstance);
  }

  // 数据改变时触发，作为page组件的搜索条件时，判断是否进行回车搜索
  function handleComponentChange(item, ...args) {
    if (item.condition.enableChangeQuery) {
      handleQuery();
    }
    exeComponentOri(item.componentProps, 'onChange', args);
  }

  // 回车的处理，作为page组件的搜索条件时，判断是否进行回车搜索
  function handlePressEnter(item, ...args) {
    if (!item.condition.enableEnterQuery) {
      exeComponentOri(item.componentProps, 'onPressEnter', args);
      return;
    }

    handleQuery();
    exeComponentOri(item.componentProps, 'onPressEnter', args);
  }

  return {
    handleReset,
    handleQuery,
    handleComponentChange,
    handlePressEnter
  };
}
