// promise解决 callback hell的问题
// Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值.
// 链式调用：连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，
// 并带着上一步操作所返回的结果。可以通过创造一个 Promise 链来实现这种需求。
function loadImg(src) {
    const p = new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            const err = new Error(`图片加载失败${src}`)
            reject(err)
        }
        img.src = src
    })
    return p
}
const url1 = 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg'
const url2 = 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3238317745,514710292&fm=26&gp=0.jpg'
loadImg(url1).then(img1 => {
    console.log(img1.width)
    return img1 //普通对象
}).then(img1 => {
    console.log(img1.height)
    return loadImg(url2) //promise实例
}).then(img2 => {
    console.log(img2.width)
    return img2
}).then(img2 => {
    console.log(img2.height)
}).catch(ex => console.error(ex))