// 搭建网站服务器，实现客户端与服务器端的通信
// 连接数据库，创建用户集合，向集合中插入文档
// 当用户访问/list时，将所有用户信息查询出来
// 	实现路由功能
// 	呈现用户列表页面
// 	从数据库中查询用户信息 将用户信息展示在列表中
// 将用户信息和表格HTML进行拼接并将拼接结果响应回客户端
// 当用户访问/add时，呈现表单页面，并实现添加用户信息功能
// 当用户访问/modify时，呈现修改页面，并实现修改用户信息功能
// 	修改用户信息分为两大步骤
// 		1.增加页面路由 呈现页面
// 			1.在点击修改按钮的时候 将用户ID传递到当前页面
// 			2.从数据库中查询当前用户信息 将用户信息展示到页面中
// 		2.实现用户修改功能
// 			1.指定表单的提交地址以及请求方式
// 			2.接受客户端传递过来的修改信息 找到用户 将用户信息更改为最新的
// 当用户访问/delete时，实现用户删除功能

const http = require('http');
const mongoose = require('mongoose');

// 数据库连接 'mongodb://localhost:27017' 27017是数据库的默认端口
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))

// 创建用户集合规则
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:2,
        maxlength:20
    },
    age:{
        type:Number,
        min:18,
        max:80
    },
    password:String,
    email:String,
    hobbies:[String]
});

mongoose.model('User', userSchema);

const url = require('url');
const querystring = require('querystring');

// 创建服务器
const app = http.createServer();

// 为服务器对象添加请求事件
app.on('require', (req, res) => {
    res.end('ok');
})

// 监听端口
app.listen(3000)
console.log('网站服务器启动http://localhost:3000')