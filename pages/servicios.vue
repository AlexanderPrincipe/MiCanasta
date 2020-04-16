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
          v-for="(mercado, index) in mercados"
          :key="index">
          <li class="mr-auto p-2" @click="mercado.puntaje++">{{mercado.nombre}} - {{mercado.tipo}}</li>
          <div>
            <b-button variant="primary" class="p-2">Ver más</b-button>
          </div>
          <div>
            <div class="p-2"></div>
          </div>
          <b-badge variant="primary" class="p-2" pill>{{mercado.puntaje}}</b-badge>
        </b-list-group-item>
      </b-list-group>
      <ul class="list-group"> 

      </ul>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      mercados: [
        { nombre: "Tottus", tipo: "supermercado", puntaje: 0 },
        { nombre: "Plaza Vea", tipo: "supermercado", puntaje: 0 },
        { nombre: "Mercado Palao", tipo: "mercado", puntaje: 0 }
      ],
      nombreLocal: "",
      tipoLocal: ""
    };
  },
  methods: {
    agregarLocal() {
      this.mercados.push({
        nombre: this.nombreLocal,
        tipo: this.tipoLocal,
        puntaje: 0
      });
      (this.nombreLocal = ""), (this.tipoLocal = "");
    }
  },
};
</script>
