import { App, Plugin } from "vue";
import * as components from "./src/index";
// 也导出所有单个组件，支持按需引入
export * from "./src/index";

export default {
  install: (app: App) => {
    // 将 `components` 声明为一个具有 `Plugin` 类型值的对象
    const plugins = components as Record<string, Plugin>;
    for (let c in plugins) {
      app.use(plugins[c]);
    }
  },
};