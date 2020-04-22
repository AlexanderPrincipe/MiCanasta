<template>
  <div class="container my-5">

      <h1>Locales Registrados</h1>

       <b-list-group class="my-5">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          v-for="(local, index) in locales"
          :key="index">
            <li class="mr-auto p-2">{{local.NOMBRELOCAL}} - {{local.TIPOLOCAL}}</li>
          <div>
            <nuxt-link :to="`/locales/${local.IDLOCAL}`">
              <b-button variant="primary" class="p-2"> Ver más</b-button>
            </nuxt-link>
          </div>
          <div>
            <div class="p-2"></div>
          </div>
          <div>
            <div class="p-2"></div>
          </div>
          <b-badge variant="primary" class="p-2" pill>{{local.PUNTAJELOCAL}}</b-badge>
        </b-list-group-item>
      </b-list-group>

  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';
import axios from 'axios'

export default {
  data() {
    return {
      locales: [    
      ],
    };
  },
  computed: {
    
  },
  methods: {
     
  },
  async created() {
    try {
      const res = await axios.get('https://api-laundry.herokuapp.com/clientes/locales')
      this.locales = res.data
      this.locales = Object.values(this.locales)[0]
      //console.log(Object.values(this.clientes)[0]);
      //console.log(this.clientes)
    } catch (error) {
      console.log(error)
    }
  },
};
</script>
