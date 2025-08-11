// 组件配置，用户可以自定义
const COMPONENT_PROPS = {};

// 受到影响的组件参数，用户不能自定义
const EFFECT_COMPONENT_PROPS = {
  type: 'type',
  danger: 'danger'
};

// 受到影响的插槽，不能直接通过attrs使用
const EFFECT_COMPONENT_SLOTS = {};

// 受到影响的事件，并非直接使用v-bind
const EFFECT_COMPONENT_EVENTS = {};

export { COMPONENT_PROPS, EFFECT_COMPONENT_PROPS, EFFECT_COMPONENT_SLOTS, EFFECT_COMPONENT_EVENTS };
