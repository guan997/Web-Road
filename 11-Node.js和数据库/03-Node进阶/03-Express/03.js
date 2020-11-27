// 引入express框架
const express = require('express');

// 创建网站服务器
const app = express();

// 接受所有请求的中间件
app.use((req, res, next) => {
    console.log('请求了app.use中间件');
    next();
});
app.use('/request', (req, res, next) => {
    console.log('请求了app.use / request中间件');
    res.send(req.url);
    next();
});
app.use('/list', (req, res, next) => {
    console.log('list');
    res.send('list');
    next();
})
app.get('/request', (req, res, next) => {
    req.name = '小明';
    // next方法将请求的控制权交给下一个中间件，直到遇到结束请求的中间件
    next();
});

app.get('/request', (req,res) => {
    res.send(req.name)
});

app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/');