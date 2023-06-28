<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#">ESTACIONAMENTO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/movimentacao"><a class="nav-link active" aria-current="page"><h5 class="habibi">MOVIMENTACAO</h5></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/marca"><a class="nav-link active" aria-current="page"><h5 class="habibi">MARCA</h5></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/modelo"><a class="nav-link active" aria-current="page"><h5 class="habibi">MODELO</h5></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/veiculo"><a class="nav-link active" aria-current="page"><h5 class="habibi">VEICULO</h5></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/condutor"><a class="nav-link active" aria-current="page"><h5 class="habibi">CONDUTOR</h5></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/configuracao"><a class="nav-link active" aria-current="page"><h5 class="habibi">CONFIGURACAO</h5></a></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script lang="ts">
export default{
  name: 'App'
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

  nav{
    display: flex;
    justify-content: space-between;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .logo{
    font-weight: bold;
  }
  .habibi{
    color: #313131;
    font-family: 'Russo One', sans-serif;
  }
  .habibi:hover{    
    font-size: larger;
    color: #016c7c;
  }
  .search{
    padding: 4px;
    width: 100px;
  }
  .searching{
    border: none;
    border-radius: 6px;
    height: 40px;
  }
</style>
