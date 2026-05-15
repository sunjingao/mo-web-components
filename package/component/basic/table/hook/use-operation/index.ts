import { cloneDeep } from 'lodash-es';
import { Modal } from '@/main';

export function useOperation() {
  function handleOpeItemClick(item, bindValue) {
    const bindValueClone = cloneDeep(bindValue);
    // 前面加的内容，还有个为分页加的key，不要往原数据加东西，不太好
    delete bindValueClone.record['operationsColumn'];

    if (item.isShowModal) {
      let content = item.getModalContent
        ? item.getModalContent(bindValueClone)
        : `确定${item.label}？`;

      Modal.confirm({
        title: item.modalTitle,
        content: content,
        onOk() {
          item.confirmAsync(bindValueClone).then(() => {});
        }
      });
    } else {
      item.confirmAsync(bindValueClone).then(() => {});
    }
  }

  return {
    handleOpeItemClick
  };
}
