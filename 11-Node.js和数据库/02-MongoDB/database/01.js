// 如何连接mongodb数据库

// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/todo',{ useUnifiedTopology: true })
// 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));