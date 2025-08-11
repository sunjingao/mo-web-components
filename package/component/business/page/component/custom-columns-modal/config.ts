const EMITS = {
  change: 'change',
  updateOpen: 'update:open'
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  open: {
    required: true,
    type: Boolean
  },
  config: {
    required: true,
    type: Object
  }
};

export { EMITS, EMITS_DEC, PROPS_DES };
