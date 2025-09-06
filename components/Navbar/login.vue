<script setup lang="ts">
import { isLoggedIn, login } from "@/composables/useAuth";
</script>

<template>
  <div class="relative inline-flex items-center min-h-[3rem] navbar-item">
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
        class="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs px-2 py-0.5 rounded-full z-10 w-max whitespace-nowrap sm:text-white xs:text-white md:text-white lg:text-black text-black"
      >
        Xin chào, NguyenVanDen
      </div>
    </transition>

    <div class="flex space-x-2">
      <!-- Before login -->
      <template v-if="!isLoggedIn">
        <button
          class="bg-white py-2 rounded-full w-28 lg:text-sm lg:w-24 uppercase"
          @click="login"
        >
          đăng ký
        </button>
        <button
          class="bg-black py-2 rounded-full text-white w-28 lg:text-sm lg:w-24 uppercase"
          @click="login"
        >
          đăng nhập
        </button>
      </template>

      <!-- After login -->
      <template v-else>
        <div
          class="text-white bg-gray-900 h-[36px] ml-2 rounded-full w-48 flex items-center justify-between"
        >
          <button
            class="flex justify-between px-1 items-center bg-white rounded-full text-black w-20 ml-1"
          >
            <img
              src="~/assets/icons/coin.svg"
              alt="coin"
              class="w-5 h-5 inline"
            />
            <span class="font-semibold">1000</span>
          </button>
          <img
            src="~/assets/icons/user-bar-header-butt.svg"
            alt="usernotify"
            class="w-6 h-6"
          />
          <img
            src="~/assets/icons/user-msg.svg"
            alt="usermsg"
            class="w-6 h-6"
          />
          <img
            src="~/assets/icons/user-date.svg"
            alt="userdate"
            class="w-5 h-6"
          />
          <NavbarUser />
        </div>
      </template>
    </div>
  </div>
</template>
