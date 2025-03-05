export const SEARCH_INDEX = [
  {
    "title": "库",
    "headers": [
      {
        "level": 2,
        "title": "前端常用",
        "slug": "前端常用",
        "link": "#前端常用",
        "children": []
      },
      {
        "level": 2,
        "title": "Vue 基础",
        "slug": "vue-基础",
        "link": "#vue-基础",
        "children": []
      },
      {
        "level": 2,
        "title": "Excel",
        "slug": "excel",
        "link": "#excel",
        "children": []
      },
      {
        "level": 2,
        "title": "可视化",
        "slug": "可视化",
        "link": "#可视化",
        "children": []
      },
      {
        "level": 2,
        "title": "Node",
        "slug": "node",
        "link": "#node",
        "children": []
      }
    ],
    "path": "/plugin/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
