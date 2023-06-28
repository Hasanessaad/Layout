import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Modelo from '../views/Modelo/Modelo.vue'
import Movimentacao from '../views/Movimentacao/Movimentacao.vue'
import Veiculo from '../views/Veiculo/Veiculo.vue'
import Condutor from '../views/Condutor/Condutor.vue'
import Marca from '../views/Marca/Marca.vue'
import Modeloformcadastrar from '../views/Modelo/Modeloform-Cadastrar.vue'
import Marcaformcadastrar from '../views/Marca/Marcaform-cadastrar.vue'
import Condutorformcadastrar from '../views/Condutor/Condutorform-cadastrar.vue'
import Movimentacaoformcadastrar from '../views/Movimentacao/Movimentacaoform-Cadastrar.vue'
import Veiculoformcadastrar from '../views/Veiculo/Veiculoform-Cadastrar.vue'
import Configuracao  from '../views/Configuracao/Configuracao.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path:"/configuracao",
    name:"Configuracao",
    component:Configuracao
  },
  {
    path: '/configuracaoformcadastrar',
    name: 'Configuracaoformcadastrar',
    component: () => import('../views/Configuracao/Configuracaform-cadastrar.vue'),
    children:[
      {
        path: '/configuracaoformedit',
        name:'Configuracaoformedit',
        component: () => import('../views/Configuracao/Configuracaform-cadastrar.vue')
      },
      {
        path: '/configuracaoformexcluir',
        name:'Configuracaoformexcluir',
        component: () => import('../views/Configuracao/Configuracaform-cadastrar.vue')
      }
    ]
  },
  {
    path: '/modelo',
    name: 'Modelo',
    component: Modelo
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
      }
    ]
  },
  {
    path: '/movimentacao',
    name: 'Movimentacao',
    component: Movimentacao
  },
  {
    path:'/movimentacaoformcadastrar',
    name:'Movimentacaoformcadastrar',
    component: Movimentacaoformcadastrar,
    children:[
      {
        path:'/movimentacaoformeditar',
        name:'Movimentacaoformedit',
        component: () => import('../views/Movimentacao/Movimentacaoform-Cadastrar.vue')
      },
      {
        path:'/movimentacaoformexcluir',
        name:'Movimentacaoformexcluir',
        component: () => import('../views/Movimentacao/Movimentacaoform-Cadastrar.vue')
      },
      {
        path:'/movimentacaoformfinalizar',
        name:'Movimentacaoformfinalizar',
        component: () => import('../views/Movimentacao/Movimentacaoform-Cadastrar.vue')
      }
    ]
  },
  {
    path: '/marca',
    name: 'Marca',
    component: Marca
  },
  {
    path:'/marcaformcadastrar',
    name:'Marcaformcadastrar',
    component: Marcaformcadastrar,
    children: [
      {
        path: '/marcaformedit',
        name:'Marcaformedit',
        component: () => import(/* webpackChunkName: "modelo" */'../views/Marca/Marcaform-cadastrar.vue')
      },
      {
        path:'/marcaformexcluir',
        name:'Marcaformexcluir',
        component: () => import(/* webpackChunkName: "modelo" */'../views/Marca/Marcaform-cadastrar.vue')
      }
    ]
  },
  {
    path: '/veiculo',
    name:'Veiculo',
    component: Veiculo
  },
  {
    path: '/veiculoformcadastrar',
    name: 'Veiculoformcadastrar',
    component: Veiculoformcadastrar,
    children:[
      {
        path:'/veiculoformedit',
        name:'Veiculoformedit',
        component:()=>import('../views/Veiculo/Veiculoform-Cadastrar.vue')
      },
      {
        path:'/veiculoformexcluir',
        name:'Veiculoformexcluir',
        component:()=>import('../views/Veiculo/Veiculoform-Cadastrar.vue')
      }
    ]
  },
  {
    path:'/condutor',
    name:'Condutor',
    component: Condutor
  },
  {
    path: '/condutorformcadastrar',
    name: 'Condutorformcadastrar',
    component: Condutorformcadastrar,
    children:[
      {
        path:'/condutorformedit',
        name:'Condutorformedit',
        component: () => import('../views/Condutor/Condutorform-cadastrar.vue')
      },
      {
        path:'/condutorformexcluir',
        name:'Condutorformexcluir',
        component: () => import('../views/Condutor/Condutorform-cadastrar.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
