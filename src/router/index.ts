import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/portfolio',
    name: 'Home',
    component: Home
  },
  { path: '/', redirect: () => {
      return '/portfolio'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
