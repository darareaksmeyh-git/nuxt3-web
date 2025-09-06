<template>
  <div class="relative inline-block text-left">
    <!-- Dropdown label -->
    <button
      @click="open = !open"
      class="flex items-center pl-1 pr-3 py-1 bg-white rounded-full text-black hover:bg-gray-black hover:text-gold focus:outline-none"
    >
      <img
        src="~/assets/icons/vietnam.svg"
        alt="vietnam"
        class="w-5 h-5 mr-2"
      />
      <span class="uppercase font-semibold">tiếng việt</span>
    </button>

    <!-- Dropdown items -->
    <ul
      v-show="open"
      class="absolute mt-2 w-40 bg-white bg-opacity-95 text-gray-800 rounded-[20px] shadow-lg py-2 z-10 space-y-2 px-2"
    >
      <li
        class="flex items-center px-4 py-2 border rounded-full hover:bg-gray-black hover:text-gold cursor-pointer"
      >
        <img src="~/assets/icons/khmer.png" alt="khmer" class="w-5 h-5 mr-2" />
        <span>Khmer</span>
      </li>
      <li
        class="flex items-center px-4 py-2 border rounded-full hover:bg-gray-black hover:text-gold cursor-pointer"
      >
        <img src="~/assets/icons/en.png" alt="english" class="w-5 h-5 mr-2" />
        <span>English</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
</script>
