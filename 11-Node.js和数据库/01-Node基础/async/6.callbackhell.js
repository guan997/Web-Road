const fs = require('fs');
// 回调函数嵌套层次过多，难以维护，导致回调函数地狱问题
fs.readFile('./1.txt', 'utf8', (err, result1) => {
    console.log(result1);
    fs.readFile('./2.txt', 'utf8', (err, result2) => {
        console.log(result2);
        fs.readFile('./3.txt', 'utf8', (err, result3) => {
            console.log(result3);
        })
    })
})