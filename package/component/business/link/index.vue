<template>
  <a
    :href="hrefCp"
    :class="[
      `m-link`,
      type,
      {
        [`disabled`]: disabled
      }
    ]"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import { EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  props: PROPS_DES,
  emits: EMITS_DEC,

  setup(props, { emit, expose }) {
    const hrefCp = computed(() => {
      return !props.disabled && props.href ? props.href : 'javascript:void(0);';
    });

    function handleClick(event: MouseEvent) {
      if (props.disabled) {
        return;
      }

      emit(EMITS.click, event);
    }

    const exposeTemp = {};
    expose(exposeTemp);

    return {
      ...exposeTemp,
      hrefCp,
      handleClick
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
