<template>
    <div class="container my-5">
    <h1>Registro</h1>

    <div>
      <div>
        <b-form @submit.prevent="pressed" v-if="show">
          <b-form-group id="input-group-1" label="Ingrese su nombre:" label-for="input-1">
            <b-form-input id="input-1" required placeholder="Nombre" type="text" v-model="nombre"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Ingrese su email:" label-for="input-1">
            <b-form-input id="input-1" required placeholder="Email" type="email" v-model="email"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Ingrese su contraseña:" label-for="input-2">
            <b-form-input id="input-2" required placeholder="Contraseña" type="password" aria-describedby="password-help-block" v-model="password"></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Registrase</b-button>

          <div>
          <b-alert show variant="danger" v-if="error">{{errors}}</b-alert>
            </div>

        </b-form>

        
        
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            nombre:'',
            email:'',
            password:'',
            errors: '',
            show: true
        }
    },
    methods: {
        pressed() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user =>{
              console.log(user);
              this.$router.push('/cuenta')
            }).catch(error => {
              this.errors = error;
            })
        }
    }
}
</script>