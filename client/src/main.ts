import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/global.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

app.use(store).use(router).use(ElementPlus).mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
