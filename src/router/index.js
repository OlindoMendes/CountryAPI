import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryDetails from '../views/CountryDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:country',
    name: 'country-detail',
    component: CountryDetails,
    props: true,
    meta: {
      title: 'REST API Countries App'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
