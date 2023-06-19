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
          <router-link to="/movimentacao"><a class="nav-link active" aria-current="page"><h5 class="habibi" :class="{ 'white-text': isMovimentacaoClicked }" @click="clickedonmovimentacao()">MOVIMENTACAO</h5></a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/marca"><a class="nav-link active" aria-current="page"><h5 class="habibi" :class="{ 'white-text': isMarcaClicked }" @click="clickedonmarca()">MARCA</h5></a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/modelo"><a class="nav-link active" aria-current="page"><h5 class="habibi" :class="{ 'white-text': isModeloClicked }" @click="clickedonmodelo()">MODELO</h5></a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/veiculo"><a class="nav-link active" aria-current="page"><h5 class="habibi" :class="{ 'white-text': isVeiculoClicked }" @click="clickedonveiculo()">VEICULO</h5></a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/condutor"><a class="nav-link active" aria-current="page"><h5 class="habibi" :class="{ 'white-text': isCondutorClicked }" @click="clickedoncondutor()">CONDUTOR</h5></a></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isMovimentacaoClicked:false,
      isCondutorClicked:false,
      isVeiculoClicked:false,
      isModeloClicked: false,
      isMarcaClicked: false
    };
  },
  methods: {
    clickedonmodelo() {
      this.isModeloClicked = true;
      this.isMarcaClicked = false;
      this.isMovimentacaoClicked = false;
      this.isCondutorClicked = false;
      this.isVeiculoClicked = false;
    },
    clickedonmarca() {
      this.isModeloClicked = false;
      this.isMarcaClicked = true;
      this.isMovimentacaoClicked = false;
      this.isCondutorClicked = false;
      this.isVeiculoClicked = false;
    },
    clickedonveiculo(){
      this.isModeloClicked = false;
      this.isMarcaClicked = false;
      this.isMovimentacaoClicked = false;
      this.isCondutorClicked = false;
      this.isVeiculoClicked = true;
    },
    clickedoncondutor(){
      this.isModeloClicked = false;
      this.isMarcaClicked = false;
      this.isMovimentacaoClicked = false;
      this.isCondutorClicked = true;
      this.isVeiculoClicked = false;
    },
    clickedonmovimentacao(){
      this.isModeloClicked = false;
      this.isMarcaClicked = false;
      this.isMovimentacaoClicked = true;
      this.isCondutorClicked = false;
      this.isVeiculoClicked = false;
    }
  }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

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
  cursor: pointer;
  font-family: 'Russo One', sans-serif;
  font-weight: bold;
}
.white-text {
  color: #083da7;
}

.habibi:hover{    
  color: #016c7c;
}
</style>
