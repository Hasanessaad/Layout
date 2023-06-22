<template>
    <h2>Cadastrar Marca</h2>
    <hr>
    <h5 class="labeling">Nome do Marca</h5>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="nome" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Adicionar</button>
      <router-link to="/marca"><button class="btn btn-outline-secondary" type="button" id="button-addon2">voltar</button></router-link>
    </div>
</template>

<script lang="ts">
    export default{
    name:"Marcaformcadastrar"
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