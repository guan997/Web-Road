// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 创建web服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

app.get('/base', (req, res) => {
    res.send({
        name: 'xiaoming',
        age: 30
    })
})
app.post('/base', (req, res) => {
    res.status(400).send({
        name: 'xiaoming',
        age: 30
    })
})
app.get('/user', (req, res) => {
    res.send(req.query)
})
app.post('/user', (req, res) => {
    res.send(req.query)
})

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功:http://localhost:3000/');