// 引入express框架
const express = require('express');

// 创建网站服务器
const app = express();
app.get('/', (req, res) => {
    // send()
    // 1.send()方法内部会检测响应内容的类型
    // 2.send()方法会自动设置http状态码
    // 3.send()方法会帮我们自动设置响应的内容类型及编码
    res.send('Hello Repress');
});

// 访问不到路由时 提示Cannot GET /list
app.get('/list', (req,res) => {
    res.send({name:'小明',age:20})
})

app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/')