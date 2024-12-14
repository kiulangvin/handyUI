import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import handyUI from '@handy-ui/components';


const app = createApp(App);

app.use(handyUI); // 如果组件库是通过插件导出

app.mount('#app');