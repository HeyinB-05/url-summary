import { CodeTabs } from "E:/我的项目/UrlSummary/node_modules/.pnpm/@vuepress+plugin-markdown-t_91acbdb682034424d36a02410d1dade4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/我的项目/UrlSummary/node_modules/.pnpm/@vuepress+plugin-markdown-t_91acbdb682034424d36a02410d1dade4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/我的项目/UrlSummary/node_modules/.pnpm/@vuepress+plugin-markdown-t_91acbdb682034424d36a02410d1dade4/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
