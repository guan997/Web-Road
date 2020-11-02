// 父类
class People{
    constructor(name){
        this.name = name
    }
    eat(){
        console.log(`${this.name} eat something`)
    }
}
// 子类
class Student extends People{
    constructor(name,number){
        super(name)
        this.number = number
    }
    sayHi(){
        console.log(`姓名${this.name} 学号 ${this.number}`)
    }
}
// 子类
class Teacher extends People{
    constructor(name,major){
        super(name)
        this.major = major
    }
    teach(){
        console.log(`${this.name} 教授${this.major}`)
    }
}

// 实例
const xiaoming = new Student('xiaoming',100)
console.log(xiaoming.name)
console.log(xiaoming.number)
xiaoming.sayHi()
xiaoming.eat()

// 实例
const xiaohua = new Teacher('xiaohua','语文')
console.log(xiaohua.name)
console.log(xiaohua.major)
xiaohua.teach()
xiaohua.eat()