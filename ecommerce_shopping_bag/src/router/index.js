import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/HomeComponent/Home.vue'
import Cart from '../components/CartComponent/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  }
  
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router