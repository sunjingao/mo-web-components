<template>
  <m-tooltip>
    <template #title>{{ value ? value : '-' }}</template>
    <span class="des-color">{{ value ? value : '-' }}</span>
  </m-tooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { EMITS_DEC, PROPS_DES } from './config';
export default defineComponent({
  inheritAttrs: false,
  props: PROPS_DES,
  emits: EMITS_DEC
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
