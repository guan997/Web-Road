# Node.js

### 第三方模块 nodemon
辅助项目开发 当文件被修改时自动执行文件
在Node.js中，每次修改文件都要在命令行工具中重新执行该文件，非常繁琐
安装 npm install nodemon -g
使用 nodemon 代替node 执行文件 
停止 ctrl + c

### 第三方模块nrm
改变下载地址
安装 npm install nrm -g
查询下载地址列表 nrm ls
切换 nrm use 下载地址名称

### 第三方模块Gulp
基于node平台开发的前端构建工具
将机械化操作编写成任务, 想要执行机械化操作时执行一个命令行命令任务就能自动执行了
用机器代替手工，提高开发效率。

### Gulp的作用
项目上线，HTML、CSS、JS文件压缩合并
语法转换（es6、less ...）
公共文件抽离
修改文件浏览器自动刷新

### Gulp的使用
安装 npm install gulp
根目录建立gulpfile.js
重构文件夹结构src目录放置源代码文件 dist目录放置构建后文件
在gulpfile.js中编写任务
安装 npm install gulp-cli -g
命令行执行gulp任务

### gulp中提供的方法
-   gulp.src()：获取任务要处理的文件
-   gulp.dest(): 输出文件
-   gulp.task(): 建立gulp任务
-   gulp.watch()：监控文件的变化
-   gulp.series() 依赖顺序执行
-   gulp.parallel() 多个依赖嵌套'html','css','js'并行
在以前的 gulp 版本中，task() 方法用来将函数注册为任务（task）。虽然这个 API 依旧是可以使用的，但是 导出（export）将会是主要的注册机制，除非遇到 export 不起作用的情况。

### 组合任务
Gulp 提供了两个强大的组合方法： series() 和 parallel()，允许将多个独立的任务组合为一个更大的操作。这两个方法都可以接受任意数目的任务（task）函数或已经组合的操作。series() 和 parallel() 可以互相嵌套至任意深度。

如果需要让任务（task）按顺序执行，请使用 series() 方法。

### 导出任务
-   公开任务（Public tasks） 从 gulpfile 中被导出（export），可以通过 gulp 命令直接调用。
-   私有任务（Private tasks） 被设计为在内部使用，通常作为 series() 或 parallel() 组合的组成部分。
一个私有（private）类型的任务（task）在外观和行为上和其他任务（task）是一样的，但是不能够被用户直接调用。如需将一个任务（task）注册为公开（public）类型的，只需从 gulpfile 中导出（export）即可。

gulp.series|4.0 依赖顺序执行
gulp.parallel|4.0 多个依赖嵌套'html','css','js'并行
### Gulp插件
-   gulp-htmlmin:html文件压缩
-   gulp-csso：压缩css
-   gulp-babel：javascript语法转化
-   gulp-less：less语法转化
-   gulp-uglify：压缩混淆javascript
-   gulp-file-include：公共文件包含
-   browsersync：浏览器实时同步
使用方式：
安装 引入 调用
### gulp-file-include
抽出公共部分
引用 @@include('./common/header.html')
```js   
// html任务
// 1.html文件中代码的压缩操作
// 2.抽取html文件中的公共代码
gulp.task('htmlmin', ()=>{
    gulp.src('./src/*.html')
    .pipe(fileinclude())
    // 压缩html文件中的代码
    // collapseWhitespace:true压缩空格
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
```

### gulp-babel
javascript语法转化
安装 npm install gulp-babel @babel/core @babel/preset-env
// 引用gulp-babel javascript语法转化
const babel = require('gulp-babel');

### 构建任务
gulp.series|4.0 依赖顺序执行
gulp.parallel|4.0 多个依赖嵌套'html','css','js'并行
```js   
gulp.task('default', gulp.series(gulp.parallel('htmlmin','cssmin','jsmin','copy')));
```

### 生成package.json
npm init -y 生成默认package.json
npm init 生成package.json

### 项目依赖
在项目的开发阶段和线上运营阶段，都需要依赖的第三方包，称为项目依赖
使用npm install 包名 命令下载的文件会默认添加到package.json文件的dependencies字段中

