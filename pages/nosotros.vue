<template>
  <div class="container my-5">
    <h1>{{titulo}}</h1>

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12">
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi distinctio soluta obcaecati dolor rem veritatis, illo officia incidunt quis assumenda nam. Unde repudiandae molestias ut placeat inventore, eveniet temporibus nihil?</p>
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-10">
        <b-col sm="3">
          <div>
            <b-card
              title="Misión"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="my-4"
            >
              <b-card-text>Ayudamos a las familias peruanas a comprar más fácil.</b-card-text>

            </b-card>
          </div>
        </b-col>

        <b-col sm="3">
          <div>
            <b-card
              title="Visión"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="my-4"
            >
              <b-card-text>Ser la aplicación web mejor valorada por las familias peruanas.</b-card-text>

            </b-card>
          </div>
        </b-col>

        <b-col sm="3">
          <div>
            <b-card
              title="Valores"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="my-4"
            >
              <b-card-text>Nos basamos en la responsabilidad, solidaridad, y respeto.</b-card-text>

            </b-card>
          </div>
        </b-col>
      </b-row>

      <b-row> 
        <b-col sm="12">     
              <h2 class="my-3">Comienza a registrar locales</h2>          
          <div>
              <b-button variant="primary" class="btn-lg" href="servicios">Registrar Locales</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Nosotros"
    };
  }
};
</script>