import 'uno.css'
		import { createSSRApp } from 'vue'
import App from './App.vue'
console.log(App)
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
