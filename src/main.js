// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './config/routes'
import config from './config/config'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
/* eslint-disable no-new */
new Vue({
  router,
  config,
  el: '#app',
  template: '<App/>',
  components: { App }
})
