// 箭头函数

// function foo() {
//     console.log('hello');
// }
// foo();
// {} 等于 =>后的方法体
// let foo = () => console.log('hello');
// foo();
// --
// function foo(v){
//     return v;
// }
// console.log(foo(123));
// --
// 声明一个变量v 给v赋值
let foo = v => v;
let ret = foo(111);
console.log(ret);