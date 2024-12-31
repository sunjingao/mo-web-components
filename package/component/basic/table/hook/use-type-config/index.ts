import { Modal } from '@/main';
import { message } from '@/component/ant/main';

export function useTypeConfig() {
  function handleColumnBtnDisabled(bindValue) {
    return bindValue.column.typeConfig.getDisabled(bindValue);
  }

  function handleColumnBtnClick(bindValue) {
    bindValue.column.typeConfig.click(bindValue);
  }

  function handleColumnCopy(text) {
    if (!text) {
      return;
    }
    const navigator = window.navigator;

    !!navigator && !!navigator.clipboard && navigator.clipboard.writeText(text);

    message.success('已复制');
  }

  function handleColumnJumpDisabled(bindValue) {
    return bindValue.column.typeConfig.getDisabled(bindValue);
  }

  function handleColumnJumpClick(bindValue) {
    bindValue.column.typeConfig.click(bindValue);
  }

  function handleColumnSwitchChecked(bindValue) {
    return bindValue.column.typeConfig.getChecked(bindValue);
  }

  function handleColumnSwitchDisabled(bindValue) {
    return bindValue.column.typeConfig.getDisabled(bindValue);
  }

  async function handleColumnSwitchClick(bindValue) {
    const title = bindValue.column.typeConfig.getTitle(bindValue);
    const content = bindValue.column.typeConfig.getContent(bindValue);
    Modal.confirm({
      title: title,
      content: content,
      onOk() {
        bindValue.column.typeConfig.confirmAsync(bindValue).then(() => {});
      }
    });
  }

  return {
    handleColumnBtnDisabled,
    handleColumnBtnClick,
    handleColumnCopy,
    handleColumnJumpDisabled,
    handleColumnJumpClick,
    handleColumnSwitchChecked,
    handleColumnSwitchDisabled,
    handleColumnSwitchClick
  };
}
