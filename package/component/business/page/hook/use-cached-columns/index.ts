import { ref, watch } from 'vue';
import { cloneDeep } from 'lodash-es';
import { addCallback } from '../../special/cached-columns';
import {
  CACHED_COMPONENTS_KEY,
  CACHED_TABLE_COLUMNS_KEY,
  CACHED_PAGE_KEY,
  PAGE_CONFIG
} from './const';

// 设置cache key，为当前url地址
function setCachedPageKey() {
  CACHED_PAGE_KEY.value = location.href;
}

function getShownColumns(fixedLeftColumns, activeColumns, fixedRightColumns) {
  const shownColumns = [
    ...fixedLeftColumns
      .filter((item) => item.checked)
      .map((item) => {
        const newItem = { ...item };
        delete newItem['checked'];
        return newItem;
      }),
    ...activeColumns
      .filter((item) => item.checked)
      .map((item) => {
        const newItem = { ...item };
        delete newItem['checked'];
        return newItem;
      }),
    ...fixedRightColumns
      .filter((item) => item.checked)
      .map((item) => {
        const newItem = { ...item };
        delete newItem['checked'];
        return newItem;
      })
  ];
  return shownColumns;
}

function getInitPageConfig(columns) {
  const fixedLeftIndex = columns.findLastIndex((columnItem) =>
    ['left', true].includes(columnItem.fixed)
  ); // 左侧固定的最后一个index
  let fixedRightIndex = columns.findIndex((columnItem) => ['right'].includes(columnItem.fixed)); // 右侧固定的第一个index
  fixedRightIndex = fixedRightIndex === -1 ? columns.length : fixedRightIndex;
  const resizeColumns = {
    oriColumns: [], // 输入的columns
    config: {
      fixedLeftColumns: columns.slice(0, fixedLeftIndex + 1), // 不可以拖拽，可以多选
      activeColumns: columns.slice(fixedLeftIndex + 1, fixedRightIndex), // 可以拖拽，可以多选
      fixedRightColumns: columns.slice(fixedRightIndex) // 不可以拖拽，可以多选
    }, // 拖拽及多选的columns
    shownColumns: [] // 展示的columns
  };
  resizeColumns.config.fixedLeftColumns.forEach((item) => (item.checked = true));
  resizeColumns.config.activeColumns.forEach((item) => (item.checked = true));
  resizeColumns.config.fixedRightColumns.forEach((item) => (item.checked = true));
  resizeColumns.oriColumns = columns;
  resizeColumns.shownColumns = getShownColumns(
    resizeColumns.config.fixedLeftColumns,
    resizeColumns.config.activeColumns,
    resizeColumns.config.fixedRightColumns
  );

  return resizeColumns;
}

function resizeCacheColumns(pageConfigRef, columnsProps) {
  pageConfigRef.value.shownColumns = getShownColumns(
    pageConfigRef.value.config.fixedLeftColumns,
    pageConfigRef.value.config.activeColumns,
    pageConfigRef.value.config.fixedRightColumns
  );

  addCallback(pageConfigRef.value, columnsProps);

  const cachedComponents = localStorage.getItem(CACHED_COMPONENTS_KEY);

  if (!cachedComponents) {
    localStorage.setItem(
      CACHED_COMPONENTS_KEY,
      JSON.stringify({
        [CACHED_TABLE_COLUMNS_KEY]: {
          [CACHED_PAGE_KEY.value]: pageConfigRef.value
        }
      })
    );
  } else {
    const cachedComponents = JSON.parse(localStorage.getItem(CACHED_COMPONENTS_KEY));
    if (!cachedComponents[CACHED_TABLE_COLUMNS_KEY]) {
      cachedComponents[CACHED_TABLE_COLUMNS_KEY] = {};
    }
    if (!cachedComponents[CACHED_TABLE_COLUMNS_KEY][CACHED_PAGE_KEY.value]) {
      cachedComponents[CACHED_TABLE_COLUMNS_KEY][CACHED_PAGE_KEY.value] = {};
    } else {
      cachedComponents[CACHED_TABLE_COLUMNS_KEY][CACHED_PAGE_KEY.value] = pageConfigRef.value;
    }
    localStorage.setItem(CACHED_COMPONENTS_KEY, JSON.stringify(cachedComponents));
  }
}

export function useCachedColumns(columnsPropsRef) {
  setCachedPageKey();

  const isShowCustomColumnsModalRef = ref(); // 是否展示 modal
  // 存储的内容
  const pageConfigRef = ref(); // 使用的pageConfig

  function initPageConfig() {
    const isShowCustomColumnsModal = false; // 是否展示 modal
    // 存储的内容
    let pageConfig = cloneDeep(PAGE_CONFIG); // 使用的pageConfig

    const initialPageConfig = getInitPageConfig(columnsPropsRef.value); // 未使用缓存的pageConfig

    let cachedComponents = localStorage.getItem(CACHED_COMPONENTS_KEY);

    if (!cachedComponents) {
      pageConfig = initialPageConfig;
    } else {
      cachedComponents = JSON.parse(cachedComponents);
      const cachedTable = cachedComponents[CACHED_TABLE_COLUMNS_KEY];
      if (!cachedTable) {
        pageConfig = initialPageConfig;
      } else {
        const cachedPageConfig = cachedTable[CACHED_PAGE_KEY.value];
        if (!cachedPageConfig) {
          pageConfig = initialPageConfig;
        } else {
          if (
            JSON.stringify(cachedPageConfig.oriColumns) !== JSON.stringify(columnsPropsRef.value)
          ) {
            pageConfig = initialPageConfig;
          } else {
            pageConfig = cachedPageConfig;
            // 增加columns中的回调函数
            addCallback(pageConfig, columnsPropsRef.value);
          }
        }
      }
    }

    return {
      isShowCustomColumnsModal: isShowCustomColumnsModal,
      pageConfig: pageConfig
    };
  }

  function handleCustomColumnsChange(config) {
    pageConfigRef.value.config = config;
    resizeCacheColumns(pageConfigRef, columnsPropsRef.value);
  }

  watch(
    columnsPropsRef,
    () => {
      const { isShowCustomColumnsModal, pageConfig } = initPageConfig();
      isShowCustomColumnsModalRef.value = isShowCustomColumnsModal;
      pageConfigRef.value = pageConfig;
    },
    {
      immediate: true
    }
  );

  return {
    pageConfigRef,
    isShowCustomColumnsModalRef,
    handleCustomColumnsChange
  };
}
