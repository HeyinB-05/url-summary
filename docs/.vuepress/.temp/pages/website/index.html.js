import comp from "E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/website/index.html.vue"
const data = JSON.parse("{\"path\":\"/website/\",\"title\":\"网站\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Color\",\"slug\":\"color\",\"link\":\"#color\",\"children\":[]},{\"level\":2,\"title\":\"其他\",\"slug\":\"其他\",\"link\":\"#其他\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"website/README.md\"}")
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
