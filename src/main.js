// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  axios from './libs/axios'
import  axios1 from './libs/axios.1'
import  apolloProvider from './libs/vue-apollo'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$axios1 = axios1

Vue.use(VueApollo)

/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App },
  provide: apolloProvider.provide(),  //需要添加这个
  template: '<App/>'
})

