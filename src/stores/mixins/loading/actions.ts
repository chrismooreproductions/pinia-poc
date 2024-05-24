import { type Ref } from 'vue'
import type { Loading } from './types'

export const load = (loadingState: Ref<Loading>) => () => {
  loadingState.value.timer = 5

  const timer = setInterval(() => {
    if (loadingState.value.timer && loadingState.value.timer > 0) {
      loadingState.value.timer--
    } else {
      clearInterval(timer)
    }
  }, 1000)
}
