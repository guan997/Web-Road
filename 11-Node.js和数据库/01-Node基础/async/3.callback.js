function getData(callback) {
    callback('123');
}
getData(function (n) {
    console.log('callback函数被调用了');
    console.log(n);
})
// getData((n)=>{
//     console.log('callback函数被调用了');
//     console.log(n);
// });