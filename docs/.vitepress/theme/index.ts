import DefaultTheme from 'vitepress/theme';
import handyUI from '@handy-ui/components';
import Preview from "./preview.vue";

import "highlight.js/styles/base16/summerfruit-light.css"; // 主题
import hljsVuePlugin from "@highlightjs/vue-plugin";


export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(handyUI);
    app.component("preview", Preview); // 注册预览功能的组件
    app.use(hljsVuePlugin);
  },
};
