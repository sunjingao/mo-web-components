// 内部组件部分
import { CONFIG as inputConfig } from './components-config/input/const';
import { CONFIG as selectConfig } from './components-config/select/const';
import { CONFIG as cascaderConfig } from './components-config/cascader/const';
import { CONFIG as checkboxConfig } from './components-config/checkbox/const';
import { CONFIG as checkboxGroupConfig } from './components-config/checkbox-group/const';
import { CONFIG as datePickerConfig } from './components-config/date-picker/const';
import { CONFIG as rangePickerConfig } from './components-config/range-picker/const';
import { CONFIG as inputNumberConfig } from './components-config/input-number/const';
import { CONFIG as inputPasswordConfig } from './components-config/input-password/const';
import { CONFIG as inputSearchConfig } from './components-config/input-search/const';
import { CONFIG as textareaConfig } from './components-config/textarea/const';
import { CONFIG as mentionsConfig } from './components-config/mentions/const';
import { CONFIG as radioGroupConfig } from './components-config/radio-group/const';
import { CONFIG as rateConfig } from './components-config/rate/const';
import { CONFIG as sliderConfig } from './components-config/slider/const';
import { CONFIG as switchConfig } from './components-config/switch/const';
import { CONFIG as timePickerConfig } from './components-config/time-picker/const';
import { CONFIG as timeRangePickerConfig } from './components-config/time-range-picker/const';
import { CONFIG as treeSelectConfig } from './components-config/tree-select/const';
import { CONFIG as autoCompleteConfig } from './components-config/auto-complete/const';
import { CONFIG as upload } from './components-config/upload/const';
import { CONFIG as previewDownload } from './components-config/preview-download/const';
// form组件部分
import { CONFIG as formItemDes } from './components-config/form-item-des/const';

// 供外部使用的 components
const COMPONENTS = {
  mInput: inputConfig,
  mSelect: selectConfig,
  mCascader: cascaderConfig,
  mCheckbox: checkboxConfig,
  mCheckboxGroup: checkboxGroupConfig,
  mDatePicker: datePickerConfig,
  mRangePicker: rangePickerConfig,
  mInputNumber: inputNumberConfig,
  mInputPassword: inputPasswordConfig,
  mInputSearch: inputSearchConfig,
  textarea: textareaConfig,
  mMentions: mentionsConfig,
  mRadioGroup: radioGroupConfig,
  mRate: rateConfig,
  mSlider: sliderConfig,
  mSwitch: switchConfig,
  mTimePicker: timePickerConfig,
  mTimeRangePicker: timeRangePickerConfig,
  mTreeSelect: treeSelectConfig,
  mAutoComplete: autoCompleteConfig,
  mUpload: upload,
  mPreviewDownload: previewDownload,
  // form 组件部分
  mFormItemDes: formItemDes
};

// form表单类型
const TYPE = {
  tableCondition: 'tableCondition',
  normal: 'normal'
};

// 布局，仅有以下两种布局
const LAYOUT = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

// 自定义组件的默认key值
const CUSTOM_COMPONENT_KEY = 'value';

export { COMPONENTS, TYPE, LAYOUT, CUSTOM_COMPONENT_KEY };
