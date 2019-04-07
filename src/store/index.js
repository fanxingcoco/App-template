import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations
})

var app = {
  initialize: function () {
    this.bindEvents()
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  onDeviceReady: function () {
    checkAppUpdate()
  }
}
function checkAppUpdate () {
  var updateUrl = ''
  window.AppUpdate.checkAppUpdate(onSuccess, onFail, updateUrl)
  function onFail () {}
  function onSuccess () {}
}
app.initialize()
