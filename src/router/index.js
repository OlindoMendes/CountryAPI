import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryDetailsView from '../views/CountryDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/country/:name',
    name: 'country-detail',
    component: CountryDetailsView,
    props:true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
