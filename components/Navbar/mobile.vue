<template>
  <!-- Burger button -->
  <div class="flex">
    <button
      @click.stop="isOpenMenu = !isOpenMenu"
      class="p-2 rounded-full bg-gray-black focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      <img
        src="~/assets/icons/menu-burger.svg"
        alt="menu-burger"
        class="w-6 h-6"
      />
    </button>
  </div>

  <!-- Full-screen on mobile menu -->
  <transition name="fade">
    <div
      v-if="isOpenMenu"
      class="fixed inset-0 bg-gray-black z-50 flex flex-col overflow-y-auto"
    >
      <!-- close button -->
      <div class="flex justify-end p-4">
        <button
          @click.stop="isOpenMenu = !isOpenMenu"
          class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
            />
          </svg>
        </button>
      </div>

      <!-- Menu items -->
      <ul class="flex flex-col text-left space-y-4 mt-8">
        <div class="flex justify-center w-full">
          <NavbarLogin :openUser="openUser" />
        </div>
        <li class="text-white">
          <button
            class="w-full text-left px-6 py-3 text-lg rounded hover:text-gold uppercase"
            @click.stop="isOpenSubMenu = !isOpenSubMenu"
          >
            lịch trực tiếp
          </button>

          <!-- Sub items -->
          <ul v-show="isOpenSubMenu" class="flex flex-col pl-6 mt-2 space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center block px-4 py-2 hover:text-gold uppercase space-x-2"
                @click="closeAll"
              >
                <img
                  src="~/assets/icons/soccer-ball.svg"
                  alt="soccer-ball"
                  class="w-5 h-5"
                />
                <span>BÓNG ĐÁ</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center block px-4 py-2 hover:text-gold uppercase space-x-2"
                @click="closeAll"
              >
                <img
                  src="~/assets/icons/ani-duabi.svg"
                  alt="duabi"
                  class="w-5 h-5"
                />
                <span>Đua bi</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center block px-4 py-2 hover:text-gold uppercase space-x-2"
                @click="closeAll"
              >
                <img
                  src="~/assets/icons/basket-ball.svg"
                  alt="basket-ball"
                  class="w-5 h-5"
                />
                <span>BÓNG rổ</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center block px-4 py-2 hover:text-gold uppercase space-x-2"
                @click="closeAll"
              >
                <img
                  src="~/assets/icons/esport.svg"
                  alt="esport"
                  class="w-5 h-5"
                />
                <span>E-sports</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center block px-4 py-2 hover:text-gold uppercase space-x-2"
                @click="closeAll"
              >
                <img
                  src="~/assets/icons/casino.svg"
                  alt="casino"
                  class="w-5 h-5"
                />
                <span>Casino</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <button
            class="w-full text-white text-left px-6 py-3 text-lg rounded hover:text-gold uppercase"
          >
            lịch thi đấu
          </button>
        </li>
        <li>
          <button
            class="w-full text-white text-left px-6 py-3 text-lg rounded hover:text-gold uppercase"
          >
            tỷ lệ kèo
          </button>
        </li>
        <li>
          <button
            class="w-full text-white text-left px-6 py-3 text-lg rounded hover:text-gold uppercase"
          >
            kết quả
          </button>
        </li>
        <li>
          <button
            class="w-full text-white text-left px-6 py-3 text-lg rounded hover:text-gold uppercase"
          >
            phòng chat
          </button>
        </li>
        <li>
          <button
            class="w-full text-white text-left px-6 py-3 text-lg rounded hover:text-gold uppercase"
          >
            tin tức
          </button>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isOpenMenu = ref(false);
const openUser = ref(false);
const isOpenSubMenu = ref(false);

function closeAll() {
  isOpenMenu.value = false;
  isOpenSubMenu.value = false;
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
