import { onBeforeUnmount, onMounted, ref } from 'vue';
import screenfull from 'screenfull';

const stickyRef = ref({});

export function useFullscreen() {
  const tableContainerDomRef = ref(null);

  function changeFullScreen() {
    if (screenfull.isFullscreen) {
      stickyRef.value = {
        getContainer: () => {
          return tableContainerDomRef.value;
        }
      };
      tableContainerDomRef.value.classList.add('m-overflow-auto');
    } else {
      stickyRef.value = undefined;
      tableContainerDomRef.value.classList.remove('m-overflow-auto');
    }
  }

  // 全屏展示
  function handleFullScreen() {
    const target = tableContainerDomRef.value;
    if (screenfull.isEnabled) {
      screenfull.request(target);
    }
  }

  onMounted(() => {
    screenfull.on('change', changeFullScreen);
  });

  onBeforeUnmount(() => {
    screenfull.off('change', changeFullScreen);
  });

  return {
    tableContainerDomRef,
    handleFullScreen,
    stickyRef
  };
}
