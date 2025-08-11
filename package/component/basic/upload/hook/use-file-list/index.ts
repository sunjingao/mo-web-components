import { watch } from 'vue';
import { useVModel } from '@vueuse/core/index';

export function useFileList(props, emit) {
  const fileListVM = useVModel(props, 'fileList', emit);

  watch(
    [() => props.fileList],
    () => {
      // 允许下载时，对status的状态有要求
      fileListVM.value.forEach((item) => {
        if (!item.status) {
          item.status = 'done';
        }
      });
    },
    {
      immediate: true
    }
  );

  return {
    fileListVM
  };
}
