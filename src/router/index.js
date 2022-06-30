import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sports',
    name: 'sports',
    component: () => import('../views/SportsView.vue'),
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import('../views/MoviesView.vue'),
  },
  {
    path: '/travel',
    name: 'travel',
    component: () => import('../views/TravelView.vue'),
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import('../views/TechnologyView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
