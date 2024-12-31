import { ref } from 'vue';
import { UNSET_SCROLL_WIDTH } from '../../const';

export function useScrollWidth(columnsRef) {
  const scrollWidthRef = ref(0);

  function setScrollWidth() {
    scrollWidthRef.value = 0;
    columnsRef.value.forEach((item) => {
      // 宽度只考虑数字和不设置的情况，百分比等情况不考虑
      if (item.width && typeof item.width === 'number') {
        scrollWidthRef.value += item.width;
      } else if (!item.width) {
        scrollWidthRef.value += UNSET_SCROLL_WIDTH;
      }
    });
  }

  setScrollWidth();

  return {
    scrollWidthRef,
    setScrollWidth
  };
}
