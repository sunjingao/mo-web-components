import { computed } from 'vue';
export function useGridCls(columnsNumberPropsRef) {
  const gridClassCp = computed(() => {
    if (columnsNumberPropsRef.value === 5) {
      return {
        display: 'grid',
        'grid-template-columns':
          'calc((100% - 8 * 4px)/5) calc((100% - 8 * 4px)/5) calc((100% - 8 * 4px)/5) calc((100% - 8 * 3px)/4) calc((100% - 8 * 3px)/4)',
        'grid-column-gap': '8px'
      };
    } else if (columnsNumberPropsRef.value === 4) {
      return {
        display: 'grid',
        'grid-template-columns':
          'calc((100% - 8 * 3px)/4) calc((100% - 8 * 3px)/4) calc((100% - 8 * 3px)/4) calc((100% - 8 * 3px)/4)',
        'grid-column-gap': '8px'
      };
    } else if (columnsNumberPropsRef.value === 3) {
      return {
        display: 'grid',
        'grid-template-columns':
          'calc((100% - 8 * 2px)/3) calc((100% - 8 * 2px)/3) calc((100% - 8 * 2px)/3)',
        'grid-column-gap': '8px'
      };
    } else if (columnsNumberPropsRef.value === 2) {
      return {
        display: 'grid',
        'grid-template-columns': 'calc((100% - 8px)/2) calc((100% - 8px)/2)',
        'grid-column-gap': '8px'
      };
    } else if (columnsNumberPropsRef.value === 1) {
      return {
        display: 'grid',
        'grid-template-columns': '100%'
      };
    }
  });

  return {
    gridClassCp
  };
}
