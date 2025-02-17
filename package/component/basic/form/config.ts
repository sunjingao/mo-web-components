import { LAYOUT, TYPE } from './const';
import {
  EFFECT_FORM_EVENT,
  EFFECT_FORM_ITEM_EVENT,
  EFFECT_FORM_ITEM_COMPONENT_EVENT
} from './depend';

const EMITS = {
  ...EFFECT_FORM_EVENT,
  ...EFFECT_FORM_ITEM_EVENT,
  ...EFFECT_FORM_ITEM_COMPONENT_EVENT,
  query: 'query',
  reset: 'reset',
  change: 'change',
  pressEnter: 'pressEnter'
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // 绑定的值
  modelValue: {
    required: true,
    type: Object
  },

  // 内容项数组
  items: {
    required: true,
    type: Array
  },

  // 值有 form 或者 tableCondition，作为form表单还是页面的查询条件
  type: {
    required: false,
    type: String,
    default() {
      return TYPE.normal;
    }
  },

  // 列的数量，值有1、2、3、4、5五种情况
  columnsNumber: {
    required: false,
    type: Number,
    default() {
      return 3;
    }
  },
  // label与组件的排列
  layout: {
    required: false,
    type: String,
    default() {
      return LAYOUT.horizontal;
    }
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
