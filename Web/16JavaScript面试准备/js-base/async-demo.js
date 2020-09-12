// 异步 (callback回调函数)
// 应用场景：
            // 网络请求（图片加载） 定时任务（setTimeout）
// console.log(100)
// setTimeout(() => {
//     console.log(200)
// }, 1000)
// console.log(300)
// console.log(400) 

// 同步
console.log(100)
alert(200)
console.log(300)

// js是单线程语言
// 异步不会阻塞代码执行
// 同步会阻塞代码执行