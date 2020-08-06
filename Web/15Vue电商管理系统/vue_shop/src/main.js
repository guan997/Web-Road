import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'  
// 导入全局样-式
import global from './assets/css/global.css'
// 导入字体图标
import iconfont from './assets/fonts/iconfont.css'
import axios from 'axios'
// 配置请求的路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
