export const themeData = JSON.parse("{\"logo\":\"/logo.png\",\"navbar\":[\"/\",{\"text\":\"库\",\"link\":\"/plugin/\"},{\"text\":\"网站\",\"link\":\"/website/\"},{\"text\":\"学习\",\"link\":\"/learn/\"}],\"sidebarDepth\":3,\"lastUpdatedText\":\"上次更新\",\"repo\":\"HeyinB-05/url-summary\",\"editLinkText\":\"在 GitHub 上编辑此页\",\"contributorsText\":\"贡献者\",\"editLinks\":true,\"docsDir\":\"docs\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"editLink\":true,\"lastUpdated\":true,\"contributors\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
