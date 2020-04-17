<template>

  <div class="container">
    <h1>Los mejores Mercados y SuperMercados</h1>
    <ul class="list-group">
      <li v-for="(local, idx) of arrayOrdenado" :key="idx"
      class="list-group-item d-flex justify-content-between align-items-center">
        {{idx + 1}}. {{ local.NOMBRELOCAL }}
        <span class="badge badge-primary badge-pill">{{local.PUNTAJELOCAL}}</span>
      </li>
      
    </ul>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';
import axios from 'axios'

export default {
  name: "Ranking",
  data() {
    return {
      locales: []
    }
  },
  computed: {
      ...mapState(['mercados']),
      arrayOrdenado(){
          return this.locales.sort( (a, b) => b.PUNTAJELOCAL - a.PUNTAJELOCAL )
      }
  },
  methods: {
      ...mapMutations(['aumentar', 'limpiar'])
  },
  async created() {
    try {
      const res = await axios.get('https://api-laundry.herokuapp.com/clientes/local')
      this.locales = res.data
      this.locales = Object.values(this.locales)[0]
      console.log(this.locales)
    } catch (error) {
      console.log(error)
    }
  },
};
</script>