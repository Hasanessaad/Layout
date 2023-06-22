<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  
  <h2>Cadastrar Veiculo</h2>
  <hr>
  <h5 class="labeling">Numero da placa</h5>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="placa" aria-label="nome" aria-describedby="button-addon2" required>
  </div>
  <div class="lab">
    <h5 class="labeling">Cor</h5>
    <h5 class="labeling">Tipo</h5>
  </div>
  <div class="input-group mb-3">
    <select class="form-select" aria-label="Default select example">
      <option value="1">AZUL</option>
      <option value="2">AMARELO</option>
      <option value="3">PRETO</option>
      <option value="4">CINZA</option>
      <option value="5">BRANCO</option>
      <option value="6">VERDE</option>
      <option value="7">LARANJA</option>
      <option value="8">ROXO</option>
    </select>
    <select class="form-select" aria-label="Default select example">
      <option value="1">CARRO</option>
      <option value="2">MOTO</option>
      <option value="3">VAN</option>
    </select>
  </div>
  <h5 class="labeling">Ano</h5>
  <div class="input-group mb-3">
    <input type="number" id="year-input" placeholder="YYYY" required class="form-control" aria-label="ano" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Adicionar</button>
    <router-link to="/veiculo"><button class="btn btn-outline-secondary" type="button" id="button-addon2">voltar</button></router-link>
  </div>  
</template>

<script lang="ts" >
export default{
  name:"Veiculoformcadastrar"
}
</script>

<style>
.lab{
  display: flex;
  justify-content: space-around;
}
.labeling{
  display: flex;
  justify-content: flex-start;
  margin-left: 14px;
  font-weight: bold;
}
.card{
  display: flex;
  justify-content: center;
}
.platform{
  border: 1px transparent black;
}
</style>
