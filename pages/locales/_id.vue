<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Local: {{comentarios.nombrelocal}}</h1>
                <p>Comentario: {{comentarios.COMENTARIO}}</p>
                <nuxt-link to="/locales" class="btn btn-primary">Atras</nuxt-link>
            </div>
        </div>
                
     
    </div>
</template>


<script>

import {mapState, mapMutations, mapActions} from 'vuex';
import axios from 'axios'

export default {
  data() {
    return {
    };
  },
  async created() {
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      try {
      const res = await axios.get(`https://api-laundry.herokuapp.com/clientes/comentarios/${params.id}`)
      const comentarios = res.data
      //this.comentarios = Object.values(this.comentarios)[0]
      const resLocal = await axios.get(`https://api-laundry.herokuapp.com/clientes/local/${res.data.IDLOCAL}`)

      comentarios.nombrelocal = resLocal.data.NOMBRELOCAL;

      return {comentarios};
    } catch (error) {
      console.log(error);
      return {error: error}
    }
  }
};
</script>


<style >
li {
  list-style: none;
}
</style>
