<template>
  <div>
    <h1>Vue Logger Example</h1>
    <button @click="logSuccess">Log Success</button>
    <button @click="logError">Log Error</button>
    <button @click="logBrand">Log Brand</button>
    <button @click="logDivider">Log Divider</button>
  </div>
</template>

<script>
// Import the logger utility
import { logger } from '@/utils/logger'; // Adjust the path to where your logger file is

export default {
  name: 'LoggerComponent',
  methods: {
    logSuccess() {
      // Use the logger's success method
      logger.success('This is a success message!');
    },
    logError() {
      // Use the logger's error method
      logger.error('This is an error message!', new Error('Something went wrong'));
    },
    logBrand() {
      // Use the brand log method
      logger.brand('Brand Message - Custom Color');
    },
    logDivider() {
      // Log a divider in the console
      logger.divider();
    },
  },
  mounted() {
    // Log messages on component mount
    logger.log('Component has been mounted!');
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
