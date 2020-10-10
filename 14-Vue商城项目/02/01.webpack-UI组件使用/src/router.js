import VueRouter from 'vue-router'
// 导入 Account 组件
import account from './main/Account.vue'
import goodslist from './main/Goodslist.vue'
// 导入Account的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'
// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        {
            path:'/account',
            component:account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register}
            ]
        },
        {path:'/goodslist',component:goodslist}
    ]
})
// 把路由对象暴露出去
export default router