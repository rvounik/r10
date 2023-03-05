import { createRouter, createWebHashHistory } from "vue-router";

// lazy loading:
const Home = () => import('../views/Home.vue')
const Games = () => import('../views/Games/Games.vue')
const Game = () => import('../views/Games/Game.vue')
const Consoles = () => import('../views/Consoles/Consoles.vue')
const Console = () => import('../views/Consoles/Console.vue')
const Error = () => import('./../views/Error.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/games',
    name: 'games',
    component: Games,
  },
  {
    path: '/game/:id',
    component: Game
  },
  {
    path: '/consoles',
    name: 'consoles',
    component: Consoles,
  },
  {
    path: '/console/:id',
    component: Console
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
