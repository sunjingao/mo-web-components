import { ref, computed } from 'vue';
import { TYPE } from '@/component/basic/form/const';

export function useExpand(typePropsRef) {
  const isExpandRef = ref(typePropsRef.value === TYPE.tableCondition ? false : true);

  const formHeightCp = computed(() => {
    if (isExpandRef.value) {
      return 'auto';
    } else {
      // 按钮等组件的高度是32px，form-item的bottom是24px
      return `${32}px`;
    }
  });

  const overflowCp = computed(() => {
    if (isExpandRef.value) {
      return 'visible';
    } else {
      return 'hidden';
    }
  });

  function handleToggleExpand() {
    isExpandRef.value = !isExpandRef.value;
  }

  return {
    isExpandRef,
    formHeightCp,
    overflowCp,
    handleToggleExpand
  };
}
