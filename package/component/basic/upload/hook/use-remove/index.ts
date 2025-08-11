export function useRemove(fileListVM, deleteFileAsync) {
  function handleRemove(file) {
    deleteFileAsync(file).then(() => {
      const foundIndex = fileListVM.value.findIndex((item) => item === file);
      fileListVM.value.splice(foundIndex, 1);
    });
    // 阻止直接删除
    return Promise.reject();
  }

  return {
    handleRemove
  };
}
