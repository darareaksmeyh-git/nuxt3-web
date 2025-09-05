<template>
  <div class="relative inline-block">
    <!-- Profile image button -->
    <button @click.stop="handleClick" class="w-8 h-8 rounded-full overflow-hidden border border-yellow-300">
      <img :src="user.avatar" alt="Profile" class="w-full h-full object-cover"/>
    </button>

    <!-- Dropdown menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <ul
        v-show="openLabel === 'user'"
        class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
      >
        <li class="px-4 py-2 border-b border-gray-100 flex items-center gap-2">
          <img :src="user?.avatar" alt="Profile" class="w-5 h-5 rounded-full object-cover"/>
          <div>
            <p class=" text-gray-500 text-sm font-semibold">{{ user?.name }}</p>
            <p class="text-xs text-gray-500">{{ user?.email }}</p>
          </div>
        </li>
        <li class="text-gray-500 px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Level: {{ user?.level }}
        </li>
        <li class="text-gray-500 px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
        <li class="text-gray-500 px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500" @click="logout">Logout</li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { isLoggedIn, user, logout } from '@/composables/useAuth'

const props = defineProps<{ openLabel: string }>()
const emit = defineEmits<{ (e: 'toggle', label: string): void }>()

function handleClick() {
  emit('toggle', 'user')
}
</script>