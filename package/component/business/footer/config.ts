import { EFFECT_COMPONENT_EVENTS } from './depend.ts';

const EMITS = {
  ...EFFECT_COMPONENT_EVENTS
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // 底部按钮
  items: {
    required: false,
    type: Array,
    default() {
      return [];
    }
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
