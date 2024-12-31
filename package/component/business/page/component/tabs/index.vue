<template>
  <m-tabs
    v-if="tabsConfig.items && tabsConfig.items.length > 0"
    :activeKey="activeKeyVM"
    type="card"
    @change="handleChange"
  >
    <m-tab-pane v-for="item in tabsConfig.items" :key="item.key" :tab="item.tab" />
  </m-tabs>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useVModel } from '@vueuse/core/index';
import { EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props, { emit }) {
    const activeKeyVM = useVModel(props, 'modelValue', emit);

    function handleChange(item) {
      activeKeyVM.value = item;
      emit(EMITS.change);
    }

    watch(
      [() => props.tabsConfig.defaultValue],
      () => {
        if (props.tabsConfig.defaultValue) {
          activeKeyVM.value = props.tabsConfig.defaultValue;
        } else {
          activeKeyVM.value =
            (props.tabsConfig.items &&
              props.tabsConfig.items[0] &&
              props.tabsConfig.items[0].key) ||
            '';
        }
      },
      {
        immediate: true
      }
    );

    return {
      activeKeyVM,
      handleChange
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
