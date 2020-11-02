/**
 * 深拷贝
 */
const obj1 = {
    age: 10,
    name: 'xiaoming',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'f', 'c']
}
const obj2 = deepClone(obj1)
obj2.address.city = 'shanghai'
obj2.arr[0] = 'a1'
// 修改obj2的值不会影响obj1
// obj2把obj1中的属性和对象以及数组都进行了拷贝
console.log(obj1.address.city) //beijing
console.log(obj1.arr[0]) // a

/**
 * 深拷贝
 * @params {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        // obj是null，或者不是对象和数组，直接返回
        return obj
    }
    // 初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        // 保证key不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用
            result[key] = deepClone(obj[key])
        }
    }
    // 返回结果
    return result
}