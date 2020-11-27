// 引入express框架
const express = require('express');

// 创建网站服务器
const app = express();

// 网站公告
// 2.网站维护公告，在所有路由的最上面定义接收所有请求的中间件，直接为客户端做出响应，网站正在维护中。
// app.use((req, res, next) => {
//     res.send('网站正在维护...');
// })

// 请求的中间件
// 1.路由保护，客户端在访问需要登录的页面时，可以先使用中间件判断用户登录状态，
// 用户如果未登录，则拦截请求，直接响应，禁止用户进入需要登录的页面。
app.use('/admin', (req, res, next) => {
    // 用户没有登录
    var isLogin = false;
    // 如果已登录
    if(isLogin){
        // 让请求继续向下执行
        next();
    }else{
        // 如果用户没有登录 直接对客户端做出响应
        res.send('还未登录，请先登录');
    }
})
app.use('/admin', (req, res) => {
    res.send('欢迎光临，登录成功')
})

// 3.自定义404页面
app.use((req, res, next) => {
    // res.status(404);
    // 链式连接
    // 为客户端响应404状态码以及提示信息
    res.status(404).send('当前要访问的页面不存在了');
})

app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/');