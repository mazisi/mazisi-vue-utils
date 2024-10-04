<template>
  <div>
    <h1>Vue Logger Example</h1>
    <button class="bg-green-500 text-white py-2 px-4 rounded" @click="logSuccess">Log Success</button>
    <button class="bg-red-500 text-white py-2 px-4 rounded" @click="logError">Log Error</button>
    <button class="bg-blue-500 text-white py-2 px-4 rounded" @click="logBrand">Log Brand</button>
    <button class="bg-gray-500 text-white py-2 px-4 rounded" @click="logDivider">Log Divider</button>
  </div>
</template>

<script setup lang="ts">
import { logger } from '@/utils/logger';
    const logSuccess = () => {
      logger.success('This is a success message!');
    }
    const logError = () => {
      logger.error('This is an error message!', new Error('Something went wrong'));
    }
    const logBrand= () =>  {
      logger.brand('Brand Message - Custom Color');
    }
    const logDivider = () =>  {
      logger.divider();
    }


/* throttle example usage
     import { throttle} from '../../../utils/throttle';

 function onResize() {
   console.log('Resize event fired');
 }

 const throttledResize = throttle(onResize, 3000);

 window.addEventListener('resize', throttledResize);

**/
</script>