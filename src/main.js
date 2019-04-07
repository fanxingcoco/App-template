// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import 'lib-flexible'
import '../static/reset.css'
import '../static/iconfont.css'
Vue.prototype.$http = axios
axios.defaults.withCredentials = true

Vue.use(VueCookies)
// Vue.use(Vuex)
// Vue.prototype.$http.withcredentials = true
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
