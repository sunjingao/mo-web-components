import { PAGINATION_MAP } from './const.ts';
import { EFFECT_TABLE_EVENTS } from './depend';

const EMITS = {
  ...EFFECT_TABLE_EVENTS,
  cancelMultiple: 'cancelMultiple',
  updatePaginationParams: 'update:paginationParams'
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // ant-design-vue的columns内容
  columns: {
    required: true,
    type: Array
  },
  // 展示数据
  dataSource: {
    required: true,
    type: Array
  },
  sticky: {
    required: false,
    type: [Object, undefined]
  },
  // 是否显示loading
  loading: {
    required: false,
    type: Boolean
  },
  // 操作列配置项
  operationsColumn: {
    required: false,
    type: Object,
    default() {
      return {};
    }
  },
  // 多选内容
  multiple: {
    required: false,
    type: Object,
    default() {
      return {};
    }
  },
  // 分页配置
  pagination: {
    required: false,
    type: [Object, Boolean],
    default() {
      return {};
    }
  },
  // 分页接口字段对应关系
  paginationMap: {
    required: false,
    type: Object,
    default() {
      return PAGINATION_MAP;
    }
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
