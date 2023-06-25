<template>
    <h2 v-if="form === 'edit'">Editar Marca</h2>
    <h2 v-if="form === undefined">Cadastrar Marca</h2>
    <h2 v-if="form === 'deletar'">Deletar Marca</h2>
    <hr>
    <div v-if="mensagem.active" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>
    <hr>
    <h5 class="labeling" v-if="form === 'edit'">Numero do ID</h5>
    <input type="text" v-if="form === 'edit'" class="form-control" placeholder="ID" v-model="marca.id" aria-label="Recipient's username" aria-describedby="button-addon2">
    <hr v-if="form === 'edit'">
    <h5 class="labeling" v-if="form === 'deletar'">Numero do ID</h5>
    <input type="text" v-if="form === 'deletar'" class="form-control" placeholder="ID" v-model="marca.id" aria-label="Recipient's username" aria-describedby="button-addon2">
    <h5 class="labeling" v-if="form !== 'deletar'">Nome da Marca</h5>
    <div class="input-group mb-3">     
      <input type="text" class="form-control" placeholder="nome" v-if="form !== 'deletar'" v-model="marca.name" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" v-if="form === undefined" @click="onClickCadastrar()" id="button-addon2">Adicionar</button>
      <button class="btn btn-outline-secondary" type="button" v-if="form === 'edit'" @click="onClickEdit()" id="button-addon2">Editar</button>
      <button class="btn btn-outline-secondary" type="button" v-if="form === 'deletar'" @click="onClickDeletar()" id="button-addon2">Deletar</button>
      <router-link to="/marca"><button class="btn btn-outline-secondary" type="button" id="button-addon2">voltar</button></router-link>
    </div>
</template>

<script lang="ts">

import MarcaClient from '@/client/MarcaClient';
import { Marca } from "@/model/marca";
import { defineComponent } from 'vue';

export default defineComponent({
  name:"Marcaformcadastrar",
  data(){
    return{
      marca: new Marca(),
      mensagem: {
        active: true as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      }
    }
  },
  computed:{
    id(){
      return this.$route.query.id
    },
    form(){
      return this.$route.query.form
    }
  },
  mounted(){
    if(this.id !== undefined){
      this.findById(Number(this.id));
    }
  },
  methods:{
    onClickCadastrar(){
        console.log(this.marca)
        MarcaClient.cadastrar(this.marca)
      .then(sucess => {
        this.marca = new Marca()
        this.mensagem.active = true;
        this.mensagem.mensagem = "sucess";
        this.mensagem.titulo = "Parabens. ";
        this.mensagem.css = "alert alert-success alert-dismissible fade show";
      })
      .catch(error => {
        this.mensagem.active = true;
        this.mensagem.mensagem = "error";
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
    },
    findById(id: number){
      MarcaClient.findById(id)
        .then(sucess => {
          this.marca = sucess
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
    onClickEdit(){
      MarcaClient.edit(this.marca.id , this.marca)
      .then(sucess => {
        this.marca = new Marca()
        
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
    onClickDeletar(){
      MarcaClient.deletar(this.marca.id)
      .then(sucess => {
        this.marca = new Marca()
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