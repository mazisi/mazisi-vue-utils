<script setup lang="ts">
import Landing from './components/Landing.vue';
import Nav from './components/Nav.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <Nav />
  <main>
    <RouterView /> 
  </main>
</template>
