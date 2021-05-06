import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSidebarActive: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebarActive = !state.isSidebarActive
    },

  },
  actions: {
  },
  modules: {
  }
})
