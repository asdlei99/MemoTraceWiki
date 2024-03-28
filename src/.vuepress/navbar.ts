import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "功能介绍",
    icon: "operate",
    link: "/posts/feature",
  },
  {
    text: "使用教程",
    icon: "blog",
    link: "/posts/deploy/",
  },
  // "/posts/deploy/",
  // "/posts/Features",
  {
    text: "常见问题",
    icon: "context",
    link: "/posts/error/",
  },
  {
    text: "代码仓库",
    icon: "github",
    link: "https://github.com/LC044/WeChatMsg",
  },
  {
    text: "官网",
    icon: "context",
    link: "https://memotrace.cn/",
  },
]);
