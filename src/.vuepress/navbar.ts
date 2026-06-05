import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/藏经阁/",
  "/悟道室/",
  {
    text: "功法阁",
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
      {
        text: "Java并发编程78讲-徐隆曦",
        link: "Java并发编程78讲-徐隆曦/",
        icon: "pen-to-square",
        activeMatch: "^/column/Java并发编程78讲-徐隆曦/$",
      },
      {
        text: "Java 性能优化实战",
        link: "Java 性能优化实战/",
        icon: "pen-to-square",
        activeMatch: "^/column/Java 性能优化实战/$",
      },
      {
        text: "白话设计模式28讲",
        link: "白话设计模式28讲/",
        icon: "pen-to-square",
        activeMatch: "^/column/白话设计模式28讲/$",
      },
      {
        text: "深入浅出Java虚拟机",
        link: "深入浅出Java虚拟机/",
        icon: "pen-to-square",
        activeMatch: "^/column/深入浅出Java虚拟机/$",
      },
      {
        text: "JVM核心技术32讲",
        link: "JVM核心技术32讲/",
        icon: "pen-to-square",
        activeMatch: "^/column/JVM核心技术32讲/$",
      },
      {
        text: "Kafka核心技术与实战",
        link: "Kafka核心技术与实战/",
        icon: "pen-to-square",
        activeMatch: "^/column/Kafka核心技术与实战/$",
      },
      {
        text: "MySQL实战45讲",
        link: "MySQL实战45讲/",
        icon: "pen-to-square",
        activeMatch: "^/column/MySQL实战45讲/$",
      },
      {
        text: "MySQL实战宝典",
        link: "MySQL实战宝典/",
        icon: "pen-to-square",
        activeMatch: "^/column/MySQL实战宝典/$",
      },
      {
        text: "Spring Security 详解与实操",
        link: "Spring Security 详解与实操/",
        icon: "pen-to-square",
        activeMatch: "^/column/Spring Security 详解与实操/$",
      },
      {
        text: "消息队列高手课",
        link: "消息队列高手课/",
        icon: "pen-to-square",
        activeMatch: "^/column/消息队列高手课/$",
      },
      {
        text: "DDD 微服务落地实战",
        link: "DDD 微服务落地实战/",
        icon: "pen-to-square",
        activeMatch: "^/column/DDD 微服务落地实战/$",
      },
      {
        text: "DDD实战课",
        link: "DDD实战课/",
        icon: "pen-to-square",
        activeMatch: "^/column/DDD实战课/$",
      },
      {
        text: "Dubbo源码解读与实战-完",
        link: "Dubbo源码解读与实战-完/",
        icon: "pen-to-square",
        activeMatch: "^/column/Dubbo源码解读与实战-完/$",
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
