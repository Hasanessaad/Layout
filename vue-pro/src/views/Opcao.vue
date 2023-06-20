<template>
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

    <select class="op" aria-label=".form-select-lg example">
      <option class="escolhe">Escolher</option>
      <option value="1">Editar</option>
      <option value="2">Deletar</option>
    </select>
    <button submit="" class="choose"><a href="" class="enter">Select</a></button>
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
.op{
  height: 30px;
  width: 100px;
  border-radius: 5px;
  color: aliceblue;
  font-weight: bold;
  background-color: rgb(0, 45, 194);
  border: none;
}
.choose{
  color: black;
  border:none;
  border-radius: 6px;
  font-weight: bold;
  height: 30px;
  transition: all 0.35s 0s;
}
.choose:hover{
  font-size: larger;
}
.enter{
  color: black;
  text-decoration: none;
  font-weight: bold;
}
</style>