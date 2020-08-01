import Vue from 'vue';
// 导入路由
import Router from 'vue-router';
// 1.1 安装 vue-router
Vue.use(Router)
// 注册vuex
import Vuex from 'Vuex';
// 安装 
Vue.use(Vuex)

// 每次刚进入网站，会调用 main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store 中
var car = JSON.parse(localStorage.getItem('car' || '[]'));
var store = new Vuex.Store({
    state: { //this.$store.state.***
        car: car //购物车商品的数据，在car数组存储一些商品的对象
        //  {id:"",count:要购买的数量，price:商品的单价，selected:false}
    },
    mutations: { //this.$store.commi("方法的名称"，'按需传递唯一的参数')
        addToCar(state, goodsinfo) {
            // 点击加入购物车，把商品信息，保存到 store 中的 car 上
            // 分析：
            // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
            // 2. 如果没有，则直接把 商品数据，push 到 car 中即可

            // 假设在购物车中，没有找到对应的商品
            var flag = false;
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            })
            // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
            if(!flag){
                state.car.push(goodsinfo);
            }
            // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsInfo(state, goodsinfo){
            // 修改购物车中商品的数量值
            // 分析
            state.car.some(item => {
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count);
                    return true;
                }
            })
            // 当修改完商品的数量，把最新的购物车数据，保存到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormat(state, id){
            // 根据id，从store中的购物车删除对应的那条商品数据
            state.car.some((item, i) => {
                if(item.id == id){
                    state.car.splice(i, 1);
                    return true;
                }
            })
            // 当删除完商品的数据，把最新的购物车数据，保存到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsSelected(state, info) {
            // 更新购物车选中状态
            state.car.some(item =>{
                if(item.id == info.id){
                    item.selected = info.selected;
                }
            })
            // 当点击购物车按钮时，把最新的购物车商品状态，保存到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: { //this.$store.getters.***
        getAllCount(state){
            var c = 0;
            state.car.forEach(item => {
                c +=item.count;
            });
            return c;
        },
        getGoodsCount(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.count;
            })
            return o;
        },
        getGoodsSelected(state) {
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.selected;
            })
            return o;
        },
        getGoodsCountAndAmount(state){
            var o = {
                count: 0,//勾选的数量
                amount: 0 //勾选的总价
            };
            state.car.forEach(item => {
                if(item.selected){
                    o.count += item.count;
                    o.amount += item.price * item.count;
                }
            })
            return o;
        }
    }
})
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
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
})
// 3.1设置请求的根路径
Vue.http.options.root = "http://api.cms.liulongbin.top/"
// 全局设置 post 时候表单数据格式组织形式 
Vue.http.options.emulateJSON = true;
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
    render: c => c(app),
    router, //挂载路由
    store //挂载vuex
})