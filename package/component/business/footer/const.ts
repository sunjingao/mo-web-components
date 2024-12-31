import { MODE } from '@/component/basic/button/const.ts';

const ITEMS_ITEM = {
  // 获取是否为disabled
  disabled: false,
  // 获取是否为hidden
  hidden: false,
  // 点击回调
  async confirmAsync() {
    console.error('未提供必输confirmAsync函数');
  },
  // 文字描述
  label: '',
  // 按钮类型
  mode: MODE.normal,
  // 是否为loading状态
  loading: false
};

export { ITEMS_ITEM };
