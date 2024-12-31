import { Modal } from '@/main';

export function useOperation() {
  function handleOpeItemClick(item, bindValue) {
    if (item.isShowModal) {
      let content = item.getModalContent ? item.getModalContent(bindValue) : `确定${item.label}？`;

      Modal.confirm({
        title: item.modalTitle,
        content: content,
        onOk() {
          item.confirmAsync(bindValue).then(() => {});
        }
      });
    } else {
      item.confirmAsync(bindValue).then(() => {});
    }
  }

  return {
    handleOpeItemClick
  };
}
