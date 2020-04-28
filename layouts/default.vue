<template>
  <div>
    <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="nav-link" href="/">Inicio</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

         

          

          <li class="nav-item active">
            <nuxt-link to="/nosotros" class="nav-link">Nosotros</nuxt-link>
          </li>
          <li class="nav-item active">
            <nuxt-link to="/servicios" class="nav-link">Servicios</nuxt-link>
          </li>
          <li class="nav-item active">
            <nuxt-link to="/Locales" class="nav-link">Locales</nuxt-link>
          </li>
          <li class="nav-item active">
            <nuxt-link to="/Ranking" class="nav-link">Ranking</nuxt-link>
          </li>

        </ul>



        <form class="form-inline my-2 my-lg-0">
           
            <b-button v-if=!user variant="primary" class="btn-lg mx-2" href="signin">Sign In</b-button>
          
            <b-button v-if=!user variant="primary" class="btn-lg mx-2" href="signup">Sign Up</b-button>
                 
            <b-button v-if=user variant="primary" class="btn-lg mx-2" @click="signout">Sign Out</b-button>
        

        </form>
      </div>
    </nav>
  </header>
  
    <nuxt />
  </div>
  
</template>


<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            user: '',
            show: true
        }
    },
    mounted() {
      firebase.auth().onAuthStateChanged(user => {
        //console.log(user)

        this.user = user;
      })
    },

    methods: {
      signout(){ 
        firebase.auth().signOut().then(result => {
          this.user = ''
          this.$router.push('/')
        })
      }
    }
}
</script>

<style>

.header {
  background-size: cover;
  /*min-height: 1vh;*/
}

.header .navbar {
  background-color: transparent !important;
}



</style>
