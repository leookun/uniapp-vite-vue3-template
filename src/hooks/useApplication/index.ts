import pkg from '@/../package.json'
import { pages } from 'virtual:uni-pages'
export const useApplication = (...nexts) => {
  provide('$APP_INFO', () => pkg)
  provide('$pages', () => pages)
  provide('$state', () =>
    reactive({
      count: 1
    })
  )
  nexts.forEach(next=>next?.())
}
export const onRouteEach = (fn) => {
  const hooks: (keyof typeof uni)[] = [
    'switchTab',
    'navigateTo',
    'navigateBack',
    'reLaunch',
    'redirectTo'
  ]
  return () =>
    hooks.forEach((hook) => {
      uni.addInterceptor(hook, {
        invoke: fn
      })
    })
}
export type ProvideId = '$APP_INFO' | '$pages' | '$state'
