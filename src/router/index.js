import { createRouter, createWebHistory } from 'vue-router'
import beforeEach from './beforeEach.js'

import HomeView from '../views/HomeView.vue'
import Products from '../views/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'Produtos',
      component: Products
    }
  ]
})

router.beforeEach(beforeEach)
export default router
