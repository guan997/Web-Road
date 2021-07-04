import { useEffect, useState } from "react";

// 判断是否为0 常用
export const isFalsy = (value) => value === 0 ? false : !value;

// !!value 一个“！”号是对值求反，两个“！！”转换为布尔值
// 在一个函数里，改变一个函数的本身是不好的
// 调用函数时，函数不知道函数内部有改变会原污染函数

export const cleanObject = (object) => {
    Object.assign({}, object);
    const result = { ...object };
    // 遍历对象的键
    Object.keys(result).forEach(key => {
        const value = result[key];
        // 当value为0时也需要判断，因为0有意义
        if (isFalsy(value)) {//如果value值为空，undefined，则删除
            delete result[key];
        }
    })
    return result;
};


// 避免出现[]
export const useMount = (callback) => {
    useEffect(() => {
        callback()
        // eslint-disable-next-line
    }, [])
}
// 节流
// const debounce = (func,delay) =>{
//     let timeout;
//     return(...param) =>{
//         // 闭包
//         if(timeout){//如果timeout有值 清除定时器
//             clearTimeout(timeout);
//         }//timeout没有值设置定时器
//         timeout = setTimeout(function(){
//             func(...param);
//         },delay);
//     }
// }
// const log = debounce(() => console.log('call'),5000)
// log()
// log()
// log()

// debounce 原理讲解：
// 0s ---------> 1s ---------> 2s --------> ...
//     一定要理解：这三个函数都是同步操作，所以它们都是在 0~1s 这个时间段内瞬间完成的；
//     log()#1 // timeout#1
//     log()#2 // 发现 timeout#1！取消之，然后设置timeout#2
//     log()#3 // 发现 timeout#2! 取消之，然后设置timeout#3
//             // 所以，log()#3 结束后，就只剩timeout#3在独自等待了


// 利用hook写debounce
// 上一个设置的被下一个清理，只有最后一个存取下来，
export const useDebounce = (value, delay) => {
    // useState是响应式的value值改变，useState就会触发
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        // 每次value或者delay的值变化以后，设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay);
        // 每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout);
    }, [value, delay])
    return debouncedValue;
}
// Custom Hook的最大特征就是在hook中借助别的hook，如果不借助，单纯用函数就好