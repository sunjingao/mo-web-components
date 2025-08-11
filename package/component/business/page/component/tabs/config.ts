const EMITS = {
  change: 'change',
  updateModelValue: 'update:modelValue'
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: true,
    type: [String, Number]
  },
  tabsConfig: {
    required: false,
    type: Object
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
