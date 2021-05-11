var data = {};
var name = 'xiaoming';
Object.defineProperty(data, "name", {
    get:function() {
        console.log('get')
        return name
    },
    set:function (newVal) {
        console.log('set')
        name = newVal
    }
});
//测试
console.log(data.name) // get xiaoming
data.name = 'list' //set