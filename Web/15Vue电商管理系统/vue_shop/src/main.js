import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'  
// 导入全局样-式
import global from './assets/css/global.css'
// 导入字体图标
import iconfont from './assets/fonts/iconfont.css'
import TreeTable from 'vue-table-with-tree-grid'
// 导入富文本vue-quill-editor插件
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
import axios from 'axios'
// 配置请求的路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 在设置http之前为axios添加拦截器
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem("token")
  // config.header.Auth
  return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table',TreeTable)

Vue.use(VueQuillEditor)
// 时间过滤器
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  // 设置月份格式，padStart(2, '0')不是两位数的补0
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh =  (dt.getHours() + '').padStart(2, '0')
  const mm =  (dt.getMinutes() + '').padStart(2, '0')
  const ss =  (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
