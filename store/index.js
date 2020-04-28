import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
  },
  mutations: {
    aumentar(state, idx) {
      state.locales[idx].PUNTAJELOCAL ++
    },
    limpiar(state) {
      state.locales.forEach(elemento => {
        elemento.cantidad = 0
      })
    },
    obtenernombre(state) {
      state.nombre = this.nombre
    }
  },
 
})

export default store
