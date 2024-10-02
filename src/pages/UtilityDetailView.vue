<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <!-- Main Content Layout -->
      <div class="flex flex-col lg:flex-row lg:space-x-6">
        
        <!-- Left Column: Main Content -->
        <div class="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <!-- Back Button -->
          <div class="mb-6">
            <RouterLink to="/utilities" class="text-blue-500 hover:underline">
              ← Back to Utilities
            </RouterLink>
          </div>
  
          <!-- Utility Header -->
          <header class="mb-8">
            <h1 class="text-4xl font-bold text-gray-900">{{ utility?.name }}</h1>
            <p class="mt-2 text-lg text-gray-600">{{ utility?.tagline }}</p>
          </header>
  
          <!-- Alert or Info Section -->
          <div class="bg-teal-100 p-4 rounded-lg mb-6 text-teal-900">
            <strong>INFO:</strong> Make sure you import the global CSS for correct styling in your project.
          </div>
  
          <!-- Overview Section -->
          <section id="overview" class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900">Overview</h2>
            <p class="mt-4 text-gray-700">{{ utility?.description }}</p>
          </section>
  
          <!-- Features Section -->
          <section id="features" class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900">Features</h2>
            <ul class="list-disc list-inside mt-4 text-gray-700">
              <li v-for="(feature, index) in utility?.features" :key="index">{{ feature }}</li>
            </ul>
          </section>
  
          <!-- Example Usage Section -->
          <section id="example" class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900">Example Usage</h2>
            <pre class="mt-4 bg-gray-100 p-4 rounded-lg text-sm text-gray-900 overflow-auto">
              <code>{{ utility?.exampleUsage }}</code>
            </pre>
          </section>
        </div>
  
        <!-- Right Column: Table of Contents -->
        <div class="lg:w-1/3 hidden lg:block">
          <div class="bg-white p-6 rounded-lg shadow-lg sticky top-10">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">On this page</h3>
            <ul class="space-y-4 text-gray-700">
              <li>
                <a href="#overview" class="hover:text-blue-500">Overview</a>
              </li>
              <li>
                <a href="#features" class="hover:text-blue-500">Features</a>
              </li>
              <li>
                <a href="#example" class="hover:text-blue-500">Example Usage</a>
              </li>
            </ul>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  interface Utility {
    name: string;
    tagline: string;
    description: string;
    features: string[];
    exampleUsage: string;
  }
  
  // List of utilities
  const utilities: Utility[] = [
    {
      name: 'useFetch',
      tagline: 'A composable to handle HTTP requests with caching and error handling.',
      description:
        'useFetch simplifies the process of making API requests in Vue components. It provides caching, error handling, and reactive data updates out of the box. With useFetch, you can easily handle asynchronous data fetching, even in complex applications.',
      features: [
        'Simple API for data fetching',
        'Automatic request caching',
        'Error and loading state handling',
        'Supports GET, POST, PUT, DELETE, etc.',
      ],
      exampleUsage: `
  import { useFetch } from '@/composables/useFetch'
  
  export default {
    setup() {
      const { data, error, isLoading } = useFetch('https://api.example.com/data')
  
      return { data, error, isLoading }
    }
  }
      `,
    },
    {
      name: 'useAuth',
      tagline: 'Simplify user authentication and state management in Vue apps.',
      description:
        'useAuth manages user authentication flows, token storage, and session state in your Vue applications. It supports OAuth, JWT, and custom authentication strategies, ensuring that your app can authenticate users seamlessly.',
      features: [
        'Token-based authentication',
        'OAuth support',
        'Session state management',
        'Automatic token refresh handling',
      ],
      exampleUsage: `
  import { useAuth } from '@/composables/useAuth'
  
  export default {
    setup() {
      const { login, logout, user } = useAuth()
  
      return { login, logout, user }
    }
  }
      `,
    },
  ];
  
  // Extract the route name dynamically
  const route = useRoute();
  const utilityName = computed(() => route.params.name as string);
  
  // Find the utility based on the route name
  const utility = computed(() =>
    utilities.find((util) => util.name?.toLowerCase() === utilityName.value?.toLowerCase())
  );
  </script>
  
  <style scoped>
  /* Add any specific styles if needed */
  </style>
  