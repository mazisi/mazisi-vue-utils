import './index.css';
import router from './router';
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '@/firebase.js';
import { createPinia, PiniaVuePlugin } from 'pinia';

import { createApp } from 'vue'
import App from './App.vue';

const pinia = createPinia()

  const app = createApp(App);
  app.use(router);
  app.use(pinia);
  app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()]
  })
  app.mount('#app');
