export const SEARCH_INDEX = [
  {
    "title": "学习",
    "headers": [
      {
        "level": 2,
        "title": "前端",
        "slug": "前端",
        "link": "#前端",
        "children": [
          {
            "level": 3,
            "title": "封装",
            "slug": "封装",
            "link": "#封装",
            "children": []
          }
        ]
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
        "children": [
          {
            "level": 3,
            "title": "KOA",
            "slug": "koa",
            "link": "#koa",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "SQL",
        "slug": "sql",
        "link": "#sql",
        "children": []
      },
      {
        "level": 2,
        "title": "CSS",
        "slug": "css",
        "link": "#css",
        "children": []
      },
      {
        "level": 2,
        "title": "视频",
        "slug": "视频",
        "link": "#视频",
        "children": [
          {
            "level": 3,
            "title": "音频",
            "slug": "音频",
            "link": "#音频",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "批注",
        "slug": "批注",
        "link": "#批注",
        "children": []
      },
      {
        "level": 2,
        "title": "一些 ui 后台参考",
        "slug": "一些-ui-后台参考",
        "link": "#一些-ui-后台参考",
        "children": []
      },
      {
        "level": 2,
        "title": "WebSocket",
        "slug": "websocket",
        "link": "#websocket",
        "children": []
      }
    ],
    "path": "/learn/",
    "pathLocale": "/",
    "extraFields": []
  },
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
        "title": "工具库",
        "slug": "工具库",
        "link": "#工具库",
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
      },
      {
        "level": 2,
        "title": "动画",
        "slug": "动画",
        "link": "#动画",
        "children": []
      },
      {
        "level": 2,
        "title": "CSS",
        "slug": "css",
        "link": "#css",
        "children": []
      },
      {
        "level": 2,
        "title": "一些大佬",
        "slug": "一些大佬",
        "link": "#一些大佬",
        "children": []
      }
    ],
    "path": "/plugin/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "网站",
    "headers": [
      {
        "level": 2,
        "title": "Color",
        "slug": "color",
        "link": "#color",
        "children": []
      },
      {
        "level": 2,
        "title": "UI",
        "slug": "ui",
        "link": "#ui",
        "children": []
      },
      {
        "level": 2,
        "title": "其他",
        "slug": "其他",
        "link": "#其他",
        "children": []
      }
    ],
    "path": "/website/",
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
