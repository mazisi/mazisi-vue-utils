<template>
    <header class="bg-white shadow-lg">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="#">
              <Braces :size="48" color="#2dd4bf"/>
            </a>
          </div>
  
          <!-- Desktop Navigation Links -->
          <div class="hidden md:flex space-x-8">
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
           </RouterLink >
           <RouterLink to="/blog" class="text-gray-900 hover:text-blue-500 font-medium cursor-pointer">
              Articles
           </RouterLink >
           <RouterLink to="/resume" class="text-gray-900 hover:text-blue-500 font-medium cursor-pointer">
              My Resume
           </RouterLink >
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
          <a href="#features" class="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100">
            Features
          </a>
          <a href="#utilities" class="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100">
            Utilities
          </a>
          <a href="#documentation" class="block px-3 py-2 rounded-md text-gray-900 hover:bg-gray-100">
            Documentation
          </a>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
    import { Braces } from 'lucide-vue-next';
    const isMobileMenuOpen =  false;
 

  </script>
  