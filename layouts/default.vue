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
            <nuxt-link to="/signin" class="nav-link">Sign In</nuxt-link>
          </li>

          <li class="nav-item active">
            <nuxt-link to="/signup" class="nav-link">Sign Up</nuxt-link>
          </li>

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
          <a class="nav-lin" href="login">Entrar</a>
          <a class="nav-link" href="registro">Registrarse</a>

        </form>
      </div>
    </nav>
  </header>
  
    <nuxt />
  </div>
  
</template>

<style>

.header {
  background-size: cover;
  /*min-height: 1vh;*/
}

.header .navbar {
  background-color: transparent !important;
}



</style>
