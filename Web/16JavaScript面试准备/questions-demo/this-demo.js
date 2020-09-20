const User = {
    count:1,
    getCount:function () {
        return this
    }
}
console.log(User.getCount());//1  User
const func = User.getCount

console.log(func())//undefined window

var obj = {
    name:'周杰伦',
    show:function(){
        // {name: "周杰伦", show: ƒ}
        console.log(this)
        function fn(){
            // window
            console.log(this)
        }
        // fn()是被window调用
        fn()
    }
}
obj.show()

// 解决this指向问题
// 第一种解决方法:用一个变量把this变量保存起来
var obj2 = {
    name:'周杰伦',
    show:function(){
        // {name: "周杰伦", show: ƒ}
        // console.log(this)
        // 用一个变量把this变量保存起来
        var that = this
        function fn(){
            // window 在严格模式中 这个是undefined
            // console.log(this)
            // 周杰伦
            console.log(that.name)
        }
        // fn()是被window调用
        fn()
    }
}
obj2.show()
// 第二种解决方法:使用箭头函数
var obj3 = {
    name:'周杰伦',
    show:function(){
        // {name: "周杰伦", show: ƒ}
         // console.log(this)
        // 用一个变量把this变量保存起来
        // var that = this
        // function fn(){
        //     // window 在严格模式中 这个是undefined
        //     // console.log(this)
        //     // 周杰伦
        //     console.log(that.name)
        // }
        let fn = () => {
            // 周杰伦
            console.log(this.name)
        }
        // fn()是被window调用
        fn()
    }
}
obj3.show()

let i
for(i = 1; i<=3;i++){
    setTimeout(function(){
        console.log(i)//4
    },0)
}

let a= 100
function test(){
    alert(a)
    a = 10
    alert(a)
}
test()
alert(a)
