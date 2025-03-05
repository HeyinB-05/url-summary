import comp from "E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/learn/index.html.vue"
const data = JSON.parse("{\"path\":\"/learn/\",\"title\":\"学习\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"前端\",\"slug\":\"前端\",\"link\":\"#前端\",\"children\":[]},{\"level\":2,\"title\":\"可视化\",\"slug\":\"可视化\",\"link\":\"#可视化\",\"children\":[]},{\"level\":2,\"title\":\"Node\",\"slug\":\"node\",\"link\":\"#node\",\"children\":[{\"level\":3,\"title\":\"KOA\",\"slug\":\"koa\",\"link\":\"#koa\",\"children\":[]}]},{\"level\":2,\"title\":\"SQL\",\"slug\":\"sql\",\"link\":\"#sql\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"learn/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
