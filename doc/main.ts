import { createApp } from 'vue';
import 'uno.css';
import 'nprogress/nprogress.css';
import 'vite-plugin-doc-preview/style/style.css';
import MobjeComponents from '../package/main';
import AppComp from './app.vue';
import './css/github-markdown-css.scss';
import './css/index.scss';
import './css/doc.scss';
import router from './router';

const app = createApp(AppComp);
app.use(MobjeComponents);
app.use(router);

app.mount('#app');
