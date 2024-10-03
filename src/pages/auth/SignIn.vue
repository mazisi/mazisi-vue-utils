<template>
    <div class="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Welcome Back</h2>
        <form @submit.prevent="handleLogin">
          <!-- Email Input -->
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
            <input
              v-model="email"
              id="email"
              type="email"
              required
              class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
  
          <!-- Password Input -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700" for="password">Password</label>
            <input
              v-model="password"
              id="password"
              type="password"
              required
              class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
  
          <!-- Error Message -->
          <div v-if="errorMessage" class="mb-4 text-red-500 text-sm">
            {{ errorMessage }}
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
  
        <!-- Forgot Password Link -->
        <div class="text-center mt-4">
          <a href="#" class="text-sm text-blue-600 hover:underline">Forgot your password?</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  

  const email = ref<string>('');
  const password = ref<string>('');
  const errorMessage = ref<string>('');
  
  const router = useRouter();
  
  const handleLogin = () => {
    if (!email.value || !password.value) {
      errorMessage.value = 'Please enter both email and password.';
      return;
    }
  
    if (email.value === 'test@example.com' && password.value === 'password123') {
      router.push('/dashboard');
    } else {
      errorMessage.value = 'Invalid email or password.';
    }
  };
  </script>
  
  <style scoped>
  /* Custom styles (if needed) */
  </style>
  