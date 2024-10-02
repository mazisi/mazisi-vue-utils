import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../components/Landing.vue';
import ReadingTimeExample from '../examples/ReadingTimeExample.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: Landing
      },

    {
      path: '/examples',
      name: 'Examples',
      component: ReadingTimeExample
    },

   
  ]
})

router.beforeResolve((to, from, next) => {
  next()
})

router.afterEach(() => {

})

export default router
