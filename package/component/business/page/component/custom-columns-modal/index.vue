<template>
  <m-modal v-model:open="openVM" title="自定义列" @ok="handleOk">
    <div class="no-drag-item">
      <div class="checkbox">
        <m-checkbox
          :checked="checkConfigRf.checkAll"
          :indeterminate="checkConfigRf.indeterminate"
          @change="handleCheckChange"
        >
          全选/反选
        </m-checkbox>
      </div>
    </div>
    <template v-if="fixedLeftColumnsRef.length > 0">
      <div v-for="(item, index) in fixedLeftColumnsRef" :key="index" class="no-drag-item">
        <div class="checkbox">
          <m-checkbox v-model:checked="item.checked">{{ item.title }}</m-checkbox>
        </div>
      </div>
    </template>
    <div v-if="activeColumnsRef.length > 0" ref="sortableBoxCompRef">
      <div v-for="item in activeColumnsRef" :key="item.dataIndex" class="drag-item">
        <drag-outlined class="drag-icon" />
        <div class="checkbox">
          <m-checkbox v-model:checked="item.checked">{{ item.title }}</m-checkbox>
        </div>
      </div>
    </div>
    <template v-if="fixedRightColumnsRef.length > 0">
      <div v-for="(item, itemIndex) in fixedRightColumnsRef" :key="itemIndex" class="no-drag-item">
        <div class="checkbox">
          <m-checkbox v-model:checked="item.checked">{{ item.title }}</m-checkbox>
        </div>
      </div>
    </template>
  </m-modal>
</template>

<script lang="ts">
import { defineComponent, watch, ref, computed, onMounted } from 'vue';
import { DragOutlined } from '@ant-design/icons-vue';
import Sortable from 'sortablejs';
import { cloneDeep } from 'lodash-es';
import { useVModel } from '@vueuse/core/index';
import { EMITS, EMITS_DEC, PROPS_DES } from './config';

export default defineComponent({
  components: {
    DragOutlined
  },
  inheritAttrs: false,

  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props, { emit }) {
    const openVM = useVModel(props, 'open', emit);

    const sortableBoxCompRef = ref();

    const fixedLeftColumnsRef = ref([]);
    const activeColumnsRef = ref([]);
    const fixedRightColumnsRef = ref([]);

    // checkAll: false是indeterminate为true
    const checkConfigRf = ref({
      checkAll: computed(() => {
        return (
          [
            ...fixedLeftColumnsRef.value.filter((item) => item.checked),
            ...activeColumnsRef.value.filter((item) => item.checked),
            ...fixedRightColumnsRef.value.filter((item) => item.checked)
          ].length ===
          fixedLeftColumnsRef.value.length +
            activeColumnsRef.value.length +
            fixedRightColumnsRef.value.length
        );
      }),
      indeterminate: computed(() => {
        const selectedNum = [
          ...fixedLeftColumnsRef.value.filter((item) => item.checked),
          ...activeColumnsRef.value.filter((item) => item.checked),
          ...fixedRightColumnsRef.value.filter((item) => item.checked)
        ].length;
        const allNum =
          fixedLeftColumnsRef.value.length +
          activeColumnsRef.value.length +
          fixedRightColumnsRef.value.length;

        if (selectedNum === 0 || selectedNum === allNum) {
          return false;
        } else {
          return true;
        }
      })
    });

    // 设置排列属性
    function setSortable() {
      const el = sortableBoxCompRef.value;
      Sortable.create(el, {
        animation: 200, //拖拽动画过渡时间
        group: 'name',
        sort: true,
        onEnd: function (evt) {
          const oldIndex = evt.oldIndex;
          const newIndex = evt.newIndex;
          let temp = activeColumnsRef.value[oldIndex];
          if (oldIndex < newIndex) {
            // 向下移动调整顺序
            for (let i = oldIndex; i < newIndex; i++) {
              activeColumnsRef.value[i] = activeColumnsRef.value[i + 1];
            }
          } else if (oldIndex > newIndex) {
            // 向上移动时调整顺序
            for (let i = oldIndex; i > newIndex; i--) {
              activeColumnsRef.value[i] = activeColumnsRef.value[i - 1];
            }
          }

          activeColumnsRef.value[newIndex] = temp;
        }
      });
    }

    function handleOk() {
      openVM.value = false;
      emit(EMITS.change, {
        fixedLeftColumns: fixedLeftColumnsRef.value,
        activeColumns: activeColumnsRef.value,
        fixedRightColumns: fixedRightColumnsRef.value
      });
    }

    function handleCheckChange() {
      if (checkConfigRf.value.checkAll) {
        fixedLeftColumnsRef.value.forEach((item) => (item.checked = false));
        activeColumnsRef.value.forEach((item) => (item.checked = false));
        fixedRightColumnsRef.value.forEach((item) => (item.checked = false));
      } else {
        fixedLeftColumnsRef.value.forEach((item) => (item.checked = true));
        activeColumnsRef.value.forEach((item) => (item.checked = true));
        fixedRightColumnsRef.value.forEach((item) => (item.checked = true));
      }
    }

    watch(
      [() => props.config],
      () => {
        fixedLeftColumnsRef.value = cloneDeep(props.config.fixedLeftColumns);
        activeColumnsRef.value = cloneDeep(props.config.activeColumns);
        fixedRightColumnsRef.value = cloneDeep(props.config.fixedRightColumns);
      },
      {
        immediate: true,
        deep: true
      }
    );

    onMounted(() => {
      setSortable();
    });

    return {
      sortableBoxCompRef,
      handleOk,
      fixedLeftColumnsRef,
      activeColumnsRef,
      fixedRightColumnsRef,
      openVM,
      checkConfigRf,
      handleCheckChange
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
