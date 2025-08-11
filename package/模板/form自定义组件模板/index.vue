<template>
  <div>
    <m-input v-model:value="valVM" placeholder="placeholder" v-bind="$attrs" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {useVModel} from "@vueuse/core/index";

export default defineComponent({
  props: {
    value: String,
    placeholder: String
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const valVM = useVModel(props, 'value', emit)

    return {
      valVM
    }
  }
})
</script>

<style scoped>

</style>