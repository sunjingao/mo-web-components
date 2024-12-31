import { DATA_TYPE } from '../../../const/data-type';
import { TYPE } from './const';

// 当作为搜索条件时，需要展示下拉箭头。在item中的结构
const TABLE_CONDITION = {
  type: TYPE.tableCondition
};

// items中每项的内容
const ITEMS_ITEM = {
  // 组件名称
  componentName: {
    required: true,
    // string为函数名称，object为引用的组件实例，function为render函数
    type: [DATA_TYPE.string, DATA_TYPE.object, DATA_TYPE.function]
  },
  // 上传所需要的字段
  uploadKey: {
    required: true,
    type: [DATA_TYPE.string]
  },
  // v-model绑定的内容，默认为value，checkbox为checked，具体内容看注释
  vModelKey: {
    required: false,
    type: [DATA_TYPE.number, DATA_TYPE.string]
  },
  // 默认值
  defaultValue: {
    required: false,
    type: [DATA_TYPE.number, DATA_TYPE.boolean, DATA_TYPE.string, DATA_TYPE.array, DATA_TYPE.object]
  },
  // 表单是否不展示
  hidden: {
    required: false,
    type: [DATA_TYPE.boolean],
    default() {
      return false;
    }
  },
  // 当type类型为 tableCondition 并且 query为true，触发query事件
  enableQuery: {
    required: false,
    type: [DATA_TYPE.boolean],
    default() {
      return false;
    }
  },
  // ant-design-vue form-item属性
  formItemProps: {
    required: false,
    type: [DATA_TYPE.object],
    default() {
      return {};
    }
  },
  // ant-design vue 组件内容属性
  componentProps: {
    required: false,
    type: [DATA_TYPE.object],
    default() {
      return {};
    }
  }
};

export { ITEMS_ITEM, TABLE_CONDITION };
