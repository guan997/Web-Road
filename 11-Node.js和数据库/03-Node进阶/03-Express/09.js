// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

app.get('/index', (req, res) => {
    // 接收get请求参数
    res.send(req.query);
});

app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/');