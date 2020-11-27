// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();
// 创建路由对象
const home = express.Router();
// 为路由对象匹配请求路径
app.use('/home',home);
  // 在home路由下继续创建路由
home.get('/index', (req, res, next) => {
     //  home/index
    res.send('欢迎来到博客首页页面');
})

app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/');