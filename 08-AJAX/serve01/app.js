// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
// 创建web服务器
const app = express();
//使用bodyParser.urlencoded(),使node后台支持了第一种请求体.
app.use(bodyParser.urlencoded());//extended: true
//使用bodyParser.json(),使node后台支持了第二种请求体.
app.use(bodyParser.json());

// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));
// 对应01.html
app.get('/first', (req, res) => {
    res.status(400).send('Hello Ajax')
})
// 对应02.html
app.get('/responseData', (req, res) => {
    res.send({"name":"小明"})
})
// 对应03.html
app.get('/get', (req, res) => {
    res.send(req.query)
})
// 对应04.html
app.post('/post', (req, res) => {
    res.send(req.body)
})
// 对应05.html
app.post('/json', (req, res) => {
    res.send(req.body)
})
// 对应06.html
app.get('/readystate', (req, res) => {
    res.send('hello')
})
// 对应07.html
app.get('/error', (req, res) => {
    res.status(400).send('not ok')
})
// 对应08.html
app.get('/cache', (req, res) => {
    fs.readFile('./test.txt',(err, result) => {
        res.send(result)
    })
})
// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功 http://localhost:3000/');