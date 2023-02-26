import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue3 from 'bootstrap-vue-3'

// Since every component imports their Bootstrap functionality,
// the following line is not necessary:
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

createApp(App).use(store).use(router).use(BootstrapVue3).mount('#app')
