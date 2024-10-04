import DashboardBlogs from '../pages/dashboard/blog/DashboardBlogs.vue';
import CreateBlog from '../pages/dashboard/blog/CreateBlog.vue';

export default [
  {
    path: '/dashboard-blogs',
    name: 'dashboard-blogs',
    component: DashboardBlogs
  },
  {
    path: '/dashboard/create-blog',
    name: 'dashboard/create-blog',
    component: CreateBlog
  },
]