// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueResource from 'vue-resource' // 要屏蔽掉这个插件，否则报错，$http不存在
import Element from 'element-ui'
import $api from './api/apiconfig'
import './directives/directive'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/animate.css'
import './assets/less/common.less'
import Loading from './components/loading' // 自定义全局组件导入

Vue.config.productionTip = false
Vue.use(Element)  // 全局注册elementui
Vue.use(VueAxios,axios) 
Vue.use(Loading)   //必须有install 

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.prototype.$api = $api;

