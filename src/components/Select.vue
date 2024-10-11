<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

interface Option {
  id: number;
  label: string;
}

const props = defineProps<{
  options: Option[];
  modelValue: Option | null;
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Option): void;
}>()

const isOpen = ref(false);
const searchTerm = ref('');
const selectedOption = ref<Option | null>(props.modelValue);
const dropdownRef = ref<HTMLElement | null>(null);
const searchInputRef = ref<HTMLInputElement | null>(null);

const filteredOptions = computed(() => {
  if (!searchTerm.value) return props.options;
  return props.options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});


const selectOption = (option: Option) => {
  selectedOption.value = option;
  emit('update:modelValue', option);
  isOpen.value = false;
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;

  
  if (isOpen.value && searchInputRef.value) {
    searchInputRef.value.focus();
  }
};


const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative w-full" ref="dropdownRef">
 
    <div class="flex justify-between items-center bg-gray-100 border border-gray-300 px-4 py-2 cursor-pointer rounded-md" 
     @click="toggleDropdown">
      <span>{{ selectedOption?.label || 'Select an option' }}</span>
      <span class="ml-2 transform transition-transform duration-200" :class="{ 'rotate-180': isOpen }">▼</span>
    </div>

  
    <div v-if="isOpen" class="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
    
      <input
        type="text"
        v-model="searchTerm"
        class="w-full px-4 py-2 border-b border-gray-300 focus:outline-none"
        placeholder="Search..."
        @click.stop
        ref="searchInputRef" 
      />

      <ul class="max-h-60 overflow-y-auto">
        <li
          v-for="option in filteredOptions"
          :key="option.id"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
