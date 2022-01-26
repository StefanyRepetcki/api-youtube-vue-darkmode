import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    textoBuscar: null,
  },
  mutations: {
    setTextoBuscar (state, status) {
      state.textoBuscar = status
    },
  },
  getters: {
    getTextoBuscar: state => state.textoBuscar,
  },
})
