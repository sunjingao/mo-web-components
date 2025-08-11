import { cloneDeep } from 'lodash-es';
import { COMPONENT_PROPS, EFFECT_COMPONENT_PROPS } from '../../depend';
export function useProps() {
  function getProps(attrs) {
    // 排除干扰项
    /* eslint-disable-next-line */
    const { style, ...componentProps } = attrs;
    delete componentProps.class;
    for (const propName of Object.values(EFFECT_COMPONENT_PROPS)) {
      delete componentProps[propName];
    }

    return Object.assign(cloneDeep(componentProps), cloneDeep(COMPONENT_PROPS), cloneDeep(componentProps));
  }

  return {
    getProps
  };
}
