import type { Ref } from 'vue'

export const setName = (initialName: Ref<string>) => (newName: string) => {
  initialName.value = newName
}
