<template>
  <a-modal :class="[$attrs.class, `m-modal`]" :style="$attrs.style" v-bind="getProps($attrs)">
    <template v-for="(_, name) in getSlots($slots)" #[name]="bindValue">
      <slot v-bind="bindValue" :key="name" :name="name" />
    </template>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Modal as aModal } from 'ant-design-vue';
import { EMITS_DEC, PROPS_DES } from './config';
import { useProps } from './hook/use-props';
import { useSlots } from './hook/use-slots';

export default defineComponent({
  components: {
    aModal
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
      getProps,
      getSlots
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss"></style>
