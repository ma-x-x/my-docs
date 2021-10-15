import path from "path";
import type { ViteBundlerOptions } from "@vuepress/bundler-vite";
import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "zh-CN",
  // 在使用 vuepress-vite 包的时候，你可以忽略这个字段，因为 Vite 是默认打包工具
  bundler: "@vuepress/bundler-vite",
  // Vite 打包工具的配置项
  bundlerConfig: {
    // 查看下方
    //接收 Vite 的所有配置项。 [https://cn.vitejs.dev/config/]
    viteOptions: {
      server: {
        port: 9527,
        open: true,
      },
    },
    // 接收 @vitejs/plugin-vue 的所有配置项。[https://cn.vitejs.dev/plugins/#vitejsplugin-vue]
    vuePluginOptions: {},
  },
  alias: {
    "@/images": path.resolve(__dirname, "./public/images"),
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
    "/en": {
      lang: "english",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
  },
});
