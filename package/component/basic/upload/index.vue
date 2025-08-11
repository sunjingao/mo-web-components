<template>
  <div :class="[`m-uploda`, $attrs.class]" :style="$attrs.style">
    <a-upload
      v-model:fileList="fileListVM"
      :maxCount="maxCount"
      :accept="acceptStrCp"
      :customRequest="handleCustomRequest"
      :beforeUpload="handleBeforeUpload"
      listType="picture-card"
      v-bind="getProps($attrs)"
      @preview="handlePreview"
      @remove="handleRemove"
      @download="handleDownload"
    >
      <template v-for="(_, name) in getSlots($slots)" #[name]="bindValue">
        <slot v-bind="bindValue" :key="name" :name="name" />
      </template>
      <div>
        <plus-outlined />
        <div>上传</div>
      </div>
    </a-upload>
    <m-image
      class="hidden"
      :preview="{
        visible: previewRef.visible,
        onVisibleChange: handlePreviewCancel
      }"
      :src="previewRef.url"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import { Upload as aUpload } from 'ant-design-vue';
import { EMITS, EMITS_DEC, PROPS_DES } from './config';
import { useFileList } from './hook/use-file-list';
import { useProps } from './hook/use-props';
import { useSlots } from './hook/use-slots';
import { useUpload } from './hook/use-upload';
import { useDownload } from './hook/use-download';
import { usePreview } from './hook/use-preview';
import { useRemove } from './hook/use-remove';
import { useAccept } from './hook/use-accept';
import { useCustomFileType } from './hook/use-custom-file-type';

export default defineComponent({
  components: {
    aUpload,
    PlusOutlined
  },
  inheritAttrs: false,

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props, { emit, expose }) {
    const { getProps } = useProps();
    const { getSlots } = useSlots();

    useCustomFileType(toRef(props, 'customFileType'));

    const { fileListVM } = useFileList(props, emit);

    const { acceptCp, acceptStrCp } = useAccept(
      toRef(props, 'fileType'),
      toRef(props, 'customFileType')
    );

    const { handleDownload } = useDownload(props.downloadAsync);

    const { previewRef, handlePreviewCancel, handlePreview } = usePreview();

    const { handleBeforeUpload, handleCustomRequest } = useUpload(
      props.uploadAsync,
      toRef(props, 'maxCount'),
      toRef(props, 'fileType'),
      toRef(props, 'customFileType'),
      fileListVM,
      acceptCp,
      emit,
      EMITS
    );

    const { handleRemove } = useRemove(fileListVM, props.deleteFileAsync, emit, EMITS, emit, EMITS);

    const exposeTemp = {};
    expose(exposeTemp);

    return {
      getProps,
      getSlots,
      handlePreviewCancel,
      handlePreview,
      fileListVM,
      handleBeforeUpload,
      handleRemove,
      previewRef,
      handleCustomRequest,
      acceptStrCp,
      handleDownload
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
