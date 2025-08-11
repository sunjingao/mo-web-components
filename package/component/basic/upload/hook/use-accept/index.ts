import { computed } from 'vue';
import { FILE_TYPE_MAP } from '../../const';

export function useAccept(fileTypePropRef, customFileTypePropRef) {
  const acceptCp = computed(() => {
    const result = [];
    if (!!customFileTypePropRef.value && customFileTypePropRef.value.length > 0) {
      customFileTypePropRef.value.forEach((item) => {
        result.push(...item.content);
      });
    } else {
      fileTypePropRef.value?.forEach((item) => {
        result.push(...FILE_TYPE_MAP[item].content);
      });
    }
    return result;
  });

  const acceptStrCp = computed(() => {
    return acceptCp.value.join(',');
  });

  return {
    acceptCp,
    acceptStrCp
  };
}
