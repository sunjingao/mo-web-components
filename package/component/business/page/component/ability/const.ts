import { MULTIPLE } from '../../../../basic/table/const.ts';

const ABILITY_ITEM_TYPE = {
  normal: 'normal',
  multiple: 'multiple'
};

const MULTIPLE_CONTENT = {
  ...MULTIPLE.content
};
delete MULTIPLE_CONTENT.visible;

const ABILITY_TEMPLATE = {
  align: 'right',
  config: {
    download: {
      enable: false,
      getBlobAsync: null
    }
  },
  normal: {
    type: ABILITY_ITEM_TYPE['normal'],
    label: undefined,
    disabled: false,
    hidden: false,
    loading: false,
    confirmAsync: function (param) {
      console.error('必填函数', param);
    }
  },
  multiple: {
    content: {
      type: ABILITY_ITEM_TYPE['multiple'],
      label: undefined,
      disabled: false,
      hidden: false,
      ...MULTIPLE_CONTENT
    },
    items: MULTIPLE.items
  }
};

// 自定义列按钮
const RESIZE_COLUMN_BTN_TEMPLATE = {
  type: ABILITY_ITEM_TYPE['normal'],
  label: '自定义列',
  disabled: false,
  hidden: false,
  loading: false
};

// 全屏展示按钮
const FULL_SCREEN_BTN_TEMPLATE = {
  type: ABILITY_ITEM_TYPE['normal'],
  label: '全屏展示',
  disabled: false,
  hidden: false,
  loading: false
};

// 导出按钮
const EXPORT_BTN_TEMPLATE = {
  type: ABILITY_ITEM_TYPE['normal'],
  label: '导出',
  disabled: false,
  hidden: false,
  loading: false
};

export {
  ABILITY_ITEM_TYPE,
  ABILITY_TEMPLATE,
  RESIZE_COLUMN_BTN_TEMPLATE,
  FULL_SCREEN_BTN_TEMPLATE,
  EXPORT_BTN_TEMPLATE
};
