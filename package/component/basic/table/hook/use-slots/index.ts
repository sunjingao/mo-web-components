import { EFFECT_TABLE_SLOTS } from '../../depend.ts';

export function useSlots() {
  function getSlots(slots) {
    /* eslint-disable-next-line */
    const {...componentSlots} = slots;
    for (const slotName of Object.values(EFFECT_TABLE_SLOTS)) {
      delete componentSlots[slotName];
    }

    return componentSlots;
  }

  return {
    getSlots
  };
}
