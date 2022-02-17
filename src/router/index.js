import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from './public'
import userRoutes from './user'

Vue.use(VueRouter)

const routes = [...publicRoutes, ...userRoutes]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
