<template>
  <div
    :class="['ability', $attrs.class, alignCp === 'right' ? 'right' : 'left']"
    :style="$attrs.style"
  >
    <template v-for="(item, index) in abilityItemsCp">
      <m-button
        v-if="item.type === ABILITY_ITEM_TYPE.normal && !item.hidden"
        :key="index"
        :disabled="item.disabled"
        :loading="item.loading"
        size="middle"
        @click="handleNormalBtnClick(item)"
      >
        {{ item.label }}
      </m-button>
      <template v-if="item.type === ABILITY_ITEM_TYPE.multiple">
        <m-dropdown :key="index">
          <template #overlay>
            <m-menu>
              <template v-for="(mulItem, mulItemIndex) in item.items">
                <m-menu-item
                  v-if="!mulItem.hidden"
                  :key="mulItemIndex"
                  :disabled="mulItem.disabled"
                  @click="handleAbilityMulClick(mulItem)"
                >
                  {{ mulItem.label }}
                </m-menu-item>
              </template>
            </m-menu>
          </template>
          <m-button size="middle">
            批量选择
            <down-outlined />
          </m-button>
        </m-dropdown>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import { EMITS, EMITS_DEC, PROPS_DES } from './config';
import { ABILITY_ITEM_TYPE } from './const';
import { useAbility } from './hook/use-ability';

export default defineComponent({
  components: {
    DownOutlined
  },
  props: PROPS_DES,

  emits: EMITS_DEC,

  setup(props, { emit, expose }) {
    const {
      alignCp,
      abilityItemsCp,
      handleAbilityMulClick,
      handleCancelMultiple,
      multipleConfigRef,
      handleNormalBtnClick
    } = useAbility(toRef(props, 'ability'), props.getParamsAsync, emit, EMITS);

    expose({
      handleCancelMultiple,
      multipleConfig: multipleConfigRef
    });

    return {
      alignCp,
      abilityItemsCp,
      handleAbilityMulClick,
      ABILITY_ITEM_TYPE,
      handleNormalBtnClick
    };
  }
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
