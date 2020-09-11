// 类
class Student{
    constructor(name, number) {
        this.name = name
        this.number = number
    }
    sayHi(){
        console.log(`姓名${this.name},学号${this.number}`)
    }
}
// 通过类new对象/实例
const xiaoMing = new Student('xiaoMing',100)
console.log(xiaoMing.name)
console.log(xiaoMing.number)
xiaoMing.sayHi()

const xiaoHua = new Student('xiaoHua',100)
console.log(xiaoHua.name)
console.log(xiaoHua.number)
xiaoHua.sayHi()