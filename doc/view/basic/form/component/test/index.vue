<template>
  <div>
    <span>我是自定义组件</span>
    <m-input v-model:value="customSelf" class="mt-8px" />
    <m-table class="mt-8px" :columns="columns" :dataSource="data" :pagination="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useVModel } from '@vueuse/core/index';

export default defineComponent({
  props: {
    value: String,
    columns: Array,
    data: Array
  },
  setup(props, { emit }) {
    const customSelf = useVModel(props, 'value', emit);

    return {
      customSelf
    };
  }
});
</script>
