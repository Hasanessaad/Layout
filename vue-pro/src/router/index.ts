import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Modelo from '../views/Modelo.vue'
import Movimentacao from '../views/Movimentacao.vue'
import Veiculo from '../views/Veiculo.vue'
import Condutor from '../views/Condutor.vue'
import Opcao from '../views/Opcao.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/modelo',
    name: 'modelo',
    component: Modelo  
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
