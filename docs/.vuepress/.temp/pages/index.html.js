import comp from "E:/我的项目/UrlSummary/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/logo.png\",\"actions\":[{\"text\":\"开始了解→\",\"link\":\"/plugin/\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright © 2025-HeyinB_\"},\"headers\":[],\"git\":{\"updatedTime\":1741153307000,\"contributors\":[{\"name\":\"HeYinB\",\"username\":\"HeYinB\",\"email\":\"3164249018@qq.com\",\"commits\":1,\"url\":\"https://github.com/HeYinB\"}]},\"filePathRelative\":\"README.md\"}")
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
