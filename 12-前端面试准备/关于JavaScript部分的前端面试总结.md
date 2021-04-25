## 关于JavaScript部分的前端面试总结

##   var和let以及const的区别

     var是ES5语法 let和const是ES6语法 

     var有变量提升 let和const具有块级作用域，var没有 

     var和let是变量，可修改；const是常量，不可修改 

## typeof能判断哪些类型 

     undefined string number boolean symbol 

     object(注意,typeof能判断哪些类型 null === 'object') 

     function 

## 列举强制类型和类型转换 

     强制：parseInt parseFloat toString 

     隐式：if、逻辑运算、==、+拼接字符串 

## 函数call和apply的区别 

     apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法 

     call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法 

     call和apply都是调用一个对象的一个方法，用另一个对象替换当前对象。而不同之处在于传递的参数，apply最多只能有两个参数——新this对象和一个数组argArray，如果arg不是数组则会报错TypeError；

   call则可以传递多个参数，第一个参数和apply一样，是用来替换的对象，后边是参数列表。 

## 手写深度比较 

isEqual.js

## split()和join()的区别 

     '1-2-3'.split('-') //[1,2,3] 

     [1,2,3].join('-') // 1-2-3 

     split，是把一串字符（根据某个分隔符）分成若干个元素存放在一个数组里。而Join是把数组中的字符串连成一个长串，可以大体上认为是split的逆操作 

## 数组的pop push shift unshift分别是什么 

## 功能 返回值 是否会对原数组造成影响 

     尾部添加(push) push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。 

     头部添加(unshift) unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。 

     尾部删除(pop) pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组， 并返回 undefined 值。 

     头部删除(shift) shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。 

##      纯函数：

1. 不改变源数组（没有副作用）；2. 返回一个数组

​    concat map filter slice 

##     非纯函数

​    push pop shift unshift

​    forEach

​    some every

​    reduce 

##    数组slice和splice区别 

     slice()定义：从已有的数组中返回你选择的某段数组元素 

     arrayObject.slice(start,end) 

- ①：start表示从何处开始选取，end表示从何处开始结束选取，表示一个选取的范围 
- ②：start可以为负数，此时它规定从数组尾部开始算起的位置。也就是-1，指最后一个元素，-2指倒数第二个元素，以此类推 
- ③：end如果没有被指定参数，数组会包含从 start 到最后一个数组元素的所有元素
- ④：slice()方法不会修改数组本身，而是返回所选取范围的数组元素。如果想删除数组中的某一个元素，需要使用splice() 

     splice()定义：从数组中添加或删除元素，然后返回被删除的数组元素。 

     splice()语法：arrayObject.splice(index,howmany,item1,.....,itemX) 

- ①：index表示从什么位置开始添加或删除数组元素 
- ②：howmany表示删除的元素数量，如果为0，则表示不删除数组元素 
- ③：tem1,.....,itemX表示新增的数组元素 
- ④：splice()方法会改变原始数组

   ["1","2", "3"].map(parseInt) //[ 1, NaN, NaN ] 

 parseInt()方法解析一个字符串参数，返回一个指定基数的整数。 

 parseInt()方法有两个参数： 

 string：需要解析的值。如果string不是一个字符串，那么会将其转化为字符串。 

 radix：一个介于2和26之间的整数，表示string参数的基数。默认为10。 

 返回值：返回一个整数或者NaN。 

 map()方法创建一个新数组，其结果是该数组中每个元素都调用一个提供的函数后返回的结果。 回调函数callback需要三个参数：

​    currentValue：表示当前正在处理的元素。 

​    index：可选。表示当前正在处理的元素在数组中的下标。 

​    array：可选。表示当前被处理的数组。 

     因此上面这段代码实际上是这样的： 

```js
 [1, 2, 3].map((item, index) => { 
    return parseInt(item, index); 
    });
```

​    将parseInt当做回调函数，但是在调用parseInt时会自动获取两个参数：数组中每个值以及数组的索引。 

​    得益于map函数，map函数的回调函数默认有三个参数，第一个是数组每个元素，第二个是索引，第三个是元素所属的数组； 

​    由于parseInt仅能接收前两个参数，所以我们运行代码时会得到以下结果： 

​    parseInt(‘1’, 0)：在js中，当redix为0但是string不是0时，将会把基数当做10来处理，因此得到 1 

