import { EFFECT_COMPONENT_EVENTS } from './depend.ts';

const EMITS = {
  ...EFFECT_COMPONENT_EVENTS,
  updateValue: 'update:value'
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  value: {
    required: false,
    type: [Number, String, Array]
  },
  options: {
    required: false,
    type: Array
  },
  fieldNames: {
    required: false,
    type: Object
  },
  multiple: {
    required: false,
    type: Boolean
  },
  showCheckedStrategy: {
    required: false,
    type: String,
    default() {
      return 'SHOW_PARENT';
    }
  },
  // 多选时，是否开启全选功能
  enableSelectAll: {
    required: false,
    type: Boolean,
    default() {
      return true;
    }
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
