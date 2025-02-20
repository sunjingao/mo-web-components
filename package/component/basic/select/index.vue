<template>
  <div class="m-select">
    <a-select
      v-bind="getProps($attrs)"
      :value="value"
      :class="[$attrs.class]"
      :style="$attrs.style"
      :mode="mode"
      :options="options"
      :fieldNames="fieldNames"
      @update:value="handleUpdateValue"
    >
      <template v-for="(_, name) in getSlots($slots)" #[name]="bindValue">
        <slot v-bind="bindValue" :key="name" :name="name" />
      </template>
    </a-select>
    <!--加a-form-item-rest这个标签参考antd文档的form组件-->
    <a-form-item-rest>
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
    </a-form-item-rest>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue';
import {
  Select as aSelect,
  Checkbox as aCheckbox,
  Tooltip as aTooltip,
  FormItemRest as aFormItemRest
} from 'ant-design-vue';
import { EMITS, EMITS_DEC, PROPS_DES } from './config';
import { useProps } from './hook/use-props';
import { useSlots } from './hook/use-slots';
import { useMultiple } from '@/component/basic/select/hook/use-multiple';

export default defineComponent({
  components: {
    aFormItemRest,
    aSelect,
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
        toRef(props, 'mode'),
        toRef(props, 'value'),
        toRef(props, 'options'),
        toRef(props, 'fieldNames'),
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
