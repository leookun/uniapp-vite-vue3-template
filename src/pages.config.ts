import { defineUniPages } from "vite-plugin-uni-pages";
export default defineUniPages({
  globalStyle: {},
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "index",
      },
      {
        pagePath: "pages/about/index",
        text: "about",
      },
    ],
  },
});
