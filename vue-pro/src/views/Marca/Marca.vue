  <template>
    <div class="container text-center">
      <div class="row">
        <div class="col-8">
          <h1>Listar Marca</h1>
        </div>
        <div class="col-4">
          <router-link to="/marcaformcadastrar"><button form="" type="button" class="btn btn-primary btn-lg">Cadastrar</button></router-link>
        </div>
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
        <tr v-for="item in marcasList" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <th>{{ item.name }}</th>
          <th>{{ item.cadastro }}</th>
          <th class="col-md-2"> 
              <span v-if="item.active==true" class="badge text-bg-success">SIM</span>
              <span v-if="item.active==false" class="badge text-bg-danger">NAO</span>
          </th>
          <th>{{ item.atualizacao }}</th>
          <th>    
            <router-link type="button" :to="{name:'Marcaformedit', query: { id: item.id, form: 'edit' }}"><button submit="" class="choose">Editar</button></router-link>
            <router-link type="button" :to="{name:'Marcaformexcluir', query: { id: item.id, form: 'deletar' }}"><button submit="" class="choose1">Deletar</button></router-link>
          </th>  
        </tr>
      </tbody>
    </table>
  </template>

<script lang="ts">
import MarcaClient from '@/client/MarcaClient';
import { Marca } from "@/model/marca";
import { defineComponent } from 'vue';

  export default defineComponent({
    name:"Marca",
    data() {
      return {
          marcasList: new Array<Marca>()
      }
    },
    mounted() {
      this.findAll();
    },
    methods: {
      findAll() {
        MarcaClient.findAll()
          .then(sucess => {
            this.marcasList = sucess
            console.log(sucess);
          })
          .catch(error => {
            console.log(error);
        });
      }
    }
  });
  
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
