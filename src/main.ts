import Vue from 'vue'
import App from './App.vue'
import Page from './components/Page.vue'
import store from './store'
import router from './routers'
import './index.css'

Vue.component('page', Page)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
