import { createRouter, createWebHistory } from 'vue-router'
import beforeEach from './beforeEach.js'

import HomeView from '../views/HomeView.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'

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
    },
    {
      path: '/product',
      name: 'Produto',
      component: Product
    }
  ]
})

router.beforeEach(beforeEach)
export default router
