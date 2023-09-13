import { createStore } from 'vuex'

export default createStore({
  state: {
    selected: 'landing'
  },
  mutations: {
    changeSelection(state, payload) {
      return (state.selected = payload)
    }
  },
  actions: {},
  getters: {
    getSelection(state) {
      return state.selected
    }
  },
  modules: {}
})