### 开发依赖
在项目的开发阶段需要依赖，线上运营阶段不需要依赖的第三方包，称为开发依赖
使用npm install 包名 --save-dev 命令下载的文件会默认添加到package.json文件的devDependencies字段中

### 安装生产环境(项目运行依赖)
npm install --production

### package.json文件的作用
项目描述文件，记录了当前项目信息，例如项目名称、版本、作者、github地址、当前项目依赖了哪些第三方模块等。
使用npm init -y命令生成。

### package-lock.json文件的作用
锁定包的版本，确保再次下载时不会因为版本而产生问题
加快下载速度，因为该文件中已经记录了项目所依赖第三方报的树状结构和包的下载地址，重新安装时只需下载即可，不需要做额外的工作

### 别名 npm run build
```js
"scripts":{
    "build":"nodemon app.js"
}
```

### Node.js中模块加载机制
### 模块查找规则-当模块拥有路径但没有后缀时
require方法根据模块路径查找模块，如果是完整路径，直接引入模块。
如果模块后缀省略，先找同名JS文件再找同名JS文件夹
如果找到了同名文件夹，找文件夹中的index.js
如果文件夹中没有index.js就会去当前文件夹中的package.json文件中查找main选项中的入口文件
如果找指定的入口文件不存在或者没有指定入口文件就会报错，模块没有被找到

### 模块查找规则-当模块没有路径且没有后缀时
Node.js会假设它是系统模块
Node.js会去node_modules文件夹中
首先看是否有该名字的JS文件
再看是否有该名字的文件夹
如果是文件夹看里面是否有index.js
如果没有index.js查看该文件夹中的package.json中的main选项确定模块入口文件
否则找不到报错

### 服务器端基础概念

### 网站的组成
网站应用程序主要分为两大部分：客户端和服务器端。
客户端：在浏览器中运行的部分，就是用户看到并与之交互的界面程序。使用HTML、CSS、JavaScript构建。
服务器端：在服务器中运行的部分，负责存储数据和处理应用逻辑。

### Node网站服务器 
能够提供网站访问服务的机器就是网站服务器，它能够接收客户端的请求，能够对请求做出响应。

URL的组成：传输协议://服务器IP或域名:端口/资源所在位置标识

### 创建web服务器
```js
  // 引用系统模块
 const http = require('http');
  // 创建web服务器
 const app = http.createServer();
  // 当客户端发送请求的时候
 app.on('request', (req, res) => {
        //  响应
       res.end('<h1>hi, user</h1>');
 });
  // 监听3000端口
 app.listen(3000);
 console.log('服务器已启动，监听3000端口，请访问 localhost:3000')
```

### HTTP协议的概念
超文本传输协议（英文：HyperText Transfer Protocol，缩写：HTTP）规定了如何从网站服务器传输超文本到本地浏览器，它基于客户端服务器架构工作，是客户端（用户）和服务器端（网站）请求和应答的标准。

报文：在HTTP请求和响应的过程中传递的数据块就叫报文，包括要传送的数据和一些附加信息，并且要遵守规定好的格式。

### 请求报文
1. 请求方式 （Request Method）
GET     请求数据
POST   发送数据
2. 请求地址 （Request URL）
```js
 app.on('request', (req, res) => {
     req.headers  // 获取请求报文
     req.url      // 获取请求地址
     req.method   // 获取请求方法
 });
```
### 响应报文
1. HTTP状态码
200 请求成功
404 请求的资源没有被找到
500 服务器端错误
400 客户端请求有语法错误
2. 内容类型
text/html
text/css
application/javascript
image/jpeg
application/json

### HTTP请求与响应处理
### 请求参数
客户端向服务器端发送请求时，有时需要携带一些客户信息，客户信息需要通过请求参数的形式传递到服务器端，比如登录操作。

