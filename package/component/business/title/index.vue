<template>
  <div :class="[`m-title`]" v-bind="getProps($attrs)" :style="$attrs.style">
    <slot />
    <span v-if="$slots.description" class="description">
      <slot name="description" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { EMITS_DEC, PROPS_DES } from './config';
import { useProps } from './hook/use-props';

export default defineComponent({
  inheritAttrs: false,

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(_, { expose }) {
    const { getProps } = useProps();

    const exposeTemp = {};
    expose(exposeTemp);

    return {
      getProps
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
