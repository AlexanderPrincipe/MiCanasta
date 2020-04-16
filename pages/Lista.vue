<template>
  <div>
    <ul class="list-group">
      <li v-for="(item, idx) of arrayOrdenado" :key="idx" @click="aumentar(idx)"
      class="list-group-item d-flex justify-content-between align-items-center">
        {{idx + 1}}. {{ item.nombre }}
        <span class="badge badge-primary badge-pill">{{item.puntaje}}</span>
      </li>
      <button @click="limpiar" class="btn btn-primary">Limpiar</button>
      
    </ul>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
  name: "Lista",
  computed: {
      ...mapState(['mercados']),
      arrayOrdenado(state){
          return state.mercados.sort( (a, b) => b.puntaje - a.puntaje )
      }
  },
  methods: {
      ...mapMutations(['aumentar', 'limpiar', 'agregarLocal'])
  },
};
</script>