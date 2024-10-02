<script setup lang="ts">
import Nav from './components/Nav.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <Nav />
  <main>
    <RouterView /> 
  </main>
</template>
