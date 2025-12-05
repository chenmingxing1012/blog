import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  "/vue-design-patterns/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/column/",
    children: [
      {
        text: "重学数据结构与算法",
        link: "重学数据结构与算法/",
        icon: "pen-to-square",
        activeMatch: "^/column/重学数据结构与算法/$",
      },
      {
        text: "高并发系统设计40问",
        link: "高并发系统设计40问/",
        icon: "pen-to-square",
        activeMatch: "^/column/高并发系统设计40问/$",
      },

    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
