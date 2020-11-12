function getMsg(callback) {
    setTimeout(function () {
        // return无作用 异步api不会阻塞后面的执行，无return默认返回undefined
        return {
            msg: 'hello node.js'
        }
        // 回调函数
        callback({
            msg: 'hello node.js'
        })
    }, 2000)
    // return undefined;
}
const msg = getMsg();
// 同步API可以从返回值中拿到API执行的结果, 但是异步API是不可以的
// 异步函数的返回值通过回调函数拿到
console.log(msg); //undefined

// 通过回调函数拿到异步api返回的结果
getMsg(function (data) {
    console.log(data);
})