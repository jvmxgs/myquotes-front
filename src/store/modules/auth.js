const state = {
  token: JSON.parse(localStorage.getItem('token')),
  user: JSON.parse(localStorage.getItem('user'))
}

const getters = {
  loggedIn (state) {
    return state.token !== null
  },
  user (state) {
    return state.user
  }
}

const mutations = {
  authSuccess (state, payload) {
    console.log(payload, 'payload')
    state.token = payload.token
    state.user = payload.user
    state.loggedIn = true
  },
  destroyToken (state) {
    state.token = null
    state.user = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}

const actions = {
  saveUserData (context, payload) {
    context.commit('authSuccess', payload)
  },
  destroyToken (context) {
    context.commit('destroyToken')
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
