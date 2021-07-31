import Vue from 'vue'
import VueRouter from 'vue-router'

  const Home = ()=> import('../views/home/home.vue')
  const cart = ()=> import  ('../views/cart/cart.vue')
  const category = ()=> import  ('../views/category/category.vue')
  const profile = ()=> import  ('../views/profile/profile.vue')
  const Detail = () => import ('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home',
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/cart',
    component:cart,
  },
  {
    path:'/category',
    component:category,
  },
  {
    path:'/profile',
    component:profile,
  },
  {
    path:'/detail/:iid',
    component:Detail,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
