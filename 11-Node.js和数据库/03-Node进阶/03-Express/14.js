// 引入express框架
const express = require('express');
const path = require('path');
// 创建网站服务器
const app = express();

// 1.告诉express框架使用什么模板引擎渲染什么后缀的模板文件
//  1.模板后缀
//  2.使用的模板名称
app.engine('art', require('express-art-template'));
// 2.告诉express框架模板存放的位置是什么 'views'是模板固定的名称 目录
app.set('views', path.join(__dirname, 'views'));
// 3.告诉express框架模板的默认后缀是什么 'view engine'模板 后缀
app.set('view engine', 'art')

app.get('/', (req, res) => {
	// 1. 拼接模板路径
	// 2. 拼接模板后缀
	// 3. 哪一个模板和哪一个数据进行拼接
    // 4. 将拼接结果响应给了客户端 
    // 渲染模板  
    res.render('index', {
        msg: 'message'
    }) 
})

app.get('/list213', (req, res) => {
    res.render('list', {
        msg: 'list page'
    })
})
app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/');