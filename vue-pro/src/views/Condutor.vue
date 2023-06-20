<template>
    <div class="container text-center">
      <div class="row">
        <div class="col-8"><input class="put" type="filtro" placeholder="Cadastra-se a Condutor"></div>
        <div class="col-4"><button type="button" class="btn btn-primary btn-lg">Cadastrar</button></div>
      </div>
    </div>
    <hr>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">Opcao</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Opcao /></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><Opcao /></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>Bird</td>
          <td>@twitter</td>
          <td><Opcao /></td>
        </tr>
      </tbody>
    </table>
</template>

<script lang="ts">
import Opcao from '../views/Opcao.vue'
    export default{
        name: "Condutor",
        components: {
            Opcao
        }
    }
</script>

<style>
    .container{
        margin-top: 20px;
    }
    .btn-options{
        width: 800px;
    }
    .col-8{
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .put{
        width: 750px;
        height: 40px;
    }
    .op-btn{
        margin-left: 10px;
    }
</style>
