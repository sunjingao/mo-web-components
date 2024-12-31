## 开发说明
### 说明  
+ 本组件库是摩捷智行有限责任公司的公共组件库  
+ 本组件库是基于ant-design-vue进行二次开发的，依赖版本为4.x  
+ 基础部分的组件会替换掉ant-design-vue的相关组件；其它组件同ant-deisgn-vue  
+ 基础部分文档中除 props 及 antd弃用属性 部分，其余ant-deisgn-vue中的属性、事件、插槽均相同
+ 业务部分的组件是根据业务总结的相关组件  


### 使用
本组件库只支持全局注入，使用如下：
+ 安装组件库：  
npm install mo-web-components --save  
+ 全局注入：  
import MobjeComponents from 'mo-web-components';  
import 'mo-web-components/dist/style.css';  
const app = createApp(App)  
app.use(MobjeComponents)
+ 暴露内容（zhCN中文配置；message、notification、Modal具有指令的内容）：  
import { zhCN, message, notification, Modal } from 'mo-web-components'


### 注意
+ props中以Async结尾的函数必须是异步的，即需要返回Promise，否则操作的时候会报错
 
