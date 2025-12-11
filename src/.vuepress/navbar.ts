import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/column/",
    children: [
      {
        text: "重学数据结构与算法-公瑾",
        link: "重学数据结构与算法/",
        icon: "pen-to-square",
        activeMatch: "^/column/重学数据结构与算法/$",
      },
      {
        text: "高并发系统设计40问-唐扬",
        link: "高并发系统设计40问/",
        icon: "pen-to-square",
        activeMatch: "^/column/高并发系统设计40问/$",
      },
      {
        text: "12步通关求职面试-杨宇堃",
        link: "12步通关求职面试-杨宇堃/",
        icon: "pen-to-square",
        activeMatch: "^/column/12步通关求职面试-杨宇堃/$",
      },

    ],
  },
  "/donate/",
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
