export function useResize(columnsPropsRef, setScrollWidth, emit, EMITS) {
  function handleResizeColumn(width, record) {
    const resizeIndex = columnsPropsRef.value.findIndex(
      (item) => item.dataIndex === record.dataIndex
    );
    columnsPropsRef.value[resizeIndex].width = width;
    emit(EMITS.resizeColumn, width, record);

    setScrollWidth();
  }

  return {
    handleResizeColumn
  };
}
