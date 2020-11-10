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

