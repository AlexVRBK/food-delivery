import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import('../pages/AboutPage.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/OrderPage.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('../pages/DeliveryPage.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../pages/MenuPage.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
