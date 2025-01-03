<template>
  <a-tabs :class="[$attrs.class, `m-tabs`]" :style="$attrs.style" v-bind="getProps($attrs)">
    <template v-for="(_, name) in getSlots($slots)" #[name]="bindValue">
      <slot v-bind="bindValue" :key="name" :name="name" />
    </template>
  </a-tabs>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Tabs as aTabs } from 'ant-design-vue';
import { EMITS_DEC, PROPS_DES } from './config';
import { useProps } from './hook/use-props';
import { useSlots } from './hook/use-slots';

export default defineComponent({
  components: {
    aTabs
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
