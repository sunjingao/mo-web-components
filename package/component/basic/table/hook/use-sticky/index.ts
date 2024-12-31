function isStickyExist(sticky) {
  if (!sticky || Object.values(sticky).length === 0) {
    return false;
  }
  return true;
}

function getOverflow(dom) {
  if ([document, null].includes(dom)) {
    return null;
  }

  const overflow = getComputedStyle(dom).overflow;
  if (['scroll', 'auto'].includes(overflow)) {
    return dom;
  } else {
    return getOverflow(dom.parentNode);
  }
}

function getClosetScrollParent(dom) {
  let closetOverflowParent = null;
  if (dom) {
    closetOverflowParent = getOverflow(dom.parentNode);
  }
  return closetOverflowParent;
}

export function useSticky(stickyProps) {
  function getSticky(domRef) {
    if (isStickyExist(stickyProps.value)) {
      return stickyProps.value;
    } else {
      const closetOverflowParent = getClosetScrollParent(
        domRef && domRef.table && domRef.table.$el
      );
      if (closetOverflowParent === null) {
        return false;
      }
      return {
        getContainer: () => {
          return closetOverflowParent;
        }
      };
    }
  }

  return {
    getSticky
  };
}
