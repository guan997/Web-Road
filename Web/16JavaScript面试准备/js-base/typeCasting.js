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