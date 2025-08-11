import { ref } from 'vue';
import { cloneDeep } from 'lodash-es';

export function useAntTable() {
  const antTableComponentRef = ref(null);

  function getProps(attrs) {
    // 排除干扰项
    /* eslint-disable-next-line */
    const { style, condition, ...componentProps } = attrs;
    delete componentProps.class;

    return cloneDeep(componentProps);
  }

  return {
    antTableComponentRef,
    getProps
  };
}
