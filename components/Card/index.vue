<template>
  <div class="container mx-auto p-4">
    <div
      class="flex justify-between items-center cursor-pointer mb-4"
      @click="showAll = !showAll"
    >
      <h2 class="text-2xl font-bold">Featured Products</h2>
      <span
        class="text-3xl transform transition-transform duration-300"
        :class="{ 'rotate-90': showAll }"
      >
        &gt;
      </span>
    </div>
    <Carousel
      v-if="!showAll"
      :itemsToShow="4"
      :snapAlign="'start'"
      :wrapAround="false"
      :transition="500"
      :gap="16"
      :breakpoints="breakpoints"
      class="relative"
    >
      <Slide
        v-for="item in items"
        :key="item.id"
        class="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6"
      >
        <div
          class="bg-white border-0 rounded-[20px] overflow-hidden flex flex-col h-full relative"
        >
          <a href="#">
            <NuxtImg
              class="aspect-[4/3] object-cover rounded-t-[20px]"
              :src="item.img"
              :alt="item.title"
              loading="lazy"
              placeholder
            />
          </a>
          <div>
            <div
              class="-mt-10 border-2 border-gold z-0 bg-blue-100 p-4 rounded-[20px] flex items-center justify-between h-20"
            >
              <!-- Left section (teams + title) -->
              <div class="flex flex-col">
                <span class="font-bold text-gray-900">
                  {{ item.teamA }} VS {{ item.teamB }}
                </span>
                <p>{{ item.title }}</p>
              </div>
              <!-- Hot Button -->
              <CardHot />
              <!-- Right section (buttons) -->
              <div class="flex items-center space-x-2">
                <!-- Live Button -->
                <a
                  v-if="item.live"
                  href="#"
                  class="block sm:hidden md:block text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Live
                </a>

                <!-- Notification / Mute Button -->
                <a
                  v-else-if="item.button === 'noti'"
                  href="#"
                  class="block sm:hidden md:block text-gray bg-gold hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  <img src="../assets/icons/notify.svg" alt="notify" />
                  Notify
                </a>

                <a
                  v-else-if="item.button === 'mute'"
                  href="#"
                  class="block sm:hidden md:block text-gray bg-gold hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  <img src="../assets/icons/mute.svg" alt="muted" /> Muted
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <!-- Navigation arrows -->
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div v-if="showAll" class="grid grid-cols-12 gap-4 mt-4">
      <div
        v-for="item in items"
        :key="item.id"
        class="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6"
      >
        <div
          class="bg-white border-0 rounded-[20px] overflow-hidden flex flex-col h-full relative"
        >
          <a href="#" class="rounded-t-[20px] rounded-b-[20px]">
            <NuxtImg
              class="aspect-[4/3] object-cover"
              :src="item.img"
              :alt="item.title"
              loading="lazy"
              placeholder
            />
          </a>
          <div class="rounded-b-[20px]">
            <div
              class="-mt-10 border-2 border-gold z-0 bg-blue-100 p-4 rounded-[20px] flex items-center justify-between h-20"
            >
              <!-- Left section (teams + title) -->
              <div class="flex flex-col">
                <span class="font-bold text-gray-900">
                  {{ item.teamA }} VS {{ item.teamB }}
                </span>
                <p>{{ item.title }}</p>
              </div>
              <!-- Hot Button -->
              <CardHot />
              <!-- Right section (buttons) -->
              <div class="flex items-center space-x-2">
                <!-- Live Button -->
                <a
                  v-if="item.live"
                  href="#"
                  class="block sm:hidden md:block text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Live
                </a>

                <!-- Notification / Mute Button -->
                <a
                  v-else-if="item.button === 'noti'"
                  href="#"
                  class="block sm:hidden md:block text-gray bg-gold hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  <img src="../assets/icons/notify.svg" alt="notify" />
                  Notify
                </a>

                <a
                  v-else-if="item.button === 'mute'"
                  href="#"
                  class="block sm:hidden md:block text-gray bg-gold hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  <img src="../assets/icons/mute.svg" alt="muted" /> Muted
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { CardProps } from "./types";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const showAll = ref(false);

const { data: items, error } = await useFetch<CardProps[]>("/api/routes");

const breakpoints = {
  300: { itemsToShow: 2 },
  640: { itemsToShow: 2 },
  768: { itemsToShow: 3 },
  1024: { itemsToShow: 4 },
};
</script>
<style scoped>
.rotate-90 {
  transform: rotate(90deg);
}
</style>
