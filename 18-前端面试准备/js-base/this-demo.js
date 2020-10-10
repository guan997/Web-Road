function fn1() {
    console.log(this)
}
fn1() //window

fn1.call({
    x: 100
}) //{x:100}
// call() 改变函数中的this，直接调用函数 接受的是参数列表

const fn2 = fn1.bind({
    x: 200
})
// bind() 改变函数的this，并且返回一个新的函数（不调用函数）
fn2() //{x:200}
// apply 改变函数中的this，直接调用函数,接受的是一个参数数组。把数组展开传递给前面的一个方法
// var obj = {
//     name: 'zz'
// }
fn1.apply([2,3]);//[2,3]

const zhangsan = {
    name: '张三',
    sayHi() {
        // this即当前对象
        console.log(this)
    },
    wait() {
        setTimeout(function () {
            // this === window
            console.log(this)
        })
    },
    waitAgain() {
        // 箭头函数的注意事项：
        // 1、箭头函数中this取决于函数的定义，而不是调用
        // 2、箭头函数1不可以new
        // 3、箭头函数不可以使用arguments获取参数列表，可以使用rest参数代替

        // 箭头函数取值取上级作用域的值，
        setTimeout(() => {
            // this即当前对象
            console.log(this)
        })
    }
}
zhangsan.sayHi()
zhangsan.wait()
zhangsan.waitAgain()

class People {
    constructor(name) {
        this.name = name
        this.age = 20
    }
    sayHi() {
        console.log(this)
    }
}
const lisi = new People('李四')
lisi.sayHi() //lisi对象