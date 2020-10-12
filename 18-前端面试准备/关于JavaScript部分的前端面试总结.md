## 关于JavaScript部分的前端面试总结

##  var 和 let 从const的区别 

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

不使用WeakMap()

- 检查`map`中有无克隆过的对象
- 有 - 直接返回
- 没有 - 将当前对象作为`key`，克隆对象作为`value`进行存储
- 继续克隆

```js
function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
};
```

使用WeakMap()

`weakMap`的作用：

> WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

什么是弱引用呢？

> 在计算机程序设计中，弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。 一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。

我们默认创建一个对象：`const obj = {}`，就默认创建了一个强引用的对象，我们只有手动将`obj = null`，它才会被垃圾回收机制进行回收，如果是弱引用对象，垃圾回收机制会自动帮我们回收。

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

注意就是对象存在**循环引用**的情况，即对象的属性直接的引用了自身的情况，解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝

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
//改变length属性,使得a成为一个装满的稀疏数组.数组的最大元素个数为Math.pow(2, 32) - 1个(4294967295),
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