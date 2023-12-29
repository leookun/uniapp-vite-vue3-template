import { defineUniPages } from 'vite-plugin-uni-pages'
export default defineUniPages({
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#ffffff',
    backgroundColor: '#f1f1f1'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: 'index'
      },
      {
        pagePath: 'pages/more/index',
        text: 'more'
      },
      {
        pagePath: 'pages/about/index',
        text: 'about'
      }
    ]
  }
})
