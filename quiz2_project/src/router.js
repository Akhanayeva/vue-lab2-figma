import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import DemoView from './views/DemoView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/demo',
    name: 'Demo',
    component: DemoView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