​    parseInt(‘2’, 1)：由于redix=1，不在基数范围2-36之间并且2也不是可以表示一进制的数，所以得到结果 NaN 

​    parseInt(‘3’, 2)：redix = 1是在2-36范围之间的，但是由于3不是能够表示二进制的数，所以得到结果 NaN 

## ajax请求get和post的区别 

- get一般用于查询操作，post一般用于提交操作 
- get参数拼接在url上，post放在请求体内（数据体积可更大） 
- 安全性：post易于防止CSRF 

## 阻止事件冒泡和默认行为

event.stopPropagation()

event.preventDefault()

## 查找、添加、删除、移动节点

dom-1.js dom-2.js

## 解释jsonp原理，为何不是真正的ajax

- 浏览器的同源策略（服务端没有同源策略）和跨域
- 那些html标签能绕过跨域
  - <img> <script>
  - 因为它们可能要请求外部的文件
-	没有用到XMLHttpRequest(),要实现跨域必须经过服务端的批准不然就是非法的

## document load和ready的区别

```js
windom.addEventListener('load',function(){
    //页面的全部资源加载完才会执行，包括图片、视频等
})
document.addEventListener('DOMContentLoaded',function(){
    //DOM渲染完即可执行，此时图片、视频还可能没有加载完毕
})
```

## == 和 === 的区别

- == 会尝试类型转换
- === 严格相等
- 哪些场景才用==

```js
// ==运算符
// 除了 判断 null 之外， 其他都一律用 === ，例如
const obj = {
    x: 100
}
if (obj.a == null) {}
// 相当于：
if (obj.a === null || obj.a === undefined) {}
```

## 函数声明和函数表达式的区别

- 函数声明function fn(){}
- 函数表达式const  fn = function(){}
- 函数声明会在代码执行前预加载，而函数表达式不会

## new Object()和Object.create()区别

