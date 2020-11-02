const fs = require('fs');
// 路径模块
const path = require('path');

// 当前目录
console.log(__dirname);

// 路径拼接
console.log(path.join(__dirname, '01.HelloWorld.js'));
fs.readFile(path.join(__dirname, '01.HelloWorld.js'), 'utf-8', (err, doc) => {
    console.log(err);
    console.log(doc);
})