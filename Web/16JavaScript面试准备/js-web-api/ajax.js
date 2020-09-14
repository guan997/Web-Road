// ajax

// get
// var xhr = new XMLHttpRequest()
// xhr.open('get','./data/test.json',true)
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             console.log(xhr.responseText)
//         }else if(xhr.status === 404){
//             console.log('404 not found')
//         }
//     }
// }
// xhr.send()

// post
// var xhr = new XMLHttpRequest()
// xhr.open('post', '/login', true)
// xhr.onreadystatechange = function () {
// 这里的函数异步执行
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(xhr.responseText)
//         }
//     }
// }
// const postDate = {
//     userName : 'zhangsan',
//     password:'xxx'
// }
// xhr.send(JSON.stringify(postDate))

function ajax(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                } else if (xhr.status === 404 || xhr.status == 500) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}
const url = '/data/test.json'
ajax(url).then(res => console.log(res)).catch(err => console.error(err))