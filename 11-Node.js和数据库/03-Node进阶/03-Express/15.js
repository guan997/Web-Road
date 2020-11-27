// 引入express框架
const express = require('express');
const path = require('path');
// 创建网站服务器
const app = express();

app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art')

app.locals.users = [{
    name:'小明',
    age:22
},{
    name:'小米',
    age:18
}]

app.get('/', (req, res) => { 
    res.render('index', {
        msg: 'index'
    }) 
})

app.get('/list213', (req, res) => {
    res.render('list', {
        msg: 'list page'
    })
})
app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/');