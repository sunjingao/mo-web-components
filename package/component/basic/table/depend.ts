// ----------------------- table部分 -----------------------
// table配置，用户可以自定义
const TABLE_PROPS = {
  bordered: true
};

// 受到影响的组件参数，用户不能修改
const EFFECT_TABLE_PROPS = {};

// 受到影响的插槽，不能直接通过attrs使用
const EFFECT_TABLE_SLOTS = {
  bodyCell: 'bodyCell'
};

// 受到影响的事件，并非直接使用v-bind
const EFFECT_TABLE_EVENTS = {
  change: 'change', // 当外部调用reize时，即使没有改过条件，也会触发change事件
  resizeColumn: 'resizeColumn' // 内部自动处理了宽度问题，但还会触发相关事件作为提醒
};

// ----------------------- columns部分 -----------------------
function get_COLUMNS(column) {
  let COLUMNS_PROPS = {
    ellipsis: true
  };
  if (column.width) {
    COLUMNS_PROPS = {
      ...COLUMNS_PROPS,
      resizable: true
    };
  }
  return COLUMNS_PROPS;
}

// 受到影响的组件参数，用户不能修改
const EFFECT_COLUMNS_PROPS = {};

export {
  TABLE_PROPS,
  EFFECT_TABLE_PROPS,
  EFFECT_TABLE_SLOTS,
  EFFECT_TABLE_EVENTS,
  get_COLUMNS,
  EFFECT_COLUMNS_PROPS
};
