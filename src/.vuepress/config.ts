import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "凡人修码传",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
