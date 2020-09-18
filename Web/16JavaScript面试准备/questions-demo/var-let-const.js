// 变量提升ES5
console.log(a) //undefined
var a = 15
// 等价于
var a = undefined
console.log(a)
a = 20

// 块级作用域
for (let i = 0; i < 10; i++) {
    let j = i + 1
}

const k = 10
// k = 11 //Uncaught TypeError: Assignment to constant variable.
console.log(j)//var-let-const.js:13 Uncaught ReferenceError: j is not defined