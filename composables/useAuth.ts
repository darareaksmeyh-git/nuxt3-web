import { ref } from "vue";

export const isLoggedIn = ref(false);

export function login() {
  isLoggedIn.value = true;
}

export function logout() {
  isLoggedIn.value = false;
}
