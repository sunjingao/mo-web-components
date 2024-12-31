import { ref, onMounted, onBeforeUnmount } from 'vue';
import { debounce } from 'lodash-es';

export function useTableWidth(tableDomRef) {
  const tablePartWidthRef = ref(100); // 初始化宽度，可以随意设置

  const debounceSetTableWidth = debounce(() => {
    tablePartWidthRef.value = tableDomRef.value.offsetWidth - 8;
  }, 60);

  const WidthObserver = new ResizeObserver(() => {
    debounceSetTableWidth();
  });

  onMounted(() => {
    WidthObserver.observe(tableDomRef.value);
  });

  onBeforeUnmount(() => {
    WidthObserver.unobserve(tableDomRef.value);
  });

  return {
    tablePartWidthRef
  };
}
