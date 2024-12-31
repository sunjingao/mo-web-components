import { DATA_TYPE } from '../const/data-type';

function getDataType(val) {
  if (typeof val === 'number') {
    return DATA_TYPE.number;
  } else if (typeof val === 'boolean') {
    return DATA_TYPE.boolean;
  } else if (typeof val === 'string') {
    return DATA_TYPE.string;
  } else if (val === null) {
    return DATA_TYPE.null;
  } else if (val === undefined) {
    return DATA_TYPE.undefined;
  } else if (Array.isArray(val)) {
    return DATA_TYPE.array;
  } else {
    return DATA_TYPE.object;
  }
}

function getIsFieldExist(obj, name) {
  return obj.hasOwnProperty(name);
}

function getIsTypeValid(val, typeArray) {
  return typeArray.some((typeItem) => getDataType(val) === typeItem);
}

// props初始化
export function fixDefaultData(oriData, rule) {
  for (const [fieldName, fieldRule] of Object.entries(rule)) {
    if (fieldRule.required && !getIsFieldExist(oriData, fieldName)) {
      throw new Error(`${fieldName}字段为必填项！`);
    }
    if (
      getIsFieldExist(oriData, fieldName) &&
      !getIsTypeValid(oriData[fieldName], fieldRule.type)
    ) {
      throw new Error(`${fieldName}字段类型错误！支持${fieldRule.type}`);
    }
    if (!getIsFieldExist(oriData, fieldName) && fieldRule.default) {
      oriData[fieldName] = fieldRule.default();
    }
  }
}
