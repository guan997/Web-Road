// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
// 创建web服务器
const app = express();

app.use(bodyParser.json());

// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

app.get('/first', (req, res) => {
    res.send('Hello Ajax')
})

app.get('/responseData', (req, res) => {
    res.send({"name":"小明"})
})

app.get('/get', (req, res) => {
    res.send(req.query)
})
// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');