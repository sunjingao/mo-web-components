<template>
  <div
    v-if="items.length > 0"
    :class="[`m-form`, $attrs.class]"
    :style="{
      ...$attrs.style,
      height: formHeightCp,
      overflow: overflowCp
    }"
  >
    <a-form
      ref="formCompRef"
      v-bind="getFormProps($attrs, layout)"
      :model="antFormModelVM"
      :layout="layout"
    >
      <div :style="{ ...gridClassCp }">
        <!--当 itemContent.type !== TYPE.tableCondition 时，itemContent.formItemProps为空-->
        <a-form-item
          v-for="(itemContent, index) in itemsCp"
          v-show="!itemContent.hidden"
          :key="index"
          :name="itemContent.uploadKey"
          v-bind="getFormItemProps(itemContent.formItemProps || {})"
        >
          <!--label展示-->
          <template v-if="itemContent.type !== TYPE.tableCondition" #label>
            <div>
              {{ itemContent.formItemProps && itemContent.formItemProps.label }}
            </div>
          </template>
          <!--content展示-->
          <template v-if="itemContent.type === TYPE.tableCondition">
            <!--查询条件靠右侧对齐-->
            <div class="flex justify-end">
              <m-button size="middle" @click="handleReset">重置</m-button>
              <m-button
                type="primary"
                class="ml-8px"
                size="middle"
                mode="success"
                @click="handleQuery"
                >查询</m-button
              >
              <down-outlined
                v-if="itemsCp.length > 3"
                :class="['drop-icon', isExpandRef ? 'rotate' : '']"
                @click="handleToggleExpand"
              />
            </div>
          </template>
          <template v-else>
            <!--如果有默认插槽，cascader展示有问题-->
            <component
              :is="itemContent.componentName"
              v-if="itemContent.componentName === 'mCascader'"
              v-bind="getFormItemComponentProps(itemContent)"
              v-model:[itemContent.vModelKey]="antFormModelVM[itemContent.uploadKey]"
              @change="(...args) => handleComponentChange(itemContent, ...args)"
            />
            <component
              :is="itemContent.componentName"
              v-else
              v-bind="getFormItemComponentProps(itemContent)"
              v-model:[itemContent.vModelKey]="antFormModelVM[itemContent.uploadKey]"
              @pressEnter="handlePressEnter(itemContent)"
              @change="(...args) => handleComponentChange(itemContent, ...args)"
            >
              <template v-for="(_, name) in getFormItemComponentSlots($slots)" #[name]="bindValue">
                <slot v-bind="{ ...bindValue, ...itemContent }" :key="name" :name="name" />
              </template>
            </component>
          </template>
        </a-form-item>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import { Form as aForm, FormItem as aFormItem } from 'ant-design-vue';
import { EMITS_DEC, PROPS_DES } from './config';
import { TYPE } from './const';
import { useProps } from './hook/use-props/index';
import { useGridCls } from './hook/use-grid-cls';
import { useExpand } from './hook/use-expand';
import { useFormModel } from './hook/use-form-model';
import { useSlots } from './hook/use-slots';
import { useItems } from '@/component/basic/form/hook/use-items';
import { useCondition } from '@/component/basic/form/hook/use-condition';

export default defineComponent({
  components: {
    aForm,
    aFormItem,
    DownOutlined
  },

  inheritAttrs: false,

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props, { emit, expose }) {
    const formCompRef = ref();

    const { getFormProps, getFormItemProps, getFormItemComponentProps } = useProps();

    const { getFormSlots, getFormItemSlots, getFormItemComponentSlots } = useSlots();

    const { itemsCp } = useItems(toRef(props, 'items'), toRef(props, 'type'));

    const { gridClassCp } = useGridCls(toRef(props, 'columnsNumber'));

    const { isExpandRef, formHeightCp, overflowCp, handleToggleExpand } = useExpand(
      toRef(props, 'type')
    );

    const { antFormModelVM } = useFormModel(itemsCp, emit, props);

    const { handleReset, handleQuery, handleComponentChange, handlePressEnter } = useCondition(
      antFormModelVM,
      formCompRef,
      emit
    );

    expose({
      antFormComponent: formCompRef,
      antFormModel: antFormModelVM,
      handleQuery
    });

    return {
      TYPE,
      formCompRef,
      itemsCp,
      handleReset,
      handleQuery,
      antFormModelVM,
      gridClassCp,
      isExpandRef,
      formHeightCp,
      overflowCp,
      handleToggleExpand,
      getFormProps,
      getFormItemProps,
      getFormItemComponentProps,
      handleComponentChange,
      getFormSlots,
      getFormItemSlots,
      getFormItemComponentSlots,
      handlePressEnter
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
