const path = require('path');
// / 启用热更新的 第2步
const webpack = require('webpack');
// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去

// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');


// 这个配置js文件，通过Node中的模块操作，向外暴露一个配置对象
module.exports = {
    // 编写入口文件、输出打包文件的位置
    entry: path.join(__dirname, './src/main.js'), //入口，表示，要使用 webpack 打包哪个文件
    //指定出口，表示打包好的文件输出到哪个目录
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    // // 启用热更新 的 第1步
    // devServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
    //     //  --open --port 3000 --contentBase src --hot
    //     open: true, // 自动打开浏览器
    //     port: 3000, // 设置启动时候的运行端口
    //     contentBase: 'src', // 指定托管的根目录
    //     hot: true // 启用热更新 的 第1步
    // },
    // mode: 'development' // 设置mode
    plugins: [ // 配置插件的节点
        // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
        new webpack.HotModuleReplacementPlugin(),

        // 创建一个 在内存中 生成 HTML  页面的插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            filename: 'index.html' // 指定生成的页面的名称
        })
    ],
    module: { // 这个节点，用于配置 所有 第三方模块 加载器 
        rules: [// 所有第三方模块的 匹配规则
            //  配置处理 .css 文件的第三方loader 规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            //配置处理 .less 文件的第三方 loader 规则
            {test: /\.less$/, use: ['style-loader', 'css-loader','less-loader']},
            // 配置处理 .scss 文件的 第三方 loader 规则
            {test: /\.scss$/, use: ['style-loader', 'css-loader','sass-loader']},
        ]
    }
    

}

// 在 控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
//  1. 首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
//  2. webpack 就会去 项目的 根目录中，查找一个叫做 `webpack.config.js` 的配置文件
//  3. 当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中，导出的配置对象
//  4. 当 webpack 拿到 配置对象后，就拿到了 配置对象中，指定的 入口  和 出口，然后进行打包构建；