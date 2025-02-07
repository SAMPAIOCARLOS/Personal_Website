import { createRouter, createWebHistory } from 'vue-router';

import Details from '../views/Details.vue'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: "/detalhes/:title",
      name: 'Details',
      component: Details,
      props: true
    },
    {
      path: "/contact/:title",
      name: 'Contact',
      component: Contact,
      props: true
    },
];

const router = createRouter({
  history: createWebHistory(), // Aqui estamos usando createWebHistory
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash };
    }
    return { top: 0 };
  }
});

export default router;