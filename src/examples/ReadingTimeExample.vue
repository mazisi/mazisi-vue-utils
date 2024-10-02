<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
      <!-- Display the content that will be used to calculate reading time -->
      <div ref="contentRef" class="prose max-w-none">
        <h1>Vue.js Composables</h1>
        <p>
          Vue.js provides a flexible and powerful system to create composables. A composable is a
          reusable function that encapsulates reactive state and logic. With the Composition API,
          building reusable pieces of logic is easier and more modular.
        </p>
        <p>
          This example calculates reading time based on the content provided in this element. It uses
          a specific velocity (words per minute) and a word count function to estimate the total time
          required to read the content.
        </p>
      </div>
  
      <!-- Display the computed reading time and word count -->
      <div class="mt-4">
        <p><strong>Estimated Reading Time:</strong> {{ duration }} minutes</p>
        <p><strong>Word Count:</strong> {{ wordCount }}</p>
        <p><strong>Words Per Minute:</strong> {{ velocity }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useReadingTime } from '../composables/useReadingTime';
      
      const contentRef = ref(null);
  
      // Call the useReadingTime composable, passing the options
      const { content, wordCount, velocity, duration } = useReadingTime({
        contentRef,          // Reference to the DOM element containing the content
        velocity: 180,       // Words per minute (optional)
        contentSelector: '', // Optionally use a selector if no ref
      });
  </script>
  
  <style scoped>
  /* You can style your component here */
  .prose {
    font-size: 1rem;
    line-height: 1.6;
  }
  </style>
  