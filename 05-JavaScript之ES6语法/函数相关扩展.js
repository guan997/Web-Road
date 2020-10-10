// 变量的解构赋值
// var a = 1;
// var b = 2;
// var c = 3;
// ---
// var a = 1,b = 2, c = 3;
//  数组的解构赋值
// let [a,b,c] = [1,2,3];
// let [a,b,c] = [,123,];
// let [a=111,b,c] = [,123,];
// console.log(a,b,c);
// ---
// 对象的解构赋值
// let {foo,bar} = {foo : 'hello',bar : 'hi'};
// let {foo,bar} = {bar : 'hi', foo : 'hello'};
// 对象属性别名（如果有了别名，那么原来的名字就无效了）
// let {foo:abc,bar} = {bar : 'hi',foo : 'nihao'};
// console.log(foo,bar); //foo is not defined
// console.log(abc,bar); //nihao hi
// ---
// 对象的解构赋值指定默认值
// let {foo:abc = 'hello',bar} = {bar : 'hi'};
// let {foo:abc = 'hello',bar} = {foo :'你好',bar : 'hi'};
// console.log(abc,bar);
// ---
// let {cos,sin,random} = Math;
// console.log(typeof cos); // function
// console.log(typeof sin);
// console.log(typeof random);
// ---
// 字符串的解构赋值
// let [a,b,c,d,e,length] = 'hello';
// console.log(a,b,c,d,e);
// console.log(length); //undefined
// console.log('hello'.length);

// let {length} = 'hi';
// console.log(length); // 2
// 函数扩展
// 1.参数默认值
// 2.参数解构赋值
// 3.rest参数
// 4. ...扩展运算符
// ---
// 参数默认值
// function foo(param){
//     let p = param || 'hello';
//     console.log(p);
// }
// foo('hi');
// //let p = param || 'hello'== foo(param = 'nihao')
// function foo(param = 'nihao'){
//     console.log(param);
// }
// foo('hello Kitty');
// // ---
// function foo(uname='list',age=12){
//     console.log(uname,age);
// }
// foo('zhangsan',13);
// foo();
// 参数解构赋值
// function foo({uname='list',age=14}={}){
//     console.log(uname,age);
// }
// foo({uname:'zhangsan',age:15});
// ---
// rest参数(剩余参数)
// function foo(a,b,...param){
// //     console.log(a);
// //     console.log(b);
//     console.log(param);
// }
// foo(1,2,3,4,5);
// ---
// 扩展运算符...
function foo(a,b,c,d,e,f,g){
    console.log(a + b + c + d +e + f +g);
}
// foo(1,2,3,4,5,6,7);
let arr = [1,2,3,4,5,6,7];
// call()方法接受的是参数列表，
// 而apply()方法接受的是一个参数数组。
// foo.apply(null,arr);
foo(...arr);
// ---
// 合并数组
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3);

