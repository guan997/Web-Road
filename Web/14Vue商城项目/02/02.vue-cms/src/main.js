console.log('ok')
import Vue from 'vue';
// 按需引入部分组件
import { Header} from 'mint-ui';
Vue.component(Header.name, Header);
// 导入mui的样式
import './lib/mui/css/mui.css'
// 导入App组件
import app from './App.vue'

var vm = new Vue({
    el: "#app",
    render: c => c(app)
})
