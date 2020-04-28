<template>
    <div class="container">
  <b-card title="Bienvenido a MiCanasta!" sub-title="MiCanasta es una aplicación 100% gratuita">
    <b-card-text>
      Puedes ver el Ranking de los mejores Mercado y Supermercados, crear nuevos supermercados y comentar.
    </b-card-text>

    <b-card-text>Bienvenido, {{user.email}}.</b-card-text>

    <a href="servicios" class="card-link">Registrar mercados</a>
    <b-link href="Ranking" class="card-link">Ver Ranking</b-link>
  </b-card>
</div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            user: '',
        }
    },
    mounted() {
        firebase.auth().onAuthStateChanged(user => {
                this.user = user;  
                console.log(user)
                if (!this.user)
                this.$router.push('/')
            })

    }
        
            
            
        
   
}
</script>