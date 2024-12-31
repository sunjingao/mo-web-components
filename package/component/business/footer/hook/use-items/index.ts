import { ref, watch } from 'vue';
import { cloneDeep } from 'lodash-es';
import { ITEMS_ITEM } from '../../const.ts';

export function useItems(itemsPropsRef) {
  const itemsRef = ref([]);

  function changeItems() {
    itemsRef.value = cloneDeep(itemsPropsRef.value);

    itemsRef.value.forEach((_, index) => {
      Object.assign(itemsRef.value[index], cloneDeep(ITEMS_ITEM), cloneDeep(itemsRef.value[index]));
    });
  }

  watch(
    itemsPropsRef,
    () => {
      changeItems();
    },
    {
      immediate: true,
      deep: true
    }
  );

  return {
    itemsRef
  };
}
