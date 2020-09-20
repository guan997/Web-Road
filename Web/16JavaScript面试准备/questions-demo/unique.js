// 数组去重

// 传统方式 效率相对低一点
function unique(arr){
    const res = []
    arr.forEach(element => {
        if(res.indexOf(element) < 0){
            res.push(element)
        }
    });
    return res
}
const res = unique([10,20,20,30,10,40,50])
console.log(res)

// 使用Set (无序，不能重复) 需要考虑兼容性
function uniqueSet(arr){
    const set = new Set(arr)
    return [...set]
}
const resSet = uniqueSet([10,20,20,30,10,40,50])
console.log(resSet)