### GET请求参数
参数被放置在浏览器地址栏中，例如：http://localhost:3000/?name=zhangsan&age=20
参数获取需要借助系统模块url，url模块用来处理url地址
```js
 const http = require('http');
 // 导入url系统模块 用于处理url地址
 const url = require('url');
 const app = http.createServer();
 app.on('request', (req, res) => {
     // 将url路径的各个部分解析出来并返回对象
         // true 代表将参数解析为对象格式
     let {query} = url.parse(req.url, true);
     console.log(query);
 });
 app.listen(3000);
```

### POST请求参数
参数被放置在请求体中进行传输
获取POST参数需要使用data事件和end事件
使用querystring系统模块将参数转换为对象格式
```js
 // 导入系统模块querystring 用于将HTTP参数转换为对象格式
 const querystring = require('querystring');
 app.on('request', (req, res) => {
     let postData = '';
     // 监听参数传输事件
     req.on('data', (chunk) => postData += chunk;);
     // 监听参数传输完毕事件
     req.on('end', () => { 
         console.log(querystring.parse(postData)); 
     }); 
 });
```

### 路由
http://localhost:3000/index
http://localhost:3000/login
路由是指客户端请求地址与服务器端程序代码的对应关系。简单的说，就是请求什么响应什么。
```js
 // 当客户端发来请求的时候
 app.on('request', (req, res) => {
     // 获取客户端的请求路径
     let { pathname } = url.parse(req.url);
     if (pathname == '/' || pathname == '/index') {
         res.end('欢迎来到首页');
     } else if (pathname == '/list') {
         res.end('欢迎来到列表页页');
     } else {
        res.end('抱歉, 您访问的页面出游了');
     }
 });
```

### 静态资源
服务器端不需要处理，可以直接响应给客户端的资源就是静态资源，例如CSS、JavaScript、image文件。
http://www.baidu.com/images/logo.png
mime模块获取访问的文件类型
npm install mime
mime.getType(realPath);

### 动态资源
相同的请求地址不同的响应资源，这种资源就是动态资源。
http://www.baidu.com/article?id=1
http://www.baidu.com/article?id=2

### 客户端请求途径
### GET方式
浏览器地址栏
link标签的href属性
script标签的src属性
img标签的src属性
Form表单提交
### POST方式
Form表单提交

### Node.js异步编程
### 同步API, 异步API
```js
 // 路径拼接
 const public = path.join(__dirname, 'public');
 // 请求地址解析
 const urlObj = url.parse(req.url);
 // 读取文件
 fs.readFile('./demo.txt', 'utf8', (err, result) => {
     console.log(result);
 });
```
同步API：只有当前API执行完成后，才能继续执行下一个API
```js
console.log('before'); 
console.log('after');
```
异步API：当前API的执行不会阻塞后续代码的执行
```js
console.log('before');
setTimeout(
   () => { console.log('last');
}, 2000);
console.log('after');
```
同步API可以从返回值中拿到API执行的结果, 但是异步API是不可以的
异步函数的返回值通过回调函数拿到
```js
    // 同步
  function sum (n1, n2) { 
      return n1 + n2;
  } 
  const result = sum (10, 20);
```
```js
    // 异步
  function getMsg () { 
      setTimeout(function () { 
          return { msg: 'Hello Node.js' }
      }, 2000);
  }
  const msg = getMsg ();
```
### 回调函数
自己定义函数让别人去调用。
```js
  // getData函数定义
 function getData (callback) {}
  // getData函数调用
 getData (() => {});
```
### 使用回调函数获取异步API执行结果
```js
function getMsg (callback) {
    setTimeout(function () {
        callback ({ msg: 'Hello Node.js' })
    }, 2000);
}
getMsg (function (msg) { 
    console.log(msg);
});
// getData((n)=>{
//     console.log('callback函数被调用了');
//     console.log(n);
// });
```
### 同步API, 异步API的区别（代码执行顺序）
同步API从上到下依次执行，前面代码会阻塞后面代码的执行
```js
for (var i = 0; i < 100000; i++) { 
    console.log(i);
}
console.log('for循环后面的代码');
```
异步API不会等待API执行完成后再向下执行代码
```js
console.log('代码开始执行'); 
setTimeout(() => { console.log('2秒后执行的代码')}, 2000);
setTimeout(() => { console.log('"0秒"后执行的代码')}, 0); 
console.log('代码结束执行');
```
### 代码执行顺序分析
异步执行的运行机制如下。（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）

