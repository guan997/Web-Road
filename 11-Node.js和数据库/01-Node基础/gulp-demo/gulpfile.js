// 引用gulp模块
const gulp = require('gulp');

// 引用gulp-htmlmin    html文件压缩
const htmlmin = require('gulp-htmlmin');

// 引用gulp-file-include 抽取公共代码
const fileinclude = require('gulp-file-include');

// 引用gulp-less less语法转化
const less = require('gulp-less');

// 引用gulp-csso 压缩css
const csso = require('gulp-csso');

// 引用gulp-babel javascript语法转化
const babel = require('gulp-babel');

// 引用gulp-uglify 压缩混淆javascript
const uglify = require('gulp-uglify');

// 页面自动刷新
const connect=require('gulp-connect');

// 清空文件
const clean=require('gulp-clean');
// 使用gulp.task建立任务
// 1.任务的名称
// 2.任务的回调函数
gulp.task('first', () => {
    console.log('第一个gulp任务执行');
    // 1.使用gulp.src获取要处理的文件
    gulp.src('./src/css/base.css')
        .pipe(gulp.dest('dist/css')); //pipe()管道,dest()输出文件 将处理后的文件输出到dist目录
})

// html任务
// 1.html文件中代码的压缩操作
// 2.抽取html文件中的公共代码
gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        .pipe(fileinclude())
        // 压缩html文件中的代码
        // collapseWhitespace:true压缩空格
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
});

// css任务
// 1.less语法转化
// 2.css代码压缩
gulp.task('cssmin', () => {
    // 选择css目录下的所有less文件以及css文件
    gulp.src(["./src/css/*.css", "./src/css/*.less"])
        // 将less语法转化为css语法
        .pipe(less())
        // 将css代码进行压缩
        .pipe(csso())
        // 将处理的结果进行输出
        .pipe(gulp.dest('dist/css'))
})

// js任务
// 1.es6代码转化
// 2.代码压缩
gulp.task('jsmin', () => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            // 判断当前代码的运行环境 将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

// 复制文件夹
gulp.task('copy', () => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dist/lib'));
})


// 页面自动刷新
// gulp.task('connect:app', function () {
//     connect.server({
//         root: 'src', //根目录
//         // ip:'192.168.3.162', 默认localhost
//         livereload: true, //自动更新
//         port: 9999 //端口
//     })
// })
// 页面自动刷新
// gulp.task('connect:dist', function (cb) {
//     connect.server({
//         root: 'src',
//         livereload: true,
//         port: 9999
//     })

//     cb(); //执行回调，表示这个异步任务已经完成，起通作用,这样会执行下个任务
// })
// 清理文件
gulp.task('clean:app', function () {
    return gulp.src('dist', {
            read: false
        })
        .pipe(clean());
})
// 构建任务
//gulp.series|4.0 依赖顺序执行
//gulp.parallel|4.0 多个依赖嵌套'html','css','js'并行
gulp.task('default', gulp.series(gulp.parallel('htmlmin', 'cssmin', 'jsmin', 'copy')));

gulp.task('init', gulp.series('clean:app','htmlmin', 'cssmin', 'jsmin', 'copy'));


// //启动任务connect:app服务，并监控变化
// gulp.task('dev', gulp.series('init', 'connect:app'));
 
// // 生成打包文件
// gulp.task('build', gulp.series('init'));
 
// //启动任务connect:dist服务，生成打包文件后，监控其变化
// gulp.task('server', gulp.series('connect:dist', 'build'));