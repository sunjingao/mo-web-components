import { EFFECT_COMPONENT_EVENTS } from './depend.ts';

const EMITS = {
  ...EFFECT_COMPONENT_EVENTS,
  updateFileList: 'update:fileList'
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  fileList: {
    required: true,
    type: Array,
    default() {
      return [];
    }
  },
  // 上传文件类型1：图片，2：文档 3：视频 4：压缩包
  fileType: {
    required: false,
    type: Array,
    default() {
      return ['1', '2', '3', '4'];
    }
  },
  // 自定义文件类型
  customFileType: {
    required: false,
    type: Array
  },
  // 支持上传的最大数量
  maxCount: {
    required: false,
    type: Number,
    default: 100
  },
  // 上传回调事件
  uploadAsync: {
    required: true,
    type: Function
  },
  // 删除回调事件
  deleteFileAsync: {
    required: false,
    type: Function
  },
  // 下载函数
  downloadAsync: {
    required: false,
    type: Function
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
