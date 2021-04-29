// 类型转换
const a = 100 + 10 //110
const b = 100 + '10' //'10010'
const c = true + '10' //'true10'

100 == '100' //true
0 == ' ' //true
0 == false //true
false == '' //true
null == undefined //true

// ==运算符
// 除了 == null 之外， 其他都一律用 === ，例如
const obj = {
    x: 100
}
if (obj.a == null) {}
// 相当于：
if (obj.a === null || obj.a === undefined) {}
Object.is = function (x, y) {
    if (x === y) {
        // 1/+0 = +Infinity， 1/-0 = -Infinity, +Infinity不等于-Infinity
        // Infinity 属性用于存放表示正无穷大的数值。负无穷大是表示负无穷大一个数字值。
        // console.log(x === y)
        // console.log(x !== 0)
        // console.log(x === 1 / y)
        return x !== 0 || 1 / x === 1 / y;
    }
    // 一个变量不等于自身变量,那么它一定是 NaN
    // 两个都是NaN的时候返回true
    // console.log(x !== x)
    // console.log(y !== y)
    return x !== x && y !== y;
};
console.log(Object.is(0, -0));            // false
console.log(Object.is(+0, -0));           // false
console.log(Object.is(0, +0));            // true
console.log(Object.is(NaN, 0/0));         // true