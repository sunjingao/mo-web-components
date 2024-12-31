<template>
  <div
    v-bind="getProps($attrs)"
    :class="[`m-preview-download`, $attrs.class]"
    :style="$attrs.style"
  >
    <div class="inline-flex items-center">
      <img v-if="currentTypeCp === TYPE.PIC" :src="url" class="w-24px h-24px" />
      <AudioOutlined v-else-if="currentTypeCp === TYPE.AUDIO" class="text-24px" />
      <VideoCameraOutlined v-else-if="currentTypeCp === TYPE.VIDEO" class="text-24px" />
      <FileWordOutlined v-else-if="currentTypeCp === TYPE.OFFICE" class="text-24px" />
      <FilePdfOutlined v-else-if="currentTypeCp === TYPE.PDF" class="text-24px" />

      <CompressOutlined
        v-if="enablePreview"
        class="ml-8px cursor-pointer text-14px"
        @click="handlePreview"
      />

      <ArrowDownOutlined
        v-if="enableDownload"
        class="ml-8px cursor-pointer text-14px"
        @click="handleDownload"
      />
    </div>

    <m-image
      class="hidden"
      :preview="{
        visible: currentTypeCp === TYPE.PIC && visibleRef,
        onVisibleChange: handlePreviewCancel
      }"
      :src="url"
    />
    <m-modal
      v-if="currentTypeCp !== TYPE.PIC && visibleRef"
      title="预览"
      :footer="null"
      :visible="true"
      width="100%"
      wrap-class-name="full-modal"
      @cancel="handlePreviewCancel"
    >
      <audio v-if="currentTypeCp === TYPE.AUDIO" controls controlsList="nodownload" class="w-100%">
        <track kind="captions" />
        <source :src="url" type="audio/mpeg" />
      </audio>
      <video v-if="currentTypeCp === TYPE.VIDEO" controls muted controlsList="nodownload">
        <track kind="captions" />
        <source :src="url" type="video/mp4" />
      </video>
      <iframe
        v-if="currentTypeCp === TYPE.OFFICE"
        :src="'https://view.officeapps.live.com/op/view.aspx?src=' + url"
        class="w-100% h-100%"
      />
      <iframe v-if="currentTypeCp === TYPE.PDF" :src="url" class="w-100% h-100%" />
    </m-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import {
  AudioOutlined,
  VideoCameraOutlined,
  FileWordOutlined,
  FilePdfOutlined,
  CompressOutlined,
  ArrowDownOutlined
} from '@ant-design/icons-vue';
import { useProps } from './hook/use-props';
import { useSlots } from './hook/use-slots';
import { EMITS_DEC, PROPS_DES } from './config';
import { TYPE, PIC, AUDIO, VIDEO, OFFICE } from './const';

export default defineComponent({
  components: {
    AudioOutlined,
    VideoCameraOutlined,
    FileWordOutlined,
    FilePdfOutlined,
    CompressOutlined,
    ArrowDownOutlined
  },
  inheritAttrs: false,

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props, { expose }) {
    const { getProps } = useProps();
    const { getSlots } = useSlots();

    const visibleRef = ref(false);

    const currentTypeCp = computed(() => {
      if (PIC.find((item) => props.url.includes(item))) {
        return TYPE.PIC;
      } else if (AUDIO.find((item) => props.url.includes(item))) {
        return TYPE.AUDIO;
      } else if (VIDEO.find((item) => props.url.includes(item))) {
        return TYPE.VIDEO;
      } else if (OFFICE.find((item) => props.url.includes(item))) {
        return TYPE.OFFICE;
      } else {
        return TYPE.PDF;
      }
    });

    function handlePreview() {
      visibleRef.value = true;
    }

    function handlePreviewCancel() {
      visibleRef.value = false;
    }

    async function handleDownload() {
      props.downloadAsync(props.url).then(() => {});
    }

    const exposeTemp = {};
    expose(exposeTemp);

    return {
      getProps,
      getSlots,
      TYPE,
      currentTypeCp,
      visibleRef,
      handlePreview,
      handlePreviewCancel,
      handleDownload
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss"></style>
