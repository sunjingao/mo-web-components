import { ref } from 'vue';

const CACHED_COMPONENTS_KEY = `m-components`;
const CACHED_TABLE_COLUMNS_KEY = 'table-columns';
const CACHED_PAGE_KEY = ref(''); // oriColumns, resizeColumns

const PAGE_CONFIG = {
  oriColumns: [], // 输入的columns
  config: {
    fixedLeftColumns: [], // 不可以拖拽，可以多选
    activeColumns: [], // 可以拖拽，可以多选
    fixedRightColumns: [] // 不可以拖拽，可以多选
  }, // 拖拽及多选的columns
  shownColumns: [] // 展示的columns
};

export { CACHED_COMPONENTS_KEY, CACHED_TABLE_COLUMNS_KEY, CACHED_PAGE_KEY, PAGE_CONFIG };
