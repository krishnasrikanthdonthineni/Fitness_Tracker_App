import Vue from 'vue'
import Vuex from 'vuex'
import currentUserModule from './modules/currentUserModule'
import postsModule from './modules/postsModule'
import usersModule from './modules/usersModule'
import inputsModule from './modules/inputsModule'

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    currentUserModule, postsModule, usersModule, inputsModule
  }
})

export default store