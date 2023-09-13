import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../views/TheHome.vue'

const routes = [
  {
    path: '/portfolio',
    name: 'Home',
    component: TheHome
  },
  {
    path: '/',
    redirect: () => {
      return '/portfolio'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
