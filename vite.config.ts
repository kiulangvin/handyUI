// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite'; // 添加 DefineOptions 插件 ， 用于支持在 defineOptions 定义组件名称
import VueSetupExtend from 'vite-plugin-vue-setup-extend';


import { resolve, dirname } from 'path';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const input = resolve(__dirname, `./packages/components/index.ts`);



export default defineConfig({
    build: {
        lib: {
          entry: input,  // 你的入口文件路径
          name: 'HandyUI',  // UMD 构建模式下的全局变量名称
          fileName: (format: string) => `handy-ui.${format}.js`,  // 输出文件的命名规则
          formats: ["es", "umd", "cjs"]  // 要生成的打包格式
        },
        rollupOptions: {
          // 确保外部化处理那些你不想打包进库的依赖
          external: ['vue'],
          output: {
            // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
            globals: {
              vue: 'Vue'
            },
            // 自定义输出目录
            dir: "./dist",
          }
        }
    },
    plugins: [
        vue(),
        DefineOptions(), // 添加 DefineOptions 插件
        VueSetupExtend(), // 添加 VueSetupExtend 插件
      ],
});