（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复上面的第三步。
`http://www.ruanyifeng.com/blog/2014/10/event-loop.html`

### Node.js中的异步API
```js
 fs.readFile('./demo.txt', (err, result) => {});
```
```js
 var server = http.createServer();
 server.on('request', (req, res) => {});
```
如果异步API后面代码的执行依赖当前异步API的执行结果，但实际上后续代码在执行的时候异步API还没有返回结果，这个问题要怎么解决呢？
```js
fs.readFile('./demo.txt', (err, result) => {});
console.log('文件读取结果');
```
需求：依次读取A文件、B文件、C文件

### 回调函数地狱问题： 回调函数嵌套层次过多，难以维护
```js
const fs = require('fs');
// 回调函数嵌套层次过多，难以维护，导致回调函数地狱问题
fs.readFile('./1.txt', 'utf8', (err, result1) => {
    console.log(result1);
    fs.readFile('./2.txt', 'utf8', (err, result2) => {
        console.log(result2);
        fs.readFile('./3.txt', 'utf8', (err, result3) => {
            console.log(result3);
        })
    })
})
```
### Promise
Promise出现的目的是解决Node.js异步编程中回调地狱的问题。
```js
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve({name: '张三'})
        }else {
            reject('失败了') 
        } 
    }, 2000);
});
promise.then(result => console.log(result); // {name: '张三'})
       .catch(error => console.log(error); // 失败了)
```
1.Promise 是一个 构造函数，既然是构造函数，可以  new Promise() 得到一个 Promise 的实例；
2. 在 Promise 上，有两个函数，分别叫做 resolve（成功之后的回调函数） 和 reject（失败之后的回调函数）
3. 在 Promise 构造函数的 Prototype 属性上，有一个 .then() 方法，也就说，只要是 Promise 构造函数创建的实例，都可以访问到 .then() 方法
4. Promise 表示一个 异步操作；每当 new 一个 Promise 的实例，这个实例，就表示一个具体的异步操作；
5. Promise 创建的实例，是一个异步操作，这个 异步操作的结果，有两种状态：
 5.1 状态1： 异步执行成功了，在内部调用 成功的回调函数 resolve 把结果返回给调用者；
 5.2 状态2： 异步执行失败了，在内部调用 失败的回调函数 reject 把结果返回给调用者；
 5.3 由于 Promise 的实例，是一个异步操作，所以，内部拿到 操作的结果后，无法使用 return 把操作的结果返回给调用者； 这时候，只能使用回调函数的形式，来把 成功 或 失败的结果，返回给调用者；
6. 在 new 出来的 Promise 实例上，调用.then() 方法，【预先】 为 这个 Promise 异步操作，指定 成功（resolve） 和 失败（reject） 回调函数；
then() 方法返回一个 Promise。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。
### 异步函数
ES7 异步函数是异步编程语法的终极解决方案，它可以让我们将异步代码写成同步的形式，让代码不再有回调函数嵌套，使代码变得清晰明了。
ES2015（ES6）里包含了 Promise 标准，如今已经在大部分运行时里实装
ES2017 增加了 Await/Async 语法，但注意， Await 后面必须跟 Promise 实例才能实现异步
```js
const fn = async () => {};
async function fn () {}
```
### 异步函数关键字
async关键字
1. 普通函数定义前加async关键字 普通函数变成异步函数
2. 异步函数默认返回promise对象
3. 在异步函数内部使用return关键字进行结果返回 结果会被包裹的promise对象中 return关键字代替了

resolve方法
4. 在异步函数内部使用throw关键字抛出程序异常
5. 调用异步函数再链式调用then方法获取异步函数执行结果
6. 调用异步函数再链式调用catch方法获取异步函数执行的错误信息

await关键字
1. await关键字只能出现在异步函数中
2. await promise await后面只能写promise对象 写其他类型的API是不不可以的
3. await关键字可是暂停异步函数向下执行 直到promise返回结果

