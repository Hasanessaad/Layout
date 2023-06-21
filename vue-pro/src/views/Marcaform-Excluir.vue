<template>
    <h2>Excluir Modelo</h2>
      <hr>
      <h5>Nome do Modelo</h5>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="nome" aria-label="nome" aria-describedby="button-addon2">
      </div>
      <h5>Ano</h5>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="ano" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Adicionar</button>
      </div>
  </template>
  
  <script lang="ts">
  export default{
    name:"Modeloformcadastrar"
  }
  </script>
  
  <style>
  .card{
    display: flex;
    justify-content: center;
  }
  .platform{
    border: 1px transparent black;
  }
  </style>