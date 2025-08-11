export function useDownload(downloadAsync) {
  function handleDownload(file) {
    downloadAsync(file).then(() => {});
  }

  return {
    handleDownload
  };
}
