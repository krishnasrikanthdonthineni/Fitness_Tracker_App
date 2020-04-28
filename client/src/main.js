import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css'
import VueGoogleCharts from 'vue-google-charts'
import VueScrollTo  from 'vue-scrollto'

Vue.use(VueGoogleCharts)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
