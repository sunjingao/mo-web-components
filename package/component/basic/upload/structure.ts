import { DATA_TYPE } from '../../../const/data-type';

const CUSTOM_FILE_TYPE_ITEM = {
  maxSize: {
    required: true,
    type: [DATA_TYPE.number]
  },
  errorTip: {
    required: true,
    type: [DATA_TYPE.string]
  },
  content: {
    required: true,
    type: [DATA_TYPE.array]
  }
};

export { CUSTOM_FILE_TYPE_ITEM };
