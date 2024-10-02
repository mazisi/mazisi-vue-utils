import './index.css';

import { createMemoryHistory, createRouter } from 'vue-router';

import useReadingTimeExample from './examples/readingTimeExample.vue'

import { createApp } from 'vue'
import App from './App.vue';

const routes = [
    { path: '/examples', component: useReadingTimeExample },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  const app = createApp(App);
  app.use(router);
  app.mount('#app');
