<template>
  <div v-bind="getProps($attrs)" :class="[`m-footer`, $attrs.class]" :style="$attrs.style">
    <template v-for="(item, index) in itemsRef" :key="index">
      <m-button
        v-if="!item.hidden"
        :mode="item.mode"
        :loading="item.loading"
        :disabled="item.disabled"
        @click="handleClick(item)"
      >
        {{ item.label }}
      </m-button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue';
import { EMITS_DEC, PROPS_DES } from './config';
import { useProps } from './hook/use-props';
import { useSlots } from './hook/use-slots';
import { useItems } from '@/component/business/footer/hook/use-items';

export default defineComponent({
  inheritAttrs: false,

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props, { expose }) {
    const { getProps } = useProps();
    const { getSlots } = useSlots();

    const { itemsRef } = useItems(toRef(props, 'items'));

    function handleClick(item) {
      item.loading = true;
      item
        .confirmAsync()
        .then(() => {})
        .finally(() => {
          item.loading = false;
        });
    }

    const exposeTemp = {};
    expose(exposeTemp);

    return {
      getProps,
      getSlots,
      itemsRef,
      handleClick
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
