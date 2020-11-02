// 深度比较

// 判断是否是对象或数组
function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
// 全相等（深度）
function isEqual(obj1, obj2){
    // 判断是否都不是对象或数组
    if(!isObject(obj1) || !isObject(obj2)){
        // 值类型（参与equal的一般不会是函数）
        return obj1 === obj2
    }
    // 如果obj1和obj2传入的是同一个函数，为了兼容性
    if(obj1 === obj2){
        return this
    }
    // 两个都是对象或数组，而且不相等
    // 1.先取出obj1和obj2的keys，比较个数
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if(obj1Keys.length !== obj2Keys.length){
        return false
    }
    // 2.以obj1为基准，和obj2一次递归比较
    for(let key in obj1){
        // 比较当前key的val -- 递归
        const res = isEqual(obj1[key],obj2[key])
        if(!res){
            return false
        }
    }
    // 3.全相等
    return true
}

// 测试
const obj1 = {
    a:100,
    b:{
        x:100,
        y:200
    }
}
const obj2 = {
    a:100,
    b:{
        x:100,
        y:200,
    }
}
console.log(obj1 === obj2) //false
console.log(isEqual(obj1,obj2)) 
const arr1 = [1,2,3]
const arr2 = [1,2,3,4]
console.log(isEqual(arr1,arr2))