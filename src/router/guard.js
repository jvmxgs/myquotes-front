import router from './index'
import store from '../store'

router.beforeEach((to, from, next) => {
  let authenticated = store.getters['auth/loggedIn']

  if (to.name === 'Logout') {
    store.dispatch('auth/destroyToken')
    authenticated = false
    return next('/login')
  }

  if (to.meta.requiresAuth && !authenticated) {
    return next('/login')
  }

  if (to.name === 'Login' && authenticated) {
    return next('/')
  }

  return next()
})
