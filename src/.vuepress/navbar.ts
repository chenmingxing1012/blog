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
        icon: "pen-to-square",
        prefix: "重学数据结构与算法/",
        children: [
          { text: "00 数据结构与算法，应该这样学！", icon: "pen-to-square", link: "00 数据结构与算法，应该这样学！" },
          { text: "01 复杂度：如何衡量程序运行的效率？", icon: "pen-to-square", link: "01 复杂度：如何衡量程序运行的效率？" },
          { text: "02 数据结构：将“昂贵”的时间复杂度转换成“廉价”的空间复杂度", icon: "pen-to-square", link: "02 数据结构：将“昂贵”的时间复杂度转换成“廉价”的空间复杂度" },
          { text: "03 增删查：掌握数据处理的基本操作,以不变应万变", icon: "pen-to-square", link: "03 增删查：掌握数据处理的基本操作,以不变应万变" },
          { text: "04 如何完成线性表结构下的增删查？", icon: "pen-to-square", link: "04 如何完成线性表结构下的增删查？" }
        ],
      },
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
