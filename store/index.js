import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    mercados: [
      { nombre: "Tottus", tipo: "supermercado", puntaje: 10 },
      { nombre: "Plaza Vea", tipo: "supermercado", puntaje: 8 },
      { nombre: "Mercado Palao", tipo: "mercado", puntaje: 5 }
    ],
  },
  mutations: {
    aumentar(state, idx) {
      state.mercados[idx].puntaje ++
    },
    limpiar(state) {
      state.mercados.forEach(elemento => {
        elemento.cantidad = 0
      })
    },
  },
  actions: {
    
  }
})

export default store
