<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">MiCanasta</h1>
      <h2 class="subtitle">Proyecto para el curso de Ingeniería de Software 2</h2>
      <div>
        <b-button variant="primary" class="btn-lg" href="nosotros">Comenzar</b-button>
      </div>
      
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Vuex from 'vuex';



export default {
  components: {
    Logo
  },
  head: {
    title: 'MiCanasta',
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  computed: {
    ...Vuex.mapState(['contador'])
  },
  methods: {
    ...Vuex.mapMutations(['incrementar'])
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
