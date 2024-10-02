import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/Landing.vue';
import ReadingTimeExample from '../examples/ReadingTimeExample.vue';
import Resume from '../pages/Resume.vue';
import BlogList from '../pages/BlogList.vue';
import UtilityList from '../pages/UtilityList.vue';
import UtilityDetailView from '../pages/UtilityDetailView.vue';
import ComingSoon from '../pages/ComingSoon.vue';


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
     {
      path: '/utilities',
      name: 'utilities',
      component: UtilityList
    },
     {
      path: '/view-util',
      name: 'view-util',
      component: UtilityDetailView
    },
    {
      path: '/coming-soon',
      name: 'coming-soon',
      component: ComingSoon
    },

   
  ]
})

router.beforeResolve((to, from, next) => {
  next()
})

router.afterEach(() => {

})

export default router
