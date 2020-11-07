// 用于创建网站服务器的模块
const http = require('http');
// app对象就是网站服务器对象
const app =http.createServer();
// 当客户端有请求来的时候
app.on('request', (req, res) => {
    // 获取请求方式
    // req.method
    console.log(req.method);
    if(req.method == 'POST'){
        res.end('POST');
    }else if(req.method == 'GET'){
        res.end('GET');
    }
    // res.end('<h2>hello user</h2>');
});
// 监听端口
app.listen(3000);
console.log('网站服务器启动成功http://localhost:3000/');