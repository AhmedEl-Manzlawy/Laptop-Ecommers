import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false },
    },{
      path:'/all-product',
      name:'all-product',
      component : ()=>import('../views/AllProducts.vue'),
      meta: { requiresAuth: false },
    },{
      path:'/products/:category',
      name:'products-category',
      component:()=> import('@/views/ProductPage.vue'),
      meta: { requiresAuth: false },
    },{
      path:'/products-details/:id',
      name:'products-details',
      component:()=> import('@/views/ProductDetails.vue'),
      meta: { requiresAuth: false },
    },{
      path:'/products/product-cart',
      name:'products-cart',
      component:()=> import('@/views/CartPage.vue'),
      meta: { requiresAuth: true },
    },{
      path:'/checkout',
      name:'checkout',
      component:()=> import('@/views/CheckOut.vue'),
      meta: { requiresAuth: true },
    },
    {
      path:'/login',
      name:'login-page',
      component:()=> import('@/components/Login/LoginPage.vue')
    },{
      path:'/:pathMatch(.*)*',
      name:'not-found',
      component:()=> import('@/components/NotFound/NotFound.vue')
    }
  ],scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('user')

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && isLoggedIn) {
    next('/home')
  } else {
    next()
  }
})

export default router

