import Vue from 'vue';
// 导入路由
import Router from 'vue-router';
// 1.1 安装 vue-router
Vue.use(Router)
// 导入vue-resource
import VueRouter from 'vue-resource';
// 2.2 安装 vue-resource
Vue.use(VueRouter)
// 按需引入部分组件
import { Header} from 'mint-ui';
Vue.component(Header.name, Header);
// 轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 导入mui的样式
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
