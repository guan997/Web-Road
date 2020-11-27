// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

// 路由传递参数
app.get('/find/:id/:name/:age', (req, res) => {
    res.send(req.params);
})

app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/');