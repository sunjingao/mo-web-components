<template>
  <div class="m-cascader">
    <a-cascader
      v-bind="getProps($attrs)"
      :value="value"
      :class="[$attrs.class]"
      :style="$attrs.style"
      :multiple="multiple"
      :options="options"
      :fieldNames="fieldNames"
      :showCheckedStrategy="showCheckedStrategy"
      @update:value="handleUpdateValue"
    >
      <template v-for="(_, name) in getSlots($slots)" #[name]="bindValue">
        <slot v-bind="bindValue" :key="name" :name="name" />
      </template>
    </a-cascader>
    <!--多选时，支持全选功能-->
    <a-tooltip v-if="enableSelectAll && isMultipleRef">
      <template #title>是否多选？</template>
      <a-checkbox
        :checked="checkboxValueCp"
        class="ml-8px"
        :indeterminate="checkboxIndeterminateCp"
        @change="handleCheckAllChange"
      />
    </a-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue';
import { Cascader as aCascader, Checkbox as aCheckbox, Tooltip as aTooltip } from 'ant-design-vue';
import { EMITS, EMITS_DEC, PROPS_DES } from './config';
import { useProps } from './hook/use-props';
import { useSlots } from './hook/use-slots';
import { useMultiple } from './hook/use-multiple';

export default defineComponent({
  components: {
    aCascader,
    aCheckbox,
    aTooltip
  },

  inheritAttrs: false,

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props, { emit, expose }) {
    const { getProps } = useProps();
    const { getSlots } = useSlots();

    function handleUpdateValue(value) {
      emit(EMITS.updateValue, value);
    }

    const { isMultipleRef, checkboxValueCp, checkboxIndeterminateCp, handleCheckAllChange } =
      useMultiple(
        toRef(props, 'multiple'),
        toRef(props, 'value'),
        toRef(props, 'options'),
        toRef(props, 'fieldNames'),
        toRef(props, 'showCheckedStrategy'),
        emit
      );

    const exposeTemp = {};
    expose(exposeTemp);

    return {
      getProps,
      getSlots,

      handleUpdateValue,
      isMultipleRef,
      checkboxValueCp,
      checkboxIndeterminateCp,
      handleCheckAllChange
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
