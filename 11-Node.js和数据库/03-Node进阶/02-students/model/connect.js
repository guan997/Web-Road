// 连接数据库
// 引入数据库模块
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'));