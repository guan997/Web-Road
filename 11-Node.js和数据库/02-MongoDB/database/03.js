// 向集合中插入文档的另一种方式// 如何创建集合以及向集合中插入文档

// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/course', {
        useUnifiedTopology: true
    })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));

// 创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const Course = mongoose.model('Course', courseSchema); //courses

// // 1. 创建文档
// const course = new Course({
// name:'node.js基础',
// author:'aa',
// isPublished:true
// });

// 2.向集合中插入文档
Course.create({
    name: 'node.js基础',
    author: 'bb',
    isPublished: true
}, (err, result) => {
    // 错误信息
    console.log(err);
    // 文档
    console.log(result);
})

Course.create({
    name: 'node.js基础',
    author: 'cc',
    isPublished: true
}).then(result => {
    console.log(result);
}).catch(err => console.log(err))