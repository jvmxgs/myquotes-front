const state = {
  token: localStorage.getItem('token') || null,
  user: localStorage.getItem('user') || null
}

const getters = {
  loggedIn (state) {
    return state.token !== null
  }
}

const mutations = {
  authSuccess (state, token) {
    state.token = token
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
  saveToken (context, token) {
    context.commit('authSuccess', token)
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
