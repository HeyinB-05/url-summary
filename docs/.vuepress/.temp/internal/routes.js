export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/plugin/", { loader: () => import(/* webpackChunkName: "plugin_index.html" */"E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/plugin/index.html.js"), meta: {"title":"库"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
