<template>
  <h2>Cadastrar Movimentacao</h2>
  <hr>
  <h5 class="labeling">Entrada</h5>
  <div class="input-group mb-3">
    <input type="datetime-local" class="form-control" aria-label="data" aria-describedby="button-addon2" required>
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Adicionar</button>
    <router-link to="/movimentacao"><button class="btn btn-outline-secondary" type="button" id="button-addon2">voltar</button></router-link>
  </div>
</template>

<script lang="ts">
export default{
  name:"Movimentacaoformcadastrar"
}
</script>

<style>
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