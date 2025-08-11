const EMITS = {
  click: 'click'
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  type: {
    required: false,
    type: String,
    default: 'primary'
  },
  disabled: {
    required: false,
    type: Boolean,
    default: false
  },
  href: {
    required: false,
    type: String,
    default: ''
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
