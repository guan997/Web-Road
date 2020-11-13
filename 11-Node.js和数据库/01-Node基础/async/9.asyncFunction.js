// 1.在普通函数定义的前面加上async关键字，普通函数就变成了异步函数
// 2.异步函数默认的返回值是promise对象
// 3.在异步函数内部使用throw关键字进行错误地抛出

// await关键字
// 1.他只能出现在异步函数中
// 2.await promise可以暂停异步函数的执行 等待promise对象返回结果后在向下执行

async function fn() {
    // throw '发生了一些错误';
    return 123;
}
console.log(fn());

// fn().then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// })

async function fn1() {
    return 'fn1';
}
async function fn2() {
    return 'fn2';
}
async function fn3() {
    return 'fn3';
}
;(async function run() {
    let r1 = await fn1();
    let r2 = await fn2();
    let r3 = await fn3();
    console.log(r1);
    console.log(r2);
    console.log(r3);
})();
// run();