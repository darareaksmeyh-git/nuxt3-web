<template>
  <div class="flex gap-x-2 lg justify-center items-center">
    <ul class="flex gap-x-2 items-center">
      <NavbarDropdown
        label="Home"
        :items="['Web Design', 'SEO', 'Marketing']"
        :open-label="openDropdown"
        @toggle="handleToggle"
      />
      <NavbarDropdown
        label="About Us"
        :items="['Web Design', 'SEO', 'Marketing']"
        :open-label="openDropdown"
        @toggle="handleToggle"
      />
      <NavbarDropdown
        label="History"
        :items="['Web Design', 'SEO', 'Marketing']"
        :open-label="openDropdown"
        @toggle="handleToggle"
      />
      <NavbarDropdown
        label="Pricing"
        :items="['Web Design', 'SEO', 'Marketing']"
        :open-label="openDropdown"
        @toggle="handleToggle"
      />
      <NavbarDropdown
        label="Team"
        :items="['Web Design', 'SEO', 'Marketing']"
        :open-label="openDropdown"
        @toggle="handleToggle"
      />
      <NavbarDropdown
        label="Contact"
        :items="['Web Design', 'SEO', 'Marketing']"
        :open-label="openDropdown"
        @toggle="handleToggle"
      />
    </ul>
    <NavbarLogin class="navbar-item" :open-label="openDropdown" @toggle="handleToggle"/>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Dropdown from "./Dropdown.vue";

const openDropdown = ref("");

function handleToggle(label) {
  openDropdown.value = openDropdown.value === label ? "" : label;
}
</script>
