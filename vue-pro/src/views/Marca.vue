  <template>
    <div class="container text-center">
      <div class="row">
        <div class="col-8"><input class="put" type="filtro" placeholder="Cadastra-se a Condutor"></div>
        <div class="col-4"><button type="button" class="btn btn-primary btn-lg">Cadastrar</button></div>
      </div>
      <h3>Nome da Marca</h3>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="nome" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Adicionar</button>
      </div>
    </div>
    <hr>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">nome</th>
          <th scope="col">cadastro</th>
          <th scope="col">ativo</th>
          <th scope="col">atualizacao</th>
          <th scope="col">Opcao</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Volkswagen</td>
          <td>04/03/2015 12:46 p.m</td>
          <td>sim</td>
          <td>06/07/2017 4:03 p.m</td>
          <td><Opcao /></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Chevrolet</td>
          <td>01/02/2016 11:23 a.m</td>
          <td>nao</td>
          <td>13/09/2017 2:57 p.m</td>
          <td><Opcao /></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>BMW</td>
          <td>07/04/2013 8:22 a.m</td>
          <td>sim</td>
          <td>06/03/2014 7:13 p.m</td>
          <td><Opcao /></td>
        </tr>
      </tbody>
    </table>
  </template>

<script lang="ts">
import Opcao from '../views/Opcao.vue'
  export default{
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
