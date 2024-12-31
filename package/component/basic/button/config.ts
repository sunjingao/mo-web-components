import { MODE } from './const';
import { EFFECT_COMPONENT_EVENTS } from './depend.ts';

const EMITS = {
  ...EFFECT_COMPONENT_EVENTS
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // 类型
  mode: {
    required: false,
    type: String,
    default() {
      return MODE.normal;
    }
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
