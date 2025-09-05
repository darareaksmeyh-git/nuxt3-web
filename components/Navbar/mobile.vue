<template>
  <!-- Burger button -->
  <div class="flex">
    
    <button
      @click="isOpenMenu = true"
      class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      🍔
    </button>
  </div>

  <!-- Full-screen on mobile menu -->
  <transition name="fade">
    <div
      v-if="isOpenMenu"
      class="fixed inset-0 bg-white z-50 flex flex-col"
    >
      <!-- close button -->
      <div class="flex justify-end p-4">
        <button
          @click="isOpenMenu = false"
          class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          ❌
        </button>
      </div>

      <!-- Menu items -->
      <ul class="flex flex-col text-left space-y-4 mt-8">
        <div class="flex justify-center">
    <NavbarLogin 
      :openLabel="openLabel" 
      @toggle="handleToggle" 
    />
  </div>
        <li v-for="(item, idx) in menuItems" :key="idx">
          <button
            class="w-full text-left px-6 py-3 text-lg hover:bg-gray-100 rounded"
            @click="toggleSubmenu(idx)"
          >
            {{ item.label }}
          </button>

          <!-- Sub items -->
          <ul v-show="openSubmenus[idx]" class="flex flex-col pl-6 mt-2 space-y-2">
            <li v-for="(sub, sIdx) in item.items" :key="sIdx">
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-200 rounded"
                @click="closeAll"
              >
                {{ sub }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpenMenu = ref(false)
const openLabel = ref('')
function handleToggle(label: string) {
  openLabel.value = openLabel.value === label ? '' : label
}
const openSubmenus = ref<{ [key: number]: boolean }>({})

const menuItems = [
  { label: 'Home', items: ['Web Design', 'SEO', 'Marketing'] },
  { label: 'About Us', items: ['Web Design', 'SEO', 'Marketing'] },
  { label: 'History', items: ['Web Design', 'SEO', 'Marketing'] },
  { label: 'Pricing', items: ['Web Design', 'SEO', 'Marketing'] },
  { label: 'Team', items: ['Web Design', 'SEO', 'Marketing'] },
  { label: 'Contact', items: ['Web Design', 'SEO', 'Marketing'] }
]

function toggleSubmenu(idx: number) {
  openSubmenus.value[idx] = !openSubmenus.value[idx]
}

function closeAll() {
  isOpenMenu.value = false
  openSubmenus.value = {}
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
