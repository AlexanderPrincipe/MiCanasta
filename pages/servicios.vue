<template>
  <div class="container my-5">
    <h1>Registrar locales</h1>
    
    <div class="container my-10">
      <div>
        <label for="range-1">Ingrese el nombre del local</label>
        <b-form-input id="text1" v-model="nombreLocal" type="text"></b-form-input>

        <label for="range-1" class="mt-3">Ingrese el tipo</label>
        <b-form-input id="text2" v-model="tipoLocal" type="text"></b-form-input>

        <b-button class="mt-3" variant="success" @click="agregarLocal">Ingresar</b-button>
      </div>

      
      <b-list-group class="my-5">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          v-for="(local, index) in locales"
          :key="index">
          <li class="mr-auto p-2" @click="local.PUNTAJELOCAL++">{{local.NOMBRELOCAL}} - {{local.TIPOLOCAL}}</li>
          <div>
            <b-button variant="primary" class="p-2">Ver más</b-button>
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
  </div>
</template>

<script>

import {mapState, mapMutations, mapActions} from 'vuex';
import axios from 'axios'

export default {
  data() {
    return {
      locales: [],
      nombreLocal: "",
      tipoLocal: ""
    };
  },
  computed: {
    ...mapState(['mercados']),
  },
  methods: {
     ...mapMutations(['aumentar', 'limpiar']),
    agregarLocal() {
      this.locales.push({
        NOMBRELOCAL: this.nombreLocal,
        TIPOLOCAL: this.tipoLocal,
        PUNTAJELOCAL: 0
      });
      (this.nombreLocal = ""), (this.tipoLocal = "");
    }
  },
  async created() {
    try {
      const res = await axios.get('https://api-laundry.herokuapp.com/clientes/local')
      this.locales = res.data
      this.locales = Object.values(this.locales)[0]
      //console.log(Object.values(this.clientes)[0]);
      console.log(this.locales)
    } catch (error) {
      console.log(error)
    }

  },
};
</script>
