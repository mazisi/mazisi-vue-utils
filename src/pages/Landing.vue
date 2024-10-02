<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
      <div class="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 class="text-4xl sm:text-5xl font-extrabold">
          Supercharge Your Vue.js Development
        </h1>
        <p class="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          A collection of powerful utilities and composables for efficient Vue.js projects.
        </p>
        <div class="mt-8">
          <a
            href="https://github.com/mazisi/mazisi-vue-utils"
            target="_blank"
            class="bg-white text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition"
          >
            Explore Utilities
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Why Choose Our Vue Composables?</h2>
        <p class="mt-4 text-lg text-gray-500">
          Our composables are designed to make your Vue.js development faster and easier.
        </p>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-gray-100 rounded-lg">
            <svg
              class="h-12 w-12 text-blue-500 mx-auto"
              fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round"
                d="M12 8v4l3 3m0 4H9m12 0h-3m0 0V9m0-3V7m0-5H9m0 4h3m3 0h3"
              />
            </svg>
            <h3 class="mt-6 text-xl font-semibold">Composable Architecture</h3>
            <p class="mt-4 text-gray-500">
              Use the power of Vue composables to reuse logic across multiple components.
            </p>
          </div>

          <div class="p-6 bg-gray-100 rounded-lg">
            <svg
              class="h-12 w-12 text-blue-500 mx-auto"
              fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round"
                d="M20 12H4m16 0h-8m0 0V4m0 8v8"
              />
            </svg>
            <h3 class="mt-6 text-xl font-semibold">Plug-and-Play Utilities</h3>
            <p class="mt-4 text-gray-500">
              Easily integrate our utilities into any Vue application without extra configuration.
            </p>
          </div>

          <div class="p-6 bg-gray-100 rounded-lg">
            <svg
              class="h-12 w-12 text-blue-500 mx-auto"
              fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round"
                d="M12 8v4l3 3m0 4H9m12 0h-3m0 0V9m0-3V7m0-5H9m0 4h3m3 0h3"
              />
            </svg>
            <h3 class="mt-6 text-xl font-semibold">Optimized for Performance</h3>
            <p class="mt-4 text-gray-500">
              Our composables are optimized for performance and help your app run faster.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Composables Showcase Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Explore Our Utilities</h2>
        <p class="mt-4 text-lg text-gray-500">Built for flexibility and ease of use.</p>
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white shadow-lg rounded-lg p-6 cursor-pointer" @click="navigateTo('/view-util')">
            <h3 class="text-xl font-semibold text-gray-900">useFetch</h3>
            <p class="mt-4 text-gray-500">A composable to handle HTTP requests with caching and error handling.</p>
          </div>

          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900">useAuth</h3>
            <p class="mt-4 text-gray-500">Simplify user authentication and state management in Vue apps.</p>
          </div>

          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900">useForm</h3>
            <p class="mt-4 text-gray-500">Easily manage form validation, input, and submissions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 bg-blue-500 text-white text-center">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-extrabold">Get Started Today</h2>
        <p class="mt-4 text-lg">
          Explore our comprehensive collection of Vue composables and utilities.
        </p>
        <a
          href="#"
          class="mt-8 inline-block bg-white text-blue-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          View Documentation
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();
const navigateTo = (path) => {
    router.push(path);
}
</script>

