const mongoose = require('mongoose');
// 数据库连接 27017是mongoDB数据库的默认端口
mongoose.connect('mongodb://localhost/playground',{userNewUrlParser:true})
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'));