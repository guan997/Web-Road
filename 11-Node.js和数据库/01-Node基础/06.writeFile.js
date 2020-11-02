const fs = require('fs');
// 写入内容
fs.writeFile('./demo.txt', '即将要写入的内容', err => {
    // 如果文件读取出错 err 是一个对象 包含错误信息
    if(err!=null){
        console.log(err);
        return;
    }
    console.log('文件内容写入成功');
})