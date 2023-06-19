<template>
  <div class="option">
    <h3 class="ayo">Opcoes</h3>
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
      <option selected>Adicionar</option>
      <option value="1">Editar</option>
      <option value="2">Deletar</option>
    </select>
  </div>
</template>

<script lang="ts">
  export default{
    name: "Opcao"
  }

</script>

<style lang="css">
.option{
background-color: rgb(19, 6, 69);
}
.ayo{
  padding-top: 5px;
  color: aliceblue;
}

</style>