- {}等同于new Object(),原型Object.prototype
- Object.create(null)没有原型
- O{bject.create({...})可指定原型

## 闭包

闭包：在一个作用域中可以访问另一个作用域的变量。在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此也可以把闭包简单理解成"定义在一个函数内部的函数"。

闭包主要是为了设计私有的方法和支量 。 闭包的优点是可以避免全局变量
的污染；缺点是闭包会常驻内存， 增加内存使用 量 ，使用不当很容易造成内存泄漏 。 
**闭包有 3 个特性** 。
( I ） 函数嵌套函数 。
( 2 ）在函数内部可以引用外部的参数和支量 。
( 3 ）参数和变量不会以垃圾回收机制回收 。  

**闭包的用途**

闭包可以用在许多地方。它的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。

```js
//读取函数内部的变量　
function f1(){
　　　　var n=999;
　　　　function f2(){
　　　　　　alert(n);
　　　　}
　　　　return f2;
　　}
　　var result=f1();
　　result(); // 999
```

```js
//作用域使用后不会被销毁
		function f1() {
            var n = 999;
            nAdd = function () {
                n += 1
            }
            function f2() {
                alert(n);
            }
            return f2;
        }
        var result = f1();
        result(); // 999
        nAdd();
        result(); // 1000
```

`阮一峰`在这段代码中，result实际上就是闭包f2函数。它一共运行了两次，第一次的值是999，第二次的值是1000。这证明了，函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除。

为什么会这样呢？原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。

这段代码中另一个值得注意的地方，就是"nAdd=function(){n+=1}"这一行，首先在nAdd前面没有使用var关键字，因此nAdd是一个全局变量，而不是局部变量。其次，nAdd的值是一个匿名函数（anonymous function），而这个匿名函数本身也是一个闭包，所以nAdd相当于是一个setter，可以在函数外部对函数内部的局部变量进行操作。

**使用闭包的注意点**

1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

**闭包思考**

```js
// 思考1：
        var name = "The Window";
        var object = {
            name: "My Object",
            getNameFunc: function () {
                return function () {
                    return this.name;//this指向调用的对象window
                };
            }
        };
        // object.getNameFunc()() //调用getNameFunc()中的return
        console.log(object.getNameFunc()());

        var fn = object.getNameFunc();
        fn();

// 思考2：
        var name = "The Window";
        var object = {
            name: "My Object",
            getNameFunc: function () {
                var that = this;
                return function () {
                    return that.name;//闭包 内部调用that My Object
                };
            }
        };
        console.log(object.getNameFunc()());
```

## this指向

- 1.在全局作用域下 this对象指向的是window对象

- 2.在函数作用域下 ，在非严格模式下: this的指向依旧是window对象在严格模式下，this的指向或者值为undefined

- 3:在对象里面，this的指向是当前该对象

```js
const User = {
    count:1,
    getCount:function () {
        return this
    }
}
console.log(User.getCount());//1  User
const func = User.getCount

console.log(func())//undefined window
```

## this指向场景问题

```js
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

//3
let a= 100
function test(){
    alert(a)
    a = 10
    alert(a)
}
test()
alert(a)
// 100 10 10
```

## es6新增的箭头函数和之前function函数有什么区别

1. 写法不同
2. 使用function定义的函数，this的指向随着调用环境的变化而变化，而箭头函数中的this指向是固定不变的，一直指向的是定义函数的环境
3. function定义的函数不论位置先后，调用皆没有问题，箭头函数定义一定要在调用前才行，否则是找不到的
4. function是可以定义构造函数的，而箭头函数不行的

## 事件循环（Event Loop）

在浏览器的实现上，诸如渲染任务、JavaScript 脚本执行、User Interaction（用户交互）、网络处理都跑在同一个线程上，当执行其中一个类型的任务的时候意味着其他任务的阻塞，为了有序的对各个任务按照优先级进行执行浏览器实现了我们称为 Event Loop 调度流程。
简单来说，Event Loop 就是执行代码、收集和处理事件以及执行队列中子任务的一个过程。

（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复上面的第三步。

![image-20210426001854830](https://github.com/guan997/LeetCode/blob/master/javascript/images/eventloop.png)

上图中，主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在"任务队列"中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。

**异步任务有宏任务和微任务。**

**宏任务macrotask**
在一次新的事件循环的过程中，遇到宏任务时，宏任务将被加入任务队列，但需要等到下一次事件循环才会执行。
**常见宏任务**： setTimeout 、 setInterval 、 requestAnimationFrame

优先级：主代码块 > setImmediate > MessageChannel > setTimeout / setInterval

比如：setImmediate指定的回调函数，总是排在setTimeout前面

**微任务**
当前事件循环的任务队列为空时，微任务队列中的任务就会被依次执行。在执行过程中，如果遇到微任务，微任务被加入到当前事件循环的微任务队列中。简单来说，只要有微任务就会继续执行，而不是放到下一个事件循环才执行。微任务队列属于任务运行环境内的一员，并非处于全局的位置。也就是说，每个任务都会有一个微任务
队列。
**常见微任务**： Promise.then 、 Promise.catch 、 MutationObserver  

优先级：process.nextTick > Promise > MutationObserver

**流程**

1. 取出一个宏任务执行，如果碰到宏任务，将其放入任务队列，如果碰到微任务，将其放入微任务队列

2. 检查微任务队列是否有可执行的微任务，如果有则执行微任务。微任务执行过程中，如果碰到宏任务，将其放入任务队列。如果碰到微任务，继续将其放入当前的微任务队列，直到微任务全部执行。

3. 更新渲染阶段，判断是否需要渲染，也就是说不一定每一轮 Event Loop 都会对应一次浏览器渲染。

4. 对于需要渲染的文档，执行 requestAnimationFrame 帧动画回调。

5. 对于需要渲染的文档，重新渲染绘制用户界面。

6. 判断任务队列和微任务队列是否为空，如果是，则进行 Idle 空闲周期的算法，判断是否要执行requestIdleCallback 的回调函数。  

**在当前任务运行环境内，微任务总是先于宏任务执行；**
`requestAnimationFrame 回调在页面渲染之前调用，适合做动画；`
`requestIdleCallback 在渲染屏幕之后调用，可以使用它来执行一些不太重要的任务。`  

### setTimeout和Promise执行顺序

**Promise——>其后的.then()——>setTimeout**

```js
//js-synthesis/eventLoop.js
console.log('打印'+1);
setTimeout(function(){
    console.log('打印'+2);
})
new Promise(function(resolve){
        console.log('打印'+3);
        resolve();
      }).then(function(){
        console.log(4);
      }
  );
console.log('打印'+10);
new Promise(function(resolve){
      setTimeout(function () {
        console.log('打印'+5);
      });
      resolve();
  }).then(function(){

  console.log('打印'+6)});
setTimeout(function(){
    new Promise(function(resolve){
        console.log('打印'+7);
      });
})
//执行结果：
//1;3;10;4;6;2;5;7
```

```js
console.log('打印' + 1); //第一个：打印1
setTimeout(function () {
    console.log('打印' + 2); //第六个：打印2 
})
new Promise(function (resolve, reject) {
    console.log('打印' + 3); //第二个：打印3
}).then(
    console.log('打印' + 4)); //第三个：打印4                        
console.log('打印' + 10); //第四个：打印10
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('打印' + 5); //第七个：打印5
    });
}).then(
    console.log('打印' + 6)); //第五个：打印6
setTimeout(function () {
    new Promise(function (resolve, reject) {
        console.log('打印' + 7); //第八个：打印7
    });
})
```

Promise比setTimeout()先执行。

因为Promise定义之后便会立即执行，其后的.then()是异步里面的微任务。

而setTimeout()是异步的宏任务。

```js
console.log("start");
setTimeout(() => {
    console.log("setTimeout")
})
Promise.resolve().
	then(function () {
    	console.log('promise1')
	})
    .then(function () {
   	 	console.log('promise2')
})
console.log("end");
// 主程序和和settimeout都是宏任务，两个promise是微任务
// 第一个宏任务（主程序）执行完，执行全部的微任务（两个promise），
// 再执行下一个宏任务（settimeout），所以结果为：
// 输出
// start     
// end       
// promise1  
// promise2  
// setTimeout
```

### setTimeout async promise执行顺序

```js
async function async1() {
    console.log("async1 start");
//await  async2();//执行这一句后，输出async2后，await会让出当前线程，后面的任务直接放入微任务，然后继续执行async1()函数后面的同步代码
    await async2();
    console.log("async1 end");
}
async function async2() {
    console.log('async2');
}
console.log("script start");
setTimeout(function () {
    console.log("settimeout");
}, 0);
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
console.log('script end');
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// settimeout
```

执行到setTimeout函数时，将其回调函数加入队列(此队列与promise队列不是同一个队列，执行的优先级低于promise)。继续执行

创建promise对象里面的代码属于同步代码，promise的异步性体现在then与catch处，所以promise1被输出，然后将then函数的代码加入队列，继续执行同步代码，输出script end。

至此同步代码执行完毕，开始从队列中调取任务执行，执行async1中await后面的代码，输出async1 end，由于刚刚提到过，setTimeout的任务队列优先级低于promise队列，所以首先执行promise队列的第一个任务，执行then方法的部分，输出promise2。

最后promise队列中任务执行完毕，再执行setTimeout的任务队列，输出settimeout。

v8引擎版本不同可能会导致async1 end 和 promise2的顺序不同

先执行同步代码，遇到异步代码就先加入队列，然后按入队的顺序执行异步代码，最后执行setTimeout队列的代码

`promise.Trick()>promise的回调>async>setTimeout>setImmediate`

### **async/await**

1. 带async关键字的函数会返回一个promise对象，如果里面没有await，执行起来等同于普通函数；如果没有await，async函数并没有很厉害是不是
2. await 关键字要在 async 关键字函数的内部，await 写在外面会报错；await如同他的语意，就是在等待，等待右侧的表达式完成。此时的await会让出线程，阻塞async内后续的代码，先去执行async外的代码,后面的任务直接放入微任务。等外面的同步代码执行完毕，才会执行里面的后续代码。就算await的不是promise对象，是一个同步函数，也会等这样操作

## 正则表达式

```js
// 邮政编码
/\d{6}/

// 小写英文字母
/^[a-z]+$/

// 英文字母
/^[a-zA-Z]+$/

// 日期格式 2019.12.01
/^\d{4}-\d{1,2}-d{1,2}$/

// 用户名
/^[a-zA-Z]\w{5,17}$/

// 简单的ip地址匹配
/\d+\.\d+\.\d+\.\d+/
```

## 手写字符串trim保证浏览器兼容性

```js
String.prototype.trim = function(){
    return this.replace(/^\s+/,'').replace(/\s+$/,'')
}
// 原型，this，正则表达式
```

## 获取多个数字中的最大值

```js
//手写max
function max(){
    const numb = Array.prototype.slice.call(arguments)//变为数组
    let max = 0
    numb.forEach(element => {
        if(element>max){
            max = element
        }
    });
    return max
}
console.log(max(12,32,53,64,143,1243,53))
//api
Math.max(12,32,53,64,143,1243,53)
```

## 如何用js实现继承

- class继承
- prototype继承 (ES5语法不推荐)

## 如何捕获js中的异常

```js
try{
    //todo
}catch(ex){
    console.error(ex)//手动捕获catch
}finally{
    // todo
}
// 自动捕获
window.onerror = function(message, source, lineNum,colNum,error){
    // 第一，对跨域的js，如CDN的，不会有详细的报错信息
    // 第二，对于压缩的js，还要配合sourceMaap反差到未压缩代码的行和列
}
```

## 什么是JSON

- json是一种数据格式，本质是一段字符串
- json格式和js对象结构一致，对js语言更友好
- window.JSON是一个全局对象：JSON.stringify JSON.parse

## 获取当前页面url参数

```js
// 解析url参数
// 传统方式
function query(name){
    // 去除url参数中的?
    const search = location.search.substr(1) //类似array.slice()
    // search:'a=10&b=20&c=30'
    // 以^或者&开始，${name}获取name，拼接字符串=，以&或者$为结束
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
    const res = search.match(reg)
    if(res === null){
        return null
    }
    return res[2]
}
console.log(query('b'))

// URLSearchParams
function queryNew(name){
    const search = location.search
    const p = new URLSearchParams(search)
    return p.get(name)
}
console.log(queryNew('b'))
```

## 将url参数解析为JS对象

```js
// 传统方式，分析search
function queryToObj(){
    const res = {}
    const search =location.search.substr(1)//去掉前面的`?`
    // 逐步拆分url
    search.split('&').forEach(paramStr => {
        const arr = paramStr.split('=')
        const key = arr[0]
        const val = arr[1]
        res[key] = val
    })
    return res
}
console.log(queryToObj())

// 使用URLSearchParams
function queryToObjNew(){
    const res = {}
    const pList = new URLSearchParams(location.search)
    pList.forEach((val, key) => {
        res[key] = val
    })
    return res
}
console.log(queryToObjNew())
```

## 数组拍平

```js
var arr = [1, 2, [3, 4], 5];
// api只能拍平一层数组
Array.prototype.concat.apply([], arr); //(5) [1, 2, 3, 4, 5]
Array.prototype.concat.call([], 1, 2, [3, 4], 5); //(5) [1, 2, 3, 4, 5]
[].concat(1, 2, [3, 4], 5); //(5) [1, 2, 3, 4, 5]
Array.prototype.concat.call([], arr); //(4) [1, 2, Array(2), 5]
[].concat(arr); // 4[1, 2, Array(2), 5]

function flat(arr) {
    // 验证arrNew中，还有没有深层数组[1,2,[3,4]]
    const isDeep = arr.some(item => item instanceof Array)
    if (!isDeep) {
        //如果没有深层数组，arrNew就已经是flatern[1,2,3,4]
        return arr
    }
    const res = Array.prototype.concat.apply([], arr)
    return flat(res) //递归
}
const res = flat([1, 2, [3, 4, [10, 20, [100,200]]], 5])
console.log(res)
```

## 数组去重

- 传统方式，遍历元素挨个比较、去重
- 使用Set
- 考虑计算效率

```js
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
```

## 深拷贝和浅拷贝

- 浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以**如果其中一个对象改变了这个地址，就会影响到另一个对象**。
- 深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且**修改新对象不会影响原对象**。

```
var a1 = {b: {c: {}};

var a2 = shallowClone(a1); // 浅拷贝方法
a2.b.c === a1.b.c // true 新旧对象还是共享同一块内存

var a3 = deepClone(a3); // 深拷贝方法
a3.b.c === a1.b.c // false 新对象跟原对象不共享内存
```

- 借助[ConardLi大佬](https://github.com/ConardLi)以下两张图片，帮我们更好的理解两者的含义：
  [![img](https://camo.githubusercontent.com/0bd675b8e7ebefa5610405296b17d10a5cb2fa70/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323032302f332f312f313730393635323539666237363866643f773d36333426683d32373726663d706e6726733d3538313833)](https://camo.githubusercontent.com/0bd675b8e7ebefa5610405296b17d10a5cb2fa70/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323032302f332f312f313730393635323539666237363866643f773d36333426683d32373726663d706e6726733d3538313833)
  [![img](https://camo.githubusercontent.com/e9c9843a300e0e3d208089f5c29dd0b30a6bcf0b/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323032302f332f312f313730393635326137393438643162383f773d36333426683d33373326663d706e6726733d3730343630)](https://camo.githubusercontent.com/e9c9843a300e0e3d208089f5c29dd0b30a6bcf0b/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323032302f332f312f313730393635326137393438643162383f773d36333426683d33373326663d706e6726733d3730343630)

总而言之，浅拷贝只复制指向某个对象的指针，而不复制对象本身，**新旧对象还是共享同一块内存**。但深拷贝会另外创造一个一模一样的对象，**新对象跟原对象不共享内存**，修改新对象不会改到原对象。

## 赋值和深/浅拷贝的区别

这三者的区别如下，不过比较的前提都是**针对引用类型**：

- 当我们把一个对象赋值给一个新的变量时，**赋的其实是该对象的在栈中的地址，而不是堆中的数据**。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。
- 浅拷贝：重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一块内存，会相互影响。
- 深拷贝：从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝,拷贝前后的两个对象互不影响。

## 手写深拷贝

```js
/**
 * 深拷贝
 * @params {Object} target 要拷贝的对象
 */
// Map()可以替换为WeakMap()解决循环引用问题
function deepClone(target, map = new Map()) {
    //  如果是原始类型，无需继续拷贝，直接返回
    // 如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。
    if (typeof target === 'object') {
        // 兼容数组
        let cloneTarget = Array.isArray(target) ? [] : {};
        // 解决循环引用问题
        // 检查map中有无克隆过的对象
        // 有 - 直接返回
        // 没有 - 将当前对象作为key，克隆对象作为value进行存储
        // 继续克隆
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = deepClone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
}
// 测试用例
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

console.log(deepClone(target));
```

使用WeakMap()

`weakMap`的作用：

> WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

什么是弱引用呢？

> 在计算机程序设计中，弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。 一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。

我们默认创建一个对象：`const obj = {}`，就默认创建了一个强引用的对象，我们只有手动将`obj = null`，它才会被垃圾回收机制进行回收，如果是弱引用对象，垃圾回收机制会自动帮我们回收。

注意就是对象存在**循环引用**的情况，即对象的属性直接的引用了自身的情况，解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝

### 性能优化

`while`的效率比`for、while、for in`的执行效率高，把`for in`遍历改变为`while`遍历。

```js
//使用while来实现一个通用的forEach遍历，iteratee是遍历的回掉函数，他可以接收每次遍历的value和index两个参数：
function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}
//对我们的cloen函数进行改写：当遍历数组时，直接使用forEach进行遍历，当遍历对象时，使用Object.keys取出所有的key进行遍历，然后在遍历时把forEach会调函数的value当作key使用：
function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        let cloneTarget = isArray ? [] : {};

        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);

        const keys = isArray ? undefined : Object.keys(target);
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = clone2(target[key], map);
        });

        return cloneTarget;
    } else {
        return target;
    }
}
```

### 其他数据类型

```js
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
let obj = { name: 1, address: { x: 100 } };
obj.o = obj; // 对象存在循环引用的情况
let d = deepClone(obj);
obj.address.x = 200;
console.log(d);
```

## RAF requestAnimationFrame

- 要想动画流畅，更新频率要60帧/s，即16.67更新第一视图(1000/60=16.67)
- setTimeout要手动控制频率，而RAF浏览器会自动控制
- 后台标签或隐藏iframe中，RAF会暂停，而setTimeout依然执行

```js
// 3s 把宽度从 100px 变为 640px ，即增加 540px
// 60帧/s ，3s 180 帧 ，每次变化 3px

const $div1 = $('#div1')
let curWidth = 100
const maxWidth = 640

// setTimeout
// function animate(){
//      curWidth = curWidth +3 
//      $div1.css('width', curWidth)
//      if(curWidth < maxWidth){
//          setTimeout(animate,16.7) //自己控制时间
//      }
// }
// animate()
// RAF
function animateRAF(){
     curWidth = curWidth +3 
     $div1.css('width', curWidth)
     if(curWidth < maxWidth){
         window.requestAnimationFrame(animateRAF) // 时间不用自己控制
     }
}
animateRAF()
```

## 性能优化

- 原则：多使用内存、缓存，减少计算、减少网络请求
- 方向：加载页面，页面渲染，页面操作流畅度

<a src="">`前端性能优化三大方案`</a>

## JavaScript数组越界问题

```js
// js的数组索引越界
var a = []; //定义一个空数组
//  改变length属性,使得a成为一个装满的稀疏数组.数组的最大元素个数为Math.pow(2, 32) - 1个(4294967295),
//  由于数组索引从0开始,所以最大的索引号就是Math.pow(2, 32) - 2
a[Math.pow(2, 32) - 2] = "最大索引";
console.log(a[Math.pow(2, 32) - 2], "Math.pow(2, 32) - 2")
console.log("a.length === Math.pow(2, 32) - 1:", a.length === Math.pow(2, 32) - 1); //true,a的length已经不能再大了
try {
    a.push("我比最大索引还大1", "我比最大索引还大2");//再往里面push元素,抛出异常
} catch (e) {
    console.log(e instanceof RangeError); // true,数组越界
    console.log("数组越界", e); // true,数组越界
}
console.log(a.length === Math.pow(2, 32) - 1); // true,长度没变,还是4294967295,那元素呢?push进去没有? 
console.log(a[Math.pow(2, 32) - 1])
console.log(a[Math.pow(2, 32) - 1] === "我比最大索引还大1"); // true,居然能访问,而且值还存进去了!
console.log(a[Math.pow(2, 32)])
console.log(a[Math.pow(2, 32)] === "我比最大索引还大2"); // true,这个也是!
try {
    a.push("我比最大索引还大3?"); // 再push一个
} catch (e) {
    console.log(e instanceof RangeError); // true,仍然报错
    console.log("数组越界", e); // true,数组越界
}
console.log(a[Math.pow(2, 32) + 1]); //undefined,没有存上?
console.log(a[Math.pow(2, 32) - 1]) //"我比最大索引还大3?",原来是覆盖了第一个越界的元素
console.log(a[Math.pow(2, 32)]) //"我比最大索引还大2",这个没被覆盖
```
- JavaScript中的数组是一个稍微有点特殊的普通对象，在Array.prototype.push方法执行时,会先把每个要push的元素push进去,也就是定义多个自身属性，然后才设置数组的length属性为最大的索引值+1，这个例子中就是Math.pow(2, 32) + 1,这时才会报错，但上面的元素已经push进去了。如果再次push的话，还会从当前的length属性-1的那个索引处开始push，也就出现了覆盖而不是继续追加的情况.

<a href="https://coding.imooc.com/class/400.html">`快速搞定前端JavaScript面试`</a>

## 面试题

### return

```js
function foo1(){
    return {
        bar:"hello"
    };
}
function foo2(){
    return 
    {
        bar:"hello"
    };
}
console.log("foo1 returns:")
console.log(foo1())
console.log("foo2 returns:")
console.log(foo2())
```

```js
//输出结果
foo1 returns:
{ bar: 'hello' }
foo2 returns:
undefined
```

这不仅令人惊讶，而且让人困惑，因为 foo2 返回 undefined，却没有任何错误
抛出 。
原因与这样一个事实有关 ， 即分号在 JavaScript 中是一个可选项（尽管 省 略它们 通
常是非常糟糕的形式。结果是  当 碰到 foo2（）中包含 return 语句的代码行时（代码行上没有其他任何代码），分号会立即自动插入返回语句之后，也不会抛出错误 ， 因为代码的其余部分是完全有效的 ， 即使它没有得到调用或做任何事情 。这也说明了在 JavaScript 中大括号的位直应该放在语句后面的编程风格更符合 JavaScript
的语法要求。  

如下所示

```js
function foo2() {
    //在foo2（）中遇到包含return语句的行没有其他内容时，会在return语句之后立即自动插入分号。
    //return=>
     return；
     {
       bar: "hello"
     };
}
```





  