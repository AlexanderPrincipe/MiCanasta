<template>
    <div class="container">
  <b-card title="Card title" sub-title="Card subtitle">
    <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
    </b-card-text>

    <b-card-text>Bienvenido, {{user.email}}.</b-card-text>

    <a href="#" class="card-link">Card link</a>
    <b-link href="#" class="card-link">Another link</b-link>
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
                //console.log(user)
                if (!this.user)
                this.$router.push('/')
            })

    }
        
            
            
        
   
}
</script>