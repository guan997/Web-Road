// 引入http模块 
const http = require('http');

// 引入模板引擎
const template = require('art-template');

// 引入path模板
const path = require('path');

// 引入静态资源访问模块
const serveStatic = require('serve-static');

// 引入处理日期的第三方模块
const dateformat = require('dateformat');

// 引入自定义路由模块
const router = require('./route/index')

// 引入静态资源访问服务
const serve = serveStatic(path.join(__dirname, 'public'));

//  配置模板的根目录
template.defaults.root = path.join(__dirname, 'views');

// 处理日期格式的方法
template.defaults.imports.dateformat = dateformat; 

// 引入分离出去的数据库模块 后缀名可以省略
require('./model/connect')

// 学生信息集合
const Student = require('./model/user')

// 创建网站服务器
const app = http.createServer();

// 当客户端访问服务端的时候
app.on('request', (req, res) => {
    // 启用路由功能
    router(req, res, () => {});
    // 启用静态资源访问服务
    serve(req, res, () => {})
})
// 端口监听
app.listen(80);
console.log('服务器启动成功：http://localhost:80/')