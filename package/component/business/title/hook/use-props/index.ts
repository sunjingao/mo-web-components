export function useProps() {
  function getProps(attrs) {
    // 排除干扰项
    /* eslint-disable-next-line */
    const { style, ...componentProps } = attrs;
    delete componentProps.class;

    return componentProps;
  }

  return {
    getProps
  };
}
