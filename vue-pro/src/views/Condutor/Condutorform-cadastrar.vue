<template>
    <h2>Cadastrar Condutor</h2>
    <hr>
    <h5 class="labeling">Nome do Marca</h5>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="nome" aria-label="Recipient's username" aria-describedby="button-addon2">
      <input type="text" class="form-control" placeholder="CPF" aria-label="Recipient's username" aria-describedby="button-addon2">
      <input type="text" class="form-control" placeholder="Telefone" aria-label="Recipient's username" aria-describedby="button-addon2">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Tempo_pago" aria-label="Recipient's username" aria-describedby="button-addon2">
      <input type="text" class="form-control" placeholder="Tempo_desconto" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Adicionar</button>
      <router-link to="/condutor"><button class="btn btn-outline-secondary" type="button" id="button-addon2">voltar</button></router-link>
    </div>
</template>

<script lang="ts">
    export default{
    name:"Condutorformcadastrar"
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