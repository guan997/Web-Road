// 引入http模块 
const http = require('http');
// 引入分离出去的数据库模块 后缀名可以省略
require('./model/connect')
// 引入模板引擎
// const template = require('art-template');
// // 引入path模板
// const path = require('path');
// // 引入静态资源访问模块
// const serveStatic = require('serve-static');
// // 引入处理日期的第三方模块
// const dateFormat = require('dateFormat');

// // const router = require('./route/index');
// // 引入静态资源访问服务
// const serve = serveStatic(path.join(__dirname, 'public'));
 
// 创建网站服务器
const app = http.createServer();
// 当客户端访问服务端的时候
app.on('request', (req, res) => {
    // 启用路由功能
    router(req, res, () => {

    })
})
// 端口监听
app.listen(80);
console.log('服务器启动成功：http://localhost:80/')