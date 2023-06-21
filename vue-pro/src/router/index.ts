import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Modelo from '../views/Modelo/Modelo.vue'
import Movimentacao from '../views/Movimentacao/Movimentacao.vue'
import Veiculo from '../views/Veiculo/Veiculo.vue'
import Condutor from '../views/Condutor/Condutor.vue'
import Modeloformcadastrar from '../views/Modelo/Modeloform-Cadastrar.vue'
import Marca from '../views/Marca/Marca.vue'
import Marcaformcadastrar from '../views/Marca/Marcaform-cadastrar.vue'

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
        component: () => import('../views/Modelo/Modeloform-Cadastrar.vue')
      },
      {
        path: '/modeloformexcluir',
        name:'Modeloformexcluir',
        component: () => import('../views/Modelo/Modeloform-Cadastrar.vue')
      },
    ],
  },
  {
    path: '/movimentacao',
    name: 'Movimentacao',
    component: Movimentacao
  },
  {
    path: '/marca',
    name: 'Marca',
    component: Marca,
  },
  {
    path:'/marcaformcadastrar',
    name:'Marcaformcadastrar',
    component: Marcaformcadastrar,
    children: [
      {
        path: '/marcaformedit',
        name:'Marcaformedit',
        component: () => import(/* webpackChunkName: "marca" */'../views/Marca/Marcaform-cadastrar.vue')
      },
      {
        path:'/marcaformexcluir',
        name:'Marcaformexcluir',
        component: () => import(/* webpackChunkName: "marca" */'../views/Marca/Marcaform-cadastrar.vue')
      }
    ]
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
