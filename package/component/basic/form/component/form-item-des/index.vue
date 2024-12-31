<template>
  <m-tooltip>
    <template #title>{{ value ? value : '-' }}</template>
    {{ value ? value : '-' }}
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
