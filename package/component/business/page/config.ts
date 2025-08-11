const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // 获取数据接口
  getTableDataAsync: {
    required: true,
    type: Function
  },
  // 全部接入为ant-design-vue的内容
  columns: {
    required: true,
    type: Array
  },
  // 首次获取数据的延时函数
  delayFirstAsync: {
    required: false,
    type: Function
  },
  // 获取数据接口的其它参数
  getTableDataExtraParamsAsync: {
    required: false,
    type: Function
  },
  // 顶部切换内容
  pageTopTabs: {
    required: false,
    type: Object
  },
  // 搜索条件
  condition: {
    required: false,
    type: Object
  },
  // 功能区
  ability: {
    required: false,
    type: Object
  },
  // 位于table上方，搜索条件下方的切换，结构与topTabs相同
  tableAboveTabs: {
    required: false,
    type: Object
  },
  // 操作列配置
  operationsColumn: {
    required: false,
    type: Object
  },
  // 分页配置
  pagination: {
    required: false,
    type: Object
  },
  // 分页上传字段对应关系
  paginationMap: {
    required: false,
    type: Object
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
