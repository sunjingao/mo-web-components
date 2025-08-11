<template>
  <a-button
    :class="[`m-button`, $attrs.class]"
    v-bind="getProps($attrs)"
    :style="$attrs.style"
    :type="mode === MODE.success ? 'primary' : 'default'"
    :danger="mode === MODE.fail"
  >
    <template v-for="(_, name) in getSlots($slots)" #[name]="bindValue">
      <slot v-bind="bindValue" :key="name" :name="name" />
    </template>
  </a-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button as aButton } from 'ant-design-vue';
import { EMITS_DEC, PROPS_DES } from './config';
import { MODE, SIZE } from './const';
import { useProps } from './hook/use-props';
import { useSlots } from './hook/use-slots';

export default defineComponent({
  components: {
    aButton
  },

  inheritAttrs: false,

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(_, { expose }) {
    const { getProps } = useProps();
    const { getSlots } = useSlots();

    const exposeTemp = {};
    expose(exposeTemp);

    return {
      MODE,
      SIZE,
      getProps,
      getSlots
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
