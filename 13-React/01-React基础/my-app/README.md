# React基础
## 安装
### 创建新的React应用
 - Node >= 10.16 和 npm >= 5.6
 - 创建项目npx create-react-app my-app
 - npm start 执行
 ` npx 不是拼写错误 —— 它是 npm 5.2+ 附带的 package 运行工具。 ` 
    Create React App 不会处理后端逻辑或操纵数据库；它只是创建一个前端构建流水线（build pipeline），所以你可以使用它来配合任何你想使用的后端。它在内部使用 Babel 和 webpack，但你无需了解它们的任何细节。
    执行 npm run build 会在 build 文件夹内生成你应用的优化版本
#### React相关npm的第三方库

##### Next.js
Next.js 是一个流行的、轻量级的框架，用于配合 React 打造静态化和服务端渲染应用。它包括开箱即用的样式和路由方案，并且假定你使用 Node.js 作为服务器环境。
##### Gatsby
Gatsby 是用 React 创建静态网站的最佳方式。它让你能使用 React 组件，但输出预渲染的 HTML 和 CSS 以保证最快的加载速度。
##### 相关工具链
- Neutrino 把 webpack 的强大功能和简单预设结合在一起。并且包括了 React 应用和 React 组件的预设。
- Parcel 是一个快速的、零配置的网页应用打包器，并且可以搭配 React 一起工作。
- Razzle 是一个无需配置的服务端渲染框架，但它提供了比 Next.js 更多的灵活性。
##### 自定义工具链
一个 package 管理器，比如 Yarn 或 npm。它能让你充分利用庞大的第三方 package 的生态系统，并且轻松地安装或更新它们。
一个打包器，比如 webpack 或 Parcel。它能让你编写模块化代码，并将它们组合在一起成为小的 package，以优化加载时间。
一个编译器，例如 Babel。它能让你编写的新版本 JavaScript 代码，在旧版浏览器中依然能够工作。
###### React的检查工具下载
[React Developer Tools](https://www.extfans.com/web-development/fmkadmapgofadopljbjfkapdkoienihi/)
安装Chrome的React开发者工具 React Developer Tools一款类似于浏览器调试台的插件开发者调试工具，由facebook官方开发推出
在浏览器中安装这个插件后，可以查看Chrome开发者工具中组件的层次、各个组件的Props、States等信息。
安装完成后，你将在Chrome DevTools中看到一个名为React的新选项。点击它，就可以查看新增的内容了。
React Developer Tools会自动检测React组件，不过在webpack-dev-server模式下，webpack会自动将React组件放入到iframe下，导致React组件检测失败，变通方法是webpack-dev-server配置在--inline模式下即可。
在chrome浏览器，会出现React，右侧props--组件属性，state--组件状态。

## 在网站中添加React

### 添加一个DOM容器

  在编辑的HTML页面，添加一个空的<div>标签作为标记你想要用React内容的位置
```html
<!-- ... 其它 HTML ... -->

<div id="like_button_container"></div>

<!-- ... 其它 HTML ... -->
```
给这个 <div> 加上唯一的 id HTML 属性,之后可以在js代码中找到，并且在其中显示一个React组件
提示
提示

`可以像这样在 <body> 标签内的任意位置放置一个“容器” <div>。根据需要，你可以在一个页面上放置多个独立的 DOM 容器。它们通常是空标签 —— React 会替换 DOM 容器内的任何已有内容。`

### 添加Script标签

接下来，在 `</body>` 结束标签之前，向 HTML 页面中添加三个 `<script>` 标签：

```html
  <!-- ... 其它 HTML ... -->

  <!-- 加载 React。-->
  <!-- 注意: 部署时，将 "development.js" 替换为 "production.min.js"。-->
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

  <!-- 加载我们的 React 组件。-->
  <script src="like_button.js"></script>

</body>
```

前两个标签加载 React。第三个将加载你的组件代码。

script标签里面属性crossorigin，它的主要功能大致就是：影响页面里面，是否可以通过onerror捕获远程js代码的详细报错信息。所以，如果您对于显示报错信息的事情无感的话，就不用纠结于是不是添加这个属性。

crossorigin的作用和使用方法具体可参照[苏南大叔](https://blog.csdn.net/weixin_34534456/article/details/117835408)的博客。

总结来说，crossorigin如果要正常使用，就需要两个网站，一个负责引用并添加crossorigin属性。另外一个负责添加header头信息，否则不能正常使用。另外需要说的是标准的crossorigin属性还有其它的取值。

报错信息的具体情况，还和捕获的方式有关系，onerror以及控制台的形式。

## React介绍

### JSX
react 推荐使用的是 JSX 语法；通过 react 编译他会把JSX 解析成 JavaScript 表达式

### 组件
