import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "进阶之路",
      icon: "laptop-code",
      prefix: "vue-design-patterns/",
      children: "structure",
      // link: "vue-design-patterns/",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],

  "/vue-design-patterns/": [
    {
      text: "一、前言",
      link: "preface.md",
    },
    {
      text: "二、java基础",
      collapsible: true,
      // 移除link属性，使其成为纯分组标题
      children: [
        // jvm应该指向一个具体的路径，而不是独立的侧边栏
        {
          text: "jvm",
          collapsible: true,
          // 如果jvm也是分组标题，就不要link属性；如果是页面，则添加link
          children: [
            {
              text: "类的生命周期",
              link: "basics/jvm/class-lifecycle.md",

            },
            // 可以根据需要添加更多jvm相关子菜单
          ]
        },
      ],
    },
  ],
});
