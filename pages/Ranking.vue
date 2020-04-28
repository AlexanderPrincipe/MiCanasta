<template>

  <div class="container my-5">
    <h1>Los mejores Mercados y SuperMercados</h1>
    
    <b-list-group class="my-5">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          v-for="(local, idx) of arrayOrdenado" :key="idx">
          <li class="mr-auto p-2" @click="local.PUNTAJELOCAL++">{{idx + 1}}. {{ local.NOMBRELOCAL }}</li>
          
          <b-badge variant="primary" class="p-2" pill>{{local.PUNTAJELOCAL}}</b-badge>
        </b-list-group-item>
      </b-list-group>

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
      const res = await axios.get('https://api-laundry.herokuapp.com/clientes/locales')
      this.locales = res.data
      this.locales = Object.values(this.locales)[0]
      //console.log(this.locales)
    } catch (error) {
      console.log(error)
    }
  },
};
</script>

<style >
li {
  list-style: none;
}
</style>