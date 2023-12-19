import pkg from '@/../package.json'
import { pages } from 'virtual:uni-pages'
export default () => {
  provide('$APP_INFO', () => pkg)
  provide('$pages', () => pages)
  provide('$state', () =>
    reactive({
      count: 1
    })
  )
}
export type ProvideId = '$APP_INFO' | '$pages' | '$state'
