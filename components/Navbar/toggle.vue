<template>
  <div class="flex items-center">
    <button
      @click="toggleTheme"
      :class="isDark ? 'bg-gray-800' : 'bg-yellow-300'"
      class="relative w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300"
    >
      <!-- Toggle circle -->
      <span
        :class="isDark ? 'translate-x-6' : 'translate-x-0'"
        class="absolute w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300"
      >
        <!-- Icon inside circle -->
        <span class="text-xs">
          {{ isDark ? '🌙' : '🌞' }}
        </span>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
}
</script>
