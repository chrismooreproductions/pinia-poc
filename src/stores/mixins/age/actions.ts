import type { Ref } from 'vue'

export const incrementAge = (initialAge: Ref<number>) => () => {
  return initialAge.value++
}
