<template>
    <div class="container text-center">
      <div class="row">
        <div class="col-8"><input class="put" type="filtro" placeholder="Cadastra-se a Condutor"></div>
        <div class="col-4"><button type="button" class="btn btn-primary btn-lg">Cadastrar</button></div>
      </div>
    </div>
    <hr>
    <Opcao />
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">nome</th>
          <th scope="col">ano</th>
          <th scope="col">marca</th>
          <th scope="col">cadastro</th>
          <th scope="col">ativo</th>
          <th scope="col">atualizacao</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Golf</td>
          <td>2016</td>
          <td>Volkswagen</td>
          <td>04/03/2015 12:46 p.m</td>
          <td>sim</td>
          <td>06/07/2017 4:03 p.m</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Silverado</td>
          <td>2015</td>
          <td>Chevrolet</td>
          <td>04/03/2015 12:46 p.m</td>
          <td>nao</td>
          <td>06/07/2017 4:03 p.m</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>M3</td>
          <td>2017</td>
          <td>BMW</td>
          <td>04/03/2015 12:46 p.m</td>
          <td>sim</td>
          <td>06/07/2017 4:03 p.m</td>
        </tr>
      </tbody>
    </table>
</template>

<script lang="ts">
import Opcao from '../views/Opcao.vue'
    export default{
        name: "Modelo",
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
