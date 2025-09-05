<template>
  <div class="flex items-center">
    <button
      @click="toggleTheme"
      :class="isDark ? 'bg-yellow-300' : 'bg-gray-800'"
      class="border-2 border-gold relative w-20 h-10 rounded-full flex items-center px-1 transition-colors duration-300"
    >
      <!-- Toggle circle -->
      <span
        :class="isDark ? 'translate-x-10' : 'translate-x-0'"
        class="border-2 border-gold absolute w-8 h-8 bg-gray-700 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300"
      >
        <!-- Icon inside circle -->
        <span class="text-xs">
          <img
            v-if="isDark"
            src="~/assets/icons/light.svg"
            alt="Moon"
            class="w-8 h-8 inline"
          />
          <img
            v-else
            src="~/assets/icons/light.svg"
            alt="Moon"
            class="w-8 h-8 inline"
          />
        </span>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isDark = ref(false);

function toggleTheme() {
  isDark.value = !isDark.value;
}
</script>
