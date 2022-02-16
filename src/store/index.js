import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import alert from './modules/alert'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    alert
  }
})

export default store
