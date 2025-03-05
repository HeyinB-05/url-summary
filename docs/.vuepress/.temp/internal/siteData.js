export const siteData = JSON.parse("{\"base\":\"/url-summary/\",\"lang\":\"en-US\",\"title\":\"url-summary\",\"description\":\"网址汇总\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/logo.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
