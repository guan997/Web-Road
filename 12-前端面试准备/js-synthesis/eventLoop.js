// console.log("start");
// setTimeout(() => {
//     console.log("setTimeout")
// })
// Promise.resolve().then(function () {
//     console.log('promise1')
// }).then(function () {
//     console.log('promise2')
// })
// console.log("end");
// 主程序和和settimeout都是宏任务，两个promise是微任务
// 第一个宏任务（主程序）执行完，执行全部的微任务（两个promise），
// 再执行下一个宏任务（settimeout），所以结果为：
// 输出
// start     
// end       
// promise1  
// promise2  
// setTimeout
// console.log('打印' + 1); //第一个：打印1
// setTimeout(function () {
//     console.log('打印' + 2); //第六个：打印2 
// })
// new Promise(function (resolve, reject) {
//     console.log('打印' + 3); //第二个：打印3
// }).then(
//     console.log('打印' + 4)); //第三个：打印4                        
// console.log('打印' + 10); //第四个：打印10
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('打印' + 5); //第七个：打印5
//     });
// }).then(
//     console.log('打印' + 6)); //第五个：打印6
// setTimeout(function () {
//     new Promise(function (resolve, reject) {
//         console.log('打印' + 7); //第八个：打印7
//     });
// })

async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}
async function async2() {
    console.log('async2');
}
console.log("script start");
setTimeout(function () {
    console.log("settimeout");
}, 0);
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
console.log('script end');
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// settimeout