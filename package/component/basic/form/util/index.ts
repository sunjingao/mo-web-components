import { COMPONENTS } from '../const';

export function getIsCustomComponent(componentName) {
  return !COMPONENTS[componentName];
}
