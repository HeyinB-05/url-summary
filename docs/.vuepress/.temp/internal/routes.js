export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/plugin/", { loader: () => import(/* webpackChunkName: "plugin_index.html" */"E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/plugin/index.html.js"), meta: {"title":"推荐库"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
