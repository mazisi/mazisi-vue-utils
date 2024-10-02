<template>
    <div class="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-3">
      <header class="text-center mb-8">
        <h2 class="text-3xl font-extrabold text-gray-900">Explore Our Utilities</h2>
        <p class="mt-4 text-lg text-gray-500">Built for flexibility and ease of use.</p>
      </header>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Loop through utilities and display cards -->
        <div
          v-for="(utility, index) in utilities"
          :key="index"
          class="p-6 bg-gray-100 rounded-lg shadow-md"
        >
          <h3 class="text-xl font-bold text-gray-900">{{ utility.name }}</h3>
          <p class="mt-2 text-gray-600">{{ utility.description }}</p>
          <RouterLink
            :to="'/utilities/' + utility.name.toLowerCase()"
            class="inline-block mt-4 text-blue-500 hover:underline"
          >
            Learn more →
          </RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
        const utilities = [
          {
            name: 'useFetch',
            description: 'A composable to handle HTTP requests with caching and error handling.',
          },
          {
            name: 'useAuth',
            description: 'Simplify user authentication and state management in Vue apps.',
          },
          {
            name: 'useForm',
            description: 'Easily manage form validation, input, and submissions.',
          },
        ];
  </script>
  
  <style scoped>
  /* Add any specific styles if needed */
  </style>
  