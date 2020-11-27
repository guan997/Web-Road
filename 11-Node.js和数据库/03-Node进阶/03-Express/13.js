// 引入express框架
const express = require('express');
const path = require('path');
// 创建网站服务器
const app = express();

// 静态资源访问
app.use('/static',express.static(path.join(__dirname, 'public')))

app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/');