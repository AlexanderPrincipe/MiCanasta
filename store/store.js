import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    contador: 0
  },
  mutations: {
    incrementar(state){
      state.contador++
    }
  },
})

export default store