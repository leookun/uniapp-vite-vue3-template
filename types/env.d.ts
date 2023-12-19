/// <reference types="vite/client" />
/// <reference types="@vue/runtime-core" />
/// <reference types="vite-plugin-uni-pages/client" />
/// <reference types='@dcloudio/types' />
import "vue";
declare module "@vue/runtime-core" {
  type Hooks = App.AppInstance & Page.PageInstance;
  interface ComponentCustomOptions extends Hooks {}
}
