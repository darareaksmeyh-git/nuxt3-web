  <template>
    <li class="relative" ref="dropdownRef">
      <button
        :class="['px-4 py-2 rounded-full', isOpen ? 'bg-gray-200' : '', 'hover:bg-gray-200']"
        @click.stop="$emit('toggle', label)"
      >
        {{ label }}
      </button>
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-2"
      >
        <ul
          v-show="isOpen"
          class="absolute left-0 mt-2 w-max bg-white border border-gray-200 rounded-md shadow-lg z-50"
        >
          <li v-for="(item, index) in items" :key="index">
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
              >{{ item }}</a
            >
          </li>
        </ul>
      </transition>
    </li>
  </template>
<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from "vue";

const props = defineProps({
  label: String,
  items: Array,
  openLabel: {
    type: String,
    default: ''
  }, 
});

const emits = defineEmits(["toggle"]);

const dropdownRef = ref('');

const isOpen = computed(() => props.openLabel === props.label);

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    emits("toggle", '');
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>