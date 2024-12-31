const EMITS = {
  updateModelValue: 'update:modelValue',
  openResizeModal: 'openResizeModal',
  fullScreen: 'fullScreen'
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: true,
    type: Object
  },
  // 功能区
  ability: {
    required: false,
    type: Object,
    default() {
      return {};
    }
  },
  // 获取参数函数
  getParamsAsync: {
    required: false,
    type: Function
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
