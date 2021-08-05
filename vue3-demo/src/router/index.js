import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./../views/home.vue')
  },
]
export default createRouter({
  history: createWebHashHistory(),
  routes
});
