import { blogPlugin } from "@vuepress/plugin-blog";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "en-US",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "url-summary",
  description: "网址汇总",
  theme: defaultTheme({
    logo: "/logo.png",
    navbar: [
      "/",
      {
        text: "库",
        link: "/plugin/",
      },
      {
        text: "网站",
        link: "/website/",
      },
      {
        text: "学习",
        link: "/learn/",
      },
    ],
    sidebarDepth: 3,
    lastUpdatedText: "上次更新",
    repo: "HeyinB-05/url-summary",
    editLinkText: '在 GitHub 上编辑此页',
    contributorsText: '贡献者',
    editLinks: true,
    docsDir: "docs",
  }),
  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
      isSearchable: (page) => page.path !== "/",
    }),
  ],
  base: "/url-summary/",
  ga: 'UA-109340118-1',
  bundler: viteBundler(),
});
