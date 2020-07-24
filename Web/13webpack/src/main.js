// 这是main.js 是我们项目的JScript入口文件

// 导入Jquery
// import *** from *** 是es6导入模块的函数
// 1. webpack 能够处理 JS 文件的互相依赖关系；
// 2. webpack 能够处理JS的兼容问题，把 高级的、浏览器不是别的语法，转为 低级的，浏览器能正常识别的语法
// 处理 JS 文件的互相依赖关系运行的命令格式：    webpack  要打包的文件的路径 -o 打包好的输出文件的路径
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor', 'lightblue');
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634';
    });
})