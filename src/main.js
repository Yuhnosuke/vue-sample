import Vue from 'vue'
import App from './app'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
