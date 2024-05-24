import { ref } from 'vue'
import { defineStore } from 'pinia'

import { incrementAge } from './mixins/age/actions'
import { setName } from './mixins/name/actions'
import type { Loading } from './mixins/loading/types'
import { loading } from './mixins/loading/factories'
import { load } from './mixins/loading/actions'

export const useUserStore = defineStore('user', () => {
  const userAge = ref(0)
  const userName = ref('')
  const userLoading = ref<Loading>(loading)

  const incrementUserAge = incrementAge(userAge)
  const setUserName = setName(userName)
  const loadUser = load(userLoading)

  return { userAge, userName, userLoading, incrementUserAge, setUserName, loadUser }
})
