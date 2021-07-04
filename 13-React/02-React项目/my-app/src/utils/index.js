// 判断是否为0 常用
export const isFalsy = (value) => value === 0 ? false : !value;
// !!value 一个“！”号是对值求反，两个“！！”转换为布尔值
// 在一个函数里，改变一个函数的本身是不好的
// 调用函数时，函数不知道函数内部有改变会原污染函数
export const cleanObject = (object) => {
    Object.assign({}, object);
    const result = {...object};
    // 遍历对象的键
    Object.keys(result).forEach(key => {
        const value = result[key];
        // 当value为0时也需要判断，因为0有意义
        if(isFalsy(value)){//如果value值为空，undefined，则删除
            delete result[key];
        }
    })
    return result;
}