<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  
  <hr>
  <h2 v-if="form === 'edit'">Editar Veiculo</h2>
  <h2 v-if="form === undefined">Cadastrar Veiculo</h2>
  <h2 v-if="form === 'deletar'">Deletar Veiculo</h2>
  <hr>
  <div v-if="mensagem.active" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>
  <h5 v-if="form === 'editar'" class="labeling">ID do veiculo</h5>
  <div class="input-group mb-3">
    <input v-if="form === 'deletar'" v-model="veiculo.id" type="text" class="form-control" placeholder="ID do veiculo" aria-label="nome" aria-describedby="button-addon2" required>
  </div>

  <h5 v-if="form !== 'deletar'" class="labeling">ID e Nome do Modelo </h5>
  <select v-if="form !== 'deletar'" v-model="veiculo.modelId" class="form-select" >
    <option v-for="item in modelo" :value="item"> {{ item.id }}  {{ item.name }}  {{ item.ano }}</option>
  </select><!--selecting the id of the marca to add the model-->

  <h5 v-if="form !== 'deletar'" class="labeling">Numero da placa</h5>
  <div class="input-group mb-3">
    <input v-if="form !== 'deletar'" v-model="veiculo.plate" type="text" class="form-control" placeholder="placa" aria-label="nome" aria-describedby="button-addon2" required>
  </div>
  <div class="lab">
    <h5 v-if="form !== 'deletar'" class="labeling">Cor</h5>
    <h5 v-if="form !== 'deletar'" class="labeling">Tipo</h5>
  </div>
  <div class="input-group mb-3">
    <select v-if="form !== 'deletar'" v-model="veiculo.color" class="form-select" aria-label="Default select example">
      <option v-for="itemcolor in veiculocolor" :value="itemcolor">{{itemcolor}}</option>
    </select>
    <select v-if="form !== 'deletar'" v-model="veiculo.type" class="form-select" aria-label="Default select example">
      <option v-for="itemtype in veiculotipo" :value="itemtype">{{ itemtype }}</option>
    </select>
  </div>
  
  <div class="input-group mb-3">
    <button class="btn btn-outline-secondary" type="button" v-if="form === undefined" @click="onClickCadastrar()"
      id="button-addon2">Adicionar</button>
    <button class="btn btn-outline-secondary" type="button" v-if="form === 'edit'" @click="onClickEdit()"
      id="button-addon2">Editar</button>
    <button class="btn btn-outline-secondary" type="button" v-if="form === 'deletar'" @click="onClickDeletar()"
      id="button-addon2">Deletar</button>
    <router-link to="/veiculo"><button class="btn btn-outline-secondary" type="button"
        id="button-addon2">voltar</button></router-link>
  </div>

</template>

<script lang="ts" >
import VeiculoClient from '@/client/VeiculoClient';
import ModeloClient from '@/client/ModeloClient';
import { Veiculo } from '@/model/veiculo';
import { Modelo } from "@/model/modelo";
import { Color } from '@/model/color';
import { Type } from '@/model/type';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Veiculoformcadastrar",
  data() {
    return {
      veiculo: new Veiculo(),
      mensagem: {
        active: true as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      },
      modelo: new Array<Modelo>(),
      veiculotipo: Type,
      veiculocolor: Color
    }
  },
  computed: {
    id() {
      return this.$route.query.id
    },
    form() {
      return this.$route.query.form
    }
  },
  mounted() {
    if (this.id !== undefined) {
      this.findById(Number(this.id));
    }
    this.findAll();
  },
  methods: {
    findAll() {
      ModeloClient.findAll()
        .then(sucess =>{
          this.modelo = sucess;
        })
        .catch(Error =>{
          console.log(Error);
        })
    },
    onClickCadastrar() {
      console.log(this.veiculo)
      VeiculoClient.cadastrar(this.veiculo) // Access the brandId.id value
        .then(sucess => {
          this.veiculo = new Veiculo()
          console.log(sucess)
          this.mensagem.active = true;
          this.mensagem.mensagem = "sucess";
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          console.log(error)
          this.mensagem.active = true;
          this.mensagem.mensagem = "error";
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    findById(id: number) {
      VeiculoClient.findById(id)
      .then(sucess => {
        this.veiculo = sucess;
        this.mensagem.active = true;
        this.mensagem.mensagem = "sucess";
        this.mensagem.titulo = "Parabens. ";
        this.mensagem.css = "alert alert-success alert-dismissible fade show";
      })
      .catch(error => {
        this.mensagem.active = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
    },
    onClickEdit() {
      VeiculoClient.edit(this.veiculo.id, this.veiculo)
        .then(sucess => {
          this.veiculo = new Veiculo()
          console.log(sucess);
          this.mensagem.active = true;
          this.mensagem.mensagem = "sucess";
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.active = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickDeletar() {
      VeiculoClient.deletar(this.veiculo.id)
        .then(sucess => {
          this.veiculo = new Veiculo()
          console.log(sucess);
          this.$router.push({ name: 'marca-lista-view' });
        })
        .catch(error => {
          this.mensagem.active = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    }
  }
});
</script>

<style>
.lab{
  display: flex;
  justify-content: space-around;
}
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
