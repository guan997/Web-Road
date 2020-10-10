var input1 = document.getElementById('input1')
// var timer = null
// input1.addEventListener('keyup',function(){
//     if(timer){
//         // 如果输入结束未超过0.5秒清理定时器
//         clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//         // 模拟触发change事件
//         console.log(input1.value)
//         // 清空定时器
//         timer = null
//     },500)

// 防抖
function debounce(fn, delay = 500){
        // timer 是闭包中的
    let timer = 500
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            // 函数在执行的时候把参数转进来
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
input1.addEventListener('keyup', debounce(function(e){
    console.log(e.target)
    console.log(input1.value)
}, 300))