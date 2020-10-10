// 关于闭包的演示

// 函数作为返回值
// function create(){
//     const a = 100
//     return function(){
//         console.log(a)
//     }
// }
// const fn = create() // create()()
// const a = 200
// fn()// 100

// 函数作为参数被传递

function print (fn){
    const a = 100
    fn()
}
const a = 200
function fn(){
    console.log(a) 
}
print(fn)// 200

// 所有的自由变量的查找，是在函数定义的地方，向上级作用域查找
// 不是在执行的地方！！！
