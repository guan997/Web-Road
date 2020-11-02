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
// 传入参数v 给v赋值
// let foo = v => v;
// let ret = foo(111);
// console.log(ret);
// ---
// 多个参数必须用小括号包住
// let foo = (a,b) => {let c = 1; console.log(a + b +c);}
// foo(1,2);

// let arr = [123,456,434];
// // arr.forEach(function(element,index){
// //     console.log(index,element);
// // })
// arr.forEach((element,index) =>{
//     console.log(index,element);
// })
// -----
// 箭头函数的注意事项：
// 1、箭头函数中this取决于函数的定义，而不是调用
// function foo(){
//     // 使用call调用foo时，这里的this其实就是call的第一个参数
//     // console.log(this.num);
//     setTimeout( ()=>{
//         console.log(this.num);
//     },100);
// }
// foo.call({num:1});
// ---
// 2、箭头函数1不可以new
// let foo = () => {this.num = 123};
// new foo();
// ---
// 3、箭头函数不可以使用arguments获取参数列表，可以使用rest参数代替
// let foo = (a,b) => {
//     // console.log(a,b);
//     console.log(arguments);// 这种方式获取不到实参列表
// }
// foo(123,456);
// ---
let foo = (...param) => {
    console.log(param);
}
foo(123,456);