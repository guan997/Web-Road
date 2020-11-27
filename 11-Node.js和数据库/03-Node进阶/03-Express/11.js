// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

// app.use()会拦截路由 传递函数调用
app.use( fn({a:1}) );
function fn(obj) {
    return function (req, res, next) {
        if(obj.a == 2){
            console.log(req.url);
        }else{
            console.log(req.method);
        }
        next();
    }
}
app.get('/', (req, res) => {
    res.send('ok');
})
app.listen(3000);
console.log('网站服务器启动成功: http://localhost:3000/');