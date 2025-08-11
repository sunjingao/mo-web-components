import { ref, computed, watch } from 'vue';
import { cloneDeep } from 'lodash-es';
import {
  ABILITY_TEMPLATE,
  ABILITY_ITEM_TYPE,
  RESIZE_COLUMN_BTN_TEMPLATE,
  FULL_SCREEN_BTN_TEMPLATE,
  EXPORT_BTN_TEMPLATE
} from '../../const';
import { downloadByBlob } from '../../../../../../../util/download';
import { MULTIPLE } from '@/component/basic/table/const.ts';
import { message } from '@/component/depend/main';

export function useAbility(abilityRef, getParamsAsync, emit, EMITS) {
  const multipleConfigRef = ref({
    ...MULTIPLE.content,
    items: []
  });

  const ResizeColumn = {
    ...cloneDeep(RESIZE_COLUMN_BTN_TEMPLATE),
    async confirmAsync() {
      emit(EMITS.openResizeModal);
    }
  };

  const FullScreen = {
    ...cloneDeep(FULL_SCREEN_BTN_TEMPLATE),
    async confirmAsync() {
      emit(EMITS.fullScreen);
    }
  };

  function getExportBtn(getBlobAsync) {
    return {
      ...cloneDeep(EXPORT_BTN_TEMPLATE),
      async confirmAsync() {
        const params = await getParamsAsync();
        const { blob, name } = await getBlobAsync(params);
        downloadByBlob(blob, name);
        message.success({ content: `下载成功` });
      }
    };
  }

  const alignCp = computed(() => {
    return abilityRef.value.align || ABILITY_TEMPLATE.align;
  });

  const abilityItemsCp = computed(() => {
    const abilityItemsClone = cloneDeep(abilityRef.value.items) || [];
    const preBtns = [FullScreen, ResizeColumn];
    if (abilityRef.value && abilityRef.value.download && abilityRef.value.download.enable) {
      preBtns.push(getExportBtn(abilityRef.value.download.getBlobAsync));
    }
    if (!abilityItemsClone || abilityItemsClone.length === 0) {
      return preBtns;
    }

    abilityItemsClone.unshift(...preBtns);

    abilityItemsClone.forEach((item, index) => {
      if (!item.type || item.type === ABILITY_ITEM_TYPE.normal) {
        Object.assign(
          abilityItemsClone[index],
          cloneDeep(ABILITY_TEMPLATE[ABILITY_ITEM_TYPE.normal]),
          cloneDeep(abilityItemsClone[index])
        );
      } else {
        abilityItemsClone[index].items.forEach((multipleItem, multipleItemIndex) => {
          // 构造multiple结构
          const multipleObj = cloneDeep(multipleItem);
          delete multipleObj.label;
          delete multipleObj.disabled;
          delete multipleObj.hidden;
          delete multipleObj.type;

          multipleObj.items = multipleObj.items || [];
          // 子结构赋值
          multipleObj.items.forEach((footerItem, footerItemIndex) => {
            Object.assign(
              multipleObj.items[footerItemIndex],
              cloneDeep(MULTIPLE.items),
              cloneDeep(multipleObj.items[footerItemIndex])
            );
            // 关闭多选吸底部分
            const footerItemClick = multipleObj.items[footerItemIndex].confirmAsync;
            multipleObj.items[footerItemIndex].confirmAsync = async function (...args) {
              multipleConfigRef.value.visible = false;
              const res = await getParamsAsync();
              return footerItemClick(res, ...args);
            };
          });

          // 构造ablity item 结构
          abilityItemsClone[index].items[multipleItemIndex] = {
            label: multipleItem.label,
            disabled: multipleItem.disabled,
            hidden: multipleItem.hidden,
            type: multipleItem.type,
            multiple: multipleObj
          };
        });
      }
    });
    return abilityItemsClone;
  });

  function handleAbilityMulClick(item) {
    multipleConfigRef.value.visible = true;
    Object.assign(
      multipleConfigRef.value,
      cloneDeep(item.multiple),
      cloneDeep(multipleConfigRef.value)
    );
    multipleConfigRef.value.items = item.multiple.items;
    emit(EMITS.updateModelValue, multipleConfigRef.value);
  }

  function handleCancelMultiple() {
    multipleConfigRef.value.visible = false;
    emit(EMITS.updateModelValue, multipleConfigRef.value);
  }

  function handleNormalBtnClick(item) {
    item.loading = true;
    item
      .confirmAsync(item)
      .then(() => {})
      .finally(() => {
        item.loading = false;
      });
  }

  watch(abilityRef, () => {
    multipleConfigRef.value.visible = false;
  });

  return {
    alignCp,
    abilityItemsCp,
    multipleConfigRef,
    handleAbilityMulClick,
    handleCancelMultiple,
    handleNormalBtnClick
  };
}
