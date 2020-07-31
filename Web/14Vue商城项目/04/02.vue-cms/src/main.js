import Vue from 'vue';
// 导入路由
import Router from 'vue-router';
// 1.1 安装 vue-router
Vue.use(Router)
// 导入vue-resource
import VueRouter from 'vue-resource';
// 2.2 安装 vue-resource
Vue.use(VueRouter)
// 导入时间插件
import moment from 'moment';
// 安装vue-preview图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// 定义全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
})
// 3.1设置请求的根路径
Vue.http.options.root = "http://api.cms.liulongbin.top/"
// 全局设置 post 时候表单数据格式组织形式 
Vue.http.options.emulateJSON=true;
// 按需引入部分组件
// import { Header} from 'mint-ui';
// Vue.component(Header.name, Header);
// // 轮播图
// import { Swipe, SwipeItem, Button, Lazyload  } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
// 全部导入 min-ui
import MintUI from 'mint-ui';
Vue.use(MintUI);
// 导入mui的样式
import 'mint-ui/lib/style.css'
// 导入min-ui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// 导入自己的路由模块
import router from './router.js'
// 导入App组件
import app from './App.vue'

var vm = new Vue({
    el: "#app", 
    render: c => c(app) ,
    router //挂载路由
})
