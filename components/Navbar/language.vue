<template>
    <ul>
    <NavbarDropdown
        label="English"
        :items="['Chinese', 'Khmer', 'Vietnam']"
        :open-label="openDropdown"
        @toggle="handleToggle"
      />
      </ul>
</template>
<script setup>
import { ref } from "vue";
import Dropdown from "./dropdown.vue";

const openDropdown = ref(""); // currently open dropdown

function handleToggle(label) {
  openDropdown.value = openDropdown.value === label ? "" : label;
}
</script>