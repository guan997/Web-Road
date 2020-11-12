// 同步sync
// 同步API从上到下依次执行，前面代码会阻塞后面代码的执行
for(var i = 0; i < 100; i++){
    console.log(i);
}
console.log('for循环后面的代码');