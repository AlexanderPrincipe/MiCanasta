<template>
  <div class="container my-5">
    <h1>Registrar locales</h1>
    
    <div class="container my-10">

      <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group
        id="input-group-1"
        label="Ingrese el nombre del local:"
        label-for="input-1"
        description="No se olvide de ingresar el nombre correctamente ." 
      >
        <b-form-input
          id="input-1"
          v-model="form.nombre"
          required
          placeholder="Nombre del local"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ingrese el distrito:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.distrito"
          required
          placeholder="Distrito"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Tipo:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.tipo"
          :options="tipolocales"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary" @click="crearLocal">Ingresar</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>

<!-- Comment 
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
-->
  </div>

      
      <b-list-group class="my-5">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          v-for="(local, index) in locales"
          :key="index">
          <li class="mr-auto p-2" @click="local.PUNTAJELOCAL++">{{local.NOMBRELOCAL}} - {{local.DISTRITOLOCAL}} | {{local.TIPOLOCAL}}</li>
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
      form: {
          nombre: '',
          distrito: '',
          tipo: null
        },
        tipolocales: [{ text: 'Selecciona uno', value: null }, 'SuperMercado', 'Mercado', 'Mercadillo', 'Otro'],
        show: true
    };
  },
  computed: {
    ...mapState(['mercados']),
  },
  methods: {
    crearLocal() {
      axios.post(`https://api-laundry.herokuapp.com/clientes/locales`, {
          NOMBRELOCAL: this.form.nombre,
          DISTRITOLOCAL: this.form.distrito,
          TIPOLOCAL: this.form.tipo,
          PUNTAJELOCAL: 0
      });
      (this.nombreLocal = ""), (this.tipoLocal = "");
    },
    onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.nombre = ''
        this.form.distrito = ''
        this.form.tipo = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
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
      const res = await axios.get('https://api-laundry.herokuapp.com/clientes/locales')
      this.locales = res.data
      this.locales = Object.values(this.locales)[0]
      //console.log(Object.values(this.clientes)[0]);
      //console.log(this.locales)
    } catch (error) {
      console.log(error)
    }

    try {
        this.locales = await crearLocal();
    } catch (error) {
        console.log(error)
    }

  },
};
</script>
