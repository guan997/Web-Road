
const fs = require('fs');
// 改造现有异步函数api 让其返回promise对象 从而支持异步函数语法
// util.promisify()把原来的异步回调方法改成返回 Promise 实例的方法
const promisify = require('util').promisify;
// 调用promisify方法改造现有异步api，让其返回promise对象
const readFile = promisify(fs.readFile);
// 异步函数变成同步函数 依次执行
async function run(){
    // await 暂停异步函数向下执行 直到promise返回结果
    let r1 = await readFile('./1.txt', 'utf8');
    let r2 = await readFile('./2.txt', 'utf8');
    let r3 = await readFile('./3.txt', 'utf8');
    console.log(r1);
    console.log(r2);
    console.log(r3);
}
run();