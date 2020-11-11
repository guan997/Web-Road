// 1.引入系统模块http
// 2.创建网站服务器
// 3.为网站服务器对象添加请求事件
// 4.实现线路有功能
// 4.1获取客户端的请求方式
// 4.2 获取客户端的请求地址
const http = require('http');
const url = require('url');
const app = http.createServer();
app.on('request', (req, res) => {
    // 获取请求方式 toLowerCase()转化为小写
    const method = req.method.toLowerCase();
    // 获取请求地址
    const pathname = url.parse(req.url).pathname;

    // 设置请求头
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    })
    if(method == 'get'){
        if(pathname == '/' || pathname =='/index'){
            res.end('欢迎来到首页');
        }else if(pathname == '/list'){
            res.end('欢迎来到列表页');
        }else {
            res.end('您访问的页面不存在');
        }
    }else if(method == 'post'){

    }
})
app.listen(3000);
console.log('网站服务器启动http://localhost:3000')