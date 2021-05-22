import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex)

type RootState = {
  isSidebarActive: boolean,
  todos: string[],
}

export default new Vuex.Store({
  state:<RootState> {
    isSidebarActive: false,
    todos: [],
  },

  mutations: {
    toggleSidebar(state) :void {
      state.isSidebarActive = !state.isSidebarActive
    },

    addTodo(state, todo: string): void {
      console.log(todo)
      state.todos.push(todo)
    },

    deleteTodo(state, index: number): void {
      state.todos.splice(index, 1)
    }

  },

  actions: {
  },

  modules: {
  }
})
