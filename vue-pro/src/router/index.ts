import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/movimentacao',
    name: 'movimentacao',
    component: () => import(/* webpackChunkName: "movi" */'../views/Movimentacao.vue')
  },

  {
    path: '/marca',
    name: 'marca',
    component: () => import(/* webpackChunkName: "marca" */'../views/Marca.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
