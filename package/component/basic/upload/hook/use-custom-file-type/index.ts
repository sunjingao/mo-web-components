import { fixDefaultData } from '../../../../../util/check-data-type';
import { CUSTOM_FILE_TYPE_ITEM } from '../../structure';

export function useCustomFileType(customFileTypePropRef) {
  if (customFileTypePropRef.value) {
    customFileTypePropRef.value.forEach((item) => {
      // 入参初始化及校验
      fixDefaultData(item, CUSTOM_FILE_TYPE_ITEM);
    });
  }
}
