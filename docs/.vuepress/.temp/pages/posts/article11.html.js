import comp from "E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/posts/article11.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article11.html\",\"title\":\"Article 11\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-11T00:00:00.000Z\",\"category\":[\"CategoryA\",\"CategoryB\"],\"tag\":[\"tag C\",\"tag D\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"posts/article11.md\"}")
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
