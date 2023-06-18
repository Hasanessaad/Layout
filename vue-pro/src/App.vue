<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ESTACIONAMENTO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/movimentcao"><a class="nav-link" aria-current="page" href="#">MOVIMENTACAO</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/marca"><a class="nav-link" aria-current="page" href="#">MARCA</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/"><a class="nav-link active" aria-current="page" href="#">MODELO</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/"><a class="nav-link active" aria-current="page" href="#">VEICULO</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/"><a class="nav-link active" aria-current="page" href="#">CONDUTOR</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/opcao"><a class="nav-link active" aria-current="page" href="#">OPCAO</a></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
