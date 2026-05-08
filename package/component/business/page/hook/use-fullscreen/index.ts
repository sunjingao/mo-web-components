import { onBeforeUnmount, onMounted, ref } from 'vue';
import screenfull from 'screenfull';

const stickyRef = ref({});

export function useFullscreen(antTableComponentRef) {
  let tableContainer = null;

  function changeFullScreen() {
    if (screenfull.isFullscreen) {
      stickyRef.value = {
        getContainer: () => {
          return tableContainer;
        }
      };
      tableContainer.classList.add('m-overflow-auto');
    } else {
      stickyRef.value = undefined;
      tableContainer.classList.remove('m-overflow-auto');
    }
  }

  // 全屏展示
  function handleFullScreen() {
    const target = tableContainer;
    if (screenfull.isEnabled) {
      screenfull.request(target);
    }
  }

  onMounted(() => {
    tableContainer = antTableComponentRef.value.$el;
    screenfull.on('change', changeFullScreen);
  });

  onBeforeUnmount(() => {
    screenfull.off('change', changeFullScreen);
  });

  return {
    handleFullScreen,
    stickyRef
  };
}
