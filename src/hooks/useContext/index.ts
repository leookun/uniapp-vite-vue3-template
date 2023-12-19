import type { ProvideId } from '@/hooks/useApplication'
import { computed, inject } from 'vue'
type Context = ProvideId
export const useContext = (context: Context) => {
  if (/^\$/.test(context)) {
    return computed(inject<any>(context))
  }
  return inject<any>(context)
}
