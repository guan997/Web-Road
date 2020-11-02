global.console.log('我是global对象下面的console.log方法输出的内容1');
//挂载在global全局下，node的全局是global不是window
global.setTimeout(() => {
    console.log('123');
}, 2000);

console.log('我是global对象下面的console.log方法输出的内容');

setTimeout(() => {
    console.log('123');
}, 2000);
