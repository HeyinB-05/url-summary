import comp from "E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/plugin/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugin/\",\"title\":\"库\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"前端常用\",\"slug\":\"前端常用\",\"link\":\"#前端常用\",\"children\":[]},{\"level\":2,\"title\":\"Vue 基础\",\"slug\":\"vue-基础\",\"link\":\"#vue-基础\",\"children\":[]},{\"level\":2,\"title\":\"Excel\",\"slug\":\"excel\",\"link\":\"#excel\",\"children\":[]},{\"level\":2,\"title\":\"可视化\",\"slug\":\"可视化\",\"link\":\"#可视化\",\"children\":[]},{\"level\":2,\"title\":\"Node\",\"slug\":\"node\",\"link\":\"#node\",\"children\":[]}],\"git\":{\"updatedTime\":1741153307000,\"contributors\":[{\"name\":\"HeYinB\",\"username\":\"HeYinB\",\"email\":\"3164249018@qq.com\",\"commits\":1,\"url\":\"https://github.com/HeYinB\"}]},\"filePathRelative\":\"plugin/README.md\"}")
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
