export const useUserStore = defineStore('user', () => {
  const user = ref<{ id: string; email: string; name: string | null } | null>(null)
  const isAuthenticated = computed(() => !!user.value)
  const userName = computed(() => user.value?.name || user.value?.email || 'Guest')

  function setUser(data: { id: string; email: string; name: string | null }) {
    user.value = data
  }

  function clearUser() {
    user.value = null
  }

  return { user, isAuthenticated, userName, setUser, clearUser }
})
