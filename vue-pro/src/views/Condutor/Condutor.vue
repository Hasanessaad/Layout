<template>
    <div class="container text-center">
      <div class="row">
        <div class="col-8"><h1>Listar Condutor</h1>
        </div>
        <div class="col-4"><button type="button" class="btn btn-primary btn-lg">Cadastrar</button></div>
      </div>
    </div>
    <hr>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">CPF</th>
          <th scope="col">Telefone</th>
          <th scope="col">Tempo_pago</th>
          <th scope="col">Tempo_desconto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>    
            <router-link :to="{name:'Modeloformedit'}"><button submit="" class="choose">Editar</button></router-link>
            <router-link :to="{name:'Modeloformexcluir'}"><button submit="" class="choose1">Deletar</button></router-link>
          </td>    
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>    
            <router-link :to="{name:'Modeloformedit'}"><button submit="" class="choose">Editar</button></router-link>
            <router-link :to="{name:'Modeloformexcluir'}"><button submit="" class="choose1">Deletar</button></router-link>
          </td>    
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>Bird</td>
          <td>@twitter</td>
          <td>    
            <router-link :to="{name:'Modeloformedit'}"><button submit="" class="choose">Editar</button></router-link>
            <router-link :to="{name:'Modeloformexcluir'}"><button submit="" class="choose1">Deletar</button></router-link>
          </td>          
        </tr>
      </tbody>
    </table>
</template>

<script lang="ts">
    export default{
        name: "Condutor"
    }
</script>

<style lang="css">
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
.choose1{
  color: aliceblue;
  background-color: red;
  border:none;
  border-radius: 6px;
  font-weight: bold;
  height: 30px;
  transition: all 0.35s 0s;
}
.choose1:hover{
  font-size: larger;
}
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
