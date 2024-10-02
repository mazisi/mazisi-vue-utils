import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/Landing.vue';
import ReadingTimeExample from '../examples/ReadingTimeExample.vue';
import Resume from '../pages/Resume.vue';
import BlogList from '../pages/BlogList.vue';


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
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },

    {
        path: '/blog',
        name: 'blog',
        component: BlogList
      },

   
  ]
})

router.beforeResolve((to, from, next) => {
  next()
})

router.afterEach(() => {

})

export default router
