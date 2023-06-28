<template>
  <h2>Cadastrar Movimentacao</h2>
  <hr>
  <div v-if="mensagem.active" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>
  <h5 class="labeling">Entrada</h5>
  <div class="input-group mb-3">
    <input v-if="form !== 'deletar'" type="datetime-local" v-model="movimentacao.enter" class="form-control" placeholder="ID do veiculo" aria-label="nome" aria-describedby="button-addon2" required>
  </div>
  <h5 class="labeling">Saida</h5>
  <div class="input-group mb-3">
    <input v-if="form !== 'deletar'" type="datetime-local" v-model="movimentacao.exit" class="form-control" placeholder="ID do veiculo" aria-label="nome" aria-describedby="button-addon2" required>
  </div>
  <div class="row">
    <h5 v-if="form !== 'deletar'" class="labeling">Placa do veiculo</h5>
    <div class="col-md-12 text-start">
      <select v-if="form !== 'deletar'" v-model="movimentacao.vehicleId" class="form-select">
        <option v-for="item in veiculo" :value="item"> {{ item.id }} {{ item.plate }}</option>
      </select>
    </div>
    <h5 v-if="form !== 'deletar'" class="labeling">nome do cliente</h5>
    <div class="col-md-12 text-start">
      <select v-if="form !== 'deletar'" v-model="movimentacao.conductorId" class="form-select">
        <option v-for="item in Condutor" :value="item"> {{ item.id }} {{ item.name }} </option>
      </select>
    </div>
  </div>  
  <div class="input-group mb-3">
    <button class="btn btn-outline-secondary" type="button" v-if="form === undefined" @click="onClickCadastrar()"
      id="button-addon2">Adicionar</button>
    <button class="btn btn-outline-secondary" type="button" v-if="form === 'edit'" @click="onClickEdit()"
      id="button-addon2">Editar</button>
    <button class="btn btn-outline-secondary" type="button" v-if="form === 'deletar'" @click="onClickDeletar()"
      id="button-addon2">Deletar</button>
    <router-link to="/movimentacao"><button class="btn btn-outline-secondary" type="button"
        id="button-addon2">voltar</button></router-link>
  </div>
</template>

<script lang="ts">
import MovimentacaoClient from '@/client/MovimentacaoClient';
import VeiculoClient from '@/client/VeiculoClient';
import CondutorClient from '@/client/CondutorClient';
import { Movimentacao } from '@/model/movimentacao';
import { Veiculo } from '@/model/veiculo';
import { Condutor } from "@/model/condutor";
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Movimentacaoformcadastrar",
  data() {
    return {
      movimentacao: new Movimentacao(),
      mensagem: {
        active: true as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      },
      veiculo: new Array<Veiculo>(),
      Condutor: new Array<Condutor>()
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
    this.findAllCliente();
    this.findAll();
  },
  methods: {
    findAllCliente(){
      CondutorClient.findAll()
      .then(sucess => {
          this.Condutor = sucess;
        })
        .catch(Error => {
          console.log(Error);
        })
    },
    findAll() {
      VeiculoClient.findAll()

        .then(sucess => {
          this.veiculo = sucess;
        })
        .catch(Error => {
          console.log(Error);
        })
    },

    onClickCadastrar() {
      console.log(this.veiculo)
      MovimentacaoClient.cadastrar(this.movimentacao) // Access the brandId.id value
        .then(sucess => {
          this.movimentacao = new Movimentacao()
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
      MovimentacaoClient.findById(id)
        .then(sucess => {
          this.movimentacao = sucess;
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
      MovimentacaoClient.edit(this.movimentacao.id, this.movimentacao)
        .then(sucess => {
          this.movimentacao = new Movimentacao()
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
      MovimentacaoClient.deletar(this.movimentacao.id)
        .then(sucess => {
          this.movimentacao = new Movimentacao()
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