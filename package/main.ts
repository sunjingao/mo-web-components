import 'uno.css';
import './css/index.scss';
import './css/custom.scss';
import {
  COMPONENTS as ANT_COMPONENTS,
  zhCN,
  notification,
  message,
  Modal
} from './component/ant/main';
import { COMPONENTS as BASIC_COMPONENTS } from './component/basic/main';
import { COMPONENTS as BUSINESS_COMPONENTS } from './component/business/main';

const ALL_COMPONENTS = Object.assign({}, ANT_COMPONENTS, BASIC_COMPONENTS, BUSINESS_COMPONENTS);

function install(app) {
  // 全部组件注册
  for (const [componentName, component] of Object.entries(ALL_COMPONENTS)) {
    app.component(`m${componentName}`, component);
  }
}

// 导出全局安装指令
export default install;

// 导出中文配置
export { zhCN };

// 导出带有全局配置或者指令的内容
export { message, notification, Modal };
