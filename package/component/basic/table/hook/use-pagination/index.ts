import { computed, ref, watch } from 'vue';
import { cloneDeep } from 'lodash-es';
import { PAGINATION_MAP, PAGINATION } from '../../const.ts';

export function usePagination(paginationPropsRef, paginationMapPropsRef) {
  const paginationConfigRef = ref({});
  const paginationMapCp = computed(() => {
    return Object.assign(cloneDeep(PAGINATION_MAP), cloneDeep(paginationMapPropsRef.value));
  });

  function initPagination() {
    if (paginationPropsRef.value === false) {
      return (paginationConfigRef.value = false);
    }
    const paginationClone = cloneDeep(paginationPropsRef.value);
    if (paginationClone && paginationClone[paginationMapCp.value.current]) {
      paginationClone.current = paginationClone[paginationMapCp.value.current];
      if ('current' !== paginationMapCp.value.current) {
        delete paginationClone[paginationMapCp.value.current];
      }
    }
    if (paginationClone && paginationClone[paginationMapCp.value.pageSize]) {
      paginationClone.pageSize = paginationClone[paginationMapCp.value.pageSize];
      if ('pageSize' !== paginationMapCp.value.pageSize) {
        delete paginationClone[paginationMapCp.value.pageSize];
      }
    }
    if (paginationClone && paginationClone[paginationMapCp.value.total]) {
      paginationClone.total = paginationClone[paginationMapCp.value.total];
      if ('total' !== paginationMapCp.value.total) {
        delete paginationClone[paginationMapCp.value.total];
      }
    }
    Object.assign(paginationConfigRef.value, cloneDeep(PAGINATION), paginationClone);
  }

  watch(
    [() => paginationPropsRef.value[paginationMapCp.value.total]],
    () => {
      paginationConfigRef.value.total = paginationPropsRef.value[paginationMapCp.value.total];
    },
    {
      immediate: true
    }
  );

  // 没有放到声明周期里面是因为多选需要设置key，所以需要尽快处理尽快
  initPagination();

  return {
    paginationConfigRef,
    paginationMapCp
  };
}
