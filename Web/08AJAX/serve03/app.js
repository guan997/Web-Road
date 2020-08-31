// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
const request = require('request');
// 创建web服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

app.get('/serve', (req, res) => {
	request('http://localhost:3001/cross', (err, response, body) => {
		// console.log(err)
		// console.log(response)
		// console.log(body)
		res.send(body)
	})
})

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功:http://localhost:3000/');