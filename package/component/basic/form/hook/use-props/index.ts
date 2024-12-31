import { cloneDeep, lowerFirst } from 'lodash-es';
import {
  GET_FORM_PROPS,
  EFFECT_FORM_PROPS,
  FORM_ITEM_PROPS,
  get_EFFECT_FORM_ITEM_PROPS,
  FORM_ITEM_COMPONENT_PROPS,
  EFFECT_FORM_ITEM_COMPONENT_PROPS
} from '../../depend';
import { COMPONENTS } from '../../const';
import { getIsCustomComponent } from '../../util/index';
export function useProps() {
  function getFormProps(attrs, layout) {
    // 排除干扰项
    /* eslint-disable-next-line */
    let { style, ...componentProps } = attrs;
    delete componentProps.class;
    for (const propName of Object.values(EFFECT_FORM_PROPS)) {
      delete componentProps[propName];
    }

    return Object.assign(
      cloneDeep(componentProps),
      cloneDeep(GET_FORM_PROPS(layout)),
      cloneDeep(componentProps)
    );
  }

  function getFormItemProps(attrs) {
    // 排除干扰项
    /* eslint-disable-next-line */
    const componentProps = cloneDeep(attrs)
    for (const propName of Object.values(get_EFFECT_FORM_ITEM_PROPS(attrs))) {
      delete componentProps[propName];
    }

    return Object.assign(
      cloneDeep(componentProps),
      cloneDeep(FORM_ITEM_PROPS),
      cloneDeep(componentProps)
    );
  }

  function getFormItemComponentProps(item) {
    // 排除干扰项
    /* eslint-disable-next-line */
    let componentProps = item.componentProps;
    for (const propName of Object.values(EFFECT_FORM_ITEM_COMPONENT_PROPS)) {
      delete componentProps[propName];
    }
    if (getIsCustomComponent(item.componentName)) {
      return Object.assign(
        componentProps,
        cloneDeep(FORM_ITEM_COMPONENT_PROPS),
        cloneDeep(componentProps)
      );
    } else {
      const SET_COM_PROPS = COMPONENTS[lowerFirst(item.componentName)].componentProps;

      return Object.assign(
        componentProps,
        cloneDeep(FORM_ITEM_COMPONENT_PROPS),
        cloneDeep(SET_COM_PROPS),
        cloneDeep(componentProps)
      );
    }
  }

  return {
    getFormProps,
    getFormItemProps,
    getFormItemComponentProps
  };
}
