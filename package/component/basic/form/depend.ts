import { LAYOUT } from './const.ts';

// --------------------- FORM相关内容 ---------------------
// 组件配置，用户可以自定义
const FORM_PROPS = {
  // label 默认靠右侧对齐
  labelAlign: 'right',
  // label与展示组件是左右排列还是上下排列
  layout: LAYOUT.horizontal,
  // 文字后面是否自动加冒号
  colon: true,
  // 提交失败是否自动滚动到第一个错误
  scrollToFirstError: true
};

// 受影响的form的props，用户不能自定义
const EFFECT_FORM_PROPS = {
  model: 'model'
};
// 受影响的form的插槽
const EFFECT_FORM_SLOTS = {
  default: 'default'
};
// 受到影响的事件，并非直接使用v-bind
const EFFECT_FORM_EVENT = {};

function GET_FORM_PROPS(layout) {
  // label与展示组件水平排列时的宽度设置
  const HORIZONTAL_COL = {
    // label与展示组件左右排列时，labelCol的宽度占比 6 / 24
    labelCol: {
      span: 6
    },
    // label与展示组件左右排列时，展示组件的宽度占比 18 / 24
    wrapperCol: {
      span: 18
    }
  };

  // label与展示组件垂直排列时的宽度设置
  const VERTICAL_COL = {
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 24
    }
  };
  const COL = layout === LAYOUT.vertical ? VERTICAL_COL : HORIZONTAL_COL;
  return {
    ...FORM_PROPS,
    ...COL
  };
}
// --------------------- FORM-ITEM相关内容 ---------------------
const FORM_ITEM_PROPS = {};
const get_EFFECT_FORM_ITEM_PROPS = (props) => {
  // 受到影响的form-item参数，用户不能自定义
  let EFFECT_FORM_ITEM_PROPS = {
    name: 'name'
  };
  if (props && props.label) {
    EFFECT_FORM_ITEM_PROPS = {
      ...EFFECT_FORM_ITEM_PROPS,
      label: 'label'
    };
  }
  return EFFECT_FORM_ITEM_PROPS;
};
// 受到影响的form-item插槽，不能直接通过attrs使用
const EFFECT_FORM_ITEM_SLOTS = {
  default: 'default'
};
// 受到影响的事件，并非直接使用v-bind
const EFFECT_FORM_ITEM_EVENT = {};

// --------------------- FORM-ITEM的component相关内容 ---------------------
const FORM_ITEM_COMPONENT_PROPS = {};
// 受到影响的form-item参数，用户不能自定义
const EFFECT_FORM_ITEM_COMPONENT_PROPS = {};
// 受到影响的form-item插槽，不能直接通过attrs使用
const EFFECT_FORM_ITEM_COMPONENT_SLOTS = {};
// 受到影响的事件，并非直接使用v-bind
const EFFECT_FORM_ITEM_COMPONENT_EVENT = {};

// --------------------- FORM-ITEM的组件的相关内容 ---------------------

export {
  GET_FORM_PROPS,
  EFFECT_FORM_PROPS,
  EFFECT_FORM_SLOTS,
  EFFECT_FORM_EVENT,
  FORM_ITEM_PROPS,
  get_EFFECT_FORM_ITEM_PROPS,
  EFFECT_FORM_ITEM_SLOTS,
  EFFECT_FORM_ITEM_EVENT,
  FORM_ITEM_COMPONENT_PROPS,
  EFFECT_FORM_ITEM_COMPONENT_PROPS,
  EFFECT_FORM_ITEM_COMPONENT_SLOTS,
  EFFECT_FORM_ITEM_COMPONENT_EVENT
};
