import { EFFECT_COMPONENT_EVENTS } from './depend.ts';

const EMITS = {
  ...EFFECT_COMPONENT_EVENTS
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // 展示内容的url
  url: {
    required: true,
    type: String
  },
  enablePreview: {
    required: false,
    type: Boolean,
    default() {
      return true;
    }
  },
  enableDownload: {
    required: false,
    type: Boolean,
    default() {
      return true;
    }
  },
  // 下载接口
  downloadAsync: {
    required: false,
    type: Function
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
