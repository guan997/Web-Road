const arr = [10, 20, 30, 40]

// 尾部删除(pop) pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组， 并返回 undefined 值。
// const popRes = arr.pop()
// console.log(popRes,arr) // 40 [10,20,30]

// 头部删除(shift) shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
// const shiftRes = arr.shift()
// console.log(shiftRes,arr) //10 [20,30,40]

// 尾部添加(push) push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
// const pushRef = arr.push(50)
// console.log(pushRef,arr) //5 [10,20,30,40,50]

// 头部添加(unshift) unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
// const unshiftRef = arr.unshift(0)
// console.log(unshiftRef, arr)//5 [0,10,20,30,40]

// 纯函数：1. 不改变源数组（没有副作用）；2. 返回一个数组

// concat
// const arr1 = arr.concat([50,60,70])
// // map
// const arr2 = arr.map(num => num * 10)
// // filter
// const arr3 = arr.filter(num => num > 25)
// // slice
// const arr4 = arr.slice()

// 非纯函数
// push pop shift unshift
// forEach
// some every
// reduce
// splice

// slice纯函数
// const arr1 = arr.slice()//[10,20,30,40]
// const arr2 = arr.slice(1,4)//[20,30,40]
// const arr3 = arr.slice(2)//[30,40]
// const arr4 = arr.slice(-1)//[40]
// const arr5 = arr.slice(-1,-1)//[]

// splice()非纯函数
// const spliceRes = arr.splice(1,2,'a','b','c')
// const spliceRes1 = arr.splice(1,2)
// const spliceRes2 = arr.splice(1,0,'a','b','c')
// console.log(spliceRes,arr)//[20,30][10,'a','b','c',40]
// console.log(spliceRes1,arr) //[20,30] [10,40]
// console.log(spliceRes2,arr) //[]  [10, "a", "b", "c", 20, 30, 40]

const res = ['1', '2', '3'].map(parseInt) //[ 1, NaN, NaN ]
const res1 = ['1', '2', '3', '10'].map(parseInt) //[ 1, NaN, NaN, 3 ]
// 拆解
// [10, 20, 30].map((num, index) => {
//     return parseInt(num, index)
// })