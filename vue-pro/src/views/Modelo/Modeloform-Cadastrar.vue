<template>
  <hr>
  <h2 v-if="form === 'edit'">Editar Modelo</h2>
  <h2 v-if="form === undefined">Cadastrar Modelo</h2>
  <h2 v-if="form === 'deletar'">Deletar Modelo</h2>
  <hr>
  <div v-if="mensagem.active" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>
  <h5 class="labeling" v-if="form === 'edit'">Numero de ID do modelo</h5>
  <input type="number" v-if="form === 'edit'" v-model="modelo.id" class="form-control" placeholder="ID"
    aria-label="Recipient's username" aria-describedby="button-addon2">

  <h5 class="labeling" v-if="form === 'deletar'">Numero de ID do modelo</h5>
  <input type="number" v-if="form === 'deletar'" v-model="modelo.id" class="form-control" placeholder="ID"
    aria-label="Recipient's username" aria-describedby="button-addon2">

    <label class="form-label mt-3">Nome da Marca *</label>
    <select v-if="form !== 'deletar'" v-model="modelo.brandId" class="form-select" >
      <option v-for="item in marca" :value="item"> {{ item.id }} {{ item.name }}</option>
    </select><!--selecting the id of the marca (model marca) to add the model-->

  <h5 class="labeling" v-if="form !== 'deletar'">Nome do Modelo</h5>
  <div class="input-group mb-3">
    <input type="text" v-if="form !== 'deletar'" class="form-control" v-model="modelo.name" placeholder="nome"
      aria-label="nome" aria-describedby="button-addon2">
  </div>

  <h5 class="labeling" v-if="form !== 'deletar'">Ano</h5>
  <div class="input-group mb-3">
    <input type="number" v-if="form !== 'deletar'" v-model="modelo.ano" class="form-control" placeholder="ano"
      aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="button" v-if="form === undefined" @click="onClickCadastrar()"
      id="button-addon2">Adicionar</button>
    <button class="btn btn-outline-secondary" type="button" v-if="form === 'edit'" @click="onClickEdit()"
      id="button-addon2">Editar</button>
    <button class="btn btn-outline-secondary" type="button" v-if="form === 'deletar'" @click="onClickDeletar()"
      id="button-addon2">Deletar</button>
    <router-link to="/modelo"><button class="btn btn-outline-secondary" type="button"
        id="button-addon2">voltar</button></router-link>
  </div>
</template>

<script lang="ts">
import MarcaClient from '@/client/MarcaClient';//use this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import ModeloClient from '@/client/ModeloClient';
import { Marca } from '@/model/marca';//use this!!!!!!!!!!!!!!!!!!
import { Modelo } from "@/model/modelo";
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Modeloformcadastrar",
  data() {
    return {
      modelo: new Modelo(),
      mensagem: {
        active: true as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      },
      marca: new Array<Marca>()//use this!!!!!!!!!!!!!!!!!!!!!
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
    this.findAll();//USE THIS TOO!!!!!!!!!!!!!!!!!!!!!!!!!!!
  },
  methods: {
    findAll() {//USE THIS inside methods of marca client 
      MarcaClient.findAll()
          .then(sucess =>{
              this.marca = sucess;
          })
          .catch(Error =>{
              console.log(Error);
          })
    },
    onClickCadastrar() {
      console.log(this.modelo)
      ModeloClient.cadastrar(this.modelo) // Access the brandId.id value
        .then(sucess => {
          this.modelo = new Modelo()
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
      ModeloClient.findById(id)
      .then(sucess => {
        this.modelo = sucess;
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
      ModeloClient.edit(this.modelo.id, this.modelo)
        .then(sucess => {
          this.modelo = new Modelo()
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
      ModeloClient.deletar(this.modelo.id)
        .then(sucess => {
          this.modelo = new Modelo()
          console.log(sucess);
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
.pick{
margin-bottom: 50px;
}
.labeling {
  display: flex;
  justify-content: flex-start;
  margin-left: 14px;
  font-weight: bold;
}

.card {
  display: flex;
  justify-content: center;
}

.platform {
  border: 1px transparent black;
}</style>