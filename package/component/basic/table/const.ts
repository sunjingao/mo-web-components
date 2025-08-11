import { MODE } from '../button/const';

// ------------------- 分页 -------------------
const UNSET_SCROLL_WIDTH = 100;

// ------------------- 分页 -------------------

// 分页配置，用户可以自定义
const PAGINATION = {
  current: 1,
  pageSize: 10,
  total: 0,
  pageSizeOptions: ['10', '20', '50', '100'],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total) => `共有 ${total} 条数据`
};

// 上传用到的分页对应关系
const PAGINATION_MAP = {
  current: 'pageNumber', // 当前页数
  pageSize: 'pageSize', // 每页数量
  total: 'totalElements', // 总页数
  currentFromNumber: 0 // current上传的值与实际值的区别，从0开始为-1，从1开始为0
};

// ------------------- 多选 -------------------

// 多选参数
const MULTIPLE = {
  content: {
    // 是否展示
    visible: false,
    // 跨页面是否包含之前内容
    enableCrossPage: false,
    // 多选是否禁止操作函数
    /* eslint-disable-next-line */
    getCheckboxProps(record) {
      return {
        disabled: false
      };
    }
  },
  // 底部按钮区域
  items: {
    // 是否不展示
    hidden: false,
    // 是否禁止操作
    disabled: false,
    label: undefined,
    loading: false,
    // 点击回调
    confirmAsync() {
      console.error('未提供必输confirmAsync函数');
    },
    // 按钮类型
    mode: MODE.normal
  }
};

// ------------------- 操作列 -------------------
// table column的索引列
const INDEX_COLUMN = {
  title: '序号',
  dataIndex: 'index',
  fixed: 'left',
  width: 70
};

// table column的操作列
const OPERATIONS_COLUMN = {
  title: '操作',
  dataIndex: 'operationsColumn',
  fixed: 'right',
  width: undefined,
  ellipsis: false
};

// 操作列的按钮类型
const OPERATIONS_COLUMN_BTN_TYPE = {
  normal: 'normal',
  drop: 'drop'
};

// 操作列模板
const OPERATIONS_COLUMNS_ITEM = {
  // 展示按钮还是在dropdown中展示
  type: OPERATIONS_COLUMN_BTN_TYPE.normal,
  // 获取是否不展示函数
  getHidden() {
    return false;
  },
  // 获取是否禁止操作函数
  getDisabled() {
    return false;
  },
  label: undefined,
  // 是否展示modal
  isShowModal: false,
  // modal的title
  modalTitle: '提示',
  // 获取modal content的函数；如果不传入，modal的提示内容为  确定${label}？ 为准
  getModalContent: undefined,
  // 操作回调
  confirmAsync() {
    console.error('用户未提供必输confirmAsync函数');
  },
  // 内部，不展示
  _hidden: undefined,
  // 内部，禁止操作
  _disabled: undefined
};

// 新增列的属性
const ADD_COLUMNS_PROPS = {
  typeConfig: 'typeConfig'
};
// 列的类型，对应column的typeConfig
const COLUMN_TYPE = {
  button: 'button', // 操作，比如打开弹窗
  copy: 'copy', // 赋值操作
  jump: 'jump', // a标签效果，打开新页面
  switch: 'switch', // 状态切换
  status: 'status', // 带有原型标识和文字描述的状态
  previewDownload: 'previewDownload', // 预览或下载功能
  words: 'words' // 普通文字类型
};

const STATUS_TYPE = {
  init: 'init',
  process: 'process',
  success: 'success',
  fail: 'fail'
};

const TYPE_CONFIG = {
  button: {
    type: COLUMN_TYPE.button,
    /* eslint-disable-next-line */
    getDisabled(bindValue) {
      return false;
    },
    /* eslint-disable-next-line */
    click(bindValue) {}
  },
  copy: {
    type: COLUMN_TYPE.copy,
    /* eslint-disable-next-line */
    getEnable(bindValue) {
      return true;
    }
  },
  jump: {
    type: COLUMN_TYPE.jump,
    /* eslint-disable-next-line */
    getDisabled(bindValue) {
      return false;
    },
    /* eslint-disable-next-line */
    click(bindValue) {}
  },
  switch: {
    type: COLUMN_TYPE.switch,
    /* eslint-disable-next-line */
    getChecked(bindValue) {
      return undefined;
    },
    /* eslint-disable-next-line */
    getDisabled(bindValue) {
      return false;
    },
    /* eslint-disable-next-line */
    getLeftLabel(bindValue) {
      return '关闭';
    },
    /* eslint-disable-next-line */
    getRightLabel(bindValue) {
      return '开启';
    },
    /* eslint-disable-next-line */
    getTitle(bindValue) {
      return '确定切换？';
    },
    /* eslint-disable-next-line */
    getContent(bindValue) {
      return '';
    },
    // 点击确定
    confirmAsync(bindValue) {
      console.error('未提供必填的confirmAsync函数', bindValue);
    }
  },
  status: {
    type: COLUMN_TYPE.status,
    /* eslint-disable-next-line */
    getStatus(bindValue) {
      return STATUS_TYPE.init;
    },
    init: {
      chartColor: '#d9d9d9',
      color: 'rgba(0, 0, 0, 0.88)'
    },
    process: {
      chartColor: '#1677ff',
      color: 'rgba(0, 0, 0, 0.88)'
    },
    success: {
      chartColor: '#389e0d',
      color: 'rgba(0, 0, 0, 0.88)'
    },
    fail: {
      chartColor: 'red',
      color: 'rgba(0, 0, 0, 0.88)'
    }
  },
  previewDownload: {
    type: COLUMN_TYPE.previewDownload,
    getEnablePreview: function () {
      return true;
    },
    getEnableDownload: function () {
      return true;
    },
    /* eslint-disable-next-line */
    getUrl(bindValue) {
      return '';
    }
  },
  words: {
    type: COLUMN_TYPE.words
  }
};

export {
  UNSET_SCROLL_WIDTH,
  INDEX_COLUMN,
  OPERATIONS_COLUMN,
  OPERATIONS_COLUMN_BTN_TYPE,
  OPERATIONS_COLUMNS_ITEM,
  PAGINATION,
  PAGINATION_MAP,
  MULTIPLE,
  ADD_COLUMNS_PROPS,
  COLUMN_TYPE,
  STATUS_TYPE,
  TYPE_CONFIG
};
