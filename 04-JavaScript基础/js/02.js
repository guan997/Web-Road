//定义一个函数
function getSum() {
    //1-100的和
    var sum = 0;
    for (var i = 0; i <= 300; i++) {
        sum = sum + i;
    }
    console.log('和：', sum);
}
//调用函数
getSum();
getSum();