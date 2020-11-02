// webpack默认配置文件
const path = require('path') // / 启用热更新的 第2步
const webpack = require('webpack');
// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
// 这个配置js文件，通过Node中的模块操作，向外暴露一个配置对象
module.exports = {
    mode:'development',
    // 编写入口文件、输出打包文件的位置
    entry: path.join(__dirname, './src/index.js'), //入口，表示，要使用 webpack 打包哪个文件
    //指定出口，表示打包好的文件输出到哪个目录
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [ // 配置插件的节点
        // 创建一个 在内存中 生成 HTML  页面的插件
        new htmlWebpackPlugin({
            // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html' // 指定生成的页面的名称
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true,
        compress: true
    },
    module: {// 这个节点，用于配置 所有 第三方模块 加载器 
        // 所有第三方模块的 匹配规则
        rules: [{
            // 使用babel处理高级JS语法
            test: /\.js$/,
            use: 'babel-loader', exclude: /node_modules/
        }]
    }
}