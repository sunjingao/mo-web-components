import {
  EFFECT_FORM_ITEM_COMPONENT_SLOTS,
  EFFECT_FORM_ITEM_SLOTS,
  EFFECT_FORM_SLOTS
} from '../../depend.ts';

export function useSlots() {
  function getFormSlots(slots) {
    /* eslint-disable-next-line */
    const {...componentSlots} = slots;
    for (const slotName of Object.values(EFFECT_FORM_SLOTS)) {
      delete componentSlots[slotName];
    }

    return componentSlots;
  }

  function getFormItemSlots(slots) {
    /* eslint-disable-next-line */
    const {...componentSlots} = slots;
    for (const slotName of Object.values(EFFECT_FORM_ITEM_SLOTS)) {
      delete componentSlots[slotName];
    }

    return componentSlots;
  }

  function getFormItemComponentSlots(slots) {
    /* eslint-disable-next-line */
    const {...componentSlots} = slots;
    for (const slotName of Object.values(EFFECT_FORM_ITEM_COMPONENT_SLOTS)) {
      delete componentSlots[slotName];
    }

    return componentSlots;
  }

  return {
    getFormSlots,
    getFormItemSlots,
    getFormItemComponentSlots
  };
}
