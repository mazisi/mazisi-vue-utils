<script setup lang="ts">
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <Nav />
  <main>
    <RouterView /> 
    <Footer/>
  </main>
</template>
