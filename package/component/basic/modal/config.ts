import { EFFECT_COMPONENT_EVENTS } from './depend.ts';

const EMITS = {
  ...EFFECT_COMPONENT_EVENTS
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {};

export { EMITS, EMITS_DEC, PROPS_DES };
