const express = require('express')
const https = require('https')
const fs = require('fs')
// 开启gzip压缩 导入包
const compression = require('compression')
const app = express()
// 创建配置对象设置公钥和私钥
const options = {
    cert: fs.readFileSync('./full_chain.pem'),
    key:fs.readFileSync('./private.key')
}
// 启用中间件 一定要在托管静态资源之前使用
app.use(compression())
// 托管静态资源
app.use(express.static('./dist'))
app.listen(8099,()=>{
    console.log("serve running at http://127.0.0.1:8099")
})
// 启动https服务
// https.createServer(options, app).listen(443)