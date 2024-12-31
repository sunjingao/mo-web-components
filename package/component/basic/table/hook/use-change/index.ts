import { nextTick, onBeforeMount, ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import { PAGINATION } from '../../const.ts';

export function useChange(
  paginationConfigRef,
  paginationMapCp,
  changeSelectByPagination,
  resetSelectByPagination,
  emit,
  EMITS
) {
  const isTableShowRef = ref(true);

  const filtersRef = ref({});
  const sorterRef = ref({});
  const extraRef = ref({});

  function changeEmit() {
    const pagination = cloneDeep(paginationConfigRef.value);
    const filters = cloneDeep(filtersRef.value);
    const sorter = cloneDeep(sorterRef.value);
    const extra = cloneDeep(extraRef.value);

    const params = {
      pagination: {
        [paginationMapCp.value.current]: pagination.current,
        [paginationMapCp.value.pageSize]: pagination.pageSize
      },
      filters,
      sorter,
      extra
    };

    emit(EMITS.updatePaginationParams, params);
    emit(EMITS.change, params);
  }

  /* eslint-disable-next-line */
  function handleChange(pagination, filters, sorter, extra) {
    paginationConfigRef.value.current = pagination.current;
    paginationConfigRef.value.pageSize = pagination.pageSize;
    filtersRef.value = filters;
    sorterRef.value = sorter;
    extraRef.value = extra;
    changeEmit();
    changeSelectByPagination();
  }

  function reset() {
    // 分页重置
    if (paginationConfigRef.value.current !== PAGINATION.current) {
      paginationConfigRef.value.current = PAGINATION.current;
    }
    // 去掉筛选内容、去掉排序内容
    isTableShowRef.value = false;
    nextTick(() => {
      isTableShowRef.value = true;
    });
    changeEmit();
    resetSelectByPagination();
  }

  onBeforeMount(() => {
    // 首次触发
    changeEmit();
  });

  return {
    isTableShowRef,
    handleChange,
    filtersRef,
    sorterRef,
    extraRef,
    reset
  };
}
