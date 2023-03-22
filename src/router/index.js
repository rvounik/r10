import { createRouter, createWebHashHistory } from "vue-router";

// lazy loading:
const About = () => import('../views/About/About.vue')
const Games = () => import('../views/Games/Games.vue')
const Consoles = () => import('../views/Consoles/Consoles.vue')
const Error = () => import('./../views/Error.vue')

const routes = [
  {
    path: "/",
    redirect: { path: "/about" },
  },
  {
    path: "/about",
    name: 'About',
    component: About,
  },
  {
    path: '/games',
    name: 'games',
    component: Games,
  },
  {
    path: '/consoles',
    name: 'consoles',
    component: Consoles,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: Error
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
