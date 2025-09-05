<template>
  <div class="relative inline-block text-left">
    <!-- Dropdown label -->
    <button
      @click="open = !open"
      class="flex items-center pl-1 pr-3 py-1 bg-white rounded-full text-black hover:bg-gray-700 focus:outline-none"
    >
      <img
        src="~/assets/icons/vietnam.svg"
        alt="English"
        class="w-5 h-5 mr-2"
      />
      <span>English</span>
    </button>

    <!-- Dropdown items -->
    <ul
      v-show="open"
      class="absolute mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg py-1 z-10"
    >
      <li class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
        <img
          src="~/assets/icons/vietnam.svg"
          alt="Chinese"
          class="w-4 h-4 mr-2"
        />
        <span>Chinese</span>
      </li>
      <li class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
        <img
          src="~/assets/icons/vietnam.svg"
          alt="Khmer"
          class="w-4 h-4 mr-2"
        />
        <span>Khmer</span>
      </li>
      <li class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
        <img
          src="~/assets/icons/vietnam.svg"
          alt="Vietnam"
          class="w-4 h-4 mr-2"
        />
        <span>Vietnam</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
</script>
