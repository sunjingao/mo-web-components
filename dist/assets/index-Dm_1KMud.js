/* empty css                                                            */import{o,c as e,a as i}from"./index-jpO2U1d9.js";const t={class:"marked-body"},s=i('<h2 id="开发说明">开发说明</h2><h3 id="说明">说明</h3><ul><li>本组件库是摩捷智行有限责任公司的公共组件库 </li><li>本组件库是基于ant-design-vue进行二次开发的，依赖版本为4.x </li><li>基础部分的组件会替换掉ant-design-vue的相关组件；其它组件同ant-deisgn-vue </li><li>基础部分文档中除 props 及 antd弃用属性 部分，其余ant-deisgn-vue中的属性、事件、插槽均相同</li><li>业务部分的组件是根据业务总结的相关组件</li></ul><h3 id="使用">使用</h3><p>本组件库只支持全局注入，使用如下：</p><ul><li>安装组件库：<br>npm install mo-web-components --save </li><li>全局注入：<br>import MobjeComponents from &#39;mo-web-components&#39;;<br>import &#39;mo-web-components/dist/style.css&#39;;<br>const app = createApp(App)<br>app.use(MobjeComponents)</li><li>暴露内容（zhCN中文配置；message、notification、Modal具有指令的内容）：<br>import { zhCN, message, notification, Modal } from &#39;mo-web-components&#39;</li></ul><h3 id="注意">注意</h3><ul><li>props中以Async结尾的函数必须是异步的，即需要返回Promise，否则操作的时候会报错</li></ul>',8),n=[s],c={__name:"index",setup(l){return(p,a)=>(o(),e("div",t,n))}};export{c as default};