<template>
  <div
    class="flex justify-center xl:justify-center lg:justify-end items-center lg:px-4"
  >
    <ul class="flex items-center lg:text-sm xl:space-x-4 lg:space-x-1">
      <li class="relative" ref="dropdowns[0].el">
        <button
          @click.stop="toggleDropdown(dropdowns[0])"
          class="flex text-black items-center py-2 px-4 lg:px-2 rounded-full focus:outline-none uppercase"
          :class="{
            'bg-gray-black text-gold': dropdowns[0].ref.value,
            'hover:bg-gray-black hover:text-gold': !dropdowns[0].ref.value,
          }"
        >
          lịch trực tiếp
        </button>

        <!-- Dropdown items -->
        <ul
          v-show="dropdowns[0].ref.value"
          class="absolute mt-2 w-40 bg-white bg-opacity-95 text-gray-800 shadow-lg py-2 z-10 px-2 space-y-2 rounded-[20px] uppercase"
        >
          <NavbarDropdown />
        </ul>
      </li>
      <li class="relative" ref="dropdowns[1].el">
        <button
          @click.stop="toggleDropdown(dropdowns[1])"
          class="flex text-black items-center py-2 px-4 lg:px-2 rounded-full focus:outline-none uppercase"
          :class="{
            'bg-gray-black text-gold': dropdowns[1].ref.value,
            'hover:bg-gray-black hover:text-gold': !dropdowns[1].ref.value,
          }"
        >
          lịch thi đấu
        </button>

        <!-- Dropdown items -->
        <ul
          v-show="dropdowns[1].ref.value"
          class="absolute mt-2 w-40 bg-white bg-opacity-95 text-gray-800 shadow-lg py-2 z-10 px-2 space-y-2 rounded-[20px] uppercase"
        >
          <NavbarDropdown />
        </ul>
      </li>
      <li class="relative" ref="dropdowns[2].el">
        <button
          @click.stop="toggleDropdown(dropdowns[2])"
          class="flex text-black items-center py-2 px-4 lg:px-2 rounded-full focus:outline-none uppercase"
          :class="{
            'bg-gray-black text-gold': dropdowns[2].ref.value,
            'hover:bg-gray-black hover:text-gold': !dropdowns[2].ref.value,
          }"
        >
          tỷ lệ kèo
        </button>

        <!-- Dropdown items -->
        <ul
          v-show="dropdowns[2].ref.value"
          class="absolute mt-2 w-40 bg-white bg-opacity-95 text-gray-800 shadow-lg py-2 z-10 px-2 space-y-2 rounded-[20px] uppercase"
        >
          <NavbarDropdown />
        </ul>
      </li>
      <li class="relative" ref="dropdowns[3].el">
        <button
          @click.stop="toggleDropdown(dropdowns[3])"
          class="flex text-black items-center py-2 px-4 rounded-full focus:outline-none uppercase"
          :class="{
            'bg-gray-black text-gold': dropdowns[3].ref.value,
            'hover:bg-gray-black hover:text-gold': !dropdowns[3].ref.value,
          }"
        >
          kết quả
        </button>

        <!-- Dropdown items -->
        <ul
          v-show="dropdowns[3].ref.value"
          class="absolute mt-2 w-40 bg-white bg-opacity-95 text-gray-800 shadow-lg py-2 z-10 px-2 space-y-2 rounded-[20px] uppercase"
        >
          <NavbarDropdown />
        </ul>
      </li>
      <li class="relative" ref="dropdowns[3].el">
        <button
          @click.stop="toggleDropdown(dropdowns[4])"
          class="flex text-black items-center py-2 px-4 rounded-full focus:outline-none uppercase"
          :class="{
            'bg-gray-black text-gold': dropdowns[4].ref.value,
            'hover:bg-gray-black hover:text-gold': !dropdowns[4].ref.value,
          }"
        >
          phòng chat
        </button>

        <!-- Dropdown items -->
        <ul
          v-show="dropdowns[4].ref.value"
          class="absolute mt-2 w-40 bg-white bg-opacity-95 text-gray-800 shadow-lg py-2 z-10 px-2 space-y-2 rounded-[20px] uppercase"
        >
          <NavbarDropdown />
        </ul>
      </li>
      <li class="relative" ref="dropdownF">
        <button
          @click.stop="toggleDropdown(dropdowns[5])"
          class="flex text-black items-center py-2 px-4 rounded-full focus:outline-none uppercase"
          :class="{
            'bg-gray-black text-gold': dropdowns[5].ref.value,
            'hover:bg-gray-black hover:text-gold': !dropdowns[5].ref.value,
          }"
        >
          tin tức
        </button>

        <!-- Dropdown items -->
        <ul
          v-show="dropdowns[5].ref.value"
          class="absolute mt-2 w-40 bg-white bg-opacity-95 text-gray-800 shadow-lg py-2 z-10 px-2 space-y-2 rounded-[20px] uppercase"
        >
          <NavbarDropdown />
        </ul>
      </li>
    </ul>
    <NavbarLogin />
  </div>
</template>
<script setup lang="ts">
interface Dropdown {
  ref: Ref<boolean>;
  el: Ref<HTMLElement | null>;
}

const dropdowns: Dropdown[] = [
  { ref: ref(false), el: ref(null) }, // A
  { ref: ref(false), el: ref(null) }, // B
  { ref: ref(false), el: ref(null) }, // C
  { ref: ref(false), el: ref(null) }, // D
  { ref: ref(false), el: ref(null) }, // E
  { ref: ref(false), el: ref(null) }, // F
];

// toggle one dropdown
const toggleDropdown = (target: Dropdown) => {
  dropdowns.forEach((d) => {
    d.ref.value = d === target ? !d.ref.value : false;
  });
};

// click outside
const handleClickOutside = (event: MouseEvent) => {
  dropdowns.forEach((d) => {
    if (d.el.value && !d.el.value.contains(event.target as Node)) {
      d.ref.value = false;
    }
  });
};

onMounted(() => {
  const listItems = document.querySelectorAll(
    "ul.flex.items-center > li.relative"
  );
  dropdowns.forEach((d, i) => {
    d.el.value = listItems[i] as HTMLElement;
  });

  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() =>
  document.removeEventListener("click", handleClickOutside)
);
</script>
