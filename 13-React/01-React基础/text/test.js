// 引入express框架
const express = require('express');

const router = express.Router();
const cors = require('cors');//跨域访问

const fs = require('fs');
// 创建网站服务器
const app = express();
app.use(cors());
const path = require('path');
//json文件所在路径
const stuAdd = '/user.json';

// 获取数据
app.get('/', function (req, res) {
    //读取文件，并返回给浏览器
    fs.readFile(path.join(__dirname + stuAdd), 'utf8', function (err, data) {
        if (err) {
            return res.send(err)
        }
        res.status(200).send(data)
    })
})
app.listen(3300);
console.log('网站服务器启动成功: http://localhost:3300/')