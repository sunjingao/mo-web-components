import { cloneDeep } from 'lodash-es';
import { EMITS } from '@/component/basic/form/config.ts';

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
    emit(EMITS.change, ...args);
  }

  // 回车的处理，作为page组件的搜索条件时，判断是否进行回车搜索
  function handlePressEnter(item, ...args) {
    if (!item.condition.enableEnterQuery) {
      emit(EMITS.pressEnter, ...args);
      return;
    }

    handleQuery();
    emit(EMITS.pressEnter, ...args);
  }

  return {
    handleReset,
    handleQuery,
    handleComponentChange,
    handlePressEnter
  };
}
