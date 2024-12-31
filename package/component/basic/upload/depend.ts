// 组件配置，用户可以自定义
const COMPONENT_PROPS = {
  // listType: 'picture-card'
};

// 受到影响的组件参数，用户不能自定义
const EFFECT_COMPONENT_PROPS = {
  accept: 'accept',
  listType: 'listType',
  action: 'action',
  beforeUpload: 'beforeUpload',
  customRequest: 'customRequest',
  data: 'data',
  directory: 'directory',
  headers: 'headers',
  method: 'method',
  name: 'name',
  openFileDialogOnClick: 'openFileDialogOnClick',
  withCredentials: 'withCredentials'
};

// 受到影响的插槽，不能直接通过attrs使用
const EFFECT_COMPONENT_SLOTS = {};

// 受到影响的事件，并非直接使用v-bind
const EFFECT_COMPONENT_EVENTS = {};

export { COMPONENT_PROPS, EFFECT_COMPONENT_PROPS, EFFECT_COMPONENT_SLOTS, EFFECT_COMPONENT_EVENTS };
