# Node.js

### 第三方模块 nodemon
辅助项目开发 当文件被修改时自动执行文件
安装 npm install nodemon -g
使用 nodemon 代替node 执行文件 
停止 ctrl + c

### 第三方模块nrm
改变下载地址
安装 npm install nrm -g
查询下载地址列表 nrm ls
切换 nrm use 下载地址名称

### Gulp
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
