// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter) // VueRouterを使うことをVueに知らせる

const router = new VueRouter(routes) // ルーターインスタンスの作成

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
