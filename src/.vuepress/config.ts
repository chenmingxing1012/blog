import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "果然Java封神之路",
  description: "果然Java封神之路",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
