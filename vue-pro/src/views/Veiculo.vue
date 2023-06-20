<template>
    <div class="container text-center">
      <div class="row">
        <div class="col-8"><input class="put" type="filtro" placeholder="Cadastra-se a Veiculo"></div>
        <div class="col-4"><button type="button" class="btn btn-primary btn-lg">Cadastrar</button></div>
      </div>
    </div>
    <hr>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">placa</th>
          <th scope="col">cor</th>
          <th scope="col">tipo</th>
          <th scope="col">ano</th>
          <th scope="col">modelo</th>
          <th scope="col">cadastro</th>
          <th scope="col">ativo</th>
          <th scope="col">atualizacao</th>
          <th scope="col">Opcao</th>
        </tr>
      </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>DEF-5678</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td><Opcao /></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td><Opcao /></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td><Opcao /></td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import Opcao from '../views/Opcao.vue'
    export default{
        name: "Veiculo",
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
