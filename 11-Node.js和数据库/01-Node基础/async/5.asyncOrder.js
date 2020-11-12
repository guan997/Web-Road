console.log('代码开始执行');
// 异步
setTimeout(function () {
    console.log('2s');
}, 2000)

setTimeout(function () {
    console.log('0s');
}, 0)
console.log('代码结束执行');