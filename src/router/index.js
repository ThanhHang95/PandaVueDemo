import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateCV from '../views/CreateCV.vue'

// var baseURL = '/HangThong/vue-demo/';
var baseURL = '/';
const routes = [
  {
    path: baseURL,
    name: 'Home',
    component: Home
  },
  {
    path: baseURL + 'create-cv/',
    name: 'CreateCV',
    component: CreateCV
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/CreateCV.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
