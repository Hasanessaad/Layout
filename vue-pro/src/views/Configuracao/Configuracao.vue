<template>
    
        <div class="row">
            <div class="col-md-10 text-start">
                <h2 class="fs-3">Listar Configurações</h2>
            </div>
            <div class="col-md-2 d-grid gap-2">
                <router-link to="/configuracaoformcadastrar" type="button" class="btn btn-primary">Cadastrar</router-link>
            </div>
        </div>
        <div>
            <div>
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nº</th>
                            <th scope="col">ATIVO</th>
                            <th scope="col">VALOR HORA</th>
                            <th scope="col">TEMPO PARA DESCONTO</th>
                            <th scope="col">TEMPO DE DESCONTO</th>
                            <th scope="col">VALOR MINUTO MULTA</th>
                            <th scope="col">VAGAS MOTO</th>
                            <th scope="col">VAGAS CARRO</th>
                            <th scope="col">VAGAS VAN</th>
                            <th scope="col">INICIO EXPEDIENTE</th>
                            <th scope="col">FIM EXPEDIENTE</th>
                            <th scope="col">GERENCIAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in configuracaoList" :key="item.id">
                            <th>{{ item.id }}</th>
                            <th>
                                <span v-if="item.active" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.active" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th>{{ item.valorHora }}</th>
                            <th>{{ item.tempoParaDesconto }}</th>
                            <th>{{ item.tempoDeDesconto }}</th>
                            <th>{{ item.valorMinutoMulta }}</th>
                            <th>{{ item.vagasMoto }}</th>
                            <th>{{ item.vagasCarro }}</th>
                            <th>{{ item.vagasVan }}</th>
                            <th>{{ item.inicioExpediente }}</th>
                            <th>{{ item.fimExpediente }}</th>

                            <th class="col-md-2">
                                <div>
                                    <router-link type="button"
                                        :to="{ name: 'Configuracaoformedit', query: { id: item.id, form: 'edit' } }"><button
                                            submit="" class="choose">Editar</button>
                                    </router-link>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { Configuracao } from '@/model/configuracao';
import ConfiguracaoClient from '@/client/ConfiguracaoClient';


export default defineComponent({
    name: 'ConfiguracaoLista',
    data() {
        return {
            configuracaoList: new Array<Configuracao>()
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {

        findAll() {
            ConfiguracaoClient.findAll()
                .then(sucess => {
                    this.configuracaoList = sucess;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
});
</script>

<style lang="scss">
.text-menor {
    font-size: 14px;
}
</style>