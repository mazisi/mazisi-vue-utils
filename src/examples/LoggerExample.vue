<template>
  <div>
    <h1>Vue Logger Example</h1>
    <button @click="logSuccess">Log Success</button>
    <button @click="logError">Log Error</button>
    <button @click="logBrand">Log Brand</button>
    <button @click="logDivider">Log Divider</button>
  </div>
</template>

<script setup lang="ts">
// Import the logger utility
import { logger } from '@/utils/logger';

    const logSuccess = () => {
      // Use the logger's success method
      logger.success('This is a success message!');
    }
    const logError = () => {
      // Use the logger's error method
      logger.error('This is an error message!', new Error('Something went wrong'));
    }
    const logBrand= () =>  {
      // Use the brand log method
      logger.brand('Brand Message - Custom Color');
    }
    const logDivider = () =>  {
      // Log a divider in the console
      logger.divider();
    }

</script>

<style scoped>
/* Add component-specific styles here */
</style>
