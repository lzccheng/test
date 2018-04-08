// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require('../mock/mock.js')
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Store from './VuexStore'
import router from './router'
import footer from './components/footer/footer'
import Element from 'element-ui'



// import '@fortswesome/fontawesome-free-webfonts'

import './mock'
import './VuexStore'

axios.defaults.baseURL = '/addons/xiangding/dist/';
Vue.prototype.$axios = axios

Vue.use(Vuex)
Vue.use(Element)




const store = new Vuex.Store(Store)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
