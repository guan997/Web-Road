const fs = require('fs')

function getFileByPath(fpath) {
    return new Promise(function (resolve, reject) { //异步瞬间1执行return
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return reject(err);
            resolve(dataStr);
        })
    })
    // return promise; //异步
}
// 先读取文件1，再读取文件2，最后再读取文件3
// 注意： 通过 .then 指定 回调函数的时候,成功的回调函数，必须传，但是，失败的回调，可以省略不传
// 这是一个 错误的示范
// getFileByPath('./files/11.txt')
//     .then(function (data) {
//         console.log(data)
//         // 读取文件2
//         return getFileByPath('./files/2.txt')
//     }, function (err) {
//         console.log('这是失败的结果：' + err.message)
//         // return 一个 新的 Promise
//         return getFileByPath('./files/2.txt')
//     })
//     .then(function (data) {
//         console.log(data)
//         return getFileByPath('./files/3.txt')
//     })
//     .then(function (data) {
//         console.log(data)
//     }).then(function (data) {
//         console.log(data)
//     })

// 1.当我们有这样的需求： 哪怕前面的 Promise 执行失败了，但是，不要影响后续 promise 的正常执行，
// 此时，我们可以单独为 每个 promise，通过 .then 指定一下失败的回调；

// 成功的回调函数，必须传，但是，失败的回调，不需要
getFileByPath('./files/11.txt') //执行
    // 通过.then指定成功和失败函数的实参
    .then(function (data) { //resolve
        console.log(data);
        return getFileByPath('./files/2.txt') //不执行
    }, function (err) {
        console.log('这是失败的结果：' + err.message)
        // return 一个 新的 Promise
        return getFileByPath('./files/2.txt')
    })
    .then(function (data) { //resolve
        console.log(data);
        return getFileByPath('./files/3.txt')
    })
    .then(function (data) { //resolve
        console.log(data)
    })
    .then(function (data) { //resolve
        console.log(data)
    })
console.log('ok')

// 2.如果后续的Promise 执行，依赖于 前面 Promise 执行的结果，如果前面的失败了，则后面的就没有继续执行下去的意义了，
// 此时我们想要实现，一旦有报错，则立即终止所有 Promise的执行；

// getFileByPath('./files/1.txt') //执行
//     // 通过.then指定成功和失败函数的实参
//     .then(function (data) { //resolve
//         console.log(data);
//         return getFileByPath('./files/22.txt') //不执行
//     })
//     .then(function (data) { //resolve
//         console.log(data);
//         return getFileByPath('./files/3.txt')
//     })
//     .then(function (data) { //resolve
//         console.log(data)
//     })
//     .catch(function (err) { // catch 的作用： 如果前面有任何的 Promise 执行失败，则立即终止所有 promise 的执行，并 马上进入 catch 去处理 Promise中 抛出的异常；
// console.log('这是自己的处理方式：' + err.message)
// })