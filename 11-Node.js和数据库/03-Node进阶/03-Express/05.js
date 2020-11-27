// 引入express框架
const express = require('express');
const fs = require('fs');
// 创建网站服务器
const app = express();

// 同步代码出错
app.get('/index', (req, res, next) => {
    throw new Error('程序发生了错误new Error');
    res.send('程序发生了错误')
})

// 异步代码出错
app.get('/login', (req, res, next) => {
    fs.readFile('./01.js','utf-8', (err, result) => {
        if(err != null){
            next(err);
        }else{
            res.send(result);
        }
    })
})
// 错误处理中间件
app.use((err, req, res, next) => {
    // err.message保存的是new Error()中的信息
    res.status(500).send(err.message);
})
app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/');