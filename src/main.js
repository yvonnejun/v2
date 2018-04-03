// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Element from 'element-ui'
import $api from './api/apiconfig'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/less/common.less'


Vue.config.productionTip = false
Vue.use(Element)  // 全局注册elementui
Vue.use(VueAxios,axios)  
// Vue.use($api)  


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.prototype.$api = $api;

