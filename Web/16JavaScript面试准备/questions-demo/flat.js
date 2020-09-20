var arr = [1, 2, [3, 4], 5];
// 只能拍平一层数组
Array.prototype.concat.apply([], arr); //(5) [1, 2, 3, 4, 5]
Array.prototype.concat.call([], 1, 2, [3, 4], 5); //(5) [1, 2, 3, 4, 5]
[].concat(1, 2, [3, 4], 5); //(5) [1, 2, 3, 4, 5]
Array.prototype.concat.call([], arr); //(4) [1, 2, Array(2), 5]
[].concat(arr); // 4[1, 2, Array(2), 5]

function flat(arr) {
    // 验证arrNew中，还有没有深层数组[1,2,[3,4]]
    const isDeep = arr.some(item => item instanceof Array)
    if (!isDeep) {
        //如果没有深层数组，arrNew就已经是flatern[1,2,3,4]
        return arr
    }
    const res = Array.prototype.concat.apply([], arr)
    return flat(res) //递归
}
const res = flat([1, 2, [3, 4, [10, 20, [100,200]]], 5])
console.log(res)