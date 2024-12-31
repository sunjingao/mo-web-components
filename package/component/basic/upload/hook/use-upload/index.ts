import { h } from 'vue';
import { getFileTypeAsync } from '../../util/file';
import { DOC, FILE_TYPE_MAP, IMG, PACK, VIDEO } from '../../const';
import { message } from '@/component/ant/main';

export function useUpload(
  uploadAsync,
  maxCountPropRef,
  fileTypePropRef,
  customFileTypePropRef,
  fileListVM,
  acceptCp
) {
  function isInvalidType(type: string) {
    const result = acceptCp.value.every((item: string) => item !== type);

    if (result) {
      if (!!customFileTypePropRef.value && customFileTypePropRef.value.length > 0) {
        const result = [];
        customFileTypePropRef.value.forEach((item) => {
          result.push(item.errorTip);
        });

        message.error({
          content() {
            return h(
              'div',
              {
                style: {
                  'text-align': 'left'
                }
              },
              result.map((item) => h('p', null, item))
            );
          }
        });
      } else {
        const result = [];
        fileTypePropRef.value.forEach((item) => {
          result.push(FILE_TYPE_MAP[item].errorTip);
        });

        message.error({
          content() {
            return h(
              'div',
              {
                style: {
                  'text-align': 'left'
                }
              },
              result.map((item) => h('p', null, item))
            );
          }
        });
        return true;
      }
    }

    return result;
  }

  function isFileSizeInvalid(type: string, fileSize: number) {
    if (!!customFileTypePropRef.value && customFileTypePropRef.value.length > 0) {
      const foundItem = customFileTypePropRef.value.find(
        (item) => item.content.includes(type) && item.maxSize < fileSize
      );
      if (foundItem) {
        message.error(foundItem.errorTip);
        return true;
      }
    } else if (fileSize === 0) {
      message.error('上传文件不能为空！');
      return true;
    } else if (DOC.content.includes(type) && DOC.maxSize < fileSize) {
      message.error(DOC.errorTip);
      return true;
    } else if (IMG.content.includes(type) && IMG.maxSize < fileSize) {
      message.error(IMG.errorTip);
      return true;
    } else if (VIDEO.content.includes(type) && VIDEO.maxSize < fileSize) {
      message.error(VIDEO.errorTip);
      return true;
    } else if (PACK.content.includes(type) && PACK.maxSize < fileSize) {
      message.error(PACK.errorTip);
      return true;
    }
    return false;
  }

  async function handleBeforeUpload(file) {
    return new Promise(async (resolve) => {
      const type = await getFileTypeAsync(file);
      const fileSize = file.size;

      if (fileListVM.value.length >= maxCountPropRef.value) {
        message.error(`文件最大上传数量为${maxCountPropRef.value}！`);
        return false;
      }

      if (isInvalidType(type)) {
        return false;
      }

      if (isFileSizeInvalid(type, fileSize)) {
        return false;
      }

      resolve();
    });
  }

  async function handleCustomRequest(option) {
    const formData = new FormData();
    formData.append('file', option.file);
    const foundIndex = fileListVM.value.findIndex((item) => item === option.file);
    uploadAsync(formData)
      .then(async (result) => {
        option.onSuccess({
          ...result
        });
      })
      .catch(() => {
        fileListVM.value.splice(foundIndex, 1);
      });
  }

  return {
    handleBeforeUpload,
    handleCustomRequest
  };
}
