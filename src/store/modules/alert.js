const state = {
  messages: []
}

const actions = {
  success ({ commit }, message) {
    commit('success', message)
  },
  error ({ commit }, message) {
    commit('error', message)
  },
  clear ({ commit }) {
    commit('clear')
  }
}

const mutations = {
  success (state, message) {
    state.messages.push({
      type: 'success',
      message: message,
      icon: 'mdi-check-circle'
    })
  },
  error (state, message) {
    state.messages.push({
      type: 'error',
      message: message,
      icon: 'mdi-alert-circle'
    })
  },
  clear (state) {
    state.messages = []
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
