const CONFIG = {
  componentName: 'mInput',
  vModelKey: 'value',
  defaultValue: '',
  // 作为page的条件时的配置
  condition: {
    enableEnterQuery: true // 默认开启回车搜索功能
  },
  componentProps: {
    allowClear: true
  }
};

export { CONFIG };
