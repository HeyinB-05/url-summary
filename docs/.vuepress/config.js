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
    ],
    sidebarDepth: 2
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
  base:'/url-summary/',
  bundler: viteBundler(),
});
