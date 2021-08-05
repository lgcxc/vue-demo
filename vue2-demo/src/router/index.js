import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./../views/home.vue')
  },
]

export default new Router({
  routes,
  mode: 'history',
})
