const obj1 = {
    a:10,
    b:20,
    sum(){
        return this.a + this.b
    }
}
const obj2 = new Object({
    a:10,
    b:20,
    sum(){
        return this.a + this.b
    }
})
//obj1 === obj2  false
const obj21 = new Object(obj1) //obj1 === obj21  true

const obj3 = Object.create(null) 
const obj4 = new Object() //{} 

// obj5 {}
// obj5.__proto__ a:10,b:20,sum:f
// O{bject.create({...})可指定原型
const obj5 = Object.create({
    a:10,
    b:20,
    sum(){
        return this.a + this.b
    }
})

// obj1 === obj6 false
// obj6.__proto__ = obj1 true
const obj6 = Object.create(obj1)