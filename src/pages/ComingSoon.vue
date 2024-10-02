<template>
    <div class="relative bg-cover bg-center h-screen" style="background-image: url('https://avatars.githubusercontent.com/u/56942052?v=4')">
      <!-- Overlay to add a slight tint to the background -->
      <div class="absolute inset-0 bg-gradient-to-b from-blue-800 to-purple-800 opacity-80"></div>
  
      <!-- Main Content -->
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        
        <!-- Logo or Title -->
        <div class="mb-4">
          <h1 class="text-4xl font-bold mb-2">Your Logo or Title</h1>
        </div>
  
        <!-- Heading -->
        <h2 class="text-3xl font-semibold mb-4">Coming Soon</h2>
        <p class="text-lg mb-8">We’re working hard to launch our website. Stay tuned!</p>
  
        <!-- Countdown Timer -->
        <div class="flex space-x-4 mb-8 text-2xl font-semibold">
          <div class="bg-white text-blue-900 p-4 rounded-lg shadow-md">
            <p>{{ days }}</p>
            <span class="block mt-1 text-sm text-gray-500">Days</span>
          </div>
          <div class="bg-white text-blue-900 p-4 rounded-lg shadow-md">
            <p>{{ hours }}</p>
            <span class="block mt-1 text-sm text-gray-500">Hours</span>
          </div>
          <div class="bg-white text-blue-900 p-4 rounded-lg shadow-md">
            <p>{{ minutes }}</p>
            <span class="block mt-1 text-sm text-gray-500">Minutes</span>
          </div>
          <div class="bg-white text-blue-900 p-4 rounded-lg shadow-md">
            <p>{{ seconds }}</p>
            <span class="block mt-1 text-sm text-gray-500">Seconds</span>
          </div>
        </div>
  
        <!-- Email Signup -->
        <div class="relative">
          <input 
            type="email" 
            class="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your email"
          />
          <button 
            class="absolute right-0 top-0 mt-1.5 mr-2 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.8 10.7L12 21.9 2.2 10.7c-.3-.3-.2-.9.2-1.2h6.5V1c0-.4.3-.8.8-.8h4.6c.4 0 .8.4.8.8v8.5h6.5c.5.3.6.9.2 1.2z"/>
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Countdown Timer Logic
  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  
  const targetDate = new Date("2024-12-31T23:59:59").getTime();
  
  onMounted(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
    };
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
  </script>
  
  <style scoped>
  /* Add any specific styles to tweak the design */
  </style>
  