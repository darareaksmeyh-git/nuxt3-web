
import { ref } from 'vue'

export const isLoggedIn = ref(false)

export const user = ref<{ name: string; email: string; level: number; avatar: string } | null>(null)

export function login(userInfo: { name: string; email: string; level: number; avatar: string }) {
  user.value = userInfo
  isLoggedIn.value = true
}

export function logout() {
  user.value = null
  isLoggedIn.value = false
}