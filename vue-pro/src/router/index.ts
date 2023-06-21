import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Modelo from '../views/Modelo.vue'
import Movimentacao from '../views/Movimentacao.vue'
import Veiculo from '../views/Veiculo.vue'
import Condutor from '../views/Condutor.vue'
import Opcao from '../views/Opcao.vue'
import Modeloformedit from '../views/Modeloform-Editar.vue'
import Modeloformcadastrar from '../views/Modeloform-Cadastrar.vue'
import Modeloformexcluir from '../views/Marcaform-Excluir.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/modelo',
    name: 'modelo',
    component: Modelo,
  },
  {
    path: '/modeloformcadastrar',
    name: 'Modeloformcadastrar',
    component: Modeloformcadastrar,
    children:[
    {
      path: '/modeloformedit',
      name:'Modeloformedit',
      component: Modeloformedit
    },
    {
      path: '/modeloformexcluir',
      name:'Modeloformexcluir',
      component: Modeloformexcluir
    }
  ]
},
  {
    path: '/movimentacao',
    name: 'Movimentacao',
    component: Movimentacao  
  },

  {
    path: '/marca',
    name: 'marca',
    component: () => import(/* webpackChunkName: "marca" */'../views/Marca.vue')
  },
  {
    path: '/veiculo',
    name:'Veiculo',
    component: Veiculo
  },
  {
    path:'/condutor',
    name:'condutor',
    component: Condutor
  },
  {
    path: '/opcao',
    name: 'Opcao',
    component: Opcao
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
