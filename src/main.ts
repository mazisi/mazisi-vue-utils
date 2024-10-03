import './index.css';
import router from './router';
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '@/firebase.js'

import { createApp } from 'vue'
import App from './App.vue';

  const app = createApp(App);
  app.use(router);
  app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()]
  })
  app.mount('#app');
