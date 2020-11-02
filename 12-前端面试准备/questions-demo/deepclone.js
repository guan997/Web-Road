/**
 * 深拷贝
 * @params {Object} obj 要拷贝的对象
 */
// Map()可以替换为WeakMap()解决循环引用问题
function deepClone(target, map = new Map()) {
    //  如果是原始类型，无需继续拷贝，直接返回
    // 如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。
    if (typeof target === 'object') {
        // 兼容数组
        let cloneTarget = Array.isArray(target) ? [] : {};
        // 解决循环引用问题
        // 检查map中有无克隆过的对象
        // 有 - 直接返回
        // 没有 - 将当前对象作为key，克隆对象作为value进行存储
        // 继续克隆
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = deepClone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
}
// 测试用例
// const target = {
//     field1: 1,
//     field2: undefined,
//     field3: {
//         child: 'child'
//     },
//     field4: [2, 4, 8]
// };
// target.target = target;

// console.log(deepClone(target));
/**
 * 深拷贝 
 */
//使用while来实现一个通用的forEach遍历，iteratee是遍历的回掉函数，他可以接收每次遍历的value和index两个参数：
function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}
//对我们的cloen函数进行改写：当遍历数组时，直接使用forEach进行遍历，当遍历对象时，使用Object.keys取出所有的key进行遍历，然后在遍历时把forEach会调函数的value当作key使用：
function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        let cloneTarget = isArray ? [] : {};

        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);

        const keys = isArray ? undefined : Object.keys(target);
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = clone(target[key], map);
        });

        return cloneTarget;
    } else {
        return target;
    }
}
function deepCloneNew(obj, hash = new WeakMap()) {
    if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (typeof obj !== "object") return obj;
    // 是对象的话就要进行深拷贝
    if (hash.get(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    hash.set(obj, cloneObj);
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 实现一个递归拷贝
        cloneObj[key] = deepCloneNew(obj[key], hash);
      }
    }
    return cloneObj;
  }
// 测试用例
const target = {
   field1: 1,
   field2: undefined,
   field3: {
       child: 'child'
   },
   field4: [2, 4, 8],
   f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};

target.target = target;

console.time();
console.log(deepClone(target));
console.timeEnd();

console.time();
console.log(clone(target));
console.timeEnd();

console.time();
console.log(deepCloneNew(target));
console.timeEnd();