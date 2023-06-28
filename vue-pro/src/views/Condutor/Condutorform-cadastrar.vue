<template>
    <h2 v-if="form === undefined">Cadastrar Condutor</h2>
    <h2 v-if="form === 'deletar'">Deletar Condutor</h2>
    <h2 v-if="form === 'edit'">Editar Condutor</h2>
    <hr>
    <div v-if="mensagem.active" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>
    <h5 class="labeling" v-if="form !== undefined">ID do Cliente</h5>
    <input type="text" class="form-control" v-if="form === 'deletar'" v-model="condutor.id" placeholder="ID" aria-label="Recipient's username" aria-describedby="button-addon2">
    <input type="text" class="form-control" v-if="form === 'edit'" v-model="condutor.id" placeholder="ID" aria-label="Recipient's username" aria-describedby="button-addon2">
    <h5 class="labeling" v-if="form !== 'deletar'">Nome do cliente</h5>
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-if="form !== 'deletar'" placeholder="nome"  v-model="condutor.name" aria-label="Recipient's username" aria-describedby="button-addon2">
      <input type="text" class="form-control" v-if="form !== 'deletar'" v-model="condutor.cpf" placeholder="CPF" aria-label="Recipient's username" aria-describedby="button-addon2">
      <input type="text" class="form-control" v-if="form !== 'deletar'" v-model="condutor.telephone" placeholder="Telefone" aria-label="Recipient's username" aria-describedby="button-addon2">
    </div>
    <div class="input-group mb-3">
      <button class="btn btn-outline-secondary" v-if="form === undefined" @click="onClickCadastrar()" type="button" id="button-addon2">Adicionar</button>
      <button class="btn btn-outline-secondary" v-if="form === 'edit'" type="button" @click="onClickEdit()" id="button-addon2">Editar</button>
      <button class="btn btn-outline-secondary" v-if="form === 'deletar'" @click="onClickDeletar()" type="button" id="button-addon2">Deletar</button>
      <router-link to="/condutor"><button class="btn btn-outline-secondary" type="button" id="button-addon2">voltar</button></router-link>
    </div>
</template>

<script lang="ts">
import ConductorClient from '@/client/CondutorClient';
import { Condutor } from '@/model/condutor';
import { defineComponent } from 'vue';

export default defineComponent({
  name:"Condutorformcadastrar",
  data() {
    return {
      condutor: new Condutor(),
      mensagem: {
        active: true as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      },
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
  },
  methods: {
    onClickCadastrar() {
      console.log(this.condutor)
      ConductorClient.cadastrar(this.condutor) // Access the brandId.id value
        .then(sucess => {
          this.condutor = new Condutor()
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
      ConductorClient.findById(id)
      .then(sucess => {
        this.condutor = sucess;
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
      ConductorClient.edit(this.condutor.id, this.condutor)
        .then(sucess => {
          this.condutor = new Condutor()
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
      ConductorClient.deletar(this.condutor.id)
        .then(sucess => {
          this.condutor = new Condutor()
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