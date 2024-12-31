// JSON.stringify格式化字符串时，函数无法解析。从localStorage中获取时需要将columns的函数重新赋值
export function addCallback(pageConfig, columnsProps) {
  pageConfig.shownColumns.forEach((item) => {
    const itemProp = columnsProps.find((itemProp) => itemProp.dataIndex === item.dataIndex);
    // 增加typeConfig函数
    if (item && item.typeConfig) {
      item.typeConfig = itemProp.typeConfig;
    }
  });
}
