import { ref } from 'vue';

export function usePreview() {
  // 预览内容
  const previewRef = ref({
    visible: false,
    url: null
  });

  function handlePreviewCancel() {
    previewRef.value.visible = false;
  }

  async function handlePreview(file) {
    previewRef.value.visible = true;
    // 外部传递进来的应该有url，本地上传的有thumbUrl
    previewRef.value.url = file.url || file.thumbUrl;
  }

  return {
    previewRef,
    handlePreviewCancel,
    handlePreview
  };
}
