<script setup lang="ts">
import { ref } from 'vue';
import { Braces } from 'lucide-vue-next'; // Import Lucide icons
import { useAuthStore } from '@/stores/auth'; // Pinia Auth Store

const isMobileMenuOpen = ref(false);
const isDropdownOpen = ref(false); // Control the dropdown visibility

const authStore = useAuthStore();
const { getUser } = authStore;

// Toggle dropdown on click
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>
  <header class="bg-white shadow-lg">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-6">
        <!-- Logo with Error Message -->
        <div class="flex flex-col items-center">
          <!-- Logo -->
          <a href="#">
            <Braces :size="48" color="#2dd4bf" />
          </a>
        </div>
  
        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex space-x-8 items-center">
          <RouterLink to="/" class="text-gray-900 hover:text-blue-500 font-medium">
            Home
          </RouterLink>
          <a href="#utilities" class="text-gray-900 hover:text-blue-500 font-medium">
            Utilities
          </a>
          <a href="#documentation" class="text-gray-900 hover:text-blue-500 font-medium">
            Documentation
          </a>
          <RouterLink to="/examples" class="text-gray-900 hover:text-blue-500 font-medium cursor-pointer">
            Examples
          </RouterLink>
          <RouterLink to="/blog" class="text-gray-900 hover:text-blue-500 font-medium cursor-pointer">
            Articles
          </RouterLink>
          <RouterLink to="/resume" class="text-gray-900 hover:text-blue-500 font-medium cursor-pointer">
            My Resume
          </RouterLink>

          <!-- Dashboard Menu with Dropdown -->
          <div class="relative group">
            <!-- Dashboard Menu Item -->
            <RouterLink
              to="/dashboard"
              class="text-gray-900 hover:text-blue-500 font-medium cursor-pointer"
            >
              Dashboard
            </RouterLink>

            <!-- Dropdown Menu -->
            <div
              class="absolute hidden group-hover:block top-8 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10"
            >
              <RouterLink
                to="/dashboard/blogs"
                class="block px-4 py-2 text-gray-900 hover:bg-gray-100"
              >
                Blog
              </RouterLink>
              <RouterLink
                to="/dashboard/users"
                class="block px-4 py-2 text-gray-900 hover:bg-gray-100"
              >
                Users
              </RouterLink>
              
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            type="button"
            class="text-gray-900 hover:text-blue-500 focus:outline-none"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="h-6 w-6"
              fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-if="isMobileMenuOpen"
              class="h-6 w-6"
              fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-50">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink to="/" class="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100">
          Home
        </RouterLink>
        <RouterLink to="/examples" class="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100">
          Examples
        </RouterLink>
        <RouterLink to="/blog" class="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100">
          Articles
        </RouterLink>
        <RouterLink to="/resume" class="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100">
          Resume
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.group:hover .group-hover\:block {
  display: block;
}
</style>
