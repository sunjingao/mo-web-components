import { searchContent } from '@/component/basic/select/util';

// 组件配置，用户可以自定义
const COMPONENT_PROPS = {
  showSearch: true, // 当当选的时候，需要配置此项才能搜索。多选自带搜索
  // 不自定义搜索函数，是按照value进行搜索的
  filterOption: function (input: string, option: any) {
    return searchContent(input, option);
  }
};

// 受到影响的组件参数，用户不能自定义
const EFFECT_COMPONENT_PROPS = {};

// 受到影响的插槽，不能直接通过attrs使用
const EFFECT_COMPONENT_SLOTS = {};

// 受到影响的事件，并非直接使用v-bind
const EFFECT_COMPONENT_EVENTS = {};

export { COMPONENT_PROPS, EFFECT_COMPONENT_PROPS, EFFECT_COMPONENT_SLOTS, EFFECT_COMPONENT_EVENTS };
