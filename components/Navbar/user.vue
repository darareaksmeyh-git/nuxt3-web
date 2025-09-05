<template>
  <div class="relative inline-block">
    <!-- Profile image button -->
    <button
      @click.stop="openUser = !openUser"
      class="w-[50px] h-[50px] overflow-hidden"
    >
      <img :src="avatarIcon" alt="Profile" class="w-full h-full object-cover" />
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
        v-show="openUser"
        class="absolute right-0 top-[50px] w-[260px] bg-white bg-opacity-95 border border-gray-200 space-y-2 rounded-[20px] py-2 px-2 shadow-lg z-50 text-black uppercase"
      >
        <li
          class="flex justify-start py-2 items-center px-4 rounded-full border hover:bg-gray-100 cursor-pointer"
        >
          <img
            src="~/assets/icons/icon-user.svg"
            alt="user-icon"
            class="w-5 h-5 mr-2"
          />
          <span>Trung tâm Tài khoản</span>
        </li>
        <li
          class="flex justify-start py-2 items-center px-4 rounded-full border hover:bg-gray-100 cursor-pointer"
        >
          <img
            src="~/assets/icons/icon-home.svg"
            alt="home-icon"
            class="w-5 h-5 mr-2"
          />
          <span>Trang cá nhân</span>
        </li>
        <li
          class="flex justify-start py-2 items-center px-4 rounded-full border hover:bg-gray-100 cursor-pointer"
        >
          <img
            src="~/assets/icons/icon-target.svg"
            alt="target-icon"
            class="w-5 h-5 mr-2"
          />
          <span>Nhiệm vụ</span>
        </li>
        <li
          class="flex justify-start py-2 items-center px-4 rounded-full border hover:bg-gray-100 cursor-pointer"
        >
          <img
            src="~/assets/icons/icon-wallet.svg"
            alt="home-wallet"
            class="w-5 h-5 mr-2"
          />
          <span>Ví của bạn</span>
        </li>
        <li
          class="flex justify-start py-2 items-center px-4 rounded-full border hover:bg-gray-100 cursor-pointer"
        >
          <img
            src="~/assets/icons/icon-graph.svg"
            alt="graph-icon"
            class="w-5 h-5 mr-2"
          />
          <span>lịch sử giao dịch</span>
        </li>
        <li
          class="flex justify-start py-2 items-center px-4 rounded-full border hover:bg-gray-100 cursor-pointer"
          @click="logout"
        >
          <img
            src="~/assets/icons/icon-logout.svg"
            alt="logout-icon"
            class="w-5 h-5 mr-2"
          />
          <span>Thoát tài khoản</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import avatarIcon from "~/assets/icons/user-avatar.svg";
import { logout } from "@/composables/useAuth";

const openUser = ref(false);
</script>
