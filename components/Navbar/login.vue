<template>
  <!-- Outer wrapper: aligns with navbar items -->
  <div class="relative inline-flex items-center min-h-[3rem] navbar-item">
    <!-- Floating label: appears only after login -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isLoggedIn"
        class="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs px-2 py-0.5 rounded-full z-10 w-max whitespace-nowrap"
      >
        Welcome, {{ user?.name }}!
      </div>
    </transition>

    <!-- Buttons / Profile -->
    <div class="flex space-x-2">
      <!-- Before login -->
      <template v-if="!isLoggedIn">
        <button class="bg-white py-2 rounded-full w-24" @click="handleLogin">
          Register
        </button>
        <button
          class="bg-black py-2 rounded-full text-white w-24"
          @click="handleLogin"
        >
          Login
        </button>
      </template>

      <!-- After login -->
      <template v-else>
        <div
          class="text-white bg-gray-900 py-2 rounded-full w-48 flex items-center justify-center space-x-2"
        >
          <button
          class="bg-white rounded-full text-black w-20 ml-1"
        >
          Level 5
        </button>
        <h1>a</h1>
        <h1>b</h1>
        <h1>c</h1>
        <NavbarUser :open-label="openLabel" @toggle="$emit('toggle', $event)" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isLoggedIn, login, user } from '@/composables/useAuth'
import NavbarUser from './user.vue'

// This function is called when user clicks login
function handleLogin() {
  login({
    name: 'John Doe',
    email: 'john@example.com',
    level: 5,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHcZPvy01X61yORcPE1zIvf7xnqkxS0-b8g&s'
  })
}
const props = defineProps<{ openLabel: string }>()
const emit = defineEmits<{ (e: 'toggle', label: string): void }>();

</script>