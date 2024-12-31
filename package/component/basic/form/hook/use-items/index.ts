import { computed } from 'vue';
import { cloneDeep, lowerFirst } from 'lodash-es';
import { COMPONENTS, CUSTOM_COMPONENT_KEY, TYPE } from '../../const.ts';
import { ITEMS_ITEM, TABLE_CONDITION } from '../../structure';
import { getIsCustomComponent } from '../../util/index';
import { fixDefaultData } from '../../../../../util/check-data-type';

// 如果作为table的搜索条件，判断是否增加向下箭头
function setCondition(type, items) {
  if (type === TYPE.tableCondition) {
    if (items.length <= 2) {
      items.splice(items.length, 0, TABLE_CONDITION);
    } else {
      items.splice(2, 0, TABLE_CONDITION);
    }
  }
}

export function useItems(itemsPropsRef, typePropsRef) {
  const itemsCp = computed(() => {
    if (itemsPropsRef.value.length === 0) {
      return [];
    }

    const itemsClone = cloneDeep(itemsPropsRef.value);

    // 将config中的内容合并到配置中
    itemsClone.forEach((item, index) => {
      if (item.type === TYPE.tableCondition) {
        return;
      }

      // 入参初始化及校验
      fixDefaultData(item, ITEMS_ITEM);

      // 自定义规则赋值
      if (!getIsCustomComponent(item.componentName)) {
        // 处理form-item中的组件
        const componentConfig = cloneDeep(COMPONENTS[lowerFirst(itemsClone[index].componentName)]);
        const defaultComponentProps = componentConfig.componentProps;
        delete componentConfig['componentProps'];
        Object.assign(item, cloneDeep(componentConfig), cloneDeep(item));
        Object.assign(
          item.componentProps,
          cloneDeep(defaultComponentProps),
          cloneDeep(item.componentProps)
        );
      } else {
        // 如果用户传递了自定义的v-model绑定key的名称，则使用，否则使用默认的value作为key
        item.vModelKey = item.vModelKey || CUSTOM_COMPONENT_KEY;
      }
    });

    setCondition(typePropsRef.value, itemsClone);

    return itemsClone;
  });

  return {
    itemsCp
  };
}
