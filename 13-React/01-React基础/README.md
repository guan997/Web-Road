# React基础
## 安装
### 创建新的React应用
 - Node >= 10.16 和 npm >= 5.6
 - 创建项目npx create-react-app my-app
 - ts依赖npx create-react-app my-app --template typescript
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
##### React的检查工具下载
[React Developer Tools](https://www.extfans.com/web-development/fmkadmapgofadopljbjfkapdkoienihi/)
安装Chrome的React开发者工具 React Developer Tools一款类似于浏览器调试台的插件开发者调试工具，由facebook官方开发推出
在浏览器中安装这个插件后，可以查看Chrome开发者工具中组件的层次、各个组件的Props、States等信息。
安装完成后，你将在Chrome DevTools中看到一个名为React的新选项。点击它，就可以查看新增的内容了。
React Developer Tools会自动检测React组件，不过在webpack-dev-server模式下，webpack会自动将React组件放入到iframe下，导致React组件检测失败，变通方法是webpack-dev-server配置在--inline模式下即可。
在chrome浏览器，会出现React，右侧props--组件属性，state--组件状态。

### 添加 TypeScript 到现有项目中

这一切都始于在终端中执行的一个命令。

如果你使用 [Yarn](https://yarnpkg.com/)，执行：

```
yarn add --dev typescript
```

如果你使用 [npm](https://www.npmjs.com/)，执行：

```
npm install --save-dev typescript
```

恭喜！你已将最新版本的 TypeScript 安装到项目中。安装 TypeScript 后我们就可以使用 `tsc` 命令。在配置编译器之前，让我们将 `tsc` 添加到 `package.json` 中的 “scripts” 部分：

```
{
  // ...
  "scripts": {
    "build": "tsc",    // ...
  },
  // ...
}
```

#### 配置 TypeScript 编译器

没有配置项，编译器提供不了任何帮助。在 TypeScript 里，这些配置项都在一个名为 `tsconfig.json` 的特殊文件中定义。可以通过执行以下命令生成该文件：

如果你使用 [Yarn](https://yarnpkg.com/)，执行：

```
yarn run tsc --init
```

如果你使用 [npm](https://www.npmjs.com/)，执行：

```
npx tsc --init
```

`tsconfig.json` 文件中，有许多配置项用于配置编译器。查看所有配置项的的详细说明，[请参考此文档](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)。

我们来看一下 `rootDir` 和 `outDir` 这两个配置项。编译器将从项目中找到 TypeScript 文件并编译成相对应 JavaScript 文件。但我们不想混淆源文件和编译后的输出文件。

为了解决该问题，我们将执行以下两个步骤：

- 首先，让我们重新整理下项目目录，把所有的源代码放入 `src` 目录中。

```
├── package.json
├── src
│   └── index.ts
└── tsconfig.json
```

- 其次，我们将通过配置项告诉编译器源码和输出的位置。

```
// tsconfig.json

{
  "compilerOptions": {
    // ...
    "rootDir": "src",    "outDir": "build"    // ...
  },
}
```

很好！现在，当我们运行构建脚本时，编译器会将生成的 javascript 输出到 `build` 文件夹。 [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter/blob/master/tsconfig.json) 提供了一套默认的 `tsconfig.json` 帮助你快速上手。

通常情况下，你不希望将编译后生成的 JavaScript 文件保留在版本控制内。因此，应该把构建文件夹添加到 `.gitignore` 中。

#### 文件扩展名

在 React 中，你的组件文件大多数使用 `.js` 作为扩展名。在 TypeScript 中，提供两种文件扩展名：

`.ts` 是默认的文件扩展名，而 `.tsx` 是一个用于包含 `JSX` 代码的特殊扩展名。

#### 运行 TypeScript

如果你按照上面的说明操作，现在应该能运行 TypeScript 了。

```
yarn build
```

如果你使用 npm，执行：

```
npm run build
```

如果你没有看到输出信息，这意味着它编译成功了。

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

### 更新渠道

在 cron job 中，使用 npm 的 `next` 标签将 React 版本更新至 Next 渠道中的最新版本。使用 npm cli：

```js
npm update react@next react-dom@next
```

或者 yarn：

```
yarn upgrade react@next react-dom@next
```

## 核心概念

### Hello World

`index.js`中

```react
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

错误总结：ReactDOM.render中不可以使用两个并列元素

### JSX简介
react 推荐使用的是 JSX 语法；通过 react 编译他会把JSX 解析成 JavaScript 表达式

JSX声明:

```js
const element = <h1>Hello, world</h1;
```

JSX，是一个 JavaScript 的语法扩展，在 React 中配合使用 JSX，JSX 可以很好地描述 UI 呈现出它应有交互的本质形式。

#### 在JSX中嵌入表达式

声明变量以及使用的方法

```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

在JSX语法中，大括号可以放置任何有效的js表达式，实例如下：

调用js函数formatName(user)的结果，并将结果嵌入<h1>元素中。

```js
function formatName(user) {
  return user.lastName + ' ' + user.firstName;
}
const user = {
  firstName: 'harper',
  lastName: 'perez'
};
const element = (
  <h1>
    hello,{formatName(user)}!
  </h1>
);
```

#### JSX也是一个表达式

编译之后，JSX表达式会被转为普通js函数调用，并且对其取值后得到js对象。

编写 React 并不强制使用 JSX。在幕后，它正在运行`createElement`，它接受标签、包含属性的对象和组件的子项，并呈现相同的信息。下面的代码将具有与上面的 JSX 相同的输出。

```jsx
const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')
```

JSX 实际上更接近 JavaScript，而不是 HTML，因此在编写它时需要注意一些关键差异。

- `className`用于代替`class`添加 CSS 类，就像`class`JavaScript 中的保留关键字一样。
- JSX 中的属性和方法是驼峰式的——`onclick`将变成`onClick`.
- 自闭标签*必须*以斜线结尾 - 例如`<img />`

也就是说，可以在if语句和for循环的代码块中使用JSX，将JSX赋值给变量，把JSX当做参数传入，以及从函数中放回JSX；

```js
function getGreeting(user){
    if(user){
       return <h1>Hello,{formatName(user)}!</h1>;
       }
        return <h1>hello,strange</h1>
}
```

#### JSX特定属性

- jsx中可以通过引号，将属性值指定为字符串字面量

```js
const element = <div tabIndex="0"></div>
```

- 也可以使用大括号，在属性值中插入一个js表达式

```js
const element = <img src={user.avatarUrl}></img>
```

> 引号（对于字符串值）或大括号（对于表达式）,于同一属性不能同时使用这两种符号。!!!!
>
> 另外，React DOM使用cameCase(小驼峰命名)来定义属性的名称，而不使用HTML属性名称的命名约定。
>
> 例如，JSX 里的 `class` 变成了className,而tabindex则变为tabIndex

#### 使用JSX指定子元素

加入标签里面没有内容，可以使用/>闭合标签，就像XML语法一样；

```js
const element = <img src= {user.avatarUrl} />
```

jsx标签里能够包含很多子元素

```js
const element =(
	<div>
    	<h1>hello</h1>
    	<h2>good to see you<h2>
    </div>
)
```

#### JSX防止注入攻击

```js
// jsx可以直接插入用户输入的内容
// 因为React Dom在渲染所有输入内容之前，默认会进行转义
const title = response.potentiallyMliciousInput;
const element = <h1>{title}</h1>
```

React DOM 在渲染所有输入内容之前，默认会进行[转义](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html)。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止xss攻击

#### jsx表示对象

Babel会把jsx转译成一个名为React.creatElement()函数调用

实例如下

```js
const element = (
  <h1 className="greeting">hello world!</h1>
);
// const element = React.createElement(
//   'h1',
//   {className:'greeting'},
//   'Hello , world'
// );
```

`React.createElement()` 会预先执行一些检查，但实际上它创建了一个这样的对象：

简化为

```js
// 注意：这是简化过的结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

这些对象被称为 “React 元素”。它们描述了在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。		

### 元素渲染

元素时react的最小砖块

元素描述了屏幕上的内容

```js
const element = <h1>Hello, world</h1>;
```

与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。

元素和组件的区别：组件是由元素构成的，元素时react的最小单位

#### 将一个元素渲染为DOM

root根DOM节点内的所有内容都将由React DOM管理

仅适用react构建的应用通常只有一个单一的根DOM节点，如果将	react集成一个已有应用，就可以在应用中包含任意多的独立根	DOM节点。

想要将一个react元素渲染到根Dom节点中，需要把他们一起传入ReactDOM.render();

#### 更新以渲染的元素

react元素是不可变对象，一旦被创建，就无法更改他的子元素或者属性，一个元素就像一帧，代表某个特定时刻的ui

更行ui唯一的方式是创建一个全新的元素，并将其传入ReactDOM.render().

```js
// 计时器
function tick() {
  const element = (
    <div>
      <h1>hello world</h1>
      <h2>it is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )

  ReactDOM.render(
    element,
    // getGreeting(),
    document.getElementById('root')
  );
}
setInterval(tick, 1000)
```

>注意：大多数react应用只会调用移除ReactDOM.render()
>
>接下来，将学习如何将这些代码封装到[有状态组件](https://react.docschina.org/docs/state-and-lifecycle.html)中。

#### react只更新他需要更新的部分

react dom会将元素和他的子元素与他们之前的状态比较，并只会进行必要的更新来使dom达到预期的状态；

例如下一个例子计时器中，只有h2标签会每隔1秒更行一次

尽管每一秒我们都会新建一个描述整个ui树的元素，react dom只会更行实际改变了的内容，也就是本例中的文本节点

>故，根据经验，应该考虑ui在任意给定时刻的状态，而不是随时间变化的过程，能够消灭一类的bug
>
>我理解的是考虑ui在固定不变的状态

### 组件&props

组件允许将ui拆分为独立可复用的代码片段，并对片段进行独立构思。

组件接受任意的入参(既props)，并返回用于描述页面展示内容的react元素

#### 函数组件与class组件

函数组件和class组件在react是等效的

“函数组件”：定义组件最简单的方式是编写js函数

```js
// 用js函数实现组件
function Welcome(props) {
  return <h1>hello,{props.name}</h1>
};
const props ={
  name:'aa',
  age:10
};

//一个函数就是一个react组件，因为它接受唯一带有数据的“props”(代表属性)对象与并返回一个React元素，故他本质上就是js函数。

//"class组件"：es6的class也可以用来定义组件

// es6的class来定义组件 class组件
class Welcome extends React.Component {
  constructor(name){
    super(name)
    this.name=name
  }
  render(){
    return <h1>hello,{this.name}</h1>
  }
};
let ww = new Welcome('a');
console.log(ww);
ReactDOM.render(
  ww.render(),
  // getGreeting(),
  document.getElementById('root')
);
```

#### 渲染组件

之前的react元素都只是DOM标签

const element = <div/>

但是，react元素也可以是用户自定义的组件

```js
const element = <Welcome name = "Sara"/>
```

当react元素为用户自定义组件时，会将jsx所接受的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为“props”

例如，这段代码就会渲染会“hello ，sara‘

```js
// 自定义组件
function Welcome(props) {
  return <h1>hello,{props.name}</h1>
}
const element = <Welcome name="sara" />
```

这个例子都发生了什么？

1. 我们调用 `ReactDOM.render()` 函数，并传入 `<Welcome name="Sara" />` 作为参数。
2. React 调用 `Welcome` 组件，并将 `{name: 'Sara'}` 作为 props 传入。
3. `Welcome` 组件将 `<h1>Hello, Sara</h1>` 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 `<h1>Hello, Sara</h1>`。

>注意：组件名称必须以大写字母开头
>
>react会将以小写字母开头的组件视为原生DOM标签，例如<div/>代表html的div标签，而<welcome/>则代表一个组件，并且需在作用域内使用Welcome

#### 组合组件

组件可以在其输出中引用其他组件。可以用同一组件来抽象出任意层次的细节。按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示。

例如，可以创建一个可以多次渲染Welcome组件的App组件

```js
function Tom() {
  return <p>i am tom</p>
}
function Welcome(props) {
  return (
    <div>
      <h1>hello,{props.name}</h1>
      <Tom /></div>
  )
}
function App() {
  return (
    <div>
      <Welcome name='sara' />
      <Welcome name='ming' />
      <Welcome name='tom' />
    </div>
  )
}
```

> 注意：return里面只能有一层，否则会报错
>
> JSX 表达式必须具有一个父元素

每个react应用程序的顶层组件都是App组件，但是如果将react集成到现有的应用程序中，可能需要使用像button这样的小组件，并自下而上地将这类组件逐步应用到视图层的每一处。

#### 多组件复用

大多数 React 应用程序都有许多小组件，所有东西都加载到主`App`组件中。组件也经常有自己的文件，所以让我们改变我们的项目来做到这一点。

从 中删除`App`类`index.js`。

删除`/src`目录中的所有文件，我们将创建我们自己的样板文件，而不会出现任何膨胀。我们只会保留`index.css`和`index.js`。

对于`index.css`，只将[原始 CSS](https://taniarascia.github.io/primitive/css/main.css)的内容复制并粘贴到文件中。如果你愿意，可以使用 Bootstrap 或任何想要的 CSS 框架，或者什么都不用。

现在`index.js`，我们正在导入 React、ReactDOM 和 CSS 文件。

源代码/索引.js

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
```

然后再次创建我们的组件。以前，我们只有一个`<h1>`，但现在我还要添加一个带有类的 div 元素。您会注意到我们使用了`className`代替`class`。这是我们第一个暗示这里编写的代码是 JavaScript，而不是真正的 HTML。

```jsx
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
```

最后，我们将`App`像以前一样将 渲染到根。

```js
ReactDOM.render(<App />, document.getElementById('root'))
```

这是我们的完整`index.js`. 这一次，我们将 加载`Component`为 React 的一个属性，因此我们不再需要扩展`React.Component`.

```jsx
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

如果你回到`localhost:3000`，你会看到“你好，反应！” 就像从前一样。我们现在有了 React 应用程序的开端。

到目前为止，我们已经创建了一个组件 -`App`组件。几乎在一切做出react的组件组成，它可以是**类组件**或**简单的组件**。

大多数 React 应用程序都有许多小组件，所有东西都加载到主`App`组件中。组件也经常有自己的文件，所以让我们改变我们的项目来做到这一点。

下面将App组件抽离成单个文件，步骤如下：

从 中删除`App`类`index.js`，所以它看起来像这样。

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
```

我们将创建一个名为的新文件`App.js`并将组件放在那里。

```jsx
import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

export default App
```

我们将组件导出为`App`并将其加载到`index.js`. 将组件分成文件并不是强制性的，但如果不这样做，应用程序将开始变得笨拙和失控。

#### class 组件

让我们创建另一个组件。我们将创建一个表。制作`Table.js`，并用以下数据填充它。

```jsx
import React, {Component} from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
```

我们创建的这个组件是一个自定义类组件。我们将自定义组件大写以区别于常规 HTML 元素。回到`App.js`，我们可以加载表，首先通过将其导入：

```jsx
import Table from './Table'
```

然后通过将它加载到`render()`of 中`App`，在我们之前有“Hello，React！”的地方。我还更改了外部容器的类。

```jsx
import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}

export default App
```

如果您重新检查您的实时环境，您将看到已`Table`加载。

[![屏幕截图 2018 08 18 at 6 10 55 PM](https://www.taniarascia.com/static/2b0e0f127e4d959b70f8d325f368f196/a6d36/Screen-Shot-2018-08-18-at-6.10.55-PM.png)](https://www.taniarascia.com/static/2b0e0f127e4d959b70f8d325f368f196/569c6/Screen-Shot-2018-08-18-at-6.10.55-PM.png)

现在我们已经看到了自定义类组件是什么。我们可以一遍又一遍地重用这个组件。但是，由于数据是硬编码到其中的，因此目前不会太有用

让我们`Table`为它制作两个简单的组件 - 一个表头和一个表体。

我们将使用 ES6 箭头函数来创建这些简单的组件。首先是表头。

```jsx
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}
```

然后是身体。

```jsx
const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  )
}
```

现在我们的`Table`文件看起来像这样。请注意，`TableHeader`和`TableBody`组件都在同一个文件中，并被`Table`类组件使用。

```jsx
const TableHeader = () => { ... }
const TableBody = () => { ... }

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}
```

一切都应该像以前一样。如您所见，组件可以嵌套在其他组件中，并且可以混合使用简单组件和类组件。

> 一个类组件必须包含`render()`，并且`return`只能返回一个父元素。

作为总结，让我们比较一个简单的组件和一个类组件。

简单组件

```jsx
const SimpleComponent = () => {
  return <div>Example</div>
}
```

类组件

```jsx
class ClassComponent extends Component {
  render() {
    return <div>Example</div>
  }
}
```

请注意，如果`return`包含在一行中，则不需要括号。

#### Props属性

现在，我们有一个很酷的`Table`组件，但数据是硬编码的。React 的一大亮点是它如何处理数据，它通过属性（称为**props**）和State状态来处理数据。现在，我们将专注于使用 props 处理数据。

首先，让我们从`TableBody`组件中删除所有数据。

```jsx
const TableBody = () => {
  return <tbody />
}
```

然后让我们将所有数据移动到一个对象数组中，就好像我们引入了一个基于 JSON 的 API。我们必须在我们的`render()`.

```jsx
class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}
```

现在，我们将通过`Table`属性将数据传递给子组件 ( ) ，就像您可以使用`data-`属性传递数据一样。我们可以随心所欲地调用该属性，只要它不是保留关键字，所以我将使用`characterData`. 我传递的数据是`characters`变量，我将用大括号将它括起来，因为它是一个 JavaScript 表达式。

```jsx
return (
  <div className="container">
    <Table characterData={characters} />
  </div>
)
```

现在数据正在传递到`Table`，我们必须努力从另一端访问它。

```jsx
class Table extends Component {
  render() {
    const {characterData} = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}
```

如果您打开 React DevTools 并检查`Table`组件，您将在属性中看到数据数组。存储在此处的数据称为**虚拟 DOM**，这是一种将数据与实际 DOM 同步的快速有效的方式。

[![屏幕截图 2018 08 19 at 5 43 39 PM](https://www.taniarascia.com/static/4a473290bef5435fb9aa878316de06ef/a6d36/Screen-Shot-2018-08-19-at-5.43.39-PM.png)](https://www.taniarascia.com/static/4a473290bef5435fb9aa878316de06ef/aea0a/Screen-Shot-2018-08-19-at-5.43.39-PM.png)

不过，这些数据还没有出现在实际的 DOM 中。在 中`Table`，我们可以通过 访问所有道具`this.props`。我们只传递一个 props，characterData，所以我们将使用它`this.props.characterData`来检索该数据。

我将使用 ES6 属性简写来创建一个包含`this.props.characterData`.

```jsx
const {characterData} = this.props
```

由于我们的`Table`组件实际上由两个较小的简单组件组成，因此我将`TableBody`再次通过 props将其传递给。

```jsx
class Table extends Component {
  render() {
    const {characterData} = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}
```

现在，`TableBody`不接受任何参数并返回单个标签。

```jsx
const TableBody = () => {
  return <tbody />
}
```

我们将把 props 作为参数传递，并通过map()映射为数组中的每个对象返回一个表行。该映射将包含在`rows`变量中，我们将其作为表达式返回。

```jsx
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}
```

如果您查看应用程序的前端，现在正在加载所有数据。

您会注意到我为每个表行添加了一个键索引。在 React 中创建列表时，您应该始终使用[键](https://reactjs.org/docs/lists-and-keys.html#keys)，因为它们有助于识别每个列表项。当我们想要操作列表项时，我们还将看到这是多么必要。

props 是一种将现有数据传递给 React 组件的有效方式，但是组件不能更改 props - 它们是只读的。

#### 提取组件

将组件拆分为更小的组件

例如：参考如下Comment组件

```js
function formatData(date){
  return date.toLocaleDateString();
}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src="{props.author.avatarUrl}"
          alt="提示props.author.name" />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatData(props.date)}</div>
    </div>
  )
}
const comment = {
  date:new Date(),
  text:'i hope you enjoy learning react',
  author:{
    name:'hello kitty',
    avatarUrl:'https://placekitten.com/g/64/64',
  },
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  // element,
  // ww.render(),
  // getGreeting(),
  document.getElementById('root')
);
```

该组件用于描述一个社交媒体网站上的评论功能，它接收 `author`（对象），`text` （字符串）以及 `date`（日期）作为 props。

该组件由于嵌套的关系，变得难以维护，且很难复用它的各个部分。因此，让我们从中提取一些组件出来。

首先，我们将提取Avatar组件

```js
function Avatar(props) {
  return(
    <img className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}/>
  )
}
//<Comment
  //   date={comment.date}
  //   text={comment.text}
  //   author={comment.author}
  // />,
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        {/* 插入提取的Avatar组件 */}
        <Avatar user={props.author} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatData(props.date)}
      </div>
    </div>
  )
}
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  // element,
  // ww.render(),
  // getGreeting(),
  document.getElementById('root')
);
```

`Avatar` 不需知道它在 `Comment` 组件内部是如何渲染的。因此，我们给它的 props 起了一个更通用的名字：`user`，而不是 `author`。(也就是Comment组件从外部传入参数props赋值给了user，故Avatar中的props.author可写成props.user)

从组件自身的角度命名 props，而不是依赖于调用组件的上下文命名。

继续提取

```js
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name} />
  )
}
function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user}></Avatar>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        {/* 插入提取的Avatar组件 */}
        <UserInfo user={props.author}></UserInfo>
        {/* <Avatar user={props.author} />
        <div className="UserInfo-name">{props.author.name}</div> */}
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatData(props.date)}
      </div>
    </div>
  )
}
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  // element,
  // ww.render(),
  // getGreeting(),
  document.getElementById('root')
);
```

最初，提取组件可能得不偿失，不过大型应用中，构建可复用组件库是完全值得的。例如ui中(Button,Panel,Avatar)就被多次使用，当组件本身足够复杂时（App,FeedStory,Comment），就可以做成可复用组件。

#### Props的只读性

组件无论是使用[函数声明还是通过 class 声明](https://react.docschina.org/docs/components-and-props.html#function-and-class-components)，都决不能修改自身的 props。

props只可读，不可写

```js
function sum(a,b){
    return a+b;
}
```

不改变函数原有值，且多次调用下相同的入参始终返回相同的结果。

下面这个函数就不是纯函数，因为他更改了自己的入参

```js
function withdraw(account,amount){
    //TypeError: Cannot assign to read only property 'total' of object '#<Object>'
    account.total -= amount;
}
```

React有一个严格的规则：所有React组件都必须像纯函数一样保护他们的props不被更改。

可是，应用程序的ui是动态的，并会伴随着事件的推移而变换，有一种概念叫做“state”，在不违反上述规则的情况下，state允许React组件岁用户操作，网络响应或者其他变化而动态更改输出内容。

### State&生命周期

#### State状态

`接上节中的Props属性，引自https://www.taniarascia.com/`

现在，我们将字符数据存储在变量的数组中，并将其作为道具传递。这是一个很好的开始，但想象一下，如果我们希望能够从数组中删除一个项目。使用 props，我们有一个单向的数据流，但是使用 state 我们可以从组件更新私有数据。

您可以将状态视为应该保存和修改而不必添加到数据库中的任何数据 - 例如，在确认购买之前从购物车中添加和删除项目。

首先，我们将创建一个`state`对象。

```jsx
class App extends Component {
  state = {}
}
```

该对象将包含您要存储在状态中的所有内容的属性。对我们来说，是`characters`。

```jsx
class App extends Component {
  state = {
    characters: [],
  }
}
```

##### [react状态组件state定义在constructor里外的区别](https://segmentfault.com/a/1190000022521222)

在`react`状态组件中`state`定义方式分为两种，一种是在`construcor`中定义；另一种是在`constructor`外面定义。网上有些人说`state`属性定义在`constructor`里面时，`state`挂在组件实例上，定义在`constructor`外面会挂在原型对象上。为了方便分析两种定义方式之间的区别，通过`babel`转译到`ES5`。`转译过程见标题链接`

**可以看到这两种定义方式转义后打印结果是一样的，`state`属性都是挂在组件实例上**

##### [实例属性的新写法](https://es6.ruanyifeng.com/#docs/class#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7%E7%9A%84%E6%96%B0%E5%86%99%E6%B3%95)

实例属性除了定义在`constructor()`方法里面的`this`上面，也可以定义在类的最顶层。

```javascript
class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

上面代码中，实例属性`this._count`定义在`constructor()`方法里面。另一种写法是，这个属性也可以定义在类的最顶层，其他都不变。

```javascript
class IncreasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

上面代码中，实例属性`_count`与取值函数`value()`和`increment()`方法，处于同一个层级。这时，不需要在实例属性前面加上`this`。

这种新写法的好处是，所有实例对象自身的属性都定义在类的头部，看上去比较整齐，一眼就能看出这个类有哪些实例属性。

```javascript
class foo {
  bar = 'hello';
  baz = 'world';

  constructor() {
    // ...
  }
}
```

上面的代码，一眼就能看出，`foo`类有两个实例属性，一目了然。另外，写起来也比较简洁。

将我们之前创建的整个对象数组移动到`state.characters`.

```jsx
class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        // the rest of the data
      },
    ],
  }
}
```

我们的数据正式包含在状态中。由于我们希望能够从表中删除一个字符，我们将`removeCharacter`在父`App`类上创建一个方法。

为了检索状态，我们将`this.state.characters`使用与以前相同的 ES6 方法。为了更新状态，我们将使用`this.setState()`，一种用于操作状态的内置方法。我们将根据我们通过数组index下标过滤数组`index`，并返回新数组。

> 您必须使用`this.setState()`来修改数组。简单地应用一个新值是`this.state.property`行不通的。

```jsx
removeCharacter = (index) => {
  const {characters} = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}
```

`filter`不会改变而是创建一个新数组，并且是在 JavaScript 中修改数组的首选方法。这个特殊的方法是测试一个索引与数组中的所有索引，并返回除了通过的索引之外的所有索引。

现在我们必须将该函数传递给组件，并在每个可以调用该函数的角色旁边渲染一个按钮。我们将把`removeCharacter`函数作为 prop 传递给`Table`。

```jsx
render() {
  const { characters } = this.state

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
    </div>
  )
}
```

由于我们将它传递给`TableBody`from `Table`，我们将不得不再次将它作为道具传递，就像我们对角色数据所做的一样。

此外，由于事实证明在我们的项目中唯一具有自己状态的组件是`App`和`Form`，因此最佳实践是将`Table`其从当前的类组件转换为一个简单的组件。

```jsx
const Table = (props) => {
  const {characterData, removeCharacter} = props

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}
```

这是我们在`removeCharacter()`方法中定义的索引的用处。在`TableBody`组件中，我们将键/索引作为参数传递，因此过滤器函数知道要删除哪个项目。我们将创建一个带有索引的按钮`onClick`通过它。

```jsx
<tr key={index}>
  <td>{row.name}</td>
  <td>{row.job}</td>
  <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
</tr>
```

> 该`onClick`函数必须通过一个返回该`removeCharacter()`方法的函数，否则它会尝试自动运行。

惊人的。现在我们有了删除按钮，我们可以通过删除一个字符来修改我们的状态。

[![屏幕截图 2018 08 19 at 6 37 09 PM](https://www.taniarascia.com/static/a314736828868b35d906cd426cbb7234/a6d36/Screen-Shot-2018-08-19-at-6.37.09-PM.png)](https://www.taniarascia.com/static/a314736828868b35d906cd426cbb7234/f69df/Screen-Shot-2018-08-19-at-6.37.09-PM.png)

这有利于帮助我们了解状态如何初始化以及如何修改。

`下面是React官网中对State的描述`

首先，我们将创建一个`state`对象。

如何封装真正可复用的 `Clock` 组件?

在元素渲染章节，只了解了通过ReactDOM.render()来修改渲染的元素。

```js
function Clock(props){
  return (
    <div>
      <h1>hello, world</h1>
      <h2>it is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}
function tick(){
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
  )
}
setInterval(tick,1000);
```

Clock组件需要设置一个计时器，并且需要每秒更新ui，这不符合我们只编写一次代码，便可以让Clock组件自我更新:

```js
function tick(){
  ReactDOM.render(
    // <Clock date={new Date()}/>,
    // 此时会每个一秒报错一次，故需要添加state来实现这个功能
    // TypeError: Cannot read property 'toLocaleTimeString' of undefined
    <Clock/>,
    document.getElementById('root')
  )
}
```

State与props类似，但是state是私有的，并且完全受控于当前组件

#### 将函数组件转换成class组件

Clock组件被定义为class，而不是函数。每次组件更新时render方法都会被调用，但只要在相同的DOM节点中渲染<Clock/>,就仅有一个Clock组件的class实例被使用，这就是class组件可以使用如state或生命周期方法等很多其他特性的原因。

#### 向组件中添加局部的state

通过三步将date从props移动到state中：

1.将render()方法中的this.props.date替换成this.state.date;

2.添加一个class构造函数，然后在该函数中位this.state赋初值；

通过constructor中的super和this把props传递到父类的构造函数中

要求Class组件应始终使用props参数来调用父类的构造函数

3.移除<Clock/>元素中的date属性

```js
// 向class组件中添加局部的state
class Clock extends React.Component{
  // 2.添加一个class构造函数，然后在该函数为this.state赋初值
  constructor(props){
    // 通过super将props传递到父类的构造函数中
    super(props);
    this.state = {date:new Date()}; 
  }
  render(){
    return(
      <div>
        <h1>hello,world</h1>
        {/* 1.将this.props,date替换成this.state.date */}
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function tick(){
  ReactDOM.render(
    // 3.移除 <Clock /> 元素中的 date 属性：
    // <Clock date={new Date()} />,
    <Clock/>,
    document.getElementById('root'),
  )
}
setInterval(tick,1000)
```

#### 将生命周期方法添加到Class中

在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。

当 `Clock` 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器,这在 React 中被称为“挂载（mount）”。

当 DOM 中 `Clock` 组件被删除的时候，应该清除计时器,这在 React 中被称为“卸载（unmount）”。

为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
// 卸载
  componentDidMount() {
  }
// 卸载
  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

`componentDidMount()` 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器：

```js
// 向class组件中添加局部的state
class Clock extends React.Component{
  // 2.添加一个class构造函数，然后在该函数为this.state赋初值
  constructor(props){
    // 通过super将props传递到父类的构造函数中
    super(props);
    this.state = {date:new Date()}; 
  }
  // 挂载，在组件以及被渲染到DOM中后运行
  componentDidMount(){
    // 设置定时器，然后把计时器的id保存在this之中(this.timerID)
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  // 卸载
  componentWillUnmount(){
    // 清除计时器
    clearInterval(this.timerID);
  }
  tick(){
      // 通过调用setState()来进行一次ui更新，，通过setState()的调用，React知道state被改变了
    // 然后重新调用render()方法来确定页面上显示什么，这次this.state.date就不一样了，如此一来就会渲染输出更新过的时间，react就会更新相应的DOM
    this.setState({
      date:new Date()
    });
  }
  render(){
    return(
      <div>
        <h1>hello,world</h1>
        {/* 1.将this.props,date替换成this.state.date */}
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
)
```

相关解释：计时器的 ID 保存在 `this` 之中（`this.timerID`），

尽管 `this.props` 和 `this.state` 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段。

在 `componentWillUnmount()` 生命周期方法中清除计时器：

 `tick()` 的方法中，`Clock` 组件每秒都会调用它。

使用 `this.setState()` 来时刻更新组件 state：

上述代码的调用顺序：

1. 当 `<Clock />` 被传给 `ReactDOM.render()`的时候，React 会调用 `Clock` 组件的构造函数。因为 `Clock` 需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化 `this.state`。我们会在之后更新 state。
2. 之后 React 会调用组件的 `render()` 方法。这就是 React 确定该在页面上展示什么的方式。然后 React 更新 DOM 来匹配 `Clock` 渲染的输出。
3. 当 `Clock` 的输出被插入到 DOM 中后，React 就会调用 `ComponentDidMount()` 生命周期方法。在这个方法中，`Clock` 组件向浏览器请求设置一个计时器来每秒调用一次组件的 `tick()` 方法。
4. 浏览器每秒都会调用一次 `tick()` 方法。 在这方法之中，`Clock` 组件会通过调用 `setState()` 来计划进行一次 UI 更新。得益于 `setState()` 的调用，React 能够知道 state 已经改变了，然后会重新调用 `render()` 方法来确定页面上该显示什么。这一次，`render()` 方法中的 `this.state.date` 就不一样了，如此以来就会渲染输出更新过的时间。React 也会相应的更新 DOM。
5. 一旦 `Clock` 组件从 DOM 中被移除，React 就会调用 `componentWillUnmount()` 生命周期方法，这样计时器就停止了。

#### 正确使用State

#### 不要直接修改State

例如，此代码不会重新渲染组件

```js
//wrong
this.state.comment = 'hello';
```

而是应该使用setState();

```js
//correct
this.setState({comment:'hello'})
```

>  构造函数是唯一可以给this.state赋值的地方

#### state的更新可能是异步的

出于性能考虑，React可能会把多个setState()调用合并成一个调用

因为this.props和this.state可能会异步更新，所以不要依赖他们的值来更新下一个状态。

例如，此代码可能会无法更新计数器

```js
//wrong
this.setState({
    counter:this.state.counter + this.props.increment,
});
```

要解决这个问题，可以让 `setState()` 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数

```js
// Correct箭头函数
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
// Correct 普通函数
this.setState(function(state, props) {
    return {
        counter:state.counter + props.increment
    };
})
```

> 把函数传入setState()而不是对象

#### State的更新会被合并

当调用setState()的时候，React会把提供的对象合并到当前的state (浅合并)

例如1，state包含几个独立的变量

```js
constructor(props){
    super(props);
    this.state = {
        posts:[],
        comments:[]
    }
}
```

然后你可以分别调用 `setState()` 来单独地更新它们：

```js
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments      });
    });
  }
//这两个函数返回一个promise对象，然后进行下一步动作
```

这里的合并是浅合并，所以 `this.setState({comments})` 完整保留了 `this.state.posts`， 但是完全替换了 `this.state.comments`。

#### 数据是向下流动的

父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且不关心是函数组件还是class组件。

state为局部的或是封装的原因，是出来拥有并设置了他的组件，其他组件都无法访问。

组件可以选择把它的state作为props向下传递到它的子组件中：

```js
<h2>it is {this.state.date.toLocleTimeString()}.</h2>
```

自定义组件也可以把它的props向下传递

```js
<FormattedDate date={this.state.date}/>
```

FormattedDate组件会在其props中接受参数date，但是组件本身无法知道它是来自于clock的state，或是clock的props，还是手动输入的

> React被叫做自上而下或是单向的数据流，任何的state总是所属于特定的组件，而且从state派生的任何数据或ui只能影响树中低于他们的组件

如果把一个组件构成的树想象成一个props的数据瀑布的话，那么每一个组件的state就像是在任意一点上给瀑布增加额外的水源，但是他只能线下流动。

每个组件都是真正独立的，可以创建一个渲染三个Clock的App组件

```js
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

每个 `Clock` 组件都会单独设置它自己的计时器并且更新它。

在 React 应用中，组件是有状态组件还是无状态组件属于组件实现的细节，它可能会随着时间的推移而改变。你可以在有状态的组件中使用无状态的组件，反之亦然。

### 生命周期相关API

<img src="E:\学习文档\React生命周期图.png"/>

<img src="E:\学习文档\React生命周期en.png"/>

组件的生命周期可分成三个状态:

- Mounting:已插入真实DOM
- Updating:正在被重新渲染
- Unmounting:已移出真实DOM

生命周期的方法有三种状态：

组件挂载会经历的生命周期如下：

- constructor():组件的构造函数，实现该函数一般是为了初始化组件state数据，以及为事件处理函数绑定实例，若实现该函数，应在其它语句之前调用super(props)，否则，this.props在构造函数中可能会出现未定义的bug，同时也应避免在此函数中引入任何副作用或订阅。
- static getDerivedStateFromProps():在React16.3之后的版本出现，传入props和state中的数据发生变化时触发该函数，会在调用render方法之前调用，并且在初始挂载及后续更新时都会被调用，它应返回一个对象来更新state，如果返回null则不更新任何内容，此方法无权访问组件实例
- render()：该函数应返回想要渲染的ui代码片段，返回结果可以是React元素，数组或fragments，Portals，字符串或数值类型、布尔类型或null，这是class组件声明生命中唯一必须要实现的方法，render()函数应该为纯函数，这意味着在不修改组件state的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互
- componentDidMount():该函数在组件挂载后（插入DOM树中）立即调用，依赖于DOM节点的初始化既初始化页面数据的请求应该放在这里，这个方法是比较适合添加订阅的地方，如果添加了订阅，请不要忘记在componentWillUnmount()里取消订阅

**组件更新**会经历的生命周期如下：

- static getDerivedStateFromProps()

  shouldComponentUpdaate():根据该函数的返回值，判断React组件的输出是否受当前state或props更改的影响，当props或state发生变化时，shouldComponentUpdate()会在渲染执行之前被调用，返回值默认为true。首次渲染或使用forceUpdate()时不会调用该方法，请注意，返回false并不会组织子组件在state更改时重新渲染，一般不要企图依靠此方法来阻止渲染。（不要频繁使用这个api，这回导致错误，可使用全局变量判断是否要重新渲染）

**渲染过程错误**处理API：

- static getDerivedStateFromError():此生命周期会在后代组件抛出错误后被调用，它将抛出的错误错位参数，并返回一个值以更新state，一般用于处理后代组件渲染出错时提示组件渲染错误。

> 注意：getDerivedStateFromError()会在渲染阶段调用，因此不允许出现副作用，如与此类情况请改用componentDidCatch()。

- componentDidCatch(error，info):此生命周期在后代组件抛出错误后被调用。，其会在“提交”阶段被调用，因此允许执行副作用，它被用于记录错误之类的情况，它接收两个参数：

  - 1.error：抛出的错误

  - 2.info：带有componentStack key的对象，其中包含有关组件引发错误的栈信息。

 > 注意
    >
    > 如果发生错误，你可以通过调用 `setState` 使用 `componentDidCatch()` 渲染降级 UI，但在未来的版本中将不推荐这样做。 可以使用静态 `getDerivedStateFromError()` 来处理降级渲染。

其他API

- ~~componentWillMount:在渲染前调用，在客户端也在服务端~~
- componentDidMount:在第一次渲染后调用，只在客户端。之后组件已经**生成了对应的DOM结构**，可以通过this.getDOMNode()来进行访问。如果想和其他js框架一起使用，可以在这个方法中**调用setTimeout，setInterval或者发送AJAX请求等操作（防止异步操作阻塞ui）**
- ~~componentWillReceiveProps：在组件接收到一个新的prop（更新后）时被调用，这个方法在初始化render时不会被调用~~
- shouldComponentUpdate:返回一个布尔值，在组件接收到新的props或者state时调用，在初始化时或者使用forceUpdate时不被调用。**可以在确认不需要更新组件时使用**
- ~~componentWillUpdate：在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用~~
- componentDidUpdate:在**组件完成更新后立即调用**。**在初始化时不会被调用**
- componentWillUnmount:在组件从DOM中**移除**之前立刻被调用。

> 下述方法即将过时，在新代码中应该[避免使用它们](https://react.docschina.org/blog/2018/03/27/update-on-async-rendering.html)：
>
> - [`UNSAFE_componentWillMount()`](https://react.docschina.org/docs/react-component.html#unsafe_componentwillmount)
> - [`UNSAFE_componentWillUpdate()`](https://react.docschina.org/docs/react-component.html#unsafe_componentwillupdate)
> - [`UNSAFE_componentWillReceiveProps()`](https://react.docschina.org/docs/react-component.html#unsafe_componentwillreceiveprops)

实例：

```js
// Hello 组件加载以后，通过 componentDidMount 方法设置一个定时器，每隔100毫秒重新设置组件的透明度，并重新渲染
class Hello extends React.Component{
  constructor(props){
    super(props);
    this.state = {opacity:1.0};
  }
  // 在第一次渲染后调用，只在客户端 ,已生成DOM结构，可以发送AJAX请求
  componentDidMount(){
    this.timer = setInterval(function(){
      var opacity = this.state.opacity;
      opacity -= .05;
      if(opacity < 0.1){
        opacity = 1.0;
      }
      this.setState({
        opacity:opacity
      });
    }.bind(this),100);
  }
  render(){
    return(
      <div style={{opacity: this.state.opacity}}>Hello {this.props.name}</div>
    )
  }
}
ReactDOM.render(
  <div>
    <Hello name="world"/>
  </div>,
  // <Clock/>,
  // document.getElementById('root')
  document.body
)
```

实例初始化 **state** ， **setNewnumber** 用于更新 **state**。所有生命周期在 **Content** 组件中。

```js
// 生命周期函数
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: 0 };
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  setNewNumber() {
    this.setState({ data: this.state.data + 1 })
  }
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>increment</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}
class Content extends React.Component {
  componentWillMount() {
    console.log('组件将要挂载');
  }
  componentDidMount() {
    console.log('组件已经挂载');
  }
  componentWillReceiveProps(newProps) {
    console.log('组件接收到新的prop');
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('组件接收到props或者state但还没有render时被调用');
  }
  componentDidUpdate(preProps, prevState) {
    console.log('组件完成更新后立即调用');
  }
  componentDidUnmount() {
    console.log('移除');
  }
  render(){
    console.log('render')
    return(
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }
}
ReactDOM.render(
  <div>
    <Button/>
  </div>,
  document.getElementById('root')
)
```

#### 其他API

不同于上述生命周期方法(React主动调用)，以下方法是你可以在组件中调用的方法

- setState()

  - ```js
    setState(updater, [callback])
    ```

  - setState()将对组件state的更改排入队列，并通知React需要使用更新后的state重新渲染次组件机器子组件，这是用于更新用户界面以响应事件处理器和处理服务器数据的主要方式。

  - 将 `setState()` 视为*请求*而不是立即更新组件的命令。为了更好的感知性能，React 会延迟调用它，然后通过一次传递更新多个组件。React 并不会保证 state 的变更会立即生效

  - 详细信息查看[官方文档](https://react.docschina.org/docs/react-component.html)

- forceUpdate()

  - ```js
    component.forceUpdate(callback)
    ```

  - 默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 `render()` 方法依赖于其他数据，则可以调用 `forceUpdate()` 强制让组件重新渲染

  - 调用 `forceUpdate()` 将致使组件调用 `render()` 方法，此操作会跳过该组件的 `shouldComponentUpdate()`。但其子组件会触发正常的生命周期方法，包括 `shouldComponentUpdate()` 方法。如果标记发生变化，React 仍将只更新 DOM。

    通常你应该避免使用 `forceUpdate()`，尽量在 `render()` 中使用 `this.props` 和 `this.state`。

### 事件处理

`React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：`

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

例如，传统的 HTML：

```js
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

在 React 中略微不同：**onClick={事件名}**

```js
<button onClick={activateLasers}>  Activate Lasers
</button>
```

在 React 中另一个不同点是你不能通过返回 `false` 的方式阻止默认行为。你必须显式的使用 `preventDefault` 。例如，传统的 HTML 中阻止链接默认打开一个新页面，你可以这样写：

```js
<a href="#" onclic="console.log('the link was clicked'); return false">click me</a>
```

在Rect中，可能是这样的:

```js
function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log('the link was clicked.');
    }
    return (
    	<a href="#" onClick={handleClick}>Click me</a>
    )
}
```

在这里，`e` 是一个合成事件。React 根据 [W3C 规范](https://www.w3.org/TR/DOM-Level-3-Events/)来定义这些合成事件，所以不需要担心跨浏览器的兼容性问题

使用 React 时，一般不需要使用 `addEventListener` 为已创建的 DOM 元素添加监听器。只需要在该元素初始渲染的时候添加监听器即可。

当使用 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 语法定义一个组件的时候，通常的做法是将**事件处理函数声明为 class 中的方法**。例如，下面的 `Toggle` 组件会渲染一个让用户切换开关状态的按钮：

```js
// Toggle 组件会渲染一个让用户切换开关状态的按钮：
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};
    // 为了在回调中使用this，这个绑定是必不可少的
    // 如果忘记给class中的方法绑定this，当调用这个函数的时候就会报错this的值这时候为undefined
    // TypeError: Cannot read property 'setState' of undefined
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    // this.setState
    this.setState(state => ({
      isToggleOn:!state.isToggleOn
    }));
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}
ReactDOM.render(
  <Toggle/>,
  document.getElementById('root')
)
```

> 谨慎对待 JSX 回调函数中的 `this`，在 JavaScript 中，class 的方法默认不会[绑定](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) `this`。如果忘记绑定 `this.handleClick` 并把它传入了 `onClick`，当调用这个函数的时候 `this` 的值为 `undefined`。
>
> 报错信息为：TypeError: Cannot read property 'setState' of undefined

这并不是 React 特有的行为；这其实与 [JavaScript 函数工作原理](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)有关。通常情况下，如果你没有在方法后面添加 `()`，例如 `onClick={this.handleClick}`，你应该**为这个方法绑定 `this`**。

如果觉得使用 `bind` 很麻烦，这里

有两种方式可以解决。

#### public class fields 语法

1.如果你正在使用实验性的 [public class fields 语法](https://babeljs.io/docs/plugins/transform-class-properties/)，你可以使用 **class fields **正确的绑定回调函数：

```js
// 通过public class fields语法绑定this
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
ReactDOM.render(
  <LoggingButton/>,
  document.getElementById('root')
)
```

> [Create React App](https://github.com/facebookincubator/create-react-app) 默认启用此语法。

#### 回调中使用箭头函数

2.如果你没有使用 class fields 语法，你可以在**回调中使用[箭头函数](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)：**

```js
// 通过回调函数绑定this
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is ', this);
  }
  render() {
    //   // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>)
  }
}
ReactDOM.render(
  <LoggingButton/>,
  document.getElementById('root')
)
```

此语法问题在于每次渲染 `LoggingButton` 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果**该回调函数作为 prop 传入子组件时**，这些组件可能会进行**额外的重新渲染**。我们通常**建议在构造器中绑定或使用 class fields 语法**来避免这类性能问题。

#### 向事件处理程序传递参数

**在循环中，通常我们会为事件处理函数传递额外的参数**。例如，若 `id` 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过[箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)和 [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) 来实现。

在这两种情况下，React 的事件对象 `e` 会被作为第二个参数传递。如果通过箭头函数的方式，**事件对象必须显式的进行传递**，而通过 `bind` 的方式，事件对象以及更多的参数将会**被隐式的进行传递**。

### 条件渲染

`在React中，可以穿件不同的组件来封装各种需要的行为。然后，一句应用的不同状态，可以只渲染对应状态下的部分内容`

React中的条件渲染和js中的一样，使用js运算符if或者条件运算符来表现当前的状态，然后让React根据他们来更行UI。

观察这两个组件：

```js
function UserGreeting(props) {
    return <h1>welcome back</h1>;
}
function GuestGreeting(props) {
    return <h1>please sign up</h1>
}
```

再创建一个Greeting组件，它会根据用户是否登录来决定显示上面的哪一个组件。

```js
// 根据isLoggedIn的值来渲染不同的问候语
function UserGreeting(props) {
  return <h1>welcome back</h1>;
}
function GuestGreeting(props) {
  return <h1>please sign up</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}
ReactDOM.render(
  <Greeting isLoggedIn={true} />,
  document.getElementById('root')
)
```

#### 元素变量

使用变量来储存元素，有条件地渲染组件的一部分，而其他渲染部分并不会因此而改变。

观察这两个组件，分别代表注销和登录按钮：

```js
// 通过元素变量切换组件
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}
function UserGreeting(props) {
  return <h1>welcome back</h1>;
}
function GuestGreeting(props) {
  return <h1>please sign up</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    // 在 JavaScript 中，class 的方法默认不会绑定`this`。
    // 如果忘记绑定 `this.handleClick` 并把它传入了 `onClick`，当调用这个函数的时候 `this` 的值为 `undefined`。
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    // 转变按钮的状态
    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleLogoutClick} />
    } else {
      button = <LogoutButton onClick={this.handleLoginClick} />
    }
    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}
ReactDOM.render(
  <LoginControl/>,
  document.getElementById('root')
)
```

声明一个变量并使用 `if` 语句进行条件渲染是不错的方式，但还有更为简洁的语法。接下来，将介绍几种在 JSX 中内联条件渲染的方法。

#### 与运算符&&

通过花括号包裹代码，可以在JSX中嵌入任何表达式。包括js中的逻辑与(&&)运算符，其可以更方便的进行元素的条件渲染。

```js
// 与运算符&&
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return(
    <div>
      <h1>hello</h1>
      {/* true && 表达式就会返回表达式 */}
      {/* false && 表达式就会返回false */}
      {unreadMessages.length > 0 &&
        <h2>
          you have {unreadMessages.length} unread message.
        </h2>
      }
    </div>
  );
}
const messages = ['react', 're:react','re:re:react'];
ReactDOM.render(
  <Mailbox unreadMessages = {messages} />,
  document.getElementById('root')
)
```

> 在js中，true && expression总是会返回expression，而false && expression总是会返回false。
>
> 因此，如果条件是true，&&右侧的元素就会被渲染，如果是false，react会忽略跳过它。

#### 三目运算符

另一种内联条件渲染的方法是使用js中的三目运算符condition > true :false

实例

```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

三种条件渲染对比

```js
// 通过元素变量切换组件
// 登录按钮
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
// 注销按钮
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}
function UserGreeting(props) {
  return <h1>welcome back</h1>;
}
function GuestGreeting(props) {
  return <h1>please sign up</h1>
}
// 问候语切换
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

// LoginControl组件，根据当前的状态来渲染按钮，同时还会渲染Greeting
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    // 在 JavaScript 中，class 的方法默认不会绑定`this`。
    // 如果忘记绑定 `this.handleClick` 并把它传入了 `onClick`，当调用这个函数的时候 `this` 的值为 `undefined`。
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    // 转变按钮的状态 元素变量
    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleLogoutClick} />
    } else {
      button = <LogoutButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        {/* 三目运算符 */}
        the user is {isLoggedIn ? 'currently' : 'not'}<br />
        {isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />
        }
        {/* 元素变量 */}
        <Greeting isLoggedIn={isLoggedIn} />
        {/* 与运算符 */}
        <h1>hello</h1>
        {/* true && 表达式就会返回表达式 */}
        {/* false && 表达式就会返回false */}
        {isLoggedIn &&
          <h2>
            you have {isLoggedIn} isLoggedIn.
          </h2>
        }
        {button}
      </div>
    )
  }
}
ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
)
// 通过元素变量切换组件
// 登录按钮
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
// 注销按钮
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}
function UserGreeting(props) {
  return <h1>welcome back</h1>;
}
function GuestGreeting(props) {
  return <h1>please sign up</h1>
}
// 问候语切换
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

// LoginControl组件，根据当前的状态来渲染按钮，同时还会渲染Greeting
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    // 在 JavaScript 中，class 的方法默认不会绑定`this`。
    // 如果忘记绑定 `this.handleClick` 并把它传入了 `onClick`，当调用这个函数的时候 `this` 的值为 `undefined`。
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    // 转变按钮的状态 元素变量
    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleLogoutClick} />
    } else {
      button = <LogoutButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        {/* 三目运算符 */}
        the user is {isLoggedIn ? 'currently' : 'not'}<br />
        {isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />
        }
        {/* 元素变量 */}
        <Greeting isLoggedIn={isLoggedIn} />
        {/* 与运算符 */}
        <h1>hello</h1>
        {/* true && 表达式就会返回表达式 */}
        {/* false && 表达式就会返回false */}
        {isLoggedIn &&
          <h2>
            you have {isLoggedIn} isLoggedIn.
          </h2>
        }
        {button}
      </div>
    )
  }
}
ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
)
```

> 根据团队的习惯选择可读性高的代码，如果条件过于复杂，应考虑提取组件

#### 阻止组件渲染

在极少数隐藏组件情况下，即使它已经被其它组件渲染，也可以通过让render方法直接返回null，而不进行任何渲染。

下面的示例中,<WarningBanner/>会根据prop中warn的值来进行天剑渲染。如果warn的值是false，那么组件不会渲染。

```js
// 组件是否隐藏
function WarningBnner(props) {
  // render直接返回null，而不进行渲染
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      warning
    </div>
  );
}
// React写错成ReactDOM报错×
// TypeError: Class extends value undefined is not a constructor or null
// 这个类继承的值无法解构或者解构的值为空
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  // 改变showWarning的值
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  componentDidUpdate(){
    console.log('组件完成更新立即调用')
  }
  render() {
    return (
      <div>
        {/* WarningBnner组件 */}
        <WarningBnner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'hide' : 'show'}
        </button>
      </div>
    )
  }
}
ReactDOM.render(
  <Page />,
  document.getElementById('root')
)
```

在组件的render方法中返回null，并不会影响组件的生命周期。例如，上面这个示例中，componentDidUpdate依然会被调用.

### 列表&Key

使用map()函数让数组中的每一项变双倍，然后我们得到了一个新的列表 `doubled` 并打印出来：

```js
//js中转化列表
const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
// [2,4,6,8,10]
```

在react中，把数组转化为元素列表的过程是相似的

#### 渲染多个组件

通过{}在JSX内构件一个元素集合

如下，通过js中的map()方法来遍历numbers数组，将数组中的每个元素变成<li>标签，最后将得到的数组赋值给listItems

```js
// 列表&key 生成一个1到5的项目符号列表
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) => 
  <li>{number}</li>
);
ReactDOM.render(
  // 这时会有一个警告index.js:1 Warning: Each child in a list should have a unique "key" prop.
  //每一个列表中的元素，必须包括一个特殊的 key 属性
  <ul>{listItems}</ul>,
  document.getElementById('root')
)
```

#### 基础列表组件

把上一个例子重构成一个组件，这个组件接收numbers数组作为参数并输出一个元素列表。

```js
// 元素列表组件，接收numbers数组作为参数
function NumberList(props) {
  const numbers = props.numberss;
  const listItems = numbers.map((number) =>
    // 这时会有一个警告index.js:1 Warning: Each child in a list should have a unique "key" prop.
    // 每一个列表中的元素，必须包括一个特殊的 key 属性
    // 通过给每个列表元素分配一个key属性来解决这个警告
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  )
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numberss={numbers} />,
  document.getElementById('root')
)
```

#### Key

key帮助React识别哪些元素改变了，比如被添加或删除，因此应当给数组中的每一个元素赋予一个确定的标识。

```js
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) => 

)
```

一个元素的key最好是这个元素在列表中拥有的独一无二的字符串。通常，我们可以使用数据中的id来作为元素的key

```js
const todoItems = todos.map((todo) => 
  <li key="todo.id">
    {todo.text}
  </li>
)
```

当元素没有确定id的时候，万不得已可以使用元素索引inde作为key

```js
const todoItems = todos.map((todo.index) => 
  <li key={index}>
    {todo.text}
  </li>
)
```

> 如果列表项目的顺序会变化，不建议使用索引来用作key值，因为这会导致西能变差，还可能引起组件状态问题。
>
> 可以看看 Robin Pokorny 的[深度解析使用索引作为 key 的负面影响](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)这一篇文章。如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值。
>
> 要了解更多的话，[深入解析为什么 key 是必须的](https://react.docschina.org/docs/reconciliation.html#recursing-on-children)可以参考。

#### 用key提取组件

元素的key只有放在就近的数组上下文中才有意义。

比方说，如果你[提取](https://react.docschina.org/docs/components-and-props.html#extracting-components)出一个 `ListItem` 组件，你应该把 key 保留在数组中的这个 `<ListItem />` 元素上，而不是放在 `ListItem` 组件中的 `<li>` 元素上。

**例子：不正确的使用key的方式**

```js
// 用key提取组件
function ListItem(props){
  const value = props.value;
  return(
    // 错误，你不需要在这里指定key
    <li key="value.toString">
      {value}
    </li>
  )
}
function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 错误！元素的key应该在这里指定
    <ListItem value={number}/>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
)
```

**例子：例子正确的使用key的方式**

```js
// 正确的使用key的方式
function ListItem(props){
  // 正确！这里不需要指定key
  return <li>{props.value}</li>
}
function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 正确 key应该在数组的上下文中被指定
    <ListItem key = {number.toString()} value={number}/>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers=[1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
)
```

> 经验法则：在 `map()` 方法中的元素需要设置 key 属性。

#### key只是在兄弟节点之间必须唯一

数组元素中使用的key在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的，

在生成两个不同的数组时，可以使用相同的key值

```js
// key只是在兄弟节点之间必须唯一
function Blog(props) {
  const sidebar = (
    <ul>
      {/* 在 map() 方法中的元素需要设置 key 属性 */}
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props = props.posts.map((post) =>
  // 在 map() 方法中的元素需要设置 key 属性
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  )
}
const posts = [
  {id:1,title:'hello world', content:'welcome to learing react'},
  {id:2,title:'installation', content:'you can install react'},
];
ReactDOM.render(
  <Blog posts={posts}/>,
  document.getElementById('root')
)
```

key会传递信息给React，但不会传递给组件，如果组件中需要使用key属性的值，要用其他属性名显式传递这个值：

```js
const content = posts.map((post) =>
	<Post
		key={post.id}
		id={post.id}
		title={post.title}/>
)
```

上面例子中，`Post` 组件可以读出 `props.id`，但是不能读出 `props.key`。

#### 在JSX中嵌入map()

在上面的例子中，声明了一个单独的listItems变量并将其包含在JSX中：

```js
function NumberList(props){
    const numbers = props.numbers'
    const listItems = numbers.map((number) =>
    	<ListItem key={nmber.toString()}
			value={number}/>
	);
	return (
    	<ul>{listItems}</ul>
    )
}
```

JSX允许在大括号中嵌入任何表达式，所以可以内联map()返回的结果

```js
function NumberList(props){
    const numbers = props.numbers;
    return(
    	<ul>
        	{numbers.map((number) =>
    		<ListItem key={number.toString()} 
				value={number}/>
    	)}
        </ul>
    )
}
```

这么做有时可以使你的代码更清晰，但有时这种风格也会被滥用。就像在 JavaScript 中一样，何时需要为了可读性提取出一个变量，这完全取决于你。但请记住，如果一个 `map()` 嵌套了太多层级，那可能就是你[提取组件](https://react.docschina.org/docs/components-and-props.html#extracting-components)的一个好时机。

### 表单

在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。例如这个纯 HTML 表单只接受一个名称：

```js
<form>
  <label>
    名字:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="提交" />
</form>
```

此表单具有默认的 HTML 表单行为，即在用户提交表单后浏览到新页面。如果你在 React 中执行相同的代码，它依然有效。但大多数情况下，使用 JavaScript 函数可以很方便的处理表单的提交， 同时还可以访问用户填写的表单数据。实现这种效果的标准方式是使用“受控组件”。

#### 受控组件

在 HTML 中，表单元素（如`<input>`、 `<textarea>` 和 `<select>`）之类的表单元素通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 [`setState()`](https://react.docschina.org/docs/react-component.html#setstate)来更新。

我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

例如，如果我们想让前一个示例在提交时打印出名称，我们可以将表单写为受控组件：

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/VmmPgp?editors=0010)

由于在表单元素上设置了 `value` 属性，因此显示的值将始终为 `this.state.value`，这使得 React 的 state 成为唯一数据源。由于 `handlechange` 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。

对于受控组件来说，输入的值始终由 React 的 state 驱动。你也可以将 value 传递给其他 UI 元素，或者通过其他事件处理函数重置，但这意味着你需要编写更多的代码。

#### textarea 标签

在 HTML 中, `<textarea>` 元素通过其子元素定义其文本:

```
<textarea>
  你好， 这是在 text area 里的文本
</textarea>
```

而在 React 中，`<textarea>` 使用 `value` 属性代替。这样，可以使得使用 `<textarea>` 的表单和使用单行 input 的表单非常类似：

```js
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('提交的文章: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

请注意，`this.state.value` 初始化于构造函数中，因此文本区域默认有初值。

#### select 标签

在 HTML 中，`<select>` 创建下拉列表标签。例如，如下 HTML 创建了水果相关的下拉列表：

```js
<select>
  <option value="grapefruit">葡萄柚</option>
  <option value="lime">酸橙</option>
  <option selected value="coconut">椰子</option>
  <option value="mango">芒果</option>
</select>
```

请注意，由于 `selected` 属性的缘故，椰子选项默认被选中。React 并不会使用 `selected` 属性，而是在根 `select` 标签上使用 `value` 属性。这在受控组件中更便捷，因为您只需要在根标签中更新它。例如：

```js
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/JbbEzX?editors=0010)

总的来说，这使得 `<input type="text">`, `<textarea>` 和 `<select>` 之类的标签都非常相似—它们都接受一个 `value` 属性，你可以使用它来实现受控组件。

> 注意
>
> 你可以将数组传递到 `value` 属性中，以支持在 `select` 标签中选择多个选项：
>
> ```
> <select multiple={true} value={['B', 'C']}>
> ```

#### 文件 input 标签

在 HTML 中，`<input type="file">` 允许用户从存储设备中选择一个或多个文件，将其上传到服务器，或通过使用 JavaScript 的 [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) 进行控制。

```
<input type="file" />
```

因为它的 value 只读，所以它是 React 中的一个**非受控**组件。将与其他非受控组件[在后续文档中](https://react.docschina.org/docs/uncontrolled-components.html#the-file-input-tag)一起讨论。

#### 处理多个输入

当需要处理多个 `input` 元素时，我们可以给每个元素添加 `name` 属性，并让处理函数根据 `event.target.name` 的值选择要执行的操作。

例如：

```js
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/wgedvV?editors=0010)

这里使用了 ES6 [计算属性名称](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)的语法更新给定输入名称对应的 state 值：

例如：

```
this.setState({
  [name]: value});
```

等同 ES5:

```
var partialState = {};
partialState[name] = value;this.setState(partialState);
```

另外，由于 `setState()` 自动[将部分 state 合并到当前 state](https://react.docschina.org/docs/state-and-lifecycle.html#state-updates-are-merged), 只需调用它更改部分 state 即可。

#### 受控输入空值

在[受控组件](https://react.docschina.org/docs/forms.html#controlled-components)上指定 value 的 prop 会阻止用户更改输入。如果你指定了 `value`，但输入仍可编辑，则可能是你意外地将`value` 设置为 `undefined` 或 `null`。

下面的代码演示了这一点。（输入最初被锁定，但在短时间延迟后变为可编辑。）

```js
ReactDOM.render(<input value="hi" />, mountNode);
//Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. 
This will render a read-only field. If the field should be mutable use `defaultValue`. 
Otherwise, set either `onChange` or `readOnly`
setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

#### 受控组件的替代品

有时使用受控组件会很麻烦，因为你需要为数据变化的每种方式都编写事件处理函数，并通过一个 React 组件传递所有的输入 state。当你将之前的代码库转换为 React 或将 React 应用程序与非 React 库集成时，这可能会令人厌烦。在这些情况下，你可能希望使用[非受控组件](https://react.docschina.org/docs/uncontrolled-components.html), 这是实现输入表单的另一种方式。

#### 成熟的解决方案

如果你想寻找包含验证、追踪访问字段以及处理表单提交的完整解决方案，使用 [Formik](https://jaredpalmer.com/formik) 是不错的选择。然而，它也是建立在受控组件和管理 state 的基础之上 —— 所以不要忽视学习它们。

### 提交表单数据

`接State&生命周期中的State`

现在我们在状态中存储了数据，我们可以从状态中删除任何项目。但是，如果我们希望能够向状态添加新数据怎么办？在现实世界的应用程序中，您更有可能从空状态开始并添加到它，例如待办事项列表或购物车。

首先，让`state.characters`我们从 中删除所有硬编码数据，因为我们现在将通过表单更新这些数据。

源代码/App.js

```jsx
class App extends Component {
  state = {
    characters: [],
  }
}
```

现在让我们继续`Form`在名为`Form.js`.

我们将 的初始状态设置为`Form`具有一些空属性的对象，并将该初始状态分配给`this.state`。

源代码/Form.js

```jsx
import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState
}
```

> 以前，需要`constructor()`在 React 类组件上包含 a ，但现在不再需要了。

我们对这个表单的目标是在表单中`Form`每次更改字段时更新状态，当我们提交时，所有这些数据都将传递给`App`状态，然后状态将更新`Table`.

首先，我们将制作每次对输入进行更改时都会运行的函数。该`event`会通过通过，我们会设置状态的`Form`有`name`（键）和`value`的输入。

源代码/Form.js

```jsx
handleChange = (event) => {
  const {name, value} = event.target

  this.setState({
    [name]: value,
  })
}
```

在继续提交表单之前，让我们先完成这项工作。在渲染中，让我们从 state 中获取我们的两个属性，并将它们分配为对应于正确表单键的值。我们将`handleChange()`作为`onChange`输入运行该方法，最后我们将导出`Form`组件。

源代码/Form.js

```jsx
render() {
  const { name, job } = this.state;

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={this.handleChange} />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={job}
        onChange={this.handleChange} />
    </form>
  );
}

export default Form;
```

在 中`App.js`，我们可以呈现表格下方的表格。

源代码/App.js

```jsx
import Form from './Form'
```

源代码/App.js

```jsx
return (
  <div className="container">
    <Table characterData={characters} removeCharacter={this.removeCharacter} />
    <Form />
  </div>
)
```

现在，如果我们转到应用程序的前端，我们会看到一个还没有提交的表单。更新一些字段，您将看到`Form`正在更新的本地状态。

[![屏幕截图 2018 年 08 月 19 日下午 7 点 55 点 56 分](https://www.taniarascia.com/static/faf2c33e4383a065a6d5d0705b48658c/a6d36/Screen-Shot-2018-08-19-at-7.55.56-PM.png)](https://www.taniarascia.com/static/faf2c33e4383a065a6d5d0705b48658c/71dc1/Screen-Shot-2018-08-19-at-7.55.56-PM.png)

最后一步是允许我们实际提交该数据并更新父状态。我们将创建一个调用`handleSubmit()`的函数，`App`该函数将使用[ES6 扩展运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)获取现有参数`this.state.characters`并添加新`character`参数来更新状态。

源代码/App.js

```jsx
handleSubmit = (character) => {
  this.setState({characters: [...this.state.characters, character]})
}
```

确保将它作为参数传递给`Form`。

```jsx
<Form handleSubmit={this.handleSubmit} />
```

现在`Form`，我们将创建一个`submitForm()`调用该函数的方法，并将`Form`状态作为`character`我们之前定义的参数传递。它还会将状态重置为初始状态，以在提交后清除表单。

源代码/Form.js

```jsx
submitForm = () => {
  this.props.handleSubmit(this.state)
  this.setState(this.initialState)
}
```

最后，我们将添加一个提交按钮来提交表单。我们使用 an`onClick`而不是 an`onSubmit`因为我们没有使用标准提交功能。点击将调用`submitForm`我们刚刚制作的。

```jsx
<input type="button" value="Submit" onClick={this.submitForm} />
```

就是这样！该应用程序已完成。我们可以在我们的表中创建、添加和删除用户。由于`Table`和`TableBody`已经从状态中拉出，它将正确显示。

[![屏幕截图 2018 08 19 at 9 33 59 PM](https://www.taniarascia.com/static/5d0c857d6373c593016654a4f40fe9f3/a6d36/Screen-Shot-2018-08-19-at-9.33.59-PM.png)](https://www.taniarascia.com/static/5d0c857d6373c593016654a4f40fe9f3/b2313/Screen-Shot-2018-08-19-at-9.33.59-PM.png)

可以[在 GitHub 上](https://github.com/taniarascia/react-tutorial)查看[完整的源代码](https://github.com/taniarascia/react-tutorial)。

### 状态提升

通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。让我们看看它是如何运作的。

在本节中，我们将创建一个用于计算水在给定温度下是否会沸腾的温度计算器。

我们将从一个名为 `BoilingVerdict` 的组件开始，它接受 `celsius` 温度作为一个 prop，并据此打印出该温度是否足以将水煮沸的结果。

```js
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;  }
  return <p>The water would not boil.</p>;}
```

接下来, 我们创建一个名为 `Calculator` 的组件。它渲染一个用于输入温度的 `<input>`，并将其值保存在 `this.state.temperature` 中。

另外, 它根据当前输入值渲染 `BoilingVerdict` 组件。

```js
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};  }

  handleChange(e) {
    this.setState({temperature: e.target.value});  }

  render() {
    const temperature = this.state.temperature;    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input          value={temperature}          onChange={this.handleChange} />        <BoilingVerdict          celsius={parseFloat(temperature)} />      </fieldset>
    );
  }
}
```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/ZXeOBm?editors=0010)

添加第二个输入框

我们的新需求是，在已有摄氏温度输入框的基础上，我们提供华氏度的输入框，并保持两个输入框的数据同步。

我们先从 `Calculator` 组件中抽离出 `TemperatureInput` 组件，然后为其添加一个新的 `scale` prop，它可以是 `"c"` 或是 `"f"`：

```js
const scaleNames = {  c: 'Celsius',  f: 'Fahrenheit'};
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

我们现在可以修改 `Calculator` 组件让它渲染两个独立的温度输入框组件：

```js
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />        <TemperatureInput scale="f" />      </div>
    );
  }
}
```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/jGBryx?editors=0010)

我们现在有了两个输入框，但当你在其中一个输入温度时，另一个并不会更新。这与我们的要求相矛盾：我们希望让它们保持同步。

另外，我们也不能通过 `Calculator` 组件展示 `BoilingVerdict` 组件的渲染结果。因为 `Calculator` 组件并不知道隐藏在 `TemperatureInput` 组件中的当前温度是多少。

#### 编写转换函数

首先，我们将编写两个可以在摄氏度与华氏度之间相互转换的函数：

```js
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
```

上述两个函数仅做数值转换。而我们将编写另一个函数，它接受字符串类型的 `temperature` 和转换函数作为参数并返回一个字符串。我们将使用它来依据一个输入框的值计算出另一个输入框的值。

当输入 `temperature` 的值无效时，函数返回空字符串，反之，则返回保留三位小数并四舍五入后的转换结果：

```js
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
```

例如，`tryConvert('abc', toCelsius)` 返回一个空字符串，而 `tryConvert('10.22', toFahrenheit)` 返回 `'50.396'`。

#### 状态提升

到目前为止, 两个 `TemperatureInput` 组件均在各自内部的 state 中相互独立地保存着各自的数据。

```js
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};  }

  handleChange(e) {
    this.setState({temperature: e.target.value});  }

  render() {
    const temperature = this.state.temperature;    // ...  
```

然而，我们希望两个输入框内的数值彼此能够同步。当我们更新摄氏度输入框内的数值时，华氏度输入框内应当显示转换后的华氏温度，反之亦然。

**在 React 中，将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”**。接下来，我们将 `TemperatureInput` 组件中的 state 移动至 `Calculator` 组件中去。

如果 `Calculator` 组件拥有了共享的 state，它将成为两个温度输入框中当前温度的“数据源”。它能够使得两个温度输入框的数值彼此保持一致。由于两个 `TemperatureInput` 组件的 props 均来自共同的父组件 `Calculator`，因此两个输入框中的内容将始终保持一致。

让我们看看这是如何一步一步实现的。

首先，我们将 `TemperatureInput` 组件中的 `this.state.temperature` 替换为 `this.props.temperature`。现在，我们先假定 `this.props.temperature` 已经存在，尽管将来我们需要通过 `Calculator` 组件将其传入：

```js
  render() {
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;    // ...
```

我们知道 [props 是只读的](https://react.docschina.org/docs/components-and-props.html#props-are-read-only)。当 `temperature` 存在于 `TemperatureInput` 组件的 state 中时，组件调用 `this.setState()` 便可修改它。然而，`temperature` 是由父组件传入的 prop，`TemperatureInput` 组件便失去了对它的控制权。

在 React 中，这个问题通常是通过使用“受控组件”来解决的。与 DOM 中的 `<input>` 接受 `value` 和 `onChange` 一样，自定义的 `TemperatureInput` 组件接受 `temperature` 和 `onTemperatureChange` 这两个来自父组件 `Calculator` 的 props。

现在，当 `TemperatureInput` 组件想更新温度时，需调用 `this.props.onTemperatureChange` 来更新它：

```js
  handleChange(e) {
    // Before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);    // ...
```

> 注意：
>
> 自定义组件中的 `temperature` 和 `onTemperatureChange` 这两个 prop 的命名没有任何特殊含义。我们可以给它们取其它任意的名字，例如，把它们命名为 `value` 和 `onChange` 就是一种习惯。

`onTemperatureChange` 的 prop 和 `temperature` 的 prop 一样，均由父组件 `Calculator` 提供。它通过修改父组件自身的内部 state 来处理数据的变化，进而使用新的数值重新渲染两个输入框。我们将很快看到修改后的 `Calculator` 组件效果。

在深入研究 `Calculator` 组件的变化之前，让我们回顾一下 `TemperatureInput` 组件的变化。我们移除组件自身的 state，通过使用 `this.props.temperature` 替代 `this.state.temperature` 来读取温度数据。当我们想要响应数据改变时，我们需要调用 `Calculator` 组件提供的 `this.props.onTemperatureChange()`，而不再使用 `this.setState()`。

```js
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);  }

  render() {
    const temperature = this.props.temperature;    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

现在，让我们把目光转向 `Calculator` 组件。

我们会把当前输入的 `temperature` 和 `scale` 保存在组件内部的 state 中。这个 state 就是从两个输入框组件中“提升”而来的，并且它将用作两个输入框组件的共同“数据源”。这是我们为了渲染两个输入框所需要的所有数据的最小表示。

例如，当我们在摄氏度输入框中键入 37 时，`Calculator` 组件中的 state 将会是：

```js
{
  temperature: '37',
  scale: 'c'
}
```

如果我们之后修改华氏度的输入框中的内容为 212 时，`Calculator` 组件中的 state 将会是：

```js
{
  temperature: '212',
  scale: 'f'
}
```

我们可以存储两个输入框中的值，但这并不是必要的。我们只需要存储最近修改的温度及其计量单位即可，根据当前的 `temperature` 和 `scale` 就可以计算出另一个输入框的值。

由于两个输入框中的数值由同一个 state 计算而来，因此它们始终保持同步：

```js
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/WZpxpz?editors=0010)

现在无论你编辑哪个输入框中的内容，`Calculator` 组件中的 `this.state.temperature` 和 `this.state.scale` 均会被更新。其中一个输入框保留用户的输入并取值，另一个输入框始终基于这个值显示转换后的结果。

让我们来重新梳理一下当你对输入框内容进行编辑时会发生些什么：

- React 会调用 DOM 中 `<input>` 的 `onChange` 方法。在本实例中，它是 `TemperatureInput` 组件的 `handleChange` 方法。
- `TemperatureInput` 组件中的 `handleChange` 方法会调用 `this.props.onTemperatureChange()`，并传入新输入的值作为参数。其 props 诸如 `onTemperatureChange` 之类，均由父组件 `Calculator` 提供。
- 起初渲染时，用于摄氏度输入的子组件 `TemperatureInput` 中的 `onTemperatureChange` 方法与 `Calculator` 组件中的 `handleCelsiusChange` 方法相同，而，用于华氏度输入的子组件 `TemperatureInput` 中的 `onTemperatureChange` 方法与 `Calculator` 组件中的 `handleFahrenheitChange` 方法相同。因此，无论哪个输入框被编辑都会调用 `Calculator` 组件中对应的方法。
- 在这些方法内部，`Calculator` 组件通过使用新的输入值与当前输入框对应的温度计量单位来调用 `this.setState()` 进而请求 React 重新渲染自己本身。
- React 调用 `Calculator` 组件的 `render` 方法得到组件的 UI 呈现。温度转换在这时进行，两个输入框中的数值通过当前输入温度和其计量单位来重新计算获得。
- React 使用 `Calculator` 组件提供的新 props 分别调用两个 `TemperatureInput` 子组件的 `render` 方法来获取子组件的 UI 呈现。
- React 调用 `BoilingVerdict` 组件的 `render` 方法，并将摄氏温度值以组件 props 方式传入。
- React DOM 根据输入值匹配水是否沸腾，并将结果更新至 DOM。我们刚刚编辑的输入框接收其当前值，另一个输入框内容更新为转换后的温度值。

得益于每次的更新都经历相同的步骤，两个输入框的内容才能始终保持同步。

#### 学习小结

在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，state 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠[自上而下的数据流](https://react.docschina.org/docs/state-and-lifecycle.html#the-data-flows-down)，而不是尝试在不同组件间同步 state。

虽然提升 state 方式比双向绑定方式需要编写更多的“样板”代码，但带来的好处是，排查和隔离 bug 所需的工作量将会变少。由于“存在”于组件中的任何 state，仅有组件自己能够修改它，因此 bug 的排查范围被大大缩减了。此外，你也可以使用自定义逻辑来拒绝或转换用户的输入。

如果某些数据可以由 props 或 state 推导得出，那么它就不应该存在于 state 中。举个例子，本例中我们没有将 `celsiusValue` 和 `fahrenheitValue` 一起保存，而是仅保存了最后修改的 `temperature` 和它的 `scale`。这是因为另一个输入框的温度值始终可以通过这两个值以及组件的 `render()` 方法获得。这使得我们能够清除输入框内容，亦或是，在不损失用户操作的输入框内数值精度的前提下对另一个输入框内的转换数值做四舍五入的操作。

当你在 UI 中发现错误时，可以使用 [React 开发者工具](https://github.com/facebook/react/tree/master/packages/react-devtools) 来检查问题组件的 props，并且按照组件树结构逐级向上搜寻，直到定位到负责更新 state 的那个组件。这使得你能够追踪到产生 bug 的源头：

![Monitoring State in React DevTools](https://react.docschina.org/ef94afc3447d75cdc245c77efb0d63be/react-devtools-state.gif)

Is this page useful?[编辑此页面](https://github.com/reactjs/zh-hans.reactjs.org/tree/master/content/docs/lifting-state-up.md)

### 组合 vs 继承

React 有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用。

在这篇文档中，我们将考虑初学 React 的开发人员使用继承时经常会遇到的一些问题，并展示如何通过组合思想来解决这些问题。

#### 包含关系

有些组件无法提前知晓它们子组件的具体内容。在 `Sidebar`（侧边栏）和 `Dialog`（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况。

我们建议这些组件使用一个特殊的 `children` prop 来将他们的子组件传递到渲染结果中：

```js
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}    </div>
  );
}
```

这使得别的组件可以通过 JSX 嵌套，将任意组件作为子组件传递给它们。

```js
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">        Welcome      </h1>      <p className="Dialog-message">        Thank you for visiting our spacecraft!      </p>    </FancyBorder>
  );
}
```

**[在 CodePen 上尝试](https://codepen.io/gaearon/pen/ozqNOV?editors=0010)**

`<FancyBorder>` JSX 标签中的所有内容都会作为一个 `children` prop 传递给 `FancyBorder` 组件。因为 `FancyBorder` 将 `{props.children}` 渲染在一个 `<div>` 中，被传递的这些子组件最终都会出现在输出结果中。

少数情况下，你可能需要在一个组件中预留出几个“洞”。这种情况下，我们可以不使用 `children`，而是自行约定：将所需内容传入 props，并使用相应的 prop。

```js
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}      </div>
      <div className="SplitPane-right">
        {props.right}      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />      }
      right={
        <Chat />      } />
  );
}
```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/gwZOJp?editors=0010)

`<Contacts />` 和 `<Chat />` 之类的 React 元素本质就是对象（object），所以你可以把它们当作 props，像其他数据一样传递。这种方法可能使你想起别的库中“槽”（slot）的概念，但在 React 中没有“槽”这一概念的限制，你可以将任何东西作为 props 进行传递。

#### 特例关系

有些时候，我们会把一些组件看作是其他组件的特殊实例，比如 `WelcomeDialog` 可以说是 `Dialog` 的特殊实例。

在 React 中，我们也可以通过组合来实现这一点。“特殊”组件可以通过 props 定制并渲染“一般”组件：

```js
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}      </h1>
      <p className="Dialog-message">
        {props.message}      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog      title="Welcome"      message="Thank you for visiting our spacecraft!" />  );
}
```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/kkEaOZ?editors=0010)

组合也同样适用于以 class 形式定义的组件。

```js
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}               onChange={this.handleChange} />        <button onClick={this.handleSignUp}>          Sign Me Up!        </button>      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/gwZbYa?editors=0010)

#### 那么继承呢？

在 Facebook，我们在成百上千个组件中使用 React。我们并没有发现需要使用继承来构建组件层次的情况。

Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。

如果你想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们。

### React 哲学

我们认为，React 是用 JavaScript 构建快速响应的大型 Web 应用程序的首选方式。它在 Facebook 和 Instagram 上表现优秀。

React 最棒的部分之一是引导我们思考如何构建一个应用。在这篇文档中，我们将会通过 React 构建一个可搜索的产品数据表格来更深刻地领会 React 哲学。

#### 从设计稿开始

假设我们已经有了一个返回 JSON 的 API，以及设计师提供的组件设计稿。如下所示：

![Mockup](https://react.docschina.org/static/1071fbcc9eed01fddc115b41e193ec11/d4770/thinking-in-react-mock.png)

该 JSON API 会返回以下数据：

```
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```

#### 第一步：将设计好的 UI 划分为组件层级

首先，你需要在设计稿上用方框圈出每一个组件（包括它们的子组件），并且以合适的名称命名。如果你是和设计师一起完成此任务，那么他们可能已经做过类似的工作，所以请和他们进行交流！他们的 Photoshop 的图层名称可能最终就是你编写的 React 组件的名称！

但你如何确定应该将哪些部分划分到一个组件中呢？你可以将组件当作一种函数或者是对象来考虑，根据[单一功能原则](https://en.wikipedia.org/wiki/Single_responsibility_principle)来判定组件的范围。也就是说，一个组件原则上只能负责一个功能。如果它需要负责更多的功能，这时候就应该考虑将它拆分成更小的组件。

在实践中，因为你经常是在向用户展示 JSON 数据模型，所以如果你的模型设计得恰当，UI（或者说组件结构）便会与数据模型一一对应，这是因为 UI 和数据模型都会倾向于遵守相同的*信息结构*。将 UI 分离为组件，其中每个组件需与数据模型的某部分匹配。

![Component diagram](https://react.docschina.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png)

你会看到我们的应用中包含五个组件。我们已经将每个组件展示的数据标注为了斜体。

1. **`FilterableProductTable` (橙色):** 是整个示例应用的整体
2. **`SearchBar` (蓝色):** 接受所有的*用户输入*
3. **`ProductTable` (绿色):** 展示*数据内容*并根据*用户输入*筛选结果
4. **`ProductCategoryRow` (天蓝色):** 为每一个*产品类别*展示标题
5. **`ProductRow` (红色):** 每一行展示一个*产品*

你可能注意到，`ProductTable` 的表头（包含 “Name” 和 “Price” 的那一部分）并未单独成为一个组件。这仅仅是一种偏好选择，如何处理这一问题也一直存在争论。就这个示例而言，因为表头只起到了渲染*数据集合*的作用——这与 `ProductTable` 是一致的，所以我们仍然将其保留为 `ProductTable` 的一部分。但是，如果表头过于复杂（例如，我们需为其添加排序功能），那么将它作为一个独立的 `ProductTableHeader` 组件就显得很有必要了。

现在我们已经确定了设计稿中应该包含的组件，接下来我们将把它们描述为更加清晰的层级。设计稿中被其他组件包含的子组件，在层级上应该作为其子节点。

- `FilterableProductTable`
  - `SearchBar`
  - `ProductTable`
    - `ProductCategoryRow`
    - `ProductRow`

#### 第二步：用 React 创建一个静态版本

参阅 [CodePen](https://codepen.io/) 上的 [React 哲学：第二步](https://codepen.io/gaearon/pen/BwWzwm)。

现在我们已经确定了组件层级，可以编写对应的应用了。最容易的方式，是先用已有的数据模型渲染一个不包含交互功能的 UI。最好将渲染 UI 和添加交互这两个过程分开。这是因为，编写一个应用的静态版本时，往往要编写大量代码，而不需要考虑太多交互细节；添加交互功能时则要考虑大量细节，而不需要编写太多代码。所以，将这两个过程分开进行更为合适。我们会在接下来的代码中体会到其中的区别。

在构建应用的静态版本时，我们需要创建一些会重用其他组件的组件，然后通过 *props* 传入所需的数据。*props* 是父组件向子组件传递数据的方式。即使你已经熟悉了 *state* 的概念，也**完全不应该使用 state** 构建静态版本。state 代表了随时间会产生变化的数据，应当仅在实现交互时使用。所以构建应用的静态版本时，你不会用到它。

你可以自上而下或者自下而上构建应用：自上而下意味着首先编写层级较高的组件（比如 `FilterableProductTable`），自下而上意味着从最基本的组件开始编写（比如 `ProductRow`）。当你的应用比较简单时，使用自上而下的方式更方便；对于较为大型的项目来说，自下而上地构建，并同时为低层组件编写测试是更加简单的方式。

到此为止，你应该已经有了一个可重用的组件库来渲染你的数据模型。由于我们构建的是静态版本，所以这些组件目前只需提供 `render()` 方法用于渲染。最顶层的组件 `FilterableProductTable` 通过 props 接受你的数据模型。如果你的数据模型发生了改变，再次调用 `ReactDOM.render()`，UI 就会相应地被更新。数据模型变化、调用 `render()` 方法、UI 相应变化，这个过程并不复杂，因此很容易看清楚 UI 是如何被更新的，以及是在哪里被更新的。React **单向数据流**（也叫*单向绑定*）的思想使得组件模块化，易于快速开发。

如果你在完成这一步骤时遇到了困难，可以参阅 [React 文档](https://react.docschina.org/docs/)。

#### 补充说明: 有关 props 和 state

在 React 中，有两类“模型”数据：props 和 state。清楚地理解两者的区别是十分重要的；如果你不太有把握，可以参阅 [React 官方文档](https://react.docschina.org/docs/state-and-lifecycle.html)。你也可以查看 [FAQ: state 与 props 的区别是什么？](https://react.docschina.org/docs/faq-state.html#what-is-the-difference-between-state-and-props)

#### 第三步：确定 UI state 的最小（且完整）表示

想要使你的 UI 具备交互功能，需要有触发基础数据模型改变的能力。React 通过实现 **state** 来完成这个任务。

为了正确地构建应用，你首先需要找出应用所需的 state 的最小表示，并根据需要计算出其他所有数据。其中的关键正是 [DRY: *Don’t Repeat Yourself*](https://en.wikipedia.org/wiki/Don't_repeat_yourself)。只保留应用所需的可变 state 的最小集合，其他数据均由它们计算产生。比如，你要编写一个任务清单应用，你只需要保存一个包含所有事项的数组，而无需额外保存一个单独的 state 变量（用于存储任务个数）。当你需要展示任务个数时，只需要利用该数组的 length 属性即可。

我们的示例应用拥有如下数据：

- 包含所有产品的原始列表
- 用户输入的搜索词
- 复选框是否选中的值
- 经过搜索筛选的产品列表

通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：

1. 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
2. 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
3. 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。

包含所有产品的原始列表是经由 props 传入的，所以它不是 state；搜索词和复选框的值应该是 state，因为它们随时间会发生改变且无法由其他数据计算而来；经过搜索筛选的产品列表不是 state，因为它的结果可以由产品的原始列表根据搜索词和复选框的选择计算出来。

综上所述，属于 state 的有：

- 用户输入的搜索词
- 复选框是否选中的值

#### 第四步：确定 state 放置的位置

参阅 [CodePen](https://codepen.io/) 上的 [React 哲学：第四步](https://codepen.io/gaearon/pen/qPrNQZ)。

我们已经确定了应用所需的 state 的最小集合。接下来，我们需要确定哪个组件能够改变这些 state，或者说*拥有*这些 state。

注意：React 中的数据流是单向的，并顺着组件层级从上往下传递。哪个组件应该拥有某个 state 这件事，**对初学者来说往往是最难理解的部分**。尽管这可能在一开始不是那么清晰，但你可以尝试通过以下步骤来判断：

对于应用中的每一个 state：

- 找到根据这个 state 进行渲染的所有组件。
- 找到他们的共同所有者（common owner）组件（在组件层级上高于所有需要该 state 的组件）。
- 该共同所有者组件或者比它层级更高的组件应该拥有该 state。
- 如果你找不到一个合适的位置来存放该 state，就可以直接创建一个新的组件来存放该 state，并将这一新组件置于高于共同所有者组件层级的位置。

根据以上策略重新考虑我们的示例应用：

- `ProductTable` 需要根据 state 筛选产品列表。`SearchBar` 需要展示搜索词和复选框的状态。
- 他们的共同所有者是 `FilterableProductTable`。
- 因此，搜索词和复选框的值应该很自然地存放在 `FilterableProductTable` 组件中。

很好，我们已经决定把这些 state 存放在 `FilterableProductTable` 组件中。首先，将实例属性 `this.state = {filterText: '', inStockOnly: false}` 添加到 `FilterableProductTable` 的 `constructor` 中，设置应用的初始 state；接着，将 `filterText` 和 `inStockOnly` 作为 props 传入 `ProductTable` 和 `SearchBar`；最后，用这些 props 筛选 `ProductTable` 中的产品信息，并设置 `SearchBar` 的表单值。

你现在可以看到应用的变化了：将 `filterText` 设置为 `"ball"` 并刷新应用，你能发现表格中的数据已经更新了。

#### 第五步：添加反向数据流

参阅 [CodePen](https://codepen.io/) 上的 [React 哲学：第五步](https://codepen.io/gaearon/pen/LzWZvb)。

到目前为止，我们已经借助自上而下传递的 props 和 state 渲染了一个应用。现在，我们将尝试让数据反向传递：处于较低层级的表单组件更新较高层级的 `FilterableProductTable` 中的 state。

React 通过一种比传统的双向绑定略微繁琐的方法来实现反向数据传递。尽管如此，但这种需要显式声明的方法更有助于人们理解程序的运作方式。

如果你在这时尝试在搜索框输入或勾选复选框，React 不会产生任何响应。这是正常的，因为我们之前已经将 `input` 的值设置为了从 `FilterableProductTable` 的 `state` 传递而来的固定值。

让我们重新梳理一下需要实现的功能：每当用户改变表单的值，我们需要改变 state 来反映用户的当前输入。由于 state 只能由拥有它们的组件进行更改，`FilterableProductTable` 必须将一个能够触发 state 改变的回调函数（callback）传递给 `SearchBar`。我们可以使用输入框的 `onChange` 事件来监视用户输入的变化，并通知 `FilterableProductTable` 传递给 `SearchBar` 的回调函数。然后该回调函数将调用 `setState()`，从而更新应用。

#### 这就是全部了

希望这篇文档能够帮助你建立起构建 React 组件和应用的一般概念。尽管你可能需要编写更多的代码，但是别忘了：比起写，代码更多地是给人看的。我们一起构建的这个模块化示例应用的代码就很易于阅读。当你开始构建更大的组件库时，你会意识到这种代码模块化和清晰度的重要性。并且随着代码重用程度的加深，你的代码行数也会显著地减少。:)

```js
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);

```

## 高级指引

### 无障碍

#### 语义化的 HTML

有时，语义化的 HTML 会被破坏。比如当在 JSX 中使用 `<div>` 元素来实现 React 代码功能的时候，又或是在使用列表（`<ol>`， `<ul>` 和 `<dl>`）和 HTML `<table>` 时。 在这种情况下，我们应该使用 [React Fragments](https://react.docschina.org/docs/fragments.html) 来组合各个组件。

举个例子，

```js
import React, { Fragment } from 'react';
function ListItem({ item }) {
  return (
    <Fragment>      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}
```

和其他的元素一样，你可以把一系列的对象映射到一个 fragment 的数组中。

```js
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Fragments should also have a `key` prop when mapping collections
        <Fragment key={item.id}>          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>      ))}
    </dl>
  );
}
```

当你不需要在 fragment 标签中添加任何 prop 且你的工具支持的时候，你可以使用 [短语法](https://react.docschina.org/docs/fragments.html#short-syntax)：

```js
function ListItem({ item }) {
  return (
    <>      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>  );
}
```

更多信息请参见 [Fragments 文档](https://react.docschina.org/docs/fragments.html)。

#### 焦点

我们的 React 应用在运行时会持续更改 HTML DOM，有时这将会导致键盘焦点的丢失或者是被设置到了意料之外的元素上。为了修复这类问题，我们需要以编程的方式让键盘聚焦到正确的方向上。比方说，在一个弹窗被关闭的时候，重新设置键盘焦点到弹窗的打开按钮上。

MDN Web 文档关注了这个问题并向我们解释了可以如何搭建[可用键盘导航的 JavaScript 部件](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)。

我们可以用 [DOM 元素的 Refs](https://react.docschina.org/docs/refs-and-the-dom.html) 在 React 中设置焦点。

用以上技术，我们先在一个 class 组件的 JSX 中创建一个元素的 ref：

```js
import React from 'react';
class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // 创造一个 textInput DOM 元素的 ref
      // React.createRef() 调用后返回一个容器,该容器可以存储被ref标识的节点
      this.textInput = React.createRef();
    }
    focus() {
        // 使用原始的 DOM API 显式地聚焦在 text input 上
        // 注意：我们通过访问 “current” 来获得 DOM 节点
        this.textInput.current.focus();
      }
    render() {
    // 使用 `ref` 回调函数以在实例的一个变量中存储文本输入 DOM 元素
    //（比如，this.textInput）。
      return (
        <input
          type="text"
          ref={this.textInput}
        />
      );
    }
  }
  export default CustomTextInput;
```

然后我们就可以在需要时于其他地方把焦点设置在这个组件上：

```js
focus() {
  // 使用原始的 DOM API 显式地聚焦在 text input 上
  // 注意：我们通过访问 “current” 来获得 DOM 节点
  this.textInput.current.focus();
}
```

有时，父组件需要把焦点设置在其子组件的一个元素上。我们可以通过在子组件上设置一个特殊的 prop 来[对父组件暴露 DOM refs](https://react.docschina.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components) 从而把父组件的 ref 传向子节点的 DOM 节点。

```js
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />    </div>
  );
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();  }
  render() {
    return (
      <CustomTextInput inputRef={this.inputElement} />    );
  }
}

// 现在你就可以在需要时设置焦点了
this.inputElement.current.focus();
```

当使用 HOC 来扩展组件时，我们建议使用 React 的 `forwardRef` 函数来向被包裹的组件[转发 ref](https://react.docschina.org/docs/forwarding-refs.html)。如果第三方的 HOC 不支持转发 ref，上面的方法仍可以作为一种备选方案。

[react-aria-modal](https://github.com/davidtheclark/react-aria-modal) 提供了一个很好的焦点管理的例子。 这是一个少有的完全无障碍的模态窗口的例子。它不仅仅把初始焦点设置在了取消按钮上（防止键盘用户意外激活成功操作）和把键盘焦点固定在了窗口之内， 关闭窗口时它也会把键盘焦点重置到打开窗口的那一个元素上。

> 注意:
>
> 虽然这是一个非常重要的无障碍辅助功能，但它也是一种应该谨慎使用的技术。 我们应该在受到干扰时使用它来修复键盘焦点，而不是试图预测用户想要如何使用应用程序。



#### 鼠标和指针事件

确保任何可以使用鼠标和指针完成的功能也可以只通过键盘完成。只依靠指针会产生很多使键盘用户无法使用你的应用的情况。

为了说明这一点，让我们看一下由点击事件引起的破坏无障碍访问的典型示例：外部点击模式，用户可以通过点击元素以外的地方来关闭已打开的弹出框。

![一个切换按钮可以打开一个弹窗，这个弹窗使用了外部点击模式，此图用一个鼠标指针展示了关闭操作是可行的。](https://react.docschina.org/5523b05b22210c5a2fa0bd1f01339cb3/outerclick-with-mouse.gif)

通常实现这个功能的方法是在 `window` 对象中附上一个 `click` 事件以关闭弹窗：

```js


class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandler}>Select an option</button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

```

当用户使用指针设备，比如鼠标时，这样做没有问题。但是当只使用键盘时，因为 window 对象不会接受到 click 事件，用户将无法使用 tab 切换到下一个元素。这样会导致用户无法使用你应用中的一些内容，导致不完整的用户体验。

一个通过按钮打开的使用了外部点击模式的弹窗列表。用键盘操作时，我们可以看到弹窗没有在失去焦点时被关闭，遮挡了屏幕上的其他元素。
使用正确的事件触发器，比如 onBlur 和 onFocus，同样可以达成这项功能：

```js

class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  // 我们在下一个时间点使用 setTimeout 关闭弹窗。
  // 这是必要的，因为失去焦点事件会在新的焦点事件前被触发，
  // 我们需要通过这个步骤确认这个元素的一个子节点
  // 是否得到了焦点。
  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  // 如果一个子节点获得了焦点，不要关闭弹窗。
  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    // React 通过把失去焦点和获得焦点事件传输给父节点
    // 来帮助我们。
    return (
      <div onBlur={this.onBlurHandler}
           onFocus={this.onFocusHandler}>
        <button onClick={this.onClickHandler}
                aria-haspopup="true"
                aria-expanded={this.state.isOpen}>
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}
```



以上代码使得键盘和鼠标用户都可以使用我们的功能。请注意我们添加了 aria-* props 以服务屏幕朗读器用户。作为一个简单的例子，我们没有实现使用方向键来与弹窗互动。一个针对鼠标和键盘用户都正确关闭的弹窗。
这只是众多只依赖于鼠标和指针的程序破坏键盘用户的例子之一。始终使用键盘测试会让你迅速发现这些问题，你可以使用适用于键盘的事件处理器来修复这些问题。当用户使用指针设备，比如鼠标时，这样做没有问题。但是当只使用键盘时，因为 `window` 对象不会接受到 `click` 事件，用户将无法使用 tab 切换到下一个元素。这样会导致用户无法使用你应用中的一些内容，导致不完整的用户体验。

![一个通过按钮打开的使用了外部点击模式的弹窗列表。用键盘操作时，我们可以看到弹窗没有在失去焦点时被关闭，遮挡了屏幕上的其他元素。](https://react.docschina.org/eca0ca825c8c5e2aa609cee72ef47e27/outerclick-with-keyboard.gif)

使用正确的事件触发器，比如 `onBlur` 和 `onFocus`，同样可以达成这项功能：

```js
class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  // 我们在下一个时间点使用 setTimeout 关闭弹窗。  // 这是必要的，因为失去焦点事件会在新的焦点事件前被触发，  // 我们需要通过这个步骤确认这个元素的一个子节点  // 是否得到了焦点。  onBlurHandler() {    this.timeOutId = setTimeout(() => {      this.setState({        isOpen: false      });    });  }
  // 如果一个子节点获得了焦点，不要关闭弹窗。  onFocusHandler() {    clearTimeout(this.timeOutId);  }
  render() {
    // React 通过把失去焦点和获得焦点事件传输给父节点    // 来帮助我们。    return (
      <div onBlur={this.onBlurHandler}           onFocus={this.onFocusHandler}>        <button onClick={this.onClickHandler}
                aria-haspopup="true"
                aria-expanded={this.state.isOpen}>
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}
```

以上代码使得键盘和鼠标用户都可以使用我们的功能。请注意我们添加了 `aria-*` props 以服务屏幕朗读器用户。作为一个简单的例子，我们没有实现使用`方向键`来与弹窗互动。

![一个针对鼠标和键盘用户都正确关闭的弹窗。](https://react.docschina.org/28ce2067489843caf05fe7ce22494542/blur-popover-close.gif)

这只是众多只依赖于鼠标和指针的程序破坏键盘用户的例子之一。始终使用键盘测试会让你迅速发现这些问题，你可以使用适用于键盘的事件处理器来修复这些问题。

#### 键盘

最最简单也是最最重要的检测是确保你的整个网站都可以被只使用键盘的用户使用和访问。你可以通过如下步骤进行检测：

1. 断开鼠标
2. 使用 `Tab` 和 `Shift+Tab` 来浏览。
3. 使用 `Enter` 来激活元素。
4. 当需要时，使用键盘上的方向键来和某些元素互动，比如菜单和下拉选项。

### 

### Fragments

React 中的一个常见模式是一个组件返回多个元素。**Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点**。

```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

还有一种新的[短语法](https://react.docschina.org/docs/fragments.html#short-syntax)可用于声明它们。

#### 动机

一种常见模式是**组件返回一个子元素列表**。以此 React 代码片段为例：

```js
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```

`<Columns />` 需要返回多个 `<td>` 元素以使渲染的 HTML 有效。如果在 `<Columns />` 的 `render()` 中使用了父 div，则生成的 HTML 将无效。

```js
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```

得到一个 `<Table />` 输出：

```js
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

Fragments 解决了这个问题。

#### 用法

```js
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>        <td>Hello</td>
        <td>World</td>
      </React.Fragment>    );
  }
}
```

这样可以正确的输出 `<Table />`：

```js
<table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table>
```

#### 短语法

你可以使用一种新的，且更简短的语法来声明 Fragments。它看起来像空标签：

```js
class Columns extends React.Component {
  render() {
    return (
      <>        <td>Hello</td>
        <td>World</td>
      </>    );
  }
}
```

你可以像使用任何其他元素一样使用 `<> </>`，除了它不支持 key 或属性。

#### 带 key 的 Fragments

使用显式 `<React.Fragment>` 语法声明的片段可能具有 key。一个使用场景是将一个集合映射到一个 Fragments 数组 - 举个例子，创建一个描述列表：

```js
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // 没有`key`，React 会发出一个关键警告
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

`key` 是唯一可以传递给 `Fragment` 的属性。未来我们可能会添加对其他属性的支持，例如事件。

#### 在线 Demo

你可以在 [CodePen](https://codepen.io/reactjs/pen/VrEbjE?editors=1000) 中尝试这个新的 JSX Fragment 语法。

### 代码分割

#### `import()`

在你的应用中引入代码分割的最佳方式是通过动态 `import()` 语法。

**使用之前：**

```js
import { add } from './math';

console.log(add(16, 26));
```

**使用之后：**

```js
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

#### `React.lazy`

> 注意:
>
> `React.lazy` 和 Suspense 技术还不支持服务端渲染。如果你想要在使用服务端渲染的应用中使用，我们推荐 [Loadable Components](https://github.com/gregberge/loadable-components) 这个库。它有一个很棒的[服务端渲染打包指南](https://loadable-components.com/docs/server-side-rendering/)。

`React.lazy` 函数能让你像渲染常规组件一样处理动态引入（的组件）。

**使用之前：**

```js
import OtherComponent from './OtherComponent';
```

**使用之后：**

```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

此代码将会在组件首次渲染时，自动导入包含 `OtherComponent` 组件的包。

`React.lazy` 接受一个函数，这个函数需要动态调用 `import()`。它必须返回一个 `Promise`，该 Promise 需要 resolve 一个 `defalut` export 的 React 组件。

然后应在 `Suspense` 组件中渲染 lazy 组件，如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）。

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

`fallback` 属性接受任何在组件加载过程中你想展示的 React 元素。你可以将 `Suspense` 组件置于懒加载组件之上的任何位置。你甚至可以用一个 `Suspense` 组件包裹多个懒加载组件。

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}
```

#### 异常捕获边界（Error boundaries）

如果模块加载失败（如网络问题），它会触发一个错误。你可以通过[异常捕获边界（Error boundaries）](https://react.docschina.org/docs/error-boundaries.html)技术来处理这些情况，以显示良好的用户体验并管理恢复事宜。

```js
import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const MyComponent = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);
```

#### 基于路由的代码分割

决定在哪引入代码分割需要一些技巧。你需要确保选择的位置能够均匀地分割代码包而不会影响用户体验。

一个不错的选择是从路由开始。大多数网络用户习惯于页面之间能有个加载切换过程。你也可以选择重新渲染整个页面，这样您的用户就不必在渲染的同时再和页面上的其他元素进行交互。

这里是一个例子，展示如何在你的应用中使用 `React.lazy` 和 [React Router](https://react-router.docschina.org/) 这类的第三方库，来配置基于路由的代码分割。

```js
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
// 引入React Router库
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WelcomeDialog from "./WelcomeDialog";
import App from "./App";
import CustomTextInput from './input/CustomTextInput'
import OuterClickExample from './input/OuterClickExample'
import BlurExample from './input/BlurExample'
// import SignUpDialog from "./SignUpDialog";
// import FilterableProductTable from "./search/FilterableProductTable";
// 懒加载 导致页面闪烁
const SignUpDialog = React.lazy(() => import('./SignUpDialog'))
// const FilterableProductTable = React.lazy(() => import('./search/FilterableProductTable'))
// 简写React.lazy
const FilterableProductTable = lazy(() => import('./search/FilterableProductTable'))
const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
ReactDOM.render(
    <div>
        <Router>
            {/* 懒加载容器  fallback可以放任何语法等同于jsx*/}
            <Suspense fallback={<div>Loading...</div>}>
                {/* Switch 只加载一个页面 */}
                <Switch>
                    {/* 路径匹配精准 exact
                    为真时，仅当路径与位置匹配时才匹配。路径名。
                    如果不加 不会精准匹配 */}
                    {/* http://localhost:3000/ */}
                    <Route exact path='/' component={WelcomeDialog} />
                    {/* http://localhost:3000/dialog */}
                    <Route path='/dialog' component={App} />
                </Switch>
                {/* <WelcomeDialog />
                <App /> */}
                <OuterClickExample />
                <BlurExample />
                <SignUpDialog />
                <FilterableProductTable products={PRODUCTS} /></Suspense>
            <CustomTextInput />

        </Router>

    </div>,
    document.getElementById('root')
)
```

#### 命名导出（Named Exports）

`React.lazy` 目前只支持默认导出（default exports）。如果你想被引入的模块使用命名导出（named exports），你可以创建一个中间模块，来重新导出为默认模块。这能保证 tree shaking 不会出错，并且不必引入不需要的组件。

```js
// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;
// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";
// MyApp.js
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));
```

### React-Router

[详情参考Router-Router官方文档](http://react-guide.github.io/react-router-cn/docs/guides/basics/RouteMatching.html)

安装
yarn add react-router-dom
或者
npm install react-router-dom
在src/pages中创建两个文件

编辑src中的 App.js
```js
import React from 'react';
import Home from './pages/Home'
import Mine from './pages/Mine'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/home' component={Home}></Route>
        <Route path='/mine' component={Mine} ></Route>
      </Router>
    </div>
  );
}

export default App;
```
#### react 的 BrowserRouter 和 HashRouter 理解
BrowserRouter h5新特性 ： 上线需要做重定向处理
http://127.0.0.1:3000/article/num1
HashRouter 锚点链接：
http://127.0.0.1:3000/#/article/num1（不一定是这样，但#是少不了的）

#### 路径匹配精准 exact
为真时，仅当路径与位置匹配时才匹配。路径名。

如果不加 不会精准匹配

![](https://img-blog.csdnimg.cn/20200204181900599.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTc3OTcxOA==,size_16,color_FFFFFF,t_70)

```js
import React from 'react';
import Home from './pages/Home'
import Mine from './pages/Mine'
import Ucenter from './pages/Ucr'
import {
  HashRouter  as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <ul>
        <li><Link to='/home'>Home页面</Link></li>
        <li><Link to='/mine'>Mine页面</Link></li>
        <li><Link to='/mine/ucenter'>ucenter页面</Link></li>
      </ul>
        <Route path='/home' component={Home}></Route>
        <Route exact path='/mine' component={Mine} ></Route>
        <Route exact path='/mine/ucenter' component={Ucenter}></Route>
      </Router>
    </div>
  );
}

export default App;
```

执行结果：

![](https://img-blog.csdnimg.cn/20200204182016272.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTc3OTcxOA==,size_16,color_FFFFFF,t_70)


#### 更加精准匹配 strict={true}
```js
// 示例
// 浏览器访问 
// http://localhost:3000/home 和http://localhost:3000/home/ 是两个路径
<Router>
      <ul>
        <li><Link to='/home'>Home页面</Link></li>
        <li><Link to='/mine'>Mine页面</Link></li>
        <li><Link to='/mine/ucenter'>ucenter页面</Link></li>
      </ul>
        <Route strict={true} path='/home' component={Home}></Route>
        <Route exact path='/mine' component={Mine} ></Route>
        <Route exact path='/mine/ucenter' component={Ucenter}></Route>
      </Router>
```

#### 设置404页面

#### Switch 只加载一个页面
```js
<Router>
      <ul>
        <li><Link to='/home'>Home页面</Link></li>
        <li><Link to='/mine'>Mine页面</Link></li>
        <li><Link to='/mine/ucenter'>ucenter页面</Link></li>
      </ul>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route exact path='/mine' component={Mine} ></Route>
          <Route exact path='/mine/ucenter' component={Ucenter}></Route>
          <Route component={NotFound} ></Route> // 这里是设置404页面
        </Switch>
      </Router>
```
#### 页面跳转 Link
```js
import React from 'react';
import Home from './pages/Home'
import Mine from './pages/Mine'
import {
  HashRouter  as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <ul>
        <li><Link to='/home'>Home页面</Link></li>
        <li><Link to='/mine'>Mine页面</Link></li>
      </ul>
        <Route path='/home' component={Home}></Route>
        <Route path='/mine' component={Mine} ></Route>
      </Router>
    </div>
  );
}
export default App;
```
#### NavLink 选中添加样式

一个特殊版本的，它将在匹配当前URL时向呈现的元素添加样式属性
activeClassName: 选中的class名
activeStyle: 选中的样式

```js
<ul>
   <li><NavLink activeClassName="selected" activeStyle={{color: 'red'}} to='/home'>Home页面</NavLink></li>
    <li><NavLink to='/mine'>Mine页面</NavLink></li>
    <li><NavLink to='/mine/ucenter'>ucenter页面</NavLink></li>
  </ul>
```
执行后

![](https://img-blog.csdnimg.cn/20200205141611133.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTc3OTcxOA==,size_16,color_FFFFFF,t_70)


#### 隐形传递参数
```js
<Link
  to={{
    pathname: "/home",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true, flag:'测试测试' }  // 隐藏属性 可以传递隐蔽的东西
  }}
/>
```

#### ![](https://img-blog.csdnimg.cn/20200205150916624.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTc3OTcxOA==,size_16,color_FFFFFF,t_70)参数接收

```js
<Router>
    <Switch>
    	//必传
      <Route exact path='/mine/ucenter/:id' component={Ucenter}></Route> 
      // 加问号可传可不传
      <Route exact path='/mine/ucenter/:id?' component={Ucenter}></Route> 
    </Switch>
</Router>
```
![](https://img-blog.csdnimg.cn/20200205143252434.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTc3OTcxOA==,size_16,color_FFFFFF,t_70)

#### 传参数

```js
//http://localhost:3000/#/mine/ucenter/10
//获取 /mine/ucenter/10/weixi
//接收参数
constructor(porps){
    super(porps)
    //SignUpDialog.js:9 Uncaught TypeError: Cannot read property 'params' of undefined
     console.log(porps.match.params.id)
 }
```
![](https://img-blog.csdnimg.cn/20200205143252434.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTc3OTcxOA==,size_16,color_FFFFFF,t_70)

获取 ?name=11212&age=12 值

```js
constructor(porps){
     super(porps)
     //方法一
     const params = new URLSearchParams(porps.location.search)
     console.log(params.get('name'))
     // 方法二
    // const val = querystring.parse(porps.location.search)
    // console.log(val.name)
 }
```
#### 重定向 Redirect

```js
// 访问/hellow 重定向到 /mine页面
<Router>
  <Redirect form="/hellow" to="/mine" />
</Router>
```
#### 页面跳转

```js
import React, { Component } from 'react'
const Mine = (porps) => {
    const clockebacl = () => {
        console.log(porps)
        porps.history.push('/home')  //上一次页面存在
        porps.history.replace('/home') // 上一次页面不存在
    }
    return (
        <div>
            <p>Mine页面</p>
            <div onClick={ clockebacl }>回到页面</div>
        </div>
    )
}
export default Mine
```
####如果路由被管理的情况下
```js
import MineDemo from './MineDemo'
import { withRouter } from 'react-router-dom'
class Mine extends React.Component{
    constructor(props){
        super(props)
    }
    clockebacl() {
        console.log(this.props)
        // porps.history.push('/home')  //上一次页面存在
        // this.props.history.replace('/home') // 上一次页面不存在
    }
    render() {
        return (
            <div>
                <p>Mine页面</p>
                <div onClick={ this.clockebacl.bind(this) }>回到页面</div>
                <MineDemo />
            </div>
        )
    }
}
export default Mine
```
#### 如果路由没有被管理

```js
import React, { Component } from 'react'
import { withRouter } from "react-router-dom"; // 不调取这个this.props为空对象
class MineDemo extends Component {
    constructor(props) {
        super(props);
        console.log(this)
    }
    sssss() {
        console.log(this.props)
        this.props.history.push('/home')
    }

    render() {
        return (
            <div>
                跳转页面
                <div onClick={ this.sssss.bind(this) }>回到home</div>
            </div>
        )
    }
}

export default withRouter(MineDemo)
```
#### 如果在填充数据时要跳转页面提示用户 Prompt

```js
import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'
export default class Home extends Component {
    constructor(porps){
        super(porps)
        console.log(porps);
        this.state = {
            name:''
        }
    }
    chinfgh(e) {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <div>
                <p>home页面</p>
                <Prompt 
                    when = { !!this.state.name }
                    message = { '确定要离开吗？'}
                />
                <input type="text" value={this.state.name} onChange={this.chinfgh.bind(this)}/>
            </div>
        )
    }
}
```
#### 路由嵌套

创建三个文件
Book.jsx
JavaBook.jsx
WebBook.jsx

#### 内容

```js
// WebBook.jsx
 import React, { Component } from 'react'

export default class WebBook extends Component {
    render() {
        return (
            <div>
                WebBook
            </div>
        )
    }
}
```


```js
 // JavaBook.jsx
import React, { Component } from 'react'
export default class JavaBook extends Component {
    render() {
        return (
            <div>
                javaBook
            </div>
        )
    }
}
```



```js
// WBook.jsx
import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        return (
            <div>
                Book{ this.props.children}
            </div>
        )
    }
}
```
```js
// App.jsx
import React from 'react';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Book from './pages/Book'
import JavaBook from './pages/JavaBook'
import WebBook from './pages/WebBook'
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Book>
              <Route path='/book/javab' component={ JavaBook }></Route>
              <Route path='/book/webb' component={ WebBook }></Route>
            </Book>
          </Switch>
        </Router>
    </div>
  );
}
export default App;
```
### Context

Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但此种用法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。**Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props**。

- [何时使用 Context](https://zh-hans.reactjs.org/docs/context.html#when-to-use-context)
- [使用 Context 之前的考虑](https://zh-hans.reactjs.org/docs/context.html#before-you-use-context)
- [API](https://zh-hans.reactjs.org/docs/context.html#api)
  - [React.createContext](https://zh-hans.reactjs.org/docs/context.html#reactcreatecontext)
  - [Context.Provider](https://zh-hans.reactjs.org/docs/context.html#contextprovider)
  - [Class.contextType](https://zh-hans.reactjs.org/docs/context.html#classcontexttype)
  - [Context.Consumer](https://zh-hans.reactjs.org/docs/context.html#contextconsumer)
  - [Context.displayName](https://zh-hans.reactjs.org/docs/context.html#contextdisplayname)
- [示例](https://zh-hans.reactjs.org/docs/context.html#examples)
  - [动态 Context](https://zh-hans.reactjs.org/docs/context.html#dynamic-context)
  - [在嵌套组件中更新 Context](https://zh-hans.reactjs.org/docs/context.html#updating-context-from-a-nested-component)
  - [使用多个 Context](https://zh-hans.reactjs.org/docs/context.html#consuming-multiple-contexts)
- [注意事项](https://zh-hans.reactjs.org/docs/context.html#caveats)
- [废弃的 API](https://zh-hans.reactjs.org/docs/context.html#legacy-api)

#### 何时使用 Context

Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。举个例子，在下面的代码中，我们通过一个 “theme” 属性手动调整一个按钮组件的样式：

```js
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，  // 因为必须将这个值层层传递所有组件。  return (    <div>
      <ThemedButton theme={props.theme} />
    </div>  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
```

使用 context, 我们可以避免通过中间元素传递 props：

```js
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。// 为当前的 theme 创建一个 context（“light”为默认值）。const ThemeContext = React.createContext('light');class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。    // 无论多深，任何组件都能读取这个值。    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。    return (
      <ThemeContext.Provider value="dark">        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。function Toolbar() {  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。  // React 会往上找到最近的 theme Provider，然后使用它的值。  // 在这个例子中，当前的 theme 值为 “dark”。  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;  }
}
```

#### 使用 Context 之前的考虑

Context 主要应用场景在于*很多*不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。

**如果你只是想避免层层传递一些属性，[组件组合（component composition）](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html)有时候是一个比 context 更好的解决方案。**

比如，考虑这样一个 `Page` 组件，它层层向下传递 `user` 和 `avatarSize` 属性，从而深度嵌套的 `Link` 和 `Avatar` 组件可以读取到这些属性：

```js
<Page user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```

如果在最后只有 `Avatar` 组件真的需要 `user` 和 `avatarSize`，那么层层传递这两个 props 就显得非常冗余。而且一旦 `Avatar` 组件需要更多从来自顶层组件的 props，你还得在中间层级一个一个加上去，这将会变得非常麻烦。

一种**无需 context** 的解决方案是[将 `Avatar` 组件自身传递下去](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html#containment)，因而中间组件无需知道 `user` 或者 `avatarSize` 等 props：

```js
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// 现在，我们有这样的组件：
<Page user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<PageLayout userLink={...} />
// ... 渲染出 ...
<NavigationBar userLink={...} />
// ... 渲染出 ...
{props.userLink}
```

这种变化下，只有最顶部的 Page 组件需要知道 `Link` 和 `Avatar` 组件是如何使用 `user` 和 `avatarSize` 的。

这种对组件的*控制反转*减少了在你的应用中要传递的 props 数量，这在很多场景下会使得你的代码更加干净，使你对根组件有更多的把控。但是，这并不适用于每一个场景：这种将逻辑提升到组件树的更高层次来处理，会使得这些高层组件变得更复杂，并且会强行将低层组件适应这样的形式，这可能不会是你想要的。

而且你的组件并不限制于接收单个子组件。你可能会传递多个子组件，甚至会为这些子组件（children）封装多个单独的“接口（slots）”，[正如这里的文档所列举的](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html#containment)

```js
function Page(props) {
  const user = props.user;
  const content = <Feed user={user} />;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  return (
    <PageLayout
      topBar={topBar}
      content={content}
    />
  );
}
```

这种模式足够覆盖很多场景了，在这些场景下你需要将子组件和直接关联的父组件解耦。如果子组件需要在渲染前和父组件进行一些交流，你可以进一步使用 [render props](https://zh-hans.reactjs.org/docs/render-props.html)。

但是，有的时候在组件树中很多不同层级的组件需要访问同样的一批数据。Context 能让你将这些数据向组件树下所有的组件进行“广播”，所有的组件都能访问到这些数据，也能访问到后续的数据更新。使用 context 的通用的场景包括管理当前的 locale，theme，或者一些缓存数据，这比替代方案要简单的多。

#### API

##### `React.createContext`

```
const MyContext = React.createContext(defaultValue);
```

创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 `Provider` 中读取到当前的 context 值。

**只有**当组件所处的树中没有匹配到 Provider 时，其 `defaultValue` 参数才会生效。此默认值有助于在不使用 Provider 包装组件的情况下对组件进行测试。注意：将 `undefined` 传递给 Provider 的 value 时，消费组件的 `defaultValue` 不会生效。

##### `Context.Provider`

```
<MyContext.Provider value={/* 某个值 */}>
```

每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。

Provider 接收一个 `value` 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。

当 Provider 的 `value` 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 consumer 组件都不受制于 `shouldComponentUpdate` 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

通过新旧值检测来确定变化，使用了与 [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description) 相同的算法。

> 注意
>
> 当传递对象给 `value` 时，检测变化的方式会导致一些问题：详见[注意事项](https://zh-hans.reactjs.org/docs/context.html#caveats)。

##### `Class.contextType`

```js
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* 基于 MyContext 组件的值进行渲染 */
  }
}
MyClass.contextType = MyContext;
```

挂载在 class 上的 `contextType` 属性会被重赋值为一个由 [`React.createContext()`](https://zh-hans.reactjs.org/docs/context.html#reactcreatecontext) 创建的 Context 对象。此属性能让你使用 `this.context` 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。

> 注意：
>
> 你只通过该 API 订阅单一 context。如果你想订阅多个，阅读[使用多个 Context](https://zh-hans.reactjs.org/docs/context.html#consuming-multiple-contexts) 章节
>
> 如果你正在使用实验性的 [public class fields 语法](https://babeljs.io/docs/plugins/transform-class-properties/)，你可以使用 `static` 这个类属性来初始化你的 `contextType`。

```js
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* 基于这个值进行渲染工作 */
  }
}
```

##### `Context.Consumer`

```js
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```

一个 React 组件可以订阅 context 的变更，此组件可以让你在[函数式组件](https://zh-hans.reactjs.org/docs/components-and-props.html#function-and-class-components)中可以订阅 context。

这种方法需要一个[函数作为子元素（function as a child）](https://zh-hans.reactjs.org/docs/render-props.html#using-props-other-than-render)。这个函数接收当前的 context 值，并返回一个 React 节点。传递给函数的 `value` 值等价于组件树上方离这个 context 最近的 Provider 提供的 `value` 值。如果没有对应的 Provider，`value` 参数等同于传递给 `createContext()` 的 `defaultValue`。

> 注意
>
> 想要了解更多关于 “函数作为子元素（function as a child）” 模式，详见 [render props](https://zh-hans.reactjs.org/docs/render-props.html)。

##### `Context.displayName`

context 对象接受一个名为 `displayName` 的 property，类型为字符串。React DevTools 使用该字符串来确定 context 要显示的内容。

示例，下述组件在 DevTools 中将显示为 MyDisplayName：

```js
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';
<MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
<MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中
```

##### 示例

#### 动态 Context

一个更加复杂的方案是对上面的 theme 例子使用动态值（dynamic values）：

**theme-context.js**

```
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(  themes.dark // 默认值);
```

**themed-button.js**

```js
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;
export default ThemedButton;
```



**app.js**

```js
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

// 一个使用 ThemedButton 的中间组件
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，    // 而外部的组件使用默认的 theme 值    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}

ReactDOM.render(<App />, document.root);
```

#### 在嵌套组件中更新 Context

从一个在组件树中嵌套很深的组件中更新 context 是很有必要的。在这种场景下，你可以通过 context 传递一个函数，使得 consumers 组件更新 context：

**theme-context.js**

```js
// 确保传递给 createContext 的默认值数据结构是调用的组件（consumers）所能匹配的！
export const ThemeContext = React.createContext({
  theme: themes.dark,  toggleTheme: () => {},});
```

**theme-toggler-button.js**

```js
import {ThemeContext} from './theme-context';

function ThemeTogglerButton() {
  // Theme Toggler 按钮不仅仅只获取 theme 值，  // 它也从 context 中获取到一个 toggleTheme 函数  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
```

**app.js**

```
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State 也包含了更新函数，因此它会被传递进 context provider。    this.state = {      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };  }

  render() {
    // 整个 state 都被传递进 provider    return (
      <ThemeContext.Provider value={this.state}>        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

ReactDOM.render(<App />, document.root);
```

#### 消费多个 Context

为了确保 context 快速进行重渲染，React 需要使每一个 consumers 组件的 context 在组件树中成为一个单独的节点。

```js
// Theme context，默认的 theme 是 “light” 值
const ThemeContext = React.createContext('light');

// 用户登录 context
const UserContext = React.createContext({
  name: 'Guest',
});

class App extends React.Component {
  render() {
    const {signedInUser, theme} = this.props;

    // 提供初始 context 值的 App 组件
    return (
      <ThemeContext.Provider value={theme}>        <UserContext.Provider value={signedInUser}>          <Layout />
        </UserContext.Provider>      </ThemeContext.Provider>    );
  }
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

// 一个组件可能会消费多个 context
function Content() {
  return (
    <ThemeContext.Consumer>      {theme => (        <UserContext.Consumer>          {user => (            <ProfilePage user={user} theme={theme} />          )}        </UserContext.Consumer>      )}    </ThemeContext.Consumer>  );
}
```

如果两个或者更多的 context 值经常被一起使用，那你可能要考虑一下另外创建你自己的渲染组件，以提供这些值。

#### 注意事项

因为 context 会使用参考标识（reference identity）来决定何时进行渲染，这里可能会有一些陷阱，当 provider 的父组件进行重渲染时，可能会在 consumers 组件中触发意外的渲染。举个例子，当每一次 Provider 重渲染时，以下的代码会重渲染所有下面的 consumers 组件，因为 `value` 属性总是被赋值为新的对象：



```js
class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={{something: 'something'}}>        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```

为了防止这种情况，将 **value 状态提升到父节点的 state 里**：

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},    };
  }

  render() {
    return (
      <MyContext.Provider value={this.state.value}>        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```

### 错误边界

过去，组件内的 JavaScript 错误会导致 React 的内部状态被破坏，并且在下一次渲染时 [产生](https://github.com/facebook/react/issues/4026) [可能无法追踪的](https://github.com/facebook/react/issues/6895) [错误](https://github.com/facebook/react/issues/8579)。这些错误基本上是由较早的其他代码（非 React 组件代码）错误引起的，但 React 并没有提供一种在组件中优雅处理这些错误的方式，也无法从错误中恢复。

#### 错误边界（Error Boundaries）

部分 UI 的 JavaScript 错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。

错误边界是一种 React 组件，这种组件**可以捕获发生在其子组件树任何位置的 JavaScript 错误，并打印这些错误，同时展示降级 UI**，而并不会渲染那些发生崩溃的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。

> 注意
>
> 错误边界**无法**捕获以下场景中产生的错误：
>
> - 事件处理（[了解更多](https://zh-hans.reactjs.org/docs/error-boundaries.html#how-about-event-handlers)）
> - 异步代码（例如 `setTimeout` 或 `requestAnimationFrame` 回调函数）
> - 服务端渲染
> - 它自身抛出来的错误（并非它的子组件）

如果一个 class 组件中定义了 [`static getDerivedStateFromError()`](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromerror) 或 [`componentDidCatch()`](https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch) 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 `static getDerivedStateFromError()` 渲染备用 UI ，使用 `componentDidCatch()` 打印错误信息。

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {    // 更新 state 使下一次渲染能够显示降级后的 UI    return { hasError: true };  }
  componentDidCatch(error, errorInfo) {    // 你同样可以将错误日志上报给服务器    logErrorToMyService(error, errorInfo);  }
  render() {
    if (this.state.hasError) {      // 你可以自定义降级后的 UI 并渲染      return <h1>Something went wrong.</h1>;    }
    return this.props.children; 
  }
}
```

然后你可以将它作为一个常规组件去使用：

```js
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

**ErrorBoundary包裹组件，产生错误边界**

错误边界的工作方式类似于 JavaScript 的 `catch {}`，不同的地方在于错误边界只针对 React 组件。只有 class 组件才可以成为错误边界组件。大多数情况下, 你只需要声明一次错误边界组件, 并在整个应用中使用它。

注意**错误边界仅可以捕获其子组件的错误**，它无法捕获其自身的错误。如果一个错误边界无法渲染错误信息，则错误会冒泡至最近的上层错误边界，这也类似于 JavaScript 中 catch {} 的工作机制。

#### 在线演示

查看使用 [React 16](https://zh-hans.reactjs.org/blog/2017/09/26/react-v16.0.html) [定义和使用错误边界的例子](https://codepen.io/gaearon/pen/wqvxGa?editors=0010)。

#### 错误边界应该放置在哪？

错误边界的粒度由你来决定，可以将其包装在最顶层的路由组件并为用户展示一个 “Something went wrong” 的错误信息，就像服务端框架经常处理崩溃一样。你也可以将单独的部件包装在错误边界以保护应用其他部分不崩溃。

#### 未捕获错误（Uncaught Errors）的新行为

这一改变具有重要意义，**自 React 16 起，任何未被错误边界捕获的错误将会导致整个 React 组件树被卸载。**

我们对这一决定有过一些争论，但根据我们的经验，把一个错误的 UI 留在那比完全移除它要更糟糕。例如，在类似 Messenger 的产品中，把一个异常的 UI 展示给用户可能会导致用户将信息错发给别人。同样，对于支付类应用而言，显示错误的金额也比不呈现任何内容更糟糕。

此变化意味着当你迁移到 React 16 时，你可能会发现一些已存在你应用中但未曾注意到的崩溃。增加错误边界能够让你在应用发生异常时提供更好的用户体验。

例如，Facebook Messenger 将侧边栏、信息面板、聊天记录以及信息输入框包装在单独的错误边界中。如果其中的某些 UI 组件崩溃，其余部分仍然能够交互。

我们也鼓励使用 JS 错误报告服务（或自行构建），这样你能了解关于生产环境中出现的未捕获异常，并将其修复。

#### 组件栈追踪

在开发环境下，React 16 会把渲染期间发生的所有错误打印到控制台，即使该应用意外的将这些错误掩盖。除了错误信息和 JavaScript 栈外，React 16 还提供了组件栈追踪。现在你可以准确地查看发生在组件树内的错误信息：

[![Error caught by Error Boundary component](https://zh-hans.reactjs.org/static/f1276837b03821b43358d44c14072945/1e088/error-boundaries-stack-trace.png)](https://zh-hans.reactjs.org/static/f1276837b03821b43358d44c14072945/c3a47/error-boundaries-stack-trace.png)

你也可以在组件栈追踪中查看文件名和行号，这一功能在 [Create React App](https://github.com/facebookincubator/create-react-app) 项目中默认开启：

[![Error caught by Error Boundary component with line numbers](https://zh-hans.reactjs.org/static/45611d4fdbd152829b28ae2348d6dcba/1e088/error-boundaries-stack-trace-line-numbers.png)](https://zh-hans.reactjs.org/static/45611d4fdbd152829b28ae2348d6dcba/6dd26/error-boundaries-stack-trace-line-numbers.png)

如果你没有使用 Create React App，可以手动将[该插件](https://www.npmjs.com/package/@babel/plugin-transform-react-jsx-source)添加到你的 Babel 配置中。注意它仅用于开发环境，**在生产环境必须将其禁用** 。

> 注意
>
> 组件名称在栈追踪中的显示依赖于 [`Function.name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) 属性。如果你想要支持尚未提供该功能的旧版浏览器和设备（例如 IE 11），考虑在你的打包（bundled）应用程序中包含一个 `Function.name` 的 polyfill，如 [`function.name-polyfill`](https://github.com/JamesMGreene/Function.name) 。或者，你可以在所有组件上显式设置 [`displayName`](https://zh-hans.reactjs.org/docs/react-component.html#displayname) 属性。

#### 关于 try/catch ？

`try` / `catch` 很棒但它仅能用于命令式代码（imperative code）：

```js
try {
  showButton();
} catch (error) {
  // ...
}
```

然而，React 组件是声明式的并且具体指出 *什么* 需要被渲染：

```js
<Button />
```

错误边界保留了 React 的声明性质，其行为符合你的预期。例如，即使一个错误发生在 `componentDidUpdate` 方法中，并且由某一个深层组件树的 `setState` 引起，其仍然能够冒泡到最近的错误边界。

#### 关于事件处理器

错误边界**无法**捕获事件处理器内部的错误。

React 不需要错误边界来捕获事件处理器中的错误。与 render 方法和生命周期方法不同，事件处理器不会在渲染期间触发。因此，如果它们抛出异常，React 仍然能够知道需要在屏幕上显示什么。

如果你需要在事件处理器内部捕获错误，使用普通的 JavaScript `try` / `catch` 语句：

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {      // 执行操作，如有错误则会抛出    } catch (error) {      this.setState({ error });    }  }

  render() {
    if (this.state.error) {      return <h1>Caught an error.</h1>    }    return <button onClick={this.handleClick}>Click Me</button>  }
}
```

请注意上述例子只是演示了普通的 JavaScript 行为，并没有使用错误边界。

#### 自 React 15 的命名更改

React 15 中有一个支持有限的错误边界方法 `unstable_handleError`。此方法不再起作用，同时自 React 16 beta 发布起你需要在代码中将其修改为 `componentDidCatch`。

### Refs 转发

Ref 转发是一项将 [ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html) 自动地通过组件传递到其一子组件的技巧。对于大多数应用中的组件来说，这通常不是必需的。但其对某些组件，尤其是可重用的组件库是很有用的。最常见的案例如下所述。

#### 转发 refs 到 DOM 组件

考虑这个渲染原生 DOM 元素 `button` 的 `FancyButton` 组件：

```js
function FancyButton(props) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  );
}
```

React 组件隐藏其实现细节，包括其渲染结果。其他使用 `FancyButton` 的组件**通常不需要**获取内部的 DOM 元素 `button` 的 [ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html)。这很好，因为这防止组件过度依赖其他组件的 DOM 结构。

虽然这种封装对类似 `FeedStory` 或 `Comment` 这样的应用级组件是理想的，但其对 `FancyButton` 或 `MyTextInput` 这样的高可复用“叶”组件来说可能是不方便的。这些组件倾向于在整个应用中以一种类似常规 DOM `button` 和 `input` 的方式被使用，并且访问其 DOM 节点对管理焦点，选中或动画来说是不可避免的。

**Ref 转发是一个可选特性，其允许某些组件接收 `ref`，并将其向下传递（换句话说，“转发”它）给子组件。**

在下面的示例中，`FancyButton` 使用 `React.forwardRef` 来获取传递给它的 `ref`，然后转发到它渲染的 DOM `button`：

```js
const FancyButton = React.forwardRef((props, ref) => (  <button ref={ref} className="FancyButton">    {props.children}
  </button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

这样，使用 `FancyButton` 的组件可以获取底层 DOM 节点 `button` 的 ref ，并在必要时访问，就像其直接使用 DOM `button` 一样。

以下是对上述示例发生情况的逐步解释：

1. 我们通过**调用 `React.createRef` 创建了一个 [React ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html) 并将其赋值给 `ref` 变量**。
2. 我们通过指定 `ref` 为 JSX 属性，将其向下传递给 `<FancyButton ref={ref}>`。
3. React 传递 `ref` 给 `forwardRef` 内函数 `(props, ref) => ...`，作为其第二个参数。
4. 我们向下转发该 `ref` 参数到 `<button ref={ref}>`，将其指定为 JSX 属性。
5. 当 ref 挂载完成，**`ref.current` 将指向 `<button>` DOM 节点**。

> 注意
>
> 第二个参数 `ref` 只在使用 `React.forwardRef` 定义组件时存在。常规函数和 class 组件不接收 `ref` 参数，且 props 中也不存在 `ref`。
>
> Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。

#### 组件库维护者的注意事项

**当你开始在组件库中使用 `forwardRef` 时，你应当将其视为一个破坏性更改，并发布库的一个新的主版本。** 这是因为你的库可能会有明显不同的行为（例如 refs 被分配给了谁，以及导出了什么类型），并且这样可能会导致依赖旧行为的应用和其他库崩溃。

出于同样的原因，**当 `React.forwardRef` 存在时有条件地使用它也是不推荐的**：它改变了你的库的行为，并在升级 React 自身时破坏用户的应用。

#### 在高阶组件中转发 refs

这个技巧对[高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html)（也被称为 HOC）特别有用。让我们从一个输出组件 props 到控制台的 HOC 示例开始：

```js
function logProps(WrappedComponent) {  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;    }
  }

  return LogProps;
}
```

“logProps” HOC 透传（pass through）所有 `props` 到其包裹的组件，所以渲染结果将是相同的。例如：我们可以使用该 HOC 记录所有传递到 “fancy button” 组件的 props：

```js
class FancyButton extends React.Component {
  focus() {
    // ...
  }

  // ...
}

// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
export default logProps(FancyButton);
```

下面的示例有一点需要注意：refs 将不会透传下去。这是因为 `ref` 不是 prop 属性。就像 `key` 一样，其被 React 进行了特殊处理。如果你对 HOC 添加 ref，**该 ref 将引用最外层的容器组件，而不是被包裹的组件**。

这意味着用于我们 `FancyButton` 组件的 refs 实际上将被挂载到 `LogProps` 组件：

```js
import FancyButton from './FancyButton';

const ref = React.createRef();
// 我们导入的 FancyButton 组件是高阶组件（HOC）LogProps。
// 尽管渲染结果将是一样的，
// 但我们的 ref 将指向 LogProps 而不是内部的 FancyButton 组件！
// 这意味着我们不能调用例如 ref.current.focus() 这样的方法
<FancyButton
  label="Click Me"
  handleClick={handleClick}
  ref={ref}/>;
```

幸运的是，我们可以使用 `React.forwardRef` API 明确地将 refs 转发到内部的 `FancyButton` 组件。`React.forwardRef` 接受一个渲染函数，其接收 `props` 和 `ref` 参数并返回一个 React 节点。例如：

```js
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;
      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardedRef} {...rest} />;    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
  return React.forwardRef((props, ref) => {    return <LogProps {...props} forwardedRef={ref} />;  });}
```

#### 在 DevTools 中显示自定义名称

`React.forwardRef` 接受一个渲染函数。React DevTools 使用该函数来决定为 ref 转发组件显示的内容。

例如，以下组件将在 DevTools 中显示为 “*ForwardRef*”：

```js
const WrappedComponent = React.forwardRef((props, ref) => {
  return <LogProps {...props} forwardedRef={ref} />;
});
```

如果你命名了渲染函数，DevTools 也将包含其名称（例如 “*ForwardRef(myFunction)*”）：

```js
const WrappedComponent = React.forwardRef(
  function myFunction(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }
);
```

你甚至可以设置函数的 `displayName` 属性来包含被包裹组件的名称：

```js
function logProps(Component) {
  class LogProps extends React.Component {
    // ...
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // 在 DevTools 中为该组件提供一个更有用的显示名。
  // 例如 “ForwardRef(logProps(MyComponent))”
  const name = Component.displayName || Component.name;  forwardRef.displayName = `logProps(${name})`;
  return React.forwardRef(forwardRef);
}
```

### Fragments

React 中的一个常见模式是一个组件返回多个元素。**Fragments 允许将子列表分组，而无需向 DOM 添加额外节点**。

```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

还有一种新的[短语法](https://zh-hans.reactjs.org/docs/fragments.html#short-syntax)可用于声明它们。

#### 动机

一种常见模式是组件返回一个子元素列表。以此 React 代码片段为例：

```js
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```

`<Columns />` 需要返回多个 `<td>` 元素以使渲染的 HTML 有效。如果在 `<Columns />` 的 `render()` 中使用了父 div，则生成的 HTML 将无效。

```js
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```

得到一个 `<Table />` 输出：

```js
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

Fragments 解决了这个问题。

#### 用法

```js
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>        <td>Hello</td>
        <td>World</td>
      </React.Fragment>    );
  }
}
```

这样可以正确的输出 `<Table />`：

```js
<table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table>
```

**Fragment 的引入：**

```js
import React,{Component,Fragment} from 'react'
```
**Fragment 的使用：**

```js
import React,{Fragment} from 'react';

class Item extends React.PureComponent {
    render() {
        return (
            <Fragment>
                <h3>输入框输入值为</h3>
                <input type="text" />
            </Fragment>
        )
    }
}
export default Item;
```

#### 短语法

你可以使用一种新的，且更简短的语法来声明 Fragments。它看起来像空标签：

```js
class Columns extends React.Component {
  render() {
    return (
      <>        <td>Hello</td>
        <td>World</td>
      </>    );
  }
}
```

你可以像使用任何其他元素一样使用 `<> </>`，除了它不支持 key 或属性。

#### 带 key 的 Fragments

使用显式 `<React.Fragment>` 语法声明的片段可能**具有 key**。一个使用场景是将一个集合映射到一个 Fragments 数组 - 举个例子，创建一个描述列表：

```js
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // 没有`key`，React 会发出一个关键警告
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

**`key` 是唯一可以传递给 `Fragment` 的属性**。未来我们可能会添加对其他属性的支持，例如事件。

#### 在线 Demo

可以在 [CodePen](https://codepen.io/reactjs/pen/VrEbjE?editors=1000) 中尝试这个新的 JSX Fragment 语法。

### 高阶组件

高阶组件（HOC）是 React 中用于**复用组件逻辑的一种高级技巧**。HOC 自身不是 React API 的一部分，它是一种**基于 React 的组合特性而形成的设计模式**。

具体而言，**高阶组件是参数为组件，返回值为新组件的函数。**

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

组件是将 props 转换为 UI，而**高阶组件是将组件转换为另一个组件**。

HOC 在 React 的第三方库中很常见，例如 Redux 的 [`connect`](https://github.com/reduxjs/react-redux/blob/master/docs/api/connect.md#connect) 和 Relay 的 [`createFragmentContainer`](https://relay.dev/docs/v10.1.3/fragment-container/#createfragmentcontainer)。

在本文档中，我们将讨论为什么高阶组件有用，以及如何编写自己的 HOC 函数。

#### 使用 HOC 解决横切关注点问题

> **注意**
>
> 我们之前建议使用 mixins 用于解决横切关注点相关的问题。但我们已经意识到 mixins 会产生更多麻烦。[阅读更多](https://zh-hans.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html) 以了解我们为什么要抛弃 mixins 以及如何转换现有组件。

组件是 React 中代码复用的基本单元。但你会发现某些模式并不适合传统组件。

例如，假设有一个 `CommentList` 组件，它订阅外部数据源，用以渲染评论列表：

```js
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // 假设 "DataSource" 是个全局范围内的数据源变量
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // 订阅更改
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // 清除订阅
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // 当数据源更新时，更新组件状态
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
```

稍后，编写了一个用于订阅单个博客帖子的组件，该帖子遵循类似的模式：

```js
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}
```

`CommentList` 和 `BlogPost` 不同 - 它们在 `DataSource` 上调用不同的方法，且渲染不同的结果。但它们的大部分实现都是一样的：

- 在挂载时，向 `DataSource` 添加一个更改侦听器。
- 在侦听器内部，当数据源发生变化时，调用 `setState`。
- 在卸载时，删除侦听器。

你可以想象，在一个大型应用程序中，这种订阅 `DataSource` 和调用 `setState` 的模式将一次又一次地发生。我们**需要一个抽象，允许我们在一个地方定义这个逻辑，并在许多组件之间共享它**。这正是高阶组件擅长的地方。

对于订阅了 `DataSource` 的组件，比如 `CommentList` 和 `BlogPost`，我们可以编写一个创建组件函数。该函数将接受一个子组件作为它的其中一个参数，该子组件将订阅数据作为 prop。让我们调用函数 `withSubscription`：

```js
const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
```

第一个参数是被包装组件。第二个参数通过 `DataSource` 和当前的 props 返回我们需要的数据。

当渲染 `CommentListWithSubscription` 和 `BlogPostWithSubscription` 时， `CommentList` 和 `BlogPost` 将传递一个 `data` prop，其中包含从 `DataSource` 检索到的最新数据：

```js
// 此函数接收一个组件...
function withSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
```

请注意，**HOC 不会修改传入的组件，也不会使用继承来复制其行为**。相反，**HOC 通过将组件*包装*在容器组件中来*组成*新组件。HOC 是纯函数，没有副作用**。

被包装组件接收来自容器组件的所有 prop，同时也接收一个新的用于 render 的 `data` prop。HOC 不需要关心数据的使用方式或原因，而被包装组件也不需要关心数据是怎么来的。

因为** `withSubscription` 是一个普通函数**，你可以根据需要对参数进行增添或者删除。例如，您可能希望使 `data` prop 的名称可配置，以进一步将 HOC 与包装组件隔离开来。或者你可以接受一个配置 `shouldComponentUpdate` 的参数，或者一个配置数据源的参数。因为 HOC 可以控制组件的定义方式，这一切都变得有可能。

与组件一样，`withSubscription` 和包装组件之间的契约完全基于之间传递的 props。这种依赖方式使得替换 HOC 变得容易，只要它们为包装的组件提供相同的 prop 即可。例如你需要改用其他库来获取数据的时候，这一点就很有用。

#### 不要改变原始组件。使用组合。

**不要试图在 HOC 中修改组件原型**（或以其他方式改变它）。

```js
function logProps(InputComponent) {
  InputComponent.prototype.componentDidUpdate = function(prevProps) {
    console.log('Current props: ', this.props);
    console.log('Previous props: ', prevProps);
  };
  // 返回原始的 input 组件，暗示它已经被修改。
  return InputComponent;
}

// 每次调用 logProps 时，增强组件都会有 log 输出。
const EnhancedComponent = logProps(InputComponent);
```

这样做会产生一些不良后果。其一是输入组件再也无法像 HOC 增强之前那样使用了。更严重的是，如果你再用另一个同样会修改 `componentDidUpdate` 的 HOC 增强它，那么前面的 HOC 就会失效！同时，这个 HOC 也无法应用于没有生命周期的函数组件。

修改传入组件的 HOC 是一种糟糕的抽象方式。调用者必须知道他们是如何实现的，以避免与其他 HOC 发生冲突。

**HOC 不应该修改传入组件，而应该使用组合的方式，通过将组件包装在容器组件中实现功能：**

```js
function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }
    render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}
```

该 HOC 与上文中修改传入组件的 HOC 功能相同，同时避免了出现冲突的情况。它同样适用于 class 组件和函数组件。而且因为它是一个纯函数，它可以与其他 HOC 组合，甚至可以与其自身组合。

您可能已经注意到 HOC 与**容器组件模式**之间有相似之处。容器组件担任将高级和低级关注点分离的责任，**由容器管理订阅和状态，并将 prop 传递给处理 UI 的组件**。HOC 使用容器作为其实现的一部分，你可以将 HOC 视为参数化容器组件。

#### 约定：将不相关的 props 传递给被包裹的组件

HOC 为组件添加特性。自身不应该大幅改变约定。HOC 返回的组件与原组件应保持类似的接口。

HOC 应该透传与自身无关的 props。大多数 HOC 都应该包含一个类似于下面的 render 方法：

```js
render() {
  // 过滤掉非此 HOC 额外的 props，且不要进行透传
  const { extraProp, ...passThroughProps } = this.props;

  // 将 props 注入到被包装的组件中。
  // 通常为 state 的值或者实例方法。
  const injectedProp = someStateOrInstanceMethod;

  // 将 props 传递给被包装组件
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}
```

这种约定保证了 HOC 的灵活性以及可复用性。

#### 约定：最大化可组合性

并不是所有的 HOC 都一样。**有时候它仅接受一个参数，也就是被包裹的组件**：

```js
const NavbarWithRouter = withRouter(Navbar);
```

HOC 通常可以接收多个参数。比如在 Relay 中，HOC 额外接收了一个配置对象用于指定组件的数据依赖：

```js
const CommentWithRelay = Relay.createContainer(Comment, config);
```

最常见的 HOC 签名如下：

```js
// React Redux 的 `connect` 函数
const ConnectedComment = connect(commentSelector, commentActions)(CommentList);
```

*刚刚发生了什么？！*如果你把它分开，就会更容易看出发生了什么。

```js
// connect 是一个函数，它的返回值为另外一个函数。
const enhance = connect(commentListSelector, commentListActions);
// 返回值为 HOC，它会返回已经连接 Redux store 的组件
const ConnectedComment = enhance(CommentList);
```

换句话说，`connect` 是一个返回高阶组件的高阶函数！

这种形式可能看起来令人困惑或不必要，但它有一个有用的属性。 像 `connect` 函数返回的单参数 HOC 具有签名 `Component => Component`。 输出类型与输入类型相同的函数很容易组合在一起。

```js
// 而不是这样...
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))

// ... 你可以编写组合工具函数
// compose(f, g, h) 等同于 (...args) => f(g(h(...args)))
const enhance = compose(
  // 这些都是单参数的 HOC
  withRouter,
  connect(commentSelector)
)
const EnhancedComponent = enhance(WrappedComponent)
```

（同样的属性也允许 `connect` 和其他 HOC 承担装饰器的角色，装饰器是一个实验性的 JavaScript 提案。）

许多第三方库都提供了 `compose` 工具函数，包括 lodash （比如 [`lodash.flowRight`](https://lodash.com/docs/#flowRight)）， [Redux](https://redux.js.org/api/compose) 和 [Ramda](https://ramdajs.com/docs/#compose)。

#### 约定：包装显示名称以便轻松调试

HOC 创建的容器组件会与任何其他组件一样，会显示在 [React Developer Tools](https://github.com/facebook/react/tree/master/packages/react-devtools) 中。为了方便调试，请选择一个显示名称，以表明它是 HOC 的产物。

最常见的方式是**用 HOC 包住被包装组件的显示名称**。比如高阶组件名为 `withSubscription`，并且被包装组件的显示名称为 `CommentList`，显示名称应该为 `WithSubscription(CommentList)`：

```js
function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {/* ... */}
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
  return WithSubscription;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
```

#### 注意事项

高阶组件有一些需要注意的地方，对于 React 新手来说可能并不容易发现。

#### 不要在 render 方法中使用 HOC

React 的 diff 算法（称为[协调](https://zh-hans.reactjs.org/docs/reconciliation.html)）使用组件标识来确定它是应该更新现有子树还是将其丢弃并挂载新子树。 如果从 `render` 返回的组件与前一个渲染中的组件相同（`===`），则 **React 通过将子树与新子树进行区分来递归更新子树。 如果它们不相等，则完全卸载前一个子树**。

通常，你不需要考虑这点。但对 HOC 来说这一点很重要，因为这代表着你不应在组件的 render 方法中对一个组件应用 HOC：

```js
render() {
  // 每次调用 render 函数都会创建一个新的 EnhancedComponent
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // 这将导致子树每次渲染都会进行卸载，和重新挂载的操作！
  return <EnhancedComponent />;
}
```

这不仅仅是性能问题 - 重新挂载组件会导致该组件及其所有子组件的状态丢失。

如果在组件之外创建 HOC，这样一来组件只会创建一次。因此，每次 render 时都会是同一个组件。一般来说，这跟你的预期表现是一致的。

在极少数情况下，你需要动态调用 HOC。你可以在组件的生命周期方法或其构造函数中进行调用。

#### 务必复制静态方法

有时在 React 组件上定义静态方法很有用。例如，Relay 容器暴露了一个静态方法 `getFragment` 以方便组合 GraphQL 片段。

但是，当你将 HOC 应用于组件时，原始组件将使用容器组件进行包装。这意味着新组件没有原始组件的任何静态方法。

```js
// 定义静态函数
WrappedComponent.staticMethod = function() {/*...*/}
// 现在使用 HOC
const EnhancedComponent = enhance(WrappedComponent);

// 增强组件没有 staticMethod
typeof EnhancedComponent.staticMethod === 'undefined' // true
```

为了解决这个问题，你可以在返回之前把这些方法拷贝到容器组件上：

```js
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  // 必须准确知道应该拷贝哪些方法 :(
  Enhance.staticMethod = WrappedComponent.staticMethod;
  return Enhance;
}
```

但要这样做，你需要知道哪些方法应该被拷贝。你可以使用 [hoist-non-react-statics](https://github.com/mridgway/hoist-non-react-statics) 自动拷贝所有非 React 静态方法:

```js
import hoistNonReactStatic from 'hoist-non-react-statics';
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
}
```

除了导出组件，另一个可行的方案是再额外导出这个静态方法。

```js
// 使用这种方式代替...
MyComponent.someFunction = someFunction;
export default MyComponent;

// ...单独导出该方法...
export { someFunction };

// ...并在要使用的组件中，import 它们
import MyComponent, { someFunction } from './MyComponent.js';
```

#### Refs 不会被传递

虽然高阶组件的约定是将所有 props 传递给被包装组件，但这对于 refs 并不适用。那是因为 `ref` 实际上并不是一个 prop - 就像 `key` 一样，它是由 React 专门处理的。如果将 ref 添加到 HOC 的返回组件中，则 ref 引用指向容器组件，而不是被包装组件。

这个问题的解决方案是通过使用 `React.forwardRef` API（React 16.3 中引入）。[前往 ref 转发章节了解更多](https://zh-hans.reactjs.org/docs/forwarding-refs.html)。

### 与第三方库协同

React 可以被用于任何 web 应用中。它可以被嵌入到其他应用，且需要注意，其他的应用也可以被嵌入到 React。本指南将介绍一些更常见的用例，专注于与 [jQuery](https://jquery.com/) 和 [Backbone](http://backbonejs.org/) 进行整合，同样的思路还可以应用于将组件与任意现有代码集成。

#### 集成带有 DOM 操作的插件

React 不会理会 React 自身之外的 DOM 操作。它根据内部虚拟 DOM 来决定是否需要更新，而且如果同一个 DOM 节点被另一个库操作了，React 会觉得困惑而且没有办法恢复。

这并不意味着 React 与其他操作 DOM 的方式不能结合，也不一定结合困难，只不过需要你去关注每个库所做的事情。

**避免冲突的最简单方式就是防止 React 组件更新。你可以渲染无需更新的 React 元素，比如一个空的 `<div />`。**

#### 如何解决这个问题

为了证明这一点，我来草拟一个用于通用 jQuery 插件的 wrapper

我们会添加一个 [ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html) 到这个根 DOM 元素。 在 `componentDidMount` 中，我们能够获取它的引用这样我们就可以把它传递给 jQuery 插件了。

为了防止 React 在挂载之后去触碰这个 DOM，我们会从 `render()` 函数返回一个空的 `<div />`。这个 `<div />` 元素既没有属性也没有子元素，所以 React 没有理由去更新它，使得 jQuery 插件可以自由的管理这部分的 DOM：

```js
class SomePlugin extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);    this.$el.somePlugin();  }

  componentWillUnmount() {
    this.$el.somePlugin('destroy');  }

  render() {
    return <div ref={el => this.el = el} />;  }
}
```

注意我们同时定义了 `componentDidMount` 和 `componentWillUnmount` [生命周期函数](https://zh-hans.reactjs.org/docs/react-component.html#the-component-lifecycle)。**许多 jQuery 插件绑定事件监听到 DOM 上，所以在 `componentWillUnmount` 中注销监听是很重要的**。如果这个插件没有提供一个用于清理的方法，你很可能会需要自己来提供一个，**为了避免内存泄漏要记得把所有插件注册的监听都移除掉**。

#### 集成 jQuery Chosen 插件

**插件需要先安装再使用**

按照以下步骤操作（使用 create-react-app 创建项目后）

```
npm install jquery --save
npm install chosen-js --save
```

将此添加到 node_modules/chosen-js/chosen.jquery.js 的第 1 行

```
import jQuery from 'jquery'
```

```
import $ from 'jquery'
import "chosen-js/chosen.css";
import "chosen-js/chosen.jquery.js";
```

对于应用这些概念的更具体的一个例子，我们给这个用于增强 `<select>` 输入的 [Chosen](https://harvesthq.github.io/chosen/) 插件写一个最小的 wrapper。

> **注意：**
>
> 仅仅是因为可能，但这并不意味着这是构建 React 应用的最佳方式。我们鼓励大家尽可能的使用 React 组件。组件在 React 应用中更易于复用，并且在大多数情况下能更好地控制其行为和显示。

首先，我们来看下 Chosen 对 DOM 做了哪些操作

如果你在一个 `<select>` DOM 节点上调用了它，它会读取原 DOM 节点的属性，使用行内样式隐藏它，然后紧挨着这个 `<select>` 之后增加一个独立的具有它自身显示表现的 DOM 节点。然后它会在值变化的时候触发 jQuery 事件来通知我们这些变化。

以下代码是我们最终要实现的效果：

```js
function Example() {
  return (
    <Chosen onChange={value => console.log(value)}>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
  );
}
```

为了简化，我们将它实现为 [uncontrolled component](https://zh-hans.reactjs.org/docs/uncontrolled-components.html)

首先，我会创建一个空的组件，它的 `render()` 函数我们返回一个包含 `<select>` 的 `<div>`:

```js
class Chosen extends React.Component {
  render() {
    return (
      <div>        <select className="Chosen-select" ref={el => this.el = el}>          {this.props.children}
        </select>
      </div>
    );
  }
}
```

**注意我们为什么要把 `<select>` 使用一个额外的 `<div>` 包裹起来。这是很必要的，因为 Chosen 会紧挨着我们传递给它的 `<select>` 节点追加另一个 DOM 元素**。然而，对于 React 来说 `<div>` 总是只有一个子节点。这样我们就能**确保 React 更新不会和 Chosen 追加的额外 DOM 节点发生冲突**。**在 React 工作流之外修改 DOM 是非常重大的事情，你必须确保 React 没有理由去触碰那些节点。**

接下来，我们会实现生命周期函数。我们需要在 `componentDidMount` 中使用 `<select>` 的引用初始化 Chosen，并且在 `componentWillUnmount` 中将其销毁:

```js
componentDidMount() {
  this.$el = $(this.el);  this.$el.chosen();}

componentWillUnmount() {
    // TypeError: this.$el.chosen is not a function
    //正确安装引用chosen插件
  this.$el.chosen('destroy');}
```

[**在 CodePen 上运行**](http://codepen.io/gaearon/pen/qmqeQx?editors=0010)

注意 React 不会给 `this.el` 字段赋予特殊的含义。它能够工作只是因为我们之前在 `render()` 函数中把一个 `ref` 赋值给了这个字段：

```js
<select className="Chosen-select" ref={el => this.el = el}>
```

到此已经足够让我们的组件去渲染了，但我们同时希望在值变化的时候被通知到。要做到这点，我们需要**在订阅由 Chosen 管理的 `<select>` 上的 jQuery `change` 事件**。

我们不直接把 `this.props.onChange` 传递给 Chosen 是因为组件的 props 可能随时变化，并且这也包括事件处理函数。对应的，我们会定义一个 `handleChange()` 方法来调用 `this.props.onChange`，并且订阅 jQuery 的 `change` 事件：

```js
componentDidMount() {
  this.$el = $(this.el);
  this.$el.chosen();

  this.handleChange = this.handleChange.bind(this);  this.$el.on('change', this.handleChange);}

componentWillUnmount() {
  this.$el.off('change', this.handleChange);  this.$el.chosen('destroy');
}

handleChange(e) {  this.props.onChange(e.target.value);}
```

[**在 CodePen 上运行**](http://codepen.io/gaearon/pen/bWgbeE?editors=0010)

最后，还剩下一件事情需要处理。在 React 中，props 可以在不同的时间有不同的值。例如，如果父组件的状态发生变化 `<Chosen>` 组件可能得到不同的 children。这意味着从集成的角度来看，我们因应 prop 的更新而手动更新 DOM 这一点是非常重要的，因为我们已经不再使用 React 来帮我们管理 DOM 了。

Chosen 的文档建议我们使用 jQuery `trigger()` API 来通知原始 DOM 元素这些变化。我们会让 React来管理在 `<select>` 中 `this.props.children` 的更新，但是我们同样需要增加一个 `componentDidUpdate()` 生命周期函数来通知 Chosen 关于 children 列表的变化：

```js
componentDidUpdate(prevProps) {
  if (prevProps.children !== this.props.children) {    this.$el.trigger("chosen:updated");  }
}
```

通过这种方法，当由 React 管理的 `<select>` children 改变时， Chosen 会知道如何更新它的 DOM 元素。。

`Chosen` 组件的完整实现看起来是这样的：

```js
import React from 'react';
import $ from 'jquery';
import "chosen-js/chosen.css";
import "chosen-js/chosen.jquery.js";
// 选择框 点击选项console点击项
class ChosenChange extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    // TypeError: this.$el.chosen is not a function
    this.$el.chosen();

    this.handleChnge = this.handleChnge.bind(this)
    this.$el.on('change', this.handleChnge);
  }
  componentDidUpdate(prevProps){
    if(prevProps.children !== this.props.children){
      this.$el.trigger('chosen:updated')
    }
  }
  componentWillUnmount() {
    this.$el.off('change', this.handleChnge)
    this.$el.chosen('destroy');
  }
  handleChnge(e){
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

function Example() {
  return (
    <ChosenChange onChange={value => console.log(value)}>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </ChosenChange>
  );
}
export default Example;
```

[**在 CodePen 上运行**](http://codepen.io/gaearon/pen/xdgKOz?editors=0010)

#### 和其他视图库集成

得益于 [`ReactDOM.render()`](https://zh-hans.reactjs.org/docs/react-dom.html#render) 的灵活性 React 可以被嵌入到其他的应用中。

虽然 React 通常被用来在启动的时候加载一个单独的根 React 组件到 DOM 上，**`ReactDOM.render()` 同样可以在 UI 的独立部分上多次调用**，这些部分可以小到一个按钮，也可以大到一个应用。

事实上，这正是 Facebook 如何使用 React 的。这让我们小块小块地在应用中使用 React，并且把他们结合到我们现存的服务端产生的模板和其他客户端代码中。

#### 利用 React 替换基于字符串的渲染

在旧的 web 应用中一个通用的模式就是使用一个字符串描述 DOM 块并且通过类似 `$el.html(htmlString)` 这样的方式插入到 DOM 中。代码库中的这种例子是非常适合引入 React 的。直接把基于字符串的渲染重写成 React 组件即可。

那么下面这段 jQuery 的实现…

```js
$('#container').html('<button id="btn">Say Hello</button>');
$('#btn').click(function() {
  alert('Hello!');
});
```

…可以使用 React 组件重写为：

```js
function Button() {
  return <button id="btn">Say Hello</button>;
}

ReactDOM.render(
  <Button />,
  document.getElementById('container'),
  function() {
    $('#btn').click(function() {
      alert('Hello!');
    });
  }
);
```

从这起开始把更多的逻辑移动到组件中，并且开始应用更多通用 React 实践。例如，在组件中最好不要依赖 ID 因为同一个组件可能会被渲染多次。相反的，我们会使用 [React 事件系统](https://zh-hans.reactjs.org/docs/handling-events.html) 并且直接注册 click 处理函数到 React `<button>` 元素：

```js
function Button(props) {
  return <button onClick={props.onClick}>Say Hello</button>;}

function HelloButton() {
  function handleClick() {    alert('Hello!');
  }
  return <Button onClick={handleClick} />;}

ReactDOM.render(
  <HelloButton />,
  document.getElementById('container')
);
```

[**在 CodePen 上运行**](http://codepen.io/gaearon/pen/RVKbvW?editors=1010)

只要你喜欢你可以有不限数量的这种独立组件，并且使用 `ReactDOM.render()` 把他们渲染到不同的容器中。逐渐的，随着你把越来越多的应用转换到 React，你就可以把它们结合成更大的组件，并且把 `ReactDOM.render()` 的调用移动到更上层的结构。

#### 把 React 嵌入到 Backbone 视图

Backbone是早期的一个js框架

[Backbone](http://backbonejs.org/) 视图通常使用 HTML 字符串，或者产生字符串的模板函数，来创建 DOM 元素的内容。这个过程，同样的，可以通过渲染一个 React 组件来替换掉。

如下，我们会创建一个名为 `ParagraphView` 的 Backbone 视图。他会重载 Backbone 的 `render()` 函数来渲染一个 React `<Paragraph>` 组件到 Backbone (`this.el`) 提供的 DOM 元素中。这里，同样的，我们将会使用 [`ReactDOM.render()`](https://zh-hans.reactjs.org/docs/react-dom.html#render)：

```js
function Paragraph(props) {  return <p>{props.text}</p>;
}

const ParagraphView = Backbone.View.extend({  render() {
    const text = this.model.get('text');
    ReactDOM.render(<Paragraph text={text} />, this.el);    return this;
  },
  remove() {
    ReactDOM.unmountComponentAtNode(this.el);    Backbone.View.prototype.remove.call(this);
  }
});
```

[**在 CodePen 上运行**](http://codepen.io/gaearon/pen/gWgOYL?editors=0010)

在 `remove` 方法中我们也需要调用 `ReactDOM.unmountComponentAtNode()` 以便在它解除的时候 React 清理组件树相关的事件处理的注册和其他的资源，这点是是很重要的。

当一个组件在 React 树中*从内部*删除的时候，清理工作是自动完成的，但是因为我们现在**手动移除整个树，我们必须调用这个方法**。`ReactDOM.unmountComponentAtNode()`

#### 和 Model 层集成

虽然通常是推荐使用单向数据流动的，例如 [React state](https://zh-hans.reactjs.org/docs/lifting-state-up.html)，[Flux](http://facebook.github.io/flux/)，或者 [Redux](http://redux.js.org/)，React 组件也可以使用一个其他框架和库的 Model 层。

#### 在 React 组件中使用 Backbone 的 Model

在 React 组件中使用 [Backbone](http://backbonejs.org/) 的 model 和 collection 最简单的方法就是监听多种变化事件并且手动强制触发一个更新。

负责渲染 model 的组件会监听 `'change'` 事件，而负责渲染 collection 的组件需要监听 `'add'` 和 `'remove'` 事件。在这两种情况中，调用 [`this.forceUpdate()`](https://zh-hans.reactjs.org/docs/react-component.html#forceupdate) 来使用新的数据重新渲染组件。

在下面的例子中，`List` 组件渲染一个 Backbone collection，使用 `Item` 组件来渲染独立的项。

```js
class Item extends React.Component {  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {    this.forceUpdate();  }
  componentDidMount() {
    this.props.model.on('change', this.handleChange);  }

  componentWillUnmount() {
    this.props.model.off('change', this.handleChange);  }

  render() {
    return <li>{this.props.model.get('text')}</li>;
  }
}

class List extends React.Component {  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {    this.forceUpdate();  }
  componentDidMount() {
    this.props.collection.on('add', 'remove', this.handleChange);  }

  componentWillUnmount() {
    this.props.collection.off('add', 'remove', this.handleChange);  }

  render() {
    return (
      <ul>
        {this.props.collection.map(model => (
          <Item key={model.cid} model={model} />        ))}
      </ul>
    );
  }
}
```

[**在 CodePen 上运行**](http://codepen.io/gaearon/pen/GmrREm?editors=0010)

#### 从 Backbone Model 提取数据

前面的方式需要你的 React 组件知道 Backbone 的 model 和 collection。如果你计划迁移到另一个数据管理方案，可能希望将关于Backbone的知识集中在尽可能少的代码部分中。

其中一个解决方案就是每当 model 中的属性变化时都把它提取成简单数据，并且把这个逻辑放在一个独立的地方。下面是一个[高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html)，它提取了 Backbone model 的所有数据存放到 state 中，并将数据传递到被包裹的组件中。

通过这种方法，只有高阶组件需要知道 Backbone model 的内部构造，而且应用中大多数的组件可以保持和 Backbone 无关。

在下面的例子中，我们会拷贝一份 model 的属性来形成初始的 state。我们订阅 `change` 事件（并且在取消挂载时停止订阅），而当变化发生时，我们使用 model 的当前属性更新这个 state。最终，我们确保了只要 `model` 属性本身变化的时候，我们不要忘了停止旧 model 的订阅并开始订阅新的 model。

请注意，这个例子并不是为了彻底完整展示如何与 Backbone 集成，而是它应该让你了解如何以通用的方式处理此问题：

```js
function connectToBackboneModel(WrappedComponent) {  return class BackboneComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = Object.assign({}, props.model.attributes);      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      this.props.model.on('change', this.handleChange);    }

    componentWillReceiveProps(nextProps) {
      this.setState(Object.assign({}, nextProps.model.attributes));      if (nextProps.model !== this.props.model) {
        this.props.model.off('change', this.handleChange);        nextProps.model.on('change', this.handleChange);      }
    }

    componentWillUnmount() {
      this.props.model.off('change', this.handleChange);    }

    handleChange(model) {
      this.setState(model.changedAttributes());    }

    render() {
      const propsExceptModel = Object.assign({}, this.props);
      delete propsExceptModel.model;
      return <WrappedComponent {...propsExceptModel} {...this.state} />;    }
  }
}
```

要演示如何使用它，我们会链接一个 `NameInput` React 组件到一个 Backbone model，并且每当输入框变化时更新它的 `firstName` 属性：

```js
function NameInput(props) {
  return (
    <p>
      <input value={props.firstName} onChange={props.handleChange} />      <br />
      My name is {props.firstName}.    </p>
  );
}

const BackboneNameInput = connectToBackboneModel(NameInput);
function Example(props) {
  function handleChange(e) {
    props.model.set('firstName', e.target.value);  }

  return (
    <BackboneNameInput      model={props.model}      handleChange={handleChange}    />
  );
}

const model = new Backbone.Model({ firstName: 'Frodo' });
ReactDOM.render(
  <Example model={model} />,
  document.getElementById('root')
);
```

[**在 CodePen 上运行**](http://codepen.io/gaearon/pen/PmWwwa?editors=0010)

这个技术并不仅限于 Backbone。你可以通过在生命周期方法中订阅其更改，并选择性地，拷贝数据到本地 React state，来将 React 用于任何 model 库。

### 深入 JSX

实际上，JSX 仅仅只是 `React.createElement(component, props, ...children)` 函数的语法糖。如下 JSX 代码：

```js
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

会编译为：

```js
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

如果没有子节点，你还可以使用自闭合的标签形式，如：

```js
<div className="sidebar" />
```

会编译为:

```js
React.createElement(
  'div',
  {className: 'sidebar'}
)
```

如果你想测试一些特定的 JSX 会转换成什么样的 JavaScript，你可以尝试使用 [在线的 Babel 编译器](https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA)。

#### 指定 React 元素类型

JSX 标签的第一部分指定了 React 元素的类型。

大写字母开头的 JSX 标签意味着它们是 React 组件。这些标签会**被编译为对命名变量的直接引用**，所以，当你使用 JSX `<Foo />` 表达式时，`Foo` 必须包含在作用域内。

##### React 必须在作用域内

由于 JSX 会编译为 `React.createElement` 调用形式，所以 `React` 库也必须包含在 JSX 代码作用域内。

例如，在如下代码中，虽然 `React` 和 `CustomButton` 并没有被直接使用，但还是需要导入：

```js
import React from 'react';import CustomButton from './CustomButton';
function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);  return <CustomButton color="red" />;
}
```

如果你不使用 JavaScript 打包工具而是直接通过 `<script>` 标签加载 React，则必须**将 `React` 挂载到全局变量中**。

##### 在 JSX 类型中使用点语法

在 JSX 中，你也**可以使用点语法来引用一个 React 组件**。当你在一个模块中导出许多 React 组件时，这会非常方便。例如，如果 `MyComponents.DatePicker` 是一个组件，你可以在 JSX 中直接使用：

```js
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;}
```

##### 用户定义的组件必须以大写字母开头

以小写字母开头的元素代表一个 HTML 内置组件，比如 `<div>` 或者 `<span>` 会生成相应的字符串 `'div'` 或者 `'span'` 传递给 `React.createElement`（作为参数）。**大写字母开头的元素则对应着在 JavaScript 引入或自定义的组件，如 `<Foo />` 会编译为 `React.createElement(Foo)`**。

我们建议使用大写字母开头命名自定义组件。**如果你确实需要一个以小写字母开头的组件，则在 JSX 中使用它之前，必须将它赋值给一个大写字母开头的变量**。

例如，以下的代码将无法按照预期运行：

```js
import React from 'react';

// 错误！组件应该以大写字母开头：function hello(props) {  // 正确！这种 <div> 的使用是合法的，因为 div 是一个有效的 HTML 标签
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 错误！React 会认为 <hello /> 是一个 HTML 标签，因为它没有以大写字母开头：  return <hello toWhat="World" />;}
```

要解决这个问题，我们需要重命名 `hello` 为 `Hello`，同时在 JSX 中使用 `<Hello />` ：

```js
import React from 'react';

// 正确！组件需要以大写字母开头：function Hello(props) {  // 正确！ 这种 <div> 的使用是合法的，因为 div 是一个有效的 HTML 标签：
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 正确！React 知道 <Hello /> 是一个组件，因为它是大写字母开头的：  return <Hello toWhat="World" />;}
```

##### 在运行时选择类型

你不能将通用表达式作为 React 元素类型。**如果你想通过通用表达式来（动态）决定元素类型，你需要首先将它赋值给大写字母开头的变量**。这通常用于根据 prop 来渲染不同组件的情况下:

```js
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 错误！JSX 类型不能是一个表达式。  return <components[props.storyType] story={props.story} />;}
```

要解决这个问题, 需要首先将类型赋值给一个大写字母开头的变量：

```js
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 正确！JSX 类型可以是大写字母开头的变量。  const SpecificStory = components[props.storyType];  return <SpecificStory story={props.story} />;}
```

#### JSX 中的 Props

有多种方式可以在 JSX 中指定 props。

##### JavaScript 表达式作为 Props

你可以把包裹在 `{}` 中的 JavaScript 表达式作为一个 prop 传递给 JSX 元素。例如，如下的 JSX：

```js
<MyComponent foo={1 + 2 + 3 + 4} />
```

在 `MyComponent` 中，`props.foo` 的值等于 `1 + 2 + 3 + 4` 的执行结果 `10`。

`if` 语句以及 `for` 循环不是 JavaScript 表达式，所以不能在 JSX 中直接使用。但是，你可以用在 JSX 以外的代码中。比如：

```js
function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {    description = <strong>even</strong>;  } else {    description = <i>odd</i>;  }  return <div>{props.number} is an {description} number</div>;
}
```

你可以在对应的章节中学习更多关于[条件渲染](https://zh-hans.reactjs.org/docs/conditional-rendering.html)和[循环](https://zh-hans.reactjs.org/docs/lists-and-keys.html)的内容。

##### 字符串字面量

你可以将字符串字面量赋值给 prop. 如下两个 JSX 表达式是等价的：

```js
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />
```

当你将字符串字面量赋值给 prop 时，它的值是未转义的。所以，以下两个 JSX 表达式是等价的：

```js
<MyComponent message="&lt;3" />
<MyComponent message={'<3'} />
```

这种行为通常是不重要的，这里只是提醒有这个用法。

##### Props 默认值为 “True”

**如果你没给 prop 赋值，它的默认值是 `true`**。以下两个 JSX 表达式是等价的：

```js
<MyTextBox autocomplete />
<MyTextBox autocomplete={true} />
```

通常，我们不建议不传递 value 给 prop，因为这可能与 [ES6 对象简写](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)混淆，`{foo}` 是 `{foo: foo}` 的简写，而不是 `{foo: true}`。这样实现只是为了保持和 HTML 中标签属性的行为一致。

##### 属性展开

如果你已经有了一个 props 对象，你可以使用展开运算符 `...` 来在 JSX 中传递整个 props 对象。以下两个组件是等价的：

```js
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;}
```

你还可以选择只保留当前组件需要接收的 props，并使用展开运算符将其他 props 传递下去。

```js
const Button = props => {
  const { kind, ...other } = props;  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};
```

在上述例子中，`kind` 的 prop 会被安全的保留，它将*不会*被传递给 DOM 中的 `<button>` 元素。 所有其他的 props 会通过 `...other` 对象传递，使得这个组件的应用可以非常灵活。你可以看到它传递了一个 `onClick` 和 `children` 属性。

属性展开在某些情况下很有用，但是也很容易将不必要的 props 传递给不相关的组件，或者将无效的 HTML 属性传递给 DOM。我们建议谨慎的使用该语法。

#### JSX 中的子元素

包含在开始和结束标签之间的 JSX 表达式内容将作为特定属性 `props.children` 传递给外层组件。有几种不同的方法来传递子元素：

##### 字符串字面量

你可以将字符串放在开始和结束标签之间，此时 `props.children` 就只是该字符串。这对于很多内置的 HTML 元素很有用。例如：

```js
<MyComponent>Hello world!</MyComponent>
```

这是一个合法的 JSX，`MyComponent` 中的 `props.children` 是一个简单的未转义字符串 `"Hello world!"`。因此你可以采用编写 HTML 的方式来编写 JSX。如下所示：

```js
<div>This is valid HTML &amp; JSX at the same time.</div>
```

JSX 会移除行首尾的空格以及空行。与标签相邻的空行均会被删除，文本字符串之间的新行会被压缩为一个空格。因此以下的几种方式都是等价的：

```js
<div>Hello World</div>
<div>
  Hello World
</div>
<div>
  Hello
  World
</div>
<div>
  Hello World
</div>
```

##### JSX 子元素

子元素允许由多个 JSX 元素组成。这对于嵌套组件非常有用：

```js
<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>
```

你可以将不同类型的子元素混合在一起，因此你可以将字符串字面量与 JSX 子元素一起使用。这也是 JSX 类似 HTML 的一种表现，所以如下代码是合法的 JSX 并且也是合法的 HTML：

```js
<div>
  Here is a list:
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```

**React 组件也能够返回存储在数组中的一组元素**：

```js
render() {
  // 不需要用额外的元素包裹列表元素！
  return [
    // 不要忘记设置 key :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
}
```

##### JavaScript 表达式作为子元素

JavaScript 表达式可以**被包裹在 `{}` 中作为子元素**。例如，以下表达式是等价的：

```js
<MyComponent>foo</MyComponent>

<MyComponent>{'foo'}</MyComponent>
```

这对于展示任意长度的列表非常有用。例如，渲染 HTML 列表：

```js
function Item(props) {
  return <li>{props.message}</li>;}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}    </ul>
  );
}
```

JavaScript 表达式也可以和其他类型的子元素组合。这种做法可以方便地替代模板字符串：

```js
function Hello(props) {
  return <div>Hello {props.addressee}!</div>;}
```

##### 函数作为子元素

通常，JSX 中的 JavaScript 表达式将会被计算为字符串、React 元素或者是列表。不过，`props.children` 和其他 prop 一样，它可以传递任意类型的数据，而不仅仅是 React 已知的可渲染类型。例如，如果你有一个自定义组件，你可以把回调函数作为 `props.children` 进行传递：

```js
// 调用子元素回调 numTimes 次，来重复生成组件
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}    </Repeat>
  );
}
```

你可以将任何东西作为子元素传递给自定义组件，只要确保在该组件渲染之前能够被转换成 React 理解的对象。这种用法并不常见，但可以用于扩展 JSX。

##### 布尔类型、Null 以及 Undefined 将会忽略

`false`, `null`, `undefined`, and `true` 是合法的子元素。但它们并不会被渲染。以下的 JSX 表达式渲染结果相同：

```js
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```

> 这有助于依据特定条件来渲染其他的 React 元素。例如，在以下 JSX 中，仅当 `showHeader` 为 `true` 时，才会渲染 `<Header />` 组件：

```js
<div>
  {showHeader && <Header />}  <Content />
</div>
```

值得注意的是有一些 [“falsy” 值](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)，**如数字 `0`，仍然会被 React 渲染**。例如，以下代码并不会像你预期那样工作，因为当 `props.messages` 是空数组时，`0` 仍然会被渲染：

```js
<div>
  {props.messages.length &&    <MessageList messages={props.messages} />
  }
</div>
```

要解决这个问题，确保 `&&` 之前的表达式总是布尔值：

```js
<div>
  {props.messages.length > 0 &&    <MessageList messages={props.messages} />
  }
</div>
```

反之，**如果你想渲染 `false`、`true`、`null`、`undefined` 等值，你需要先将它们[转换为字符串](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion)：**

```js
<div>
  My JavaScript variable is {String(myVariable)}.</div>
```

### Portals

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

```js
ReactDOM.createPortal(child, container)
```

第一个参数（`child`）是任何[可渲染的 React 子元素](https://zh-hans.reactjs.org/docs/react-component.html#render)，例如一个元素，字符串或 fragment。第二个参数（`container`）是一个 DOM 元素。

#### 用法

通常来讲，当你从组件的 render 方法返回一个元素时，该元素将被挂载到 DOM 节点中离其最近的父节点：

```js
render() {
  // React 挂载了一个新的 div，并且把子元素渲染其中
  return (
    <div>      {this.props.children}
    </div>  );
}
```

然而，有时候将子元素插入到 DOM 节点中的不同位置也是有好处的：

```js
render() {
  // React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中。
  // `domNode` 是一个可以在任何位置的有效 DOM 节点。
  return ReactDOM.createPortal(
    this.props.children,
    domNode  );
}
```

**一个 portal 的典型用例是当父组件有 `overflow: hidden` 或 `z-index` 样式时，但你需要子组件能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框：**

> 注意:
>
> 当在使用 portal 时, 记住[管理键盘焦点](https://zh-hans.reactjs.org/docs/accessibility.html#programmatically-managing-focus)就变得尤为重要。
>
> 对于模态对话框，通过遵循 [WAI-ARIA 模态开发实践](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal)，来确保每个人都能够运用它。

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/yzMaBd)

##### 通过 Portal 进行事件冒泡

尽管 portal 可以被放置在 DOM 树中的任何地方，但在任何其他方面，其行为和普通的 React 子节点行为一致。由于 portal 仍存在于 *React 树*， 且与 *DOM 树* 中的位置无关，那么无论其子节点是否是 portal，像 context 这样的功能特性都是不变的。

这包含事件冒泡。一个从 portal 内部触发的事件会一直冒泡至包含 *React 树*的祖先，即便这些元素并不是 *DOM 树* 中的祖先。假设存在如下 HTML 结构：

```
<html>
  <body>
    <div id="app-root"></div>
    <div id="modal-root"></div>
  </body>
</html>
```

在 `#app-root` 里的 `Parent` 组件能够捕获到未被捕获的从兄弟节点 `#modal-root` 冒泡上来的事件。

```
// 在 DOM 中有两个容器是兄弟级 （siblings）
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(      this.props.children,      this.el    );  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {    // 当子元素里的按钮被点击时，    // 这个将会被触发更新父元素的 state，    // 即使这个按钮在 DOM 中不是直接关联的后代    this.setState(state => ({      clicks: state.clicks + 1    }));  }
  render() {
    return (
      <div onClick={this.handleClick}>        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>          <Child />        </Modal>      </div>
    );
  }
}

function Child() {
  // 这个按钮的点击事件会冒泡到父元素  // 因为这里没有定义 'onClick' 属性  return (
    <div className="modal">
      <button>Click</button>    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);
```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/jGBWpE)

在父组件里捕获一个来自 portal 冒泡上来的事件，使之能够在开发时具有不完全依赖于 portal 的更为灵活的抽象。例如，如果你在渲染一个 `<Modal />` 组件，无论其是否采用 portal 实现，父组件都能够捕获其事件。

### Profiler API

`Profiler` 测量渲染一个 React 应用多久渲染一次以及渲染一次的“代价”。 它的目的是识别出应用中渲染较慢的部分，或是可以使用[类似 memoization 优化](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-memoize-calculations)的部分，并从相关优化中获益。

> 注意：
>
> Profiling 增加了额外的开支，所以**它在[生产构建](https://zh-hans.reactjs.org/docs/optimizing-performance.html#use-the-production-build)中会被禁用**。
>
> 为了将 profiling 功能加入生产环境中，React 提供了使 profiling 可用的特殊的生产构建环境。 从 [fb.me/react-profiling](https://fb.me/react-profiling)了解更多关于如何使用这个构建环境的信息。

#### 用法

**`Profiler` 能添加在 React 树中的任何地方来测量树中这部分渲染所带来的开销**。 它需要两个 prop ：一个**是 `id`(string),一个是当组件树中的组件“提交”更新的时候被React调用的回调函数 `onRender`(function)**。

例如，为了分析 `Navigation` 组件和它的子代：

```js
render(
  <App>
    <Profiler id="Navigation" onRender={callback}>      <Navigation {...props} />
    </Profiler>
    <Main {...props} />
  </App>
);
```

多个 `Profiler` 组件能测量应用中的不同部分：

```js
render(
  <App>
    <Profiler id="Navigation" onRender={callback}>      <Navigation {...props} />
    </Profiler>
    <Profiler id="Main" onRender={callback}>      <Main {...props} />
    </Profiler>
  </App>
);
```

嵌套使用 `Profiler` 组件来测量相同一个子树下的不同组件：

```js
render(
  <App>
    <Profiler id="Panel" onRender={callback}>      <Panel {...props}>
        <Profiler id="Content" onRender={callback}>          <Content {...props} />
        </Profiler>
        <Profiler id="PreviewPane" onRender={callback}>          <PreviewPane {...props} />
        </Profiler>
      </Panel>
    </Profiler>
  </App>
);
```

> 注意
>
> 尽管 `Profiler` 是一个轻量级组件，我们依然应该在需要时才去使用它。对一个应用来说，每添加一些都会给 CPU 和内存带来一些负担。

#### `onRender` 回调

`Profiler` 需要一个 `onRender` 函数作为参数。 React 会在 profile 包含的组件树中任何组件 “提交” 一个更新的时候调用这个函数。 它的参数描述了渲染了什么和花费了多久。**

```js
function onRenderCallback(
  id, // 发生提交的 Profiler 树的 “id”
  phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
  actualDuration, // 本次更新 committed 花费的渲染时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
  startTime, // 本次更新中 React 开始渲染的时间
  commitTime, // 本次更新中 React committed 的时间
  interactions // 属于本次更新的 interactions 的集合
) {
  // 合计或记录渲染时间。。。
}
```

让我们来仔细研究一下各个 prop:

- **`id: string`** - 发生提交的 `Profiler` 树的 `id`。 如果有多个 profiler，它能用来分辨树的哪一部分发生了“提交”。
- **`phase: "mount" | "update"`** - 判断是组件树的第一次装载引起的重渲染，还是由 props、state 或是 hooks 改变引起的重渲染。
- **`actualDuration: number`** - 本次更新在渲染 `Profiler` 和它的子代上花费的时间。 这个数值表明使用 memoization 之后能表现得多好。（例如 [`React.memo`](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo)，[`useMemo`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo)，[`shouldComponentUpdate`](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-do-i-implement-shouldcomponentupdate)）。 理想情况下，由于子代只会因特定的 prop 改变而重渲染，因此这个值应该在第一次装载之后显著下降。
- **`baseDuration: number`** - 在 `Profiler` 树中最近一次每一个组件 `render` 的持续时间。 这个值估计了最差的渲染时间。（例如当它是第一次加载或者组件树没有使用 memoization）。
- **`startTime: number`** - 本次更新中 React 开始渲染的时间戳。
- **`commitTime: number`** - 本次更新中 React commit 阶段结束的时间戳。 在一次 commit 中这个值在所有的 profiler 之间是共享的，可以将它们按需分组。
- **`interactions: Set`** - 当更新被制定时，[“interactions”](https://fb.me/react-interaction-tracing) 的集合会被追踪。（例如当 `render` 或者 `setState` 被调用时）。

> 注意
>
> Interactions 能用来识别更新是由什么引起的，尽管这个追踪更新的 API 依然是实验性质的。
>
> 从 [fb.me/react-interaction-tracing](https://fb.me/react-interaction-tracing) 了解更多

### 不使用 ES6

通常我们会用 JavaScript 的 `class` 关键字来定义 React 组件：

```
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

如果你还未使用过 ES6，你可以使用 `create-react-class` 模块：

```
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```

ES6 中的 class 与 `createReactClass()` 方法十分相似，但有以下几个区别值得注意。

#### 声明默认属性

无论是函数组件还是 class 组件，都拥有 `defaultProps` 属性：

```
class Greeting extends React.Component {
  // ...
}

Greeting.defaultProps = {
  name: 'Mary'
};
```

如果使用 `createReactClass()` 方法创建组件，那就需要在组件中定义 `getDefaultProps()` 函数：

```
var Greeting = createReactClass({
  getDefaultProps: function() {
    return {
      name: 'Mary'
    };
  },

  // ...

});
```

#### 初始化 State

如果使用 ES6 的 class 关键字创建组件，你可以通过给 `this.state` 赋值的方式来定义组件的初始 state：

```
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  // ...
}
```

如果使用 `createReactClass()` 方法创建组件，你需要提供一个单独的 `getInitialState` 方法，让其返回初始 state：

```
var Counter = createReactClass({
  getInitialState: function() {
    return {count: this.props.initialCount};
  },
  // ...
});
```

#### 自动绑定

对于使用 ES6 的 class 关键字创建的 React 组件，组件中的方法遵循与常规 ES6 class 相同的语法规则。这意味着这些方法不会自动绑定 `this` 到这个组件实例。 你需要在 constructor 中显式地调用 `.bind(this)`：

```
class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
    // 这一行很重要！
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.state.message);
  }

  render() {
    // 由于 `this.handleClick` 已经绑定至实例，因此我们才可以用它来处理点击事件
    return (
      <button onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
}
```

如果使用 `createReactClass()` 方法创建组件，组件中的方法会自动绑定至实例，所以不需要像上面那样做：

```
var SayHello = createReactClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },

  handleClick: function() {
    alert(this.state.message);
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
});
```

这就意味着，如果使用 ES6 class 关键字创建组件，在处理事件回调时就要多写一部分代码。但对于大型项目来说，这样做可以提升运行效率。

如果你觉得上述写法很繁琐，那么可以尝试使用**目前还处于试验性阶段**的 Babel 插件 [Class Properties](https://babeljs.io/docs/plugins/transform-class-properties/)。

```
class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
  }
  // 警告：这种语法还处于试验性阶段！
  // 在这里使用箭头函数就可以把方法绑定给实例：
  handleClick = () => {
    alert(this.state.message);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
}
```

请注意，上面这种语法**目前还处于试验性阶段**，这意味着语法随时都可能改变，也存在最终不被列入框架标准的可能。

为了保险起见，以下三种做法都是可以的：

- 在 constructor 中绑定方法。
- 使用箭头函数，比如：`onClick={(e) => this.handleClick(e)}`。
- 继续使用 `createReactClass`。

#### Mixins

> **注意：**
>
> ES6 本身是不包含任何 mixin 支持。因此，当你在 React 中使用 ES6 class 时，将不支持 mixins 。
>
> **我们也发现了很多使用 mixins 然后出现了问题的代码库。[并且不建议在新代码中使用它们](https://zh-hans.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)。**
>
> 以下内容仅作为参考。

如果完全不同的组件有相似的功能，这就会产生[“横切关注点（cross-cutting concerns）“问题](https://en.wikipedia.org/wiki/Cross-cutting_concern)。针对这个问题，在使用 createReactClass 创建 React 组件的时候，引入 `mixins` 功能会是一个很好的解决方案。

比较常见的用法是，组件每隔一段时间更新一次。使用 `setInterval()` 可以很容易实现这个功能，但需要注意的是，当你不再需要它时，你应该清除它以节省内存。React 提供了[生命周期方法](https://zh-hans.reactjs.org/docs/working-with-the-browser.html#component-lifecycle)，这样你就可以知道一个组件何时被创建或被销毁了。让我们创建一个简单的 mixin，它使用这些方法提供一个简单的 `setInterval()` 函数，它会在组件被销毁时被自动清理。

```js
var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

var createReactClass = require('create-react-class');

var TickTock = createReactClass({
  mixins: [SetIntervalMixin], // 使用 mixin
  getInitialState: function() {
    return {seconds: 0};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // 调用 mixin 上的方法
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});

ReactDOM.render(
  <TickTock />,
  document.getElementById('example')
);
```

如果组件拥有多个 mixins，且这些 mixins 中定义了相同的生命周期方法（例如，当组件被销毁时，几个 mixins 都想要进行一些清理工作），那么这些生命周期方法都会被调用的。使用 mixins 时，mixins 会先按照定义时的顺序执行，最后调用组件上对应的方法。

### 不使用 JSX 的 React

React 并不强制要求使用 JSX。当你不想在构建环境中配置有关 JSX 编译时，不在 React 中使用 JSX 会更加方便。

每个 JSX 元素只是调用 `React.createElement(component, props, ...children)` 的语法糖。因此，使用 JSX 可以完成的任何事情都可以通过纯 JavaScript 完成。

例如，用 JSX 编写的代码：

```js
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}
ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```

可以编写为不使用 JSX 的代码：

```js
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}
ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```

如果你想了解更多 JSX 转换为 JavaScript 的示例，可以尝试使用 [在线 Babel 编译器](https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA)。

组件可以是字符串，也可以是 `React.Component` 的子类，它还能是一个普通的函数。

如果你不想每次都键入 `React.createElement`，通常的做法是创建快捷方式：

```js
const e = React.createElement;
ReactDOM.render(
  e('div', null, 'Hello World'),
  document.getElementById('root')
);
```

如果你使用了 `React.createElement` 的快捷方式，那么在没有 JSX 的情况下使用 React 几乎一样方便。

或者，你也可以参考社区项目，如：[`react-hyperscript`](https://github.com/mlmorg/react-hyperscript)tps://github.com/ohanhi/hyperscript-helpers)，它们提供了更简洁的语法。

### 协调

React 提供的声明式 API 让开发者可以在对 React 的底层实现没有具体了解的情况下编写应用。在开发者编写应用时虽然保持相对简单的心智，但开发者无法了解内部的实现机制。本文描述了在实现 React 的 “diffing” 算法中我们做出的设计决策以保证组件满足更新具有可预测性，以及在繁杂业务下依然保持应用的高性能性。

#### 设计动力

 **“diffing” 算法 在某一时间节点调用 React 的 `render()` 方法，会创建一棵由 React 元素组成的树。在下一次 state 或 props 更新时，相同的 `render()` 方法会返回一棵不同的树**。React 需要基于这两棵树之间的差别来判断如何有效率的更新 UI 以保证当前 UI 与最新的树保持同步。

这个算法问题有一些通用的解决方案，即生成将一棵树转换成另一棵树的最小操作数。 然而，即使在[最前沿的算法中](http://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf)，该算法的复杂程度为 O(n 3 )，其中 n 是树中元素的数量。

如果在 React 中使用了该算法，那么展示 1000 个元素所需要执行的计算量将在十亿的量级范围。这个开销实在是太过高昂。于是 React 在以下两个假设的基础之上提出了**一套 O(n) 的启发式算法**：

1. **两个不同类型的元素会产生出不同的树**；
2. **开发者可以通过 `key` prop 来暗示哪些子元素在不同的渲染下能保持稳定**；

在实践中，我们发现以上假设在几乎所有实用的场景下都成立。

#### Diffing 算法

**当对比两颗树时，React 首先比较两棵树的根节点。不同类型的根节点元素会有不同的形态。**

#### 比对不同类型的元素

当根节点为不同类型的元素时，React 会拆卸原有的树并且建立起新的树。举个例子，当一个元素从 `<a>` 变成 `<img>`，从 `<Article>` 变成 `<Comment>`，或从 `<Button>` 变成 `<div>` 都会触发一个完整的重建流程。

当拆卸一棵树时，对应的 DOM 节点也会被销毁。组件实例将执行 `componentWillUnmount()` 方法。当建立一棵新的树时，对应的 DOM 节点会被创建以及插入到 DOM 中。组件实例将执行 `componentWillMount()` 方法，紧接着 `componentDidMount()` 方法。所有跟之前的树所关联的 state 也会被销毁。

在根节点以下的组件也会被卸载，它们的状态会被销毁。比如，当比对以下更变时：

```js
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>
```

React 会销毁 `Counter` 组件并且重新装载一个新的组件。

#### 比对同一类型的元素

**当比对两个相同类型的 React 元素时，React 会保留 DOM 节点，仅比对及更新有改变的属性**。比如：

```js
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```

通过比对这两个元素，React 知道只需要修改 DOM 元素上的 `className` 属性。

当更新 `style` 属性时，React 仅更新有所更变的属性。比如：

```js
<div style={{color: 'red', fontWeight: 'bold'}} />

<div style={{color: 'green', fontWeight: 'bold'}} />
```

通过比对这两个元素，React 知道只需要修改 DOM 元素上的 `color` 样式，无需修改 `fontWeight`。

在处理完当前节点之后，React 继续**对子节点进行递归**。

#### 比对同类型的组件元素

当一个组件更新时，组件实例保持不变，这样 state 在跨越不同的渲染时保持一致。React 将更新该组件实例的 props 以跟最新的元素保持一致，并且调用该实例的 `componentWillReceiveProps()` 和 `componentWillUpdate()` 方法。

下一步，调用 `render()` 方法，diff 算法将在之前的结果以及新的结果中进行递归。

对子节点进行递归

在默认条件下，当递归 DOM 节点的子元素时，React 会同时遍历两个子元素的列表；当产生差异时，生成一个 mutation。

**在子元素列表末尾新增元素时，更变开销比较小**。比如：

```js
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

React 会先匹配两个 `<li>first</li>` 对应的树，然后匹配第二个元素 `<li>second</li>` 对应的树，最后插入第三个元素的 `<li>third</li>` 树。

如果简单实现的话，那么**在列表头部插入会很影响性能，那么更变开销会比较大**。比如：

```js
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

React 会针对每个子元素 mutate 而不是保持相同的 `<li>Duke</li>` 和 `<li>Villanova</li>` 子树完成。这种情况下的低效可能会带来性能问题。

#### Keys

为了解决以上问题，React 支持 `key` 属性。当子元素拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素。以下例子在**新增 `key` 之后使得之前的低效转换变得高效**：

```js
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

现在 React 知道只有带着 `'2014'` key 的元素是新元素，带着 `'2015'` 以及 `'2016'` key 的元素仅仅移动了。

现实场景中，产生一个 key 并不困难。你要展现的元素可能已经有了一个唯一 ID，于是 key 可以直接从你的数据中提取：

```js
<li key={item.id}>{item.name}</li>
```

当以上情况不成立时，你**可以新增一个 ID 字段到你的模型中，或者利用一部分内容作为哈希值来生成一个 key。这个 key 不需要全局唯一，但在列表中需要保持唯一**。

最后，你也可以使用元素在数组中的下标作为 key。这个策略在元素不进行重新排序时比较合适，但一旦有顺序修改，diff 就会变得慢。

当基于下标的组件进行重新排序时，组件 state 可能会遇到一些问题。由于组件实例是基于它们的 key 来决定是否更新以及复用，如果 key 是一个下标，那么修改顺序时会修改当前的 key，导致非受控组件的 state（比如输入框）可能相互篡改导致无法预期的变动。

在 Codepen 有两个例子，分别为 [展示使用下标作为 key 时导致的问题](https://react.docschina.org/redirect-to-codepen/reconciliation/index-used-as-key)，以及[不使用下标作为 key 的例子的版本，修复了重新排列，排序，以及在列表头插入的问题](https://react.docschina.org/redirect-to-codepen/reconciliation/no-index-used-as-key) 。

#### 权衡

请谨记协调算法是一个实现细节。React 可以在每个 action 之后对整个应用进行重新渲染，得到的最终结果也会是一样的。在此情境下，重新渲染表示在所有组件内调用 `render` 方法，这不代表 React 会卸载或装载它们。React 只会基于以上提到的规则来决定如何进行差异的合并。

我们定期探索优化算法，让常见用例更高效地执行。在当前的实现中，可以理解为一棵子树能在其兄弟之间移动，但不能移动到其他位置。在这种情况下，算法会重新渲染整棵子树。

由于 React 依赖探索的算法，因此当以下假设没有得到满足，性能会有所损耗。

1. 该算法不会尝试匹配不同组件类型的子树。如果你发现你在两种不同类型的组件中切换，但输出非常相似的内容，建议把它们改成同一类型。在实践中，我们没有遇到这类问题。
2. **Key 应该具有稳定，可预测，以及列表内唯一的特质**。不稳定的 key（比如通过 `Math.random()` 生成的）会导致许多组件实例和 DOM 节点被不必要地重新创建，这可能导致性能下降和子组件中的状态丢失。

### 列表增加排序的案例

```js
const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt.toTimeString()}</label>
    </td>
  </tr>
);

class ToDoList extends React.Component {
  constructor() {
    super();
    const date = new Date();
    const toDoCounter = 1;
    this.state = {
      list: [
        {
          id: toDoCounter,
          createdAt: date,
        },
      ],
      toDoCounter: toDoCounter,
    };
  }

  sortByEarliest() {
    const sortedList = this.state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  }

  sortByLatest() {
    const sortedList = this.state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  }

  addToEnd() {
    const date = new Date();
    const nextId = this.state.toDoCounter + 1;
    const newList = [
      ...this.state.list,
      {id: nextId, createdAt: date},
    ];
    this.setState({
      list: newList,
      toDoCounter: nextId,
    });
  }

  addToStart() {
    const date = new Date();
    const nextId = this.state.toDoCounter + 1;
    const newList = [
      {id: nextId, createdAt: date},
      ...this.state.list,
    ];
    this.setState({
      list: newList,
      toDoCounter: nextId,
    });
  }

  render() {
    return (
      <div>
        <code>key=id</code>
        <br />
        <button onClick={this.addToStart.bind(this)}>
          Add New to Start
        </button>
        <button onClick={this.addToEnd.bind(this)}>
          Add New to End
        </button>
        <button onClick={this.sortByEarliest.bind(this)}>
          Sort by Earliest
        </button>
        <button onClick={this.sortByLatest.bind(this)}>
          Sort by Latest
        </button>
        <table>
          <tr>
            <th>ID</th>
            <th />
            <th>created at</th>
          </tr>
          {this.state.list.map((todo, index) => (
            <ToDo key={todo.id} {...todo} />
          ))}
        </table>
      </div>
    );
  }
}

ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);
```

### Refs and the DOM

Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

在典型的 React 数据流中，[props](https://react.docschina.org/docs/components-and-props.html) 是父组件与子组件交互的唯一方式。要修改一个子组件，你需要使用新的 props 来重新渲染它。但是，在某些情况下，你需要在典型数据流之外强制修改子组件。被修改的子组件可能是一个 React 组件的实例，也可能是一个 DOM 元素。对于这两种情况，React 都提供了解决办法。

#### 何时使用 Refs

下面是几个适合使用 refs 的情况：

- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库。

避免使用 refs 来做任何可以通过声明式实现来完成的事情。

举个例子，避免在 `Dialog` 组件里暴露 `open()` 和 `close()` 方法，最好传递 `isOpen` 属性。

#### 勿过度使用 Refs

你可能首先会想到使用 refs 在你的 app 中“让事情发生”。如果是这种情况，请花一点时间，认真再考虑一下 state 属性应该被安排在哪个组件层中。通常你会想明白，让更高的组件层级拥有这个 state，是更恰当的。查看 [状态提升](https://react.docschina.org/docs/lifting-state-up.html) 以获取更多有关示例。

> 注意
>
> 下面的例子已经更新为使用在 React 16.3 版本引入的 `React.createRef()` API。如果你正在使用一个较早版本的 React，我们推荐你使用[回调形式的 refs](https://react.docschina.org/docs/refs-and-the-dom.html#callback-refs)。

#### 创建 Refs

Refs 是使用 `React.createRef()` 创建的，并通过 `ref` 属性附加到 React 元素。在构造组件时，通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们。

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();  }
  render() {
    return <div ref={this.myRef} />;  }
}
```

#### 访问 Refs

当 ref 被传递给 `render` 中的元素时，对该节点的引用可以在 ref 的 `current` 属性中被访问。

```
const node = this.myRef.current;
```

ref 的值根据节点的类型而有所不同：

- 当 `ref` 属性用于 HTML 元素时，构造函数中使用 `React.createRef()` 创建的 `ref` 接收底层 DOM 元素作为其 `current` 属性。
- 当 `ref` 属性用于自定义 class 组件时，`ref` 对象接收组件的挂载实例作为其 `current` 属性。
- **你不能在函数组件上使用 `ref` 属性**，因为他们没有实例。

以下例子说明了这些差异。

##### 为 DOM 元素添加 ref

以下代码使用 `ref` 去存储 DOM 节点的引用：

```
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus();  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

React 会在组件挂载时给 `current` 属性传入 DOM 元素，并在组件卸载时传入 `null` 值。`ref` 会在 `componentDidMount` 或 `componentDidUpdate` 生命周期钩子触发前更新。

##### 为 class 组件添加 Ref

如果我们想包装上面的 `CustomTextInput`，来模拟它挂载之后立即被点击的操作，我们可以使用 ref 来获取这个自定义的 input 组件并手动调用它的 `focusTextInput` 方法：

```
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();  }

  componentDidMount() {
    this.textInput.current.focusTextInput();  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />    );
  }
}
```

请注意，这仅在 `CustomTextInput` 声明为 class 时才有效：

```
class CustomTextInput extends React.Component {  // ...
}
```

##### Refs 与函数组件

默认情况下，**你不能在函数组件上使用 `ref` 属性**，因为它们没有实例：

```
function MyFunctionComponent() {  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();  }
  render() {
    // This will *not* work!
    return (
      <MyFunctionComponent ref={this.textInput} />    );
  }
}
```

如果要在函数组件中使用 `ref`，你可以使用 [`forwardRef`](https://react.docschina.org/docs/forwarding-refs.html)（可与 [`useImperativeHandle`](https://react.docschina.org/docs/hooks-reference.html#useimperativehandle) 结合使用），或者可以将该组件转化为 class 组件。

不管怎样，你可以**在函数组件内部使用 `ref` 属性**，只要它指向一个 DOM 元素或 class 组件：

```
function CustomTextInput(props) {
  // 这里必须声明 textInput，这样 ref 才可以引用它  const textInput = useRef(null);
  function handleClick() {
    textInput.current.focus();  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}
```

#### 将 DOM Refs 暴露给父组件

在极少数情况下，你可能希望在父组件中引用子节点的 DOM 节点。通常不建议这样做，因为它会打破组件的封装，但它偶尔可用于触发焦点或测量子 DOM 节点的大小或位置。

虽然你可以[向子组件添加 ref](https://react.docschina.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component)，但这不是一个理想的解决方案，因为你只能获取组件实例而不是 DOM 节点。并且，它还在函数组件上无效。

如果你使用 16.3 或更高版本的 React, 这种情况下我们推荐使用 [ref 转发](https://react.docschina.org/docs/forwarding-refs.html)。**Ref 转发使组件可以像暴露自己的 ref 一样暴露子组件的 ref**。关于怎样对父组件暴露子组件的 DOM 节点，在 [ref 转发文档](https://react.docschina.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components)中有一个详细的例子。

如果你使用 16.2 或更低版本的 React，或者你需要比 ref 转发更高的灵活性，你可以使用[这个替代方案](https://gist.github.com/gaearon/1a018a023347fe1c2476073330cc5509)将 ref 作为特殊名字的 prop 直接传递。

可能的话，我们不建议暴露 DOM 节点，但有时候它会成为救命稻草。注意这个方案需要你在子组件中增加一些代码。如果你对子组件的实现没有控制权的话，你剩下的选择是使用 [`findDOMNode()`](https://react.docschina.org/docs/react-dom.html#finddomnode)，但在[`严格模式`](https://react.docschina.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage) 下已被废弃且不推荐使用。

#### 回调 Refs

React 也支持另一种设置 refs 的方式，称为“回调 refs”。它能助你更精细地控制何时 refs 被设置和解除。

不同于传递 `createRef()` 创建的 `ref` 属性，你会传递一个函数。这个函数中接受 React 组件实例或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。

下面的例子描述了一个通用的范例：使用 `ref` 回调函数，在实例的属性中存储对 DOM 节点的引用。

```
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInputRef = element => {      this.textInput = element;    };
    this.focusTextInput = () => {      // 使用原生 DOM API 使 text 输入框获得焦点      if (this.textInput) this.textInput.focus();    };  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}        />
      </div>
    );
  }
}
```

React 将在组件挂载时，会调用 `ref` 回调函数并传入 DOM 元素，当卸载时调用它并传入 `null`。在 `componentDidMount` 或 `componentDidUpdate` 触发前，React 会保证 refs 一定是最新的。

你可以在组件间传递回调形式的 refs，就像你可以传递通过 `React.createRef()` 创建的对象 refs 一样。

```
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}      />
    );
  }
}
```

在上面的例子中，`Parent` 把它的 refs 回调函数当作 `inputRef` props 传递给了 `CustomTextInput`，而且 `CustomTextInput` 把相同的函数作为特殊的 `ref` 属性传递给了 `<input>`。结果是，在 `Parent` 中的 `this.inputElement` 会被设置为与 `CustomTextInput` 中的 `input` 元素相对应的 DOM 节点。

#### 过时 API：String 类型的 Refs

如果你之前使用过 React，你可能了解过之前的 API 中的 string 类型的 ref 属性，例如 `"textInput"`。你可以通过 `this.refs.textInput` 来访问 DOM 节点。我们不建议使用它，因为 string 类型的 refs 存在 [一些问题](https://github.com/facebook/react/pull/8333#issuecomment-271648615)。它已过时并可能会在未来的版本被移除。

> 注意
>
> 如果你目前还在使用 `this.refs.textInput` 这种方式访问 refs ，我们建议用[回调函数](https://react.docschina.org/docs/refs-and-the-dom.html#callback-refs)或 [`createRef` API](https://react.docschina.org/docs/refs-and-the-dom.html#creating-refs) 的方式代替。

#### 关于回调 refs 的说明

如果 `ref` 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

### Render Props

术语 [“render prop”](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术

具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑。

```
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

使用 render prop 的库有 [React Router](https://reacttraining.com/react-router/web/api/Route/render-func)、[Downshift](https://github.com/paypal/downshift) 以及 [Formik](https://github.com/jaredpalmer/formik)。

在这个文档中，我们将讨论为什么 render prop 是有用的，以及如何写一个自己的 render prop 组件。

#### 使用 Render Props 来解决横切关注点（Cross-Cutting Concerns）

组件是 React 代码复用的主要单元，但如何分享一个组件封装到其他需要相同 state 组件的状态或行为并不总是很容易。

例如，以下组件跟踪 Web 应用程序中的鼠标位置：

```
class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <h1>移动鼠标!</h1>
        <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}
```

当光标在屏幕上移动时，组件在 `<p>` 中显示其（x，y）坐标。

现在的问题是：我们如何在另一个组件中复用这个行为？换个说法，若另一个组件需要知道鼠标位置，我们能否封装这一行为，以便轻松地与其他组件共享它？？

由于组件是 React 中最基础的代码复用单元，现在尝试重构一部分代码使其能够在 `<Mouse>` 组件中封装我们需要共享的行为。

```
// <Mouse> 组件封装了我们需要的行为...
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/* ...但我们如何渲染 <p> 以外的东西? */}
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>移动鼠标!</h1>
        <Mouse />
      </>
    );
  }
}
```

现在 `<Mouse>` 组件封装了所有关于监听 `mousemove` 事件和存储鼠标 (x, y) 位置的行为，但其仍不是真正的可复用。

举个例子，假设我们有一个 `<Cat>` 组件，它可以呈现一张在屏幕上追逐鼠标的猫的图片。我们或许会使用 `<Cat mouse={{ x, y }}` prop 来告诉组件鼠标的坐标以让它知道图片应该在屏幕哪个位置。

首先, 你或许会像这样，尝试在 `<Mouse>` 内部的渲染方法渲染 `<Cat>` 组件：:

```
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class MouseWithCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          我们可以在这里换掉 <p> 的 <Cat>   ......
          但是接着我们需要创建一个单独的 <MouseWithSomethingElse>
          每次我们需要使用它时，<MouseWithCat> 是不是真的可以重复使用.
        */}
        <Cat mouse={this.state} />
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <MouseWithCat />
      </div>
    );
  }
}
```

这种方法适用于我们的特定用例，但我们还没有达到以可复用的方式真正封装行为的目标。现在，每当我们想要鼠标位置用于不同的用例时，我们必须创建一个新的组件（本质上是另一个 `<MouseWithCat>` ），它专门为该用例呈现一些东西.

这也是 render prop 的来历：我们可以提供一个带有函数 prop 的 `<Mouse>` 组件，它能够动态决定什么需要渲染的，而不是将 `<Cat>` 硬编码到 `<Mouse>` 组件里，并有效地改变它的渲染结果。

```
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}
```

现在，我们提供了一个 `render` 方法 让 `<Mouse>` 能够动态决定什么需要渲染，而不是克隆 `<Mouse>` 组件然后硬编码来解决特定的用例。

更具体地说，**render prop 是一个用于告知组件需要渲染什么内容的函数 prop。**

这项技术使我们共享行为非常容易。要获得这个行为，只要渲染一个带有 `render` prop 的 `<Mouse>` 组件就能够告诉它当前鼠标坐标 (x, y) 要渲染什么。

关于 render prop 一个有趣的事情是你可以使用带有 render prop 的常规组件来实现大多数[高阶组件](https://react.docschina.org/docs/higher-order-components.html) (HOC)。 例如，如果你更喜欢使用 `withMouse` HOC而不是 `<Mouse>` 组件，你可以使用带有 render prop 的常规 `<Mouse>` 轻松创建一个：

```
// 如果你出于某种原因真的想要 HOC，那么你可以轻松实现
// 使用具有 render prop 的普通组件创建一个！
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => (
          <Component {...this.props} mouse={mouse} />
        )}/>
      );
    }
  }
}
```

因此，你可以将任一模式与 render prop 一起使用。

#### 使用 Props 而非 `render`

重要的是要记住，render prop 是因为模式才被称为 *render* prop ，你不一定要用名为 `render` 的 prop 来使用这种模式。事实上， [*任何*被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce).

尽管之前的例子使用了 `render`，我们也可以简单地使用 `children` prop！

```
<Mouse children={mouse => (
  <p>鼠标的位置是 {mouse.x}，{mouse.y}</p>
)}/>
```

记住，`children` prop 并不真正需要添加到 JSX 元素的 “attributes” 列表中。相反，你可以直接放置到元素的*内部*！

```
<Mouse>
  {mouse => (
    <p>鼠标的位置是 {mouse.x}，{mouse.y}</p>
  )}
</Mouse>
```

你将在 [react-motion](https://github.com/chenglou/react-motion) 的 API 中看到此技术。

由于这一技术的特殊性，当你在设计一个类似的 API 时，你或许会要直接地在你的 propTypes 里声明 children 的类型应为一个函数。

```
Mouse.propTypes = {
  children: PropTypes.func.isRequired
};
```

#### 注意事项

##### 将 Render Props 与 React.PureComponent 一起使用时要小心

如果你在 render 方法里创建函数，那么使用 render prop 会抵消使用 [`React.PureComponent`](https://react.docschina.org/docs/react-api.html#reactpurecomponent) 带来的优势。因为浅比较 props 的时候总会得到 false，并且在这种情况下每一个 `render` 对于 render prop 将会生成一个新的值。

例如，继续我们之前使用的 `<Mouse>` 组件，如果 `Mouse` 继承自 `React.PureComponent` 而不是 `React.Component`，我们的例子看起来就像这样：

```
class Mouse extends React.PureComponent {
  // 与上面相同的代码......
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>

        {/*
          这是不好的！
          每个渲染的 `render` prop的值将会是不同的。
        */}
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}
```

在这样例子中，每次 `<MouseTracker>` 渲染，它会生成一个新的函数作为 `<Mouse render>` 的 prop，因而在同时也抵消了继承自 `React.PureComponent` 的 `<Mouse>` 组件的效果！

为了绕过这一问题，有时你可以定义一个 prop 作为实例方法，类似这样：

```
class MouseTracker extends React.Component {
  // 定义为实例方法，`this.renderTheCat`始终
  // 当我们在渲染中使用它时，它指的是相同的函数
  renderTheCat(mouse) {
    return <Cat mouse={mouse} />;
  }

  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={this.renderTheCat} />
      </div>
    );
  }
}
```

如果你无法静态定义 prop（例如，因为你需要关闭组件的 props 和/或 state），则 `<Mouse>` 应该扩展 `React.Component`。

### 静态类型检查

像 [Flow](https://flow.org/) 和 [TypeScript](https://www.typescriptlang.org/) 等这些静态类型检查器，可以在运行前识别某些类型的问题。他们还可以通过增加自动补全等功能来改善开发者的工作流程。出于这个原因，我们建议在大型代码库中使用 Flow 或 TypeScript 来代替 `PropTypes`。

#### Flow

[Flow](https://flow.org/) 是一个针对 JavaScript 代码的静态类型检测器。Flow 由 Facebook 开发，经常与 React 一起使用。Flow 通过特殊的类型语法为变量，函数，以及 React 组件提供注解，帮助你尽早地发现错误。你可以阅读 [introduction to Flow](https://flow.org/en/docs/getting-started/) 来了解它的基础知识。

完成以下步骤，便可开始使用 Flow：

- 将 Flow 添加到你的项目依赖中。
- 确保编译后的代码中去除了 Flow 语法。
- 添加类型注解并且运行 Flow 来检查它们。

下面我们会详细解释这些步骤。

#### 在项目中添加 Flow

首先，在终端中进入到项目根目录下。然后你需要执行以下命令：

如果你使用 [Yarn](https://yarnpkg.com/)，执行：

```
yarn add --dev flow-bin
```

如果你使用 [npm](https://www.npmjs.com/)，执行：

```
npm install --save-dev flow-bin
```

这个命令将在你的项目中安装最新版的 Flow。

接下来，将 `flow` 添加到项目 `package.json` 的 `"scripts"` 部分，以便能够从终端命令行中使用它：

```
{
  // ...
  "scripts": {
    "flow": "flow",    // ...
  },
  // ...
}
```

最后，执行以下命令之一：

如果你使用 [Yarn](https://yarnpkg.com/)，执行：

```
yarn run flow init
```

如果你使用 [npm](https://www.npmjs.com/)，执行：

```
npm run flow init
```

这条命令将生成你需要提交的 Flow 配置文件。

#### 从编译后的代码中去除 Flow 语法

Flow 通过这种类型注释的特殊语法扩展了 JavaScript 语言。但是，浏览器不能够解析这种语法，所以我们需要确保它不会被编译到在浏览器执行的 JavaScript bundle 中。

具体方法取决于你使用的 JavaScript 编译工具。

##### Create React App

如果你的项目使用的是 [Create React App](https://github.com/facebookincubator/create-react-app)，那么 Flow 注解默认会被去除，所以在这一步你不需要做任何事情。

##### Babel

> 注意：
>
> 这些说明*不适用*于使用 Create React App 的用户。虽然 Create React App 底层也使用了 Babel，但它已经配置了去除 Flow。如果你*没有*使用 Create React App，请执行此步骤。

如果你的项目手动配置了 Babel，你需要为 Flow 安装一个特殊的 preset。

如果你使用 Yarn，执行：

```
yarn add --dev @babel/preset-flow
```

如果你使用 npm，执行：

```
npm install --save-dev @babel/preset-flow
```

接下来将 `flow` preset 添加到你的 [Babel 配置](https://babeljs.io/docs/usage/babelrc/) 配置中。例如，如果你通过 `.babelrc` 文件配置 Babel，它可能会如下所示：

```
{
  "presets": [
    "@babel/preset-flow",    "react"
  ]
}
```

这将让你可以在代码中使用 Flow 语法。

> 注意：
>
> Flow 不需要 react preset，但他们经常一起使用。Flow 内置了 JSX 的语法识别。

##### 其他构建工具设置

如果没有使用 Create React App 或 Babel 来构建项目，可以通过 [flow-remove-types](https://github.com/flowtype/flow-remove-types) 去除类型注解。

#### 运行 Flow

如果你按照上面的说明操作，你应该能运行 Flow 了。

```
yarn flow
```

如果你使用 npm，执行：

```
npm run flow
```

你应该会看到如下消息：

```
No errors!
✨  Done in 0.17s.
```

#### 添加 Flow 类型注释

默认情况下，Flow 仅检查包含此注释的文件：

```
// @flow
```

通常，它位于文件的顶部。试着将其添加到项目的某些文件中，然后运行 `yarn flow` 或 `npm run flow` 来查看 Flow 是否已经发现了一些问题。

还可以通过[这个选项](https://flow.org/en/docs/config/options/#toc-all-boolean)开启*所有*文件（包括没有注解的文件）的强制检查。通过 Flow 来检查全部文件对于现有的项目来说，可能导致大量修改，但对于希望完全集成 Flow 的新项目来说开启这个选项比较合理。

现在一切就绪！我们建议你查看以下资源来了解有关 Flow 的更多信息：

- [Flow 文档：类型注解](https://flow.org/en/docs/types/)
- [Flow 文档：编辑器](https://flow.org/en/docs/editors/)
- [Flow 文档：React](https://flow.org/en/docs/react/)
- [在 Flow 中进行 lint](https://medium.com/flow-type/linting-in-flow-7709d7a7e969)

### TypeScript

[TypeScript](https://www.typescriptlang.org/) 是一种由微软开发的编程语言。它是 JavaScript 的一个类型超集，包含独立的编译器。作为一种类型语言，TypeScript 可以在构建时发现 bug 和错误，这样程序运行时就可以避免此类错误。您可以通过[此文档](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter) 了解更多有关在 React 中使用 TypeScript 的知识。

完成以下步骤，便可开始使用 TypeScript：

- 将 TypeScript 添加到你的项目依赖中。
- 配置 TypeScript 编译选项
- 使用正确的文件扩展名
- 为你使用的库添加定义

下面让我们详细地介绍一下这些步骤：

#### 在 Create React App 中使用 TypeScript

Create React App 内置了对 TypeScript 的支持。

需要创建一个使用 TypeScript 的**新项目**，在终端运行：

```
npx create-react-app my-app --template typescript
```

如需将 TypeScript 添加到**现有的 Create React App 项目**中，[请参考此文档](https://facebook.github.io/create-react-app/docs/adding-typescript).

> 注意：
>
> 如果你使用的是 Create React App，可以跳过本节的其余部分。其余部分讲述了不使用 Create React App 脚手架，手动配置项目的用户。

#### 添加 TypeScript 到现有项目中

这一切都始于在终端中执行的一个命令。

如果你使用 [Yarn](https://yarnpkg.com/)，执行：

```
yarn add --dev typescript
```

如果你使用 [npm](https://www.npmjs.com/)，执行：

```
npm install --save-dev typescript
```

恭喜！你已将最新版本的 TypeScript 安装到项目中。安装 TypeScript 后我们就可以使用 `tsc` 命令。在配置编译器之前，让我们将 `tsc` 添加到 `package.json` 中的 “scripts” 部分：

```
{
  // ...
  "scripts": {
    "build": "tsc",    // ...
  },
  // ...
}
```

#### 配置 TypeScript 编译器

没有配置项，编译器提供不了任何帮助。在 TypeScript 里，这些配置项都在一个名为 `tsconfig.json` 的特殊文件中定义。可以通过执行以下命令生成该文件：

如果你使用 [Yarn](https://yarnpkg.com/)，执行：

```
yarn run tsc --init
```

如果你使用 [npm](https://www.npmjs.com/)，执行：

```
npx tsc --init
```

`tsconfig.json` 文件中，有许多配置项用于配置编译器。查看所有配置项的的详细说明，[请参考此文档](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)。

我们来看一下 `rootDir` 和 `outDir` 这两个配置项。编译器将从项目中找到 TypeScript 文件并编译成相对应 JavaScript 文件。但我们不想混淆源文件和编译后的输出文件。

为了解决该问题，我们将执行以下两个步骤：

- 首先，让我们重新整理下项目目录，把所有的源代码放入 `src` 目录中。

```
├── package.json
├── src
│   └── index.ts
└── tsconfig.json
```

- 其次，我们将通过配置项告诉编译器源码和输出的位置。

```
// tsconfig.json

{
  "compilerOptions": {
    // ...
    "rootDir": "src",    "outDir": "build"    // ...
  },
}
```

很好！现在，当我们运行构建脚本时，编译器会将生成的 javascript 输出到 `build` 文件夹。 [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter/blob/master/tsconfig.json) 提供了一套默认的 `tsconfig.json` 帮助你快速上手。

通常情况下，你不希望将编译后生成的 JavaScript 文件保留在版本控制内。因此，应该把构建文件夹添加到 `.gitignore` 中。

#### 文件扩展名

在 React 中，你的组件文件大多数使用 `.js` 作为扩展名。在 TypeScript 中，提供两种文件扩展名：

`.ts` 是默认的文件扩展名，而 `.tsx` 是一个用于包含 `JSX` 代码的特殊扩展名。

#### 运行 TypeScript

如果你按照上面的说明操作，现在应该能运行 TypeScript 了。

```
yarn build
```

如果你使用 npm，执行：

```
npm run build
```

如果你没有看到输出信息，这意味着它编译成功了。

#### 类型定义

为了能够显示来自其他包的错误和提示，编译器依赖于声明文件。声明文件提供有关库的所有类型信息。这样，我们的项目就可以用上像 npm 这样的平台提供的三方 JavaScript 库。

获取一个库的声明文件有两种方式：

**Bundled** - 该库包含了自己的声明文件。这样很好，因为我们只需要安装这个库，就可以立即使用它了。要知道一个库是否包含类型，看库中是否有 `index.d.ts` 文件。有些库会在 `package.json` 文件的 `typings` 或 `types` 属性中指定类型文件。

**[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)** - DefinitelyTyped 是一个庞大的声明仓库，为没有声明文件的 JavaScript 库提供类型定义。这些类型定义通过众包的方式完成，并由微软和开源贡献者一起管理。例如，React 库并没有自己的声明文件。但我们可以从 DefinitelyTyped 获取它的声明文件。只要执行以下命令。

```
# yarn
yarn add --dev @types/react

# npm
npm i --save-dev @types/react
```

**局部声明** 有时，你要使用的包里没有声明文件，在 DefinitelyTyped 上也没有。在这种情况下，我们可以创建一个本地的定义文件。因此，在项目的根目录中创建一个 `declarations.d.ts` 文件。一个简单的声明可能是这样的：

```
declare module 'querystring' {
  export function stringify(val: object): string
  export function parse(val: string): object
}
```

你现在已做好编码准备了！我们建议你查看以下资源来了解有关 TypeScript 的更多知识：

- [TypeScript 文档：基本类型](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [TypeScript 文档：JavaScript 迁移](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)
- [TypeScript 文档：React 与 Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

#### Reason

[Reason](https://reasonml.github.io/) 不是一种新的语言；它是一种新的语法和工具链，底层使用的是经过实战验证的 [OCaml](https://ocaml.org/) 语言。Reason 在 OCaml 之上提供了 JavaScript 程序员的熟悉语法，而且集成了现有的 NPM/Yarn 工作流。

Reason 是由 Facebook 开发，并且运用在一些现有产品中比如 Messager。虽然它有一定的实验性质，但它拥有由 Facebook 维护的[专门的 React 绑定](https://reasonml.github.io/reason-react/)和一个[活跃的社区](https://reasonml.github.io/docs/en/community.html)。

#### Kotlin

[Kotlin](https://kotlinlang.org/) 是由 JetBrains 开发的一门静态类型语言。其目标平台包括 JVM、Android、LLVM 和 [JavaScript](https://kotlinlang.org/docs/reference/js-overview.html)。

JetBrains 专门为 React 社区开发和维护了几个工具：[React bindings](https://github.com/JetBrains/kotlin-wrappers) 以及 [Create React Kotlin App](https://github.com/JetBrains/create-react-kotlin-app)。后者可以通过 Kotlin 快速编写 React 应用程序，并且不需要构建配置。

#### 其他语言

注意，还有其他静态类型语言可以编译成 JavaScript，也与 React 兼容。例如，和 [elmish-react](https://elmish.github.io/react) 一起使用的 [F#/Fable](https://fable.io/)。查看他们各自的网站以获取更多信息，并欢迎添加更多和与 React 结合的静态类型语言到这个页面！

### 严格模式

`StrictMode` 是一个用来突出显示应用程序中潜在问题的工具。与 `Fragment` 一样，`StrictMode` 不会渲染任何可见的 UI。它为其后代元素触发额外的检查和警告。

> 注意：
>
> 严格模式检查仅在开发模式下运行；*它们不会影响生产构建*。

你可以为应用程序的任何部分启用严格模式。例如：

```
import React from 'react';

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>      <Footer />
    </div>
  );
}
```



在上述的示例中，*不*会对 `Header` 和 `Footer` 组件运行严格模式检查。但是，`ComponentOne` 和 `ComponentTwo` 以及它们的所有后代元素都将进行检查。

`StrictMode` 目前有助于：

- [识别不安全的生命周期](https://react.docschina.org/docs/strict-mode.html#identifying-unsafe-lifecycles)
- [关于使用过时字符串 ref API 的警告](https://react.docschina.org/docs/strict-mode.html#warning-about-legacy-string-ref-api-usage)
- [关于使用废弃的 findDOMNode 方法的警告](https://react.docschina.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)
- [检测意外的副作用](https://react.docschina.org/docs/strict-mode.html#detecting-unexpected-side-effects)
- [检测过时的 context API](https://react.docschina.org/docs/strict-mode.html#detecting-legacy-context-api)

未来的 React 版本将添加更多额外功能。

#### 识别不安全的生命周期

正如[这篇博文](https://react.docschina.org/blog/2018/03/27/update-on-async-rendering.html)所述，某些过时的生命周期方法在异步 React 应用程序中使用是不安全的。但是，如果你的应用程序使用了第三方库，很难确保它们不使用这些生命周期方法。幸运的是，严格模式可以帮助解决这个问题！

当启用严格模式时，React 会列出使用了不安全生命周期方法的所有 class 组件，并打印一条包含这些组件信息的警告消息，如下所示：

[![strict mode unsafe lifecycles warning](https://react.docschina.org/static/e4fdbff774b356881123e69ad88eda88/1e088/strict-mode-unsafe-lifecycles-warning.png)](https://react.docschina.org/static/e4fdbff774b356881123e69ad88eda88/1628f/strict-mode-unsafe-lifecycles-warning.png)

*此时*解决项目中严格模式所识别出来的问题，会使得在未来的 React 版本中使用 concurrent 渲染变得更容易。

#### 关于使用过时字符串 ref API 的警告

以前，React 提供了两种方法管理 refs 的方式：已过时的字符串 ref API 的形式及回调函数 API 的形式。尽管字符串 ref API 在两者中使用更方便，但是它有[一些缺点](https://github.com/facebook/react/issues/1373)，因此官方推荐采用[回调的方式](https://react.docschina.org/docs/refs-and-the-dom.html#legacy-api-string-refs)。

React 16.3 新增了第三种选择，它提供了使用字符串 ref 的便利性，并且不存在任何缺点：

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();  }

  render() {
    return <input type="text" ref={this.inputRef} />;  }

  componentDidMount() {
    this.inputRef.current.focus();  }
}
```



由于对象 ref 主要是为了替换字符串 ref 而添加的，因此严格模式现在会警告使用字符串 ref。

> **注意：**
>
> 除了新增加的 `createRef` API，回调 ref 依旧适用。
>
> 你无需替换组件中的回调 ref。它们更灵活，因此仍将作为高级功能保留。

[在此处了解有关 `createRef` API 的更多信息](https://react.docschina.org/docs/refs-and-the-dom.html)

#### 关于使用废弃的 findDOMNode 方法的警告

React 支持用 `findDOMNode` 来在给定 class 实例的情况下在树中搜索 DOM 节点。通常你不需要这样做，因为你可以[将 ref 直接绑定到 DOM 节点](https://react.docschina.org/docs/refs-and-the-dom.html#creating-refs)。

`findDOMNode` 也可用于 class 组件，但它违反了抽象原则，它使得父组件需要单独渲染子组件。它会产生重构危险，你不能更改组件的实现细节，因为父组件可能正在访问它的 DOM 节点。`findDOMNode` 只返回第一个子节点，但是使用 Fragments，组件可以渲染多个 DOM 节点。`findDOMNode` 是一个只读一次的 API。调用该方法只会返回第一次查询的结果。如果子组件渲染了不同的节点，则无法跟踪此更改。因此，`findDOMNode` 仅在组件返回单个且不可变的 DOM 节点时才有效。

你可以通过将 ref 传递给自定义组件并使用 [ref 转发](https://react.docschina.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components)来将其传递给 DOM 节点。

你也可以在组件中创建一个 DOM 节点的 wrapper，并将 ref 直接绑定到它。

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();  }
  render() {
    return <div ref={this.wrapper}>{this.props.children}</div>;  }
}
```

> 注意：
>
> 在 CSS 中，如果你不希望节点成为布局的一部分，则可以使用 [`display: contents`](https://developer.mozilla.org/en-US/docs/Web/CSS/display#display_contents) 属性。

#### 检测意外的副作用

从概念上讲，React 分两个阶段工作：

- **渲染** 阶段会确定需要进行哪些更改，比如 DOM。在此阶段，React 调用 `render`，然后将结果与上次渲染的结果进行比较。
- **提交** 阶段发生在当 React 应用变化时。（对于 React DOM 来说，会发生在 React 插入，更新及删除 DOM 节点的时候。）在此阶段，React 还会调用 `componentDidMount` 和 `componentDidUpdate` 之类的生命周期方法。

提交阶段通常会很快，但渲染过程可能很慢。因此，即将推出的 concurrent 模式 (默认情况下未启用) 将渲染工作分解为多个部分，对任务进行暂停和恢复操作以避免阻塞浏览器。这意味着 React 可以在提交之前多次调用渲染阶段生命周期的方法，或者在不提交的情况下调用它们（由于出现错误或更高优先级的任务使其中断）。

渲染阶段的生命周期包括以下 class 组件方法：

- `constructor`
- `componentWillMount` (or `UNSAFE_componentWillMount`)
- `componentWillReceiveProps` (or `UNSAFE_componentWillReceiveProps`)
- `componentWillUpdate` (or `UNSAFE_componentWillUpdate`)
- `getDerivedStateFromProps`
- `shouldComponentUpdate`
- `render`
- `setState` 更新函数（第一个参数）

因为上述方法可能会被多次调用，所以不要在它们内部编写副作用相关的代码，这点非常重要。忽略此规则可能会导致各种问题的产生，包括内存泄漏和或出现无效的应用程序状态。不幸的是，这些问题很难被发现，因为它们通常具有[非确定性](https://en.wikipedia.org/wiki/Deterministic_algorithm)。

严格模式不能自动检测到你的副作用，但它可以帮助你发现它们，使它们更具确定性。通过故意重复调用以下函数来实现的该操作：

- class 组件的 `constructor`，`render` 以及 `shouldComponentUpdate` 方法
- class 组件的生命周期方法 `getDerivedStateFromProps`
- 函数组件体
- 状态更新函数 (即 `setState` 的第一个参数）
- 函数组件通过使用 `useState`，`useMemo` 或者 `useReducer`

> 注意：
>
> 这仅适用于开发模式。*生产模式下生命周期不会被调用两次。*

例如，请考虑以下代码：

```
class TopLevelRoute extends React.Component {
  constructor(props) {
    super(props);

    SharedApplicationState.recordEvent('ExampleComponent');
  }
}
```



这段代码看起来似乎没有问题。但是如果 `SharedApplicationState.recordEvent` 不是[幂等](https://en.wikipedia.org/wiki/Idempotence#Computer_science_meaning)的情况下，多次实例化此组件可能会导致应用程序状态无效。这种小 bug 可能在开发过程中可能不会表现出来，或者说表现出来但并不明显，并因此被忽视。

严格模式采用故意重复调用方法（如组件的构造函数）的方式，使得这种 bug 更容易被发现。

#### 检测过时的 context API

过时的 context API 容易出错，将在未来的主要版本中删除。在所有 16.x 版本中它仍然有效，但在严格模式下，将显示以下警告：

[![warn legacy context in strict mode](https://react.docschina.org/static/fca5c5e1fb2ef2e2d59afb100b432c12/1e088/warn-legacy-context-in-strict-mode.png)](https://react.docschina.org/static/fca5c5e1fb2ef2e2d59afb100b432c12/51800/warn-legacy-context-in-strict-mode.png)

阅读[新的 context API 文档](https://react.docschina.org/docs/context.html)以帮助你迁移到新版本。

### 使用 PropTypes 进行类型检查

> 注意：
>
> 自 React v15.5 起，`React.PropTypes` 已移入另一个包中。请使用 [`prop-types` 库](https://www.npmjs.com/package/prop-types) 代替。
>
> 我们提供了一个 [codemod 脚本](https://react.docschina.org/blog/2017/04/07/react-v15.5.0.html#migrating-from-reactproptypes)来做自动转换。

随着你的应用程序不断增长，你可以通过类型检查捕获大量错误。对于某些应用程序来说，你可以使用 [Flow](https://flow.org/) 或 [TypeScript](https://www.typescriptlang.org/) 等 JavaScript 扩展来对整个应用程序做类型检查。但即使你不使用这些扩展，React 也内置了一些类型检查的功能。要在组件的 props 上进行类型检查，你只需配置特定的 `propTypes` 属性：

```
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```

`PropTypes` 提供一系列验证器，可用于确保组件接收到的数据类型是有效的。在本例中, 我们使用了 `PropTypes.string`。当传入的 `prop` 值类型不正确时，JavaScript 控制台将会显示警告。出于性能方面的考虑，`propTypes` 仅在开发模式下进行检查。

#### PropTypes

以下提供了使用不同验证器的例子：

```
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // 你可以将属性声明为 JS 原生类型，默认情况下
  // 这些属性都是可选的。
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 任何可被渲染的元素（包括数字、字符串、元素或数组）
  // (或 Fragment) 也包含这些类型。
  optionalNode: PropTypes.node,

  // 一个 React 元素。
  optionalElement: PropTypes.element,

  // 一个 React 元素类型（即，MyComponent）。
  optionalElementType: PropTypes.elementType,

  // 你也可以声明 prop 为类的实例，这里使用
  // JS 的 instanceof 操作符。
  optionalMessage: PropTypes.instanceOf(Message),

  // 你可以让你的 prop 只能是特定的值，指定它为
  // 枚举类型。
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 一个对象可以是几种类型中的任意一个类型
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 可以指定一个数组由某一类型的元素组成
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 可以指定一个对象由某一类型的值组成
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 可以指定一个对象由特定的类型值组成
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
  
  // An object with warnings on extra properties
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),   

  // 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
  // 这个 prop 没有被提供时，会打印警告信息。
  requiredFunc: PropTypes.func.isRequired,

  // 任意类型的数据
  requiredAny: PropTypes.any.isRequired,

  // 你可以指定一个自定义验证器。它在验证失败时应返回一个 Error 对象。
  // 请不要使用 `console.warn` 或抛出异常，因为这在 `onOfType` 中不会起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 你也可以提供一个自定义的 `arrayOf` 或 `objectOf` 验证器。
  // 它应该在验证失败时返回一个 Error 对象。
  // 验证器将验证数组或对象中的每个值。验证器的前两个参数
  // 第一个是数组或对象本身
  // 第二个是他们当前的键。
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```

#### 限制单个元素

你可以通过 `PropTypes.element` 来确保传递给组件的 children 中只包含一个元素。

```
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    // 这必须只有一个元素，否则控制台会打印警告。
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};
```

#### 默认 Prop 值

您可以通过配置特定的 `defaultProps` 属性来定义 `props` 的默认值：

```
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// 指定 props 的默认值：
Greeting.defaultProps = {
  name: 'Stranger'
};

// 渲染出 "Hello, Stranger"：
ReactDOM.render(
  <Greeting />,
  document.getElementById('example')
);
```

如果你正在使用像 [transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/) 的 Babel 转换工具，你也可以在 React 组件类中声明 `defaultProps` 作为静态属性。此语法提案还没有最终确定，需要进行编译后才能在浏览器中运行。要了解更多信息，请查阅 [class fields proposal](https://github.com/tc39/proposal-class-fields)。

```
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}
```

`defaultProps` 用于确保 `this.props.name` 在父组件没有指定其值时，有一个默认值。`propTypes` 类型检查发生在 `defaultProps` 赋值后，所以类型检查也适用于 `defaultProps`。

### 非受控组件

在大多数情况下，我们推荐使用 [受控组件](https://react.docschina.org/docs/forms.html#controlled-components) 来处理表单数据。在一个受控组件中，表单数据是由 React 组件来管理的。另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。

要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，你可以 [使用 ref](https://react.docschina.org/docs/refs-and-the-dom.html) 来从 DOM 节点中获取表单数据。

例如，下面的代码使用非受控组件接受一个表单的值：

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

[**在 CodePen 上尝试**](https://codepen.io/gaearon/pen/WooRWa?editors=0010)

因为非受控组件将真实数据储存在 DOM 节点中，所以在使用非受控组件时，有时候反而更容易同时集成 React 和非 React 代码。如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。否则，你应该使用受控组件。

如果你还是不清楚在某个特殊场景中应该使用哪种组件，那么 [这篇关于受控和非受控输入组件的文章](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/) 会很有帮助。

#### 默认值

在 React 渲染生命周期时，表单元素上的 `value` 将会覆盖 DOM 节点中的值，在非受控组件中，你经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 你可以指定一个 `defaultValue` 属性，而不是 `value`。

```
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="Bob"          type="text"
          ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

同样，`<input type="checkbox">` 和 `<input type="radio">` 支持 `defaultChecked`，`<select>` 和 `<textarea>` 支持 `defaultValue`。

#### 文件输入

在 HTML 中，`<input type="file">` 可以让用户选择一个或多个文件上传到服务器，或者通过使用 [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) 进行操作。

```
<input type="file" />
```

在 React 中，`<input type="file" />` 始终是一个非受控组件，因为它的值只能由用户设置，而不能通过代码控制。

您应该使用 File API 与文件进行交互。下面的例子显示了如何创建一个 [DOM 节点的 ref](https://react.docschina.org/docs/refs-and-the-dom.html) 从而在提交表单时获取文件的信息。

```
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <FileInput />,
  document.getElementById('root')
);
```

[**在 CodePen 上尝试**](https://react.docschina.org/redirect-to-codepen/uncontrolled-components/input-type-file)

### Web Components

React 和 [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 为了解决不同的问题而生。Web Components 为可复用组件提供了强大的封装，而 React 则提供了声明式的解决方案，使 DOM 与数据保持同步。两者旨在互补。作为开发人员，可以自由选择在 Web Components 中使用 React，或者在 React 中使用 Web Components，或者两者共存。

大多数开发者在使用 React 时，不使用 Web Components，但可能你会需要使用，尤其是在使用 Web Components 编写的第三方 UI 组件时。

#### 在 React 中使用 Web Components

```
class HelloMessage extends React.Component {
  render() {
    return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
  }
}
```

> 注意：
>
> Web Components 通常暴露的是命令式 API。例如，Web Components 的组件 `video` 可能会公开 `play()` 和 `pause()` 方法。要访问 Web Components 的命令式 API，你需要使用 `ref` 直接与 DOM 节点进行交互。如果你使用的是第三方 Web Components，那么最好的解决方案是编写 React 组件包装该 Web Components。
>
> Web Components 触发的事件可能无法通过 React 渲染树正确的传递。 你需要在 React 组件中手动添加事件处理器来处理这些事件。

常见的误区是在 Web Components 中使用的是 `class` 而非 `className`。

```
function BrickFlipbox() {
  return (
    <brick-flipbox class="demo">
      <div>front</div>
      <div>back</div>
    </brick-flipbox>
  );
}
```

#### 在 Web Components 中使用 React

```
class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}
customElements.define('x-search', XSearch);
```

> 注意：
>
> 如果使用 Babel 来转换 class，此代码将**不会**起作用。请查阅该 [issue](https://github.com/w3c/webcomponents/issues/587) 了解相关讨论。 在加载 Web Components 前请引入 [custom-elements-es5-adapter](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs#custom-elements-es5-adapterjs) 来解决该 issue。

### 拉取API数据

推荐在 [`componentDidMount`](https://reactjs.bootcss.com/docs/react-component.html#mounting) 这个生命周期函数中发起 AJAX 请求。这样做可以拿到 AJAX 请求返回的数据并通过 `setState` 来更新组件。

React 的一种非常常见的用法是从 API 中提取数据。了解如何通过状态数组创建组件、渲染和映射。此代码的新方面是`componentDidMount()`React 生命周期方法。**生命周期**是在 React 中调用方法的顺序。**挂载**是指一个项目被插入到 DOM 中。

当我们拉入 API 数据时，我们想使用`componentDidMount`，因为我们想确保在我们引入数据之前组件已经渲染到 DOM。在下面的片段中，您将看到我们如何从 Wikipedia API 引入数据并将其显示在页面上
api.js

### 使用 AJAX 请求结果去改变组件内部 state

下面这个组件演示了如何在 `componentDidMount` 中发起 AJAX 请求去更新组件的 state 。

```jsx
import React from 'react';
class MyComponent extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
      //获取
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // 注意：需要在此处处理错误
        // 而不是使用 catch() 去捕获错误
        // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
// class Api extends Component{
//     state = {
//         data: [],
//     }
//     componentDidMount(){
//         const url = 'http://localhost:3300/'
//         fetch(url).then((result) => result.json())
//         .then((result) => {
//             this.setState({
//                 data:result,
//             })
//         },
//         // 注意：需要在此处处理错误
//         // 而不是使用 catch() 去捕获错误
//         // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//         )
//     }
//     render(){
//         const {data} = this.state;
//         const result = data.map((entry, index) => {
//         return <li key={index}>{entry}</li>
//         })
//     return <ul>{result}</ul>
//     }
// }
// export default Api;
export default MyComponent ;
```

在本地服务器中保存并运行此文件后，您将看到 DOM 中显示的 Wikipedia API 数据。

[![屏幕截图 2018 08 19 at 10 12 41 PM](https://www.taniarascia.com/static/a76c1cea3c47b440f00a75fb2d004084/a6d36/Screen-Shot-2018-08-19-at-10.12.41-PM.png)](https://www.taniarascia.com/static/a76c1cea3c47b440f00a75fb2d004084/b2313/Screen-Shot-2018-08-19-at-10.12.41-PM.png)

#### 构建和部署 React 应用程序

到目前为止，所做的一切都是在开发环境中进行的。一直在编译、热重载和动态更新。对于生产，我们希望加载静态文件 - 没有源代码。我们可以通过构建并部署它来做到这一点。

现在，如果您只想编译所有 React 代码并将其放在某个目录的根目录中，您需要做的就是运行以下行：

```shell
npm run build
```

这将创建一个`build`包含您的应用程序的文件夹。将该文件夹的内容放在任何地方，就大功告成了！

我们也可以更进一步，为我们部署 npm。我们将构建到 GitHub 页面，因此您必须[熟悉 Git](https://www.taniarascia.com/getting-started-with-git/)并在 GitHub 上获取您的代码。

确保您已退出本地 React 环境，因此代码当前未运行。首先，我们将向 中添加一个`homepage`字段`package.json`，该字段包含我们希望我们的应用程序赖以生存的 URL。

包.json

```js
"homepage": "https://taniarascia.github.io/react-tutorial",
```

我们还将这两行添加到`scripts`属性中。

```js
"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

在您的项目中，您将添加`gh-pages`到 devDependencies。

```shell
npm install --save-dev gh-pages
```

我们将创建`build`，它将包含所有已编译的静态文件。

```shell
npm run build
```

最后，我们将部署到`gh-pages`.

```shell
npm run deploy
```

我们完成了！该应用程序现在可在[https://taniarascia.github.io/react-tutorial 上](https://taniarascia.github.io/react-tutorial)实时使用。

## API REFERENCE

### React 顶层 API

`React` 是 React 库的入口。如果你通过使用 `<script>` 标签的方式来加载 React，则可以通过 `React` 全局变量对象来获得 React 的顶层 API。当你使用 ES6 与 npm 时，可以通过编写 `import React from 'react'` 来引入它们。当你使用 ES5 与 npm 时，则可以通过编写 `var React = require('react')` 来引入它们。

#### 概览

##### 组件

使用 React 组件可以将 UI 拆分为独立且复用的代码片段，每部分都可独立维护。你可以通过子类 `React.Component` 或 `React.PureComponent` 来定义 React 组件。

- [`React.Component`](https://react.docschina.org/docs/react-api.html#reactcomponent)
- [`React.PureComponent`](https://react.docschina.org/docs/react-api.html#reactpurecomponent)

如果你不使用 ES6 的 class，则可以使用 `create-react-class` 模块来替代。请参阅[不使用 ES6](https://react.docschina.org/docs/react-without-es6.html) 以获取更多详细信息。

React 组件也可以被定义为可被包装的函数：

- [`React.memo`](https://react.docschina.org/docs/react-api.html#reactmemo)

##### 创建 React 元素

我们建议[使用 JSX](https://react.docschina.org/docs/introducing-jsx.html) 来编写你的 UI 组件。每个 JSX 元素都是调用 [`React.createElement()`](https://react.docschina.org/docs/react-api.html#createelement) 的语法糖。一般来说，如果你使用了 JSX，就不再需要调用以下方法。

- [`createElement()`](https://react.docschina.org/docs/react-api.html#createelement)
- [`createFactory()`](https://react.docschina.org/docs/react-api.html#createfactory)

请参阅[不使用 JSX](https://react.docschina.org/docs/react-without-jsx.html) 以获取更多详细信息。

##### 转换元素

`React` 提供了几个用于操作元素的 API：

- [`cloneElement()`](https://react.docschina.org/docs/react-api.html#cloneelement)
- [`isValidElement()`](https://react.docschina.org/docs/react-api.html#isvalidelement)
- [`React.Children`](https://react.docschina.org/docs/react-api.html#reactchildren)

##### Fragments

`React` 还提供了用于减少不必要嵌套的组件。

- [`React.Fragment`](https://react.docschina.org/docs/react-api.html#reactfragment)

##### Refs

- [`React.createRef`](https://react.docschina.org/docs/react-api.html#reactcreateref)
- [`React.forwardRef`](https://react.docschina.org/docs/react-api.html#reactforwardref)

##### Suspense

Suspense 使得组件可以“等待”某些操作结束后，再进行渲染。目前，Suspense 仅支持的使用场景是：[通过 `React.lazy` 动态加载组件](https://react.docschina.org/docs/code-splitting.html#reactlazy)。它将在未来支持其它使用场景，如数据获取等。

- [`React.lazy`](https://react.docschina.org/docs/react-api.html#reactlazy)
- [`React.Suspense`](https://react.docschina.org/docs/react-api.html#reactsuspense)

##### Hook

*Hook* 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。Hook 拥有[专属文档章节](https://react.docschina.org/docs/hooks-intro.html)和单独的 API 参考文档：

- [基础 Hook](https://react.docschina.org/docs/hooks-reference.html#basic-hooks)
  - [`useState`](https://react.docschina.org/docs/hooks-reference.html#usestate)
  - [`useEffect`](https://react.docschina.org/docs/hooks-reference.html#useeffect)
  - [`useContext`](https://react.docschina.org/docs/hooks-reference.html#usecontext)
- [额外的 Hook](https://react.docschina.org/docs/hooks-reference.html#additional-hooks)
  - [`useReducer`](https://react.docschina.org/docs/hooks-reference.html#usereducer)
  - [`useCallback`](https://react.docschina.org/docs/hooks-reference.html#usecallback)
  - [`useMemo`](https://react.docschina.org/docs/hooks-reference.html#usememo)
  - [`useRef`](https://react.docschina.org/docs/hooks-reference.html#useref)
  - [`useImperativeHandle`](https://react.docschina.org/docs/hooks-reference.html#useimperativehandle)
  - [`useLayoutEffect`](https://react.docschina.org/docs/hooks-reference.html#uselayouteffect)
  - [`useDebugValue`](https://react.docschina.org/docs/hooks-reference.html#usedebugvalue)

------

#### 参考

##### `React.Component`

`React.Component` 是使用 [ES6 classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 方式定义 React 组件的基类：

```
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

请参阅 [React.Component API 参考](https://react.docschina.org/docs/react-component.html)，获取与基类 `React.Component` 相关方法和属性的详细列表。

------

##### `React.PureComponent`

`React.PureComponent` 与 [`React.Component`](https://react.docschina.org/docs/react-api.html#reactcomponent) 很相似。两者的区别在于 [`React.Component`](https://react.docschina.org/docs/react-api.html#reactcomponent) 并未实现 [`shouldComponentUpdate()`](https://react.docschina.org/docs/react-component.html#shouldcomponentupdate)，而 `React.PureComponent` 中以浅层对比 prop 和 state 的方式来实现了该函数。

如果赋予 React 组件相同的 props 和 state，`render()` 函数会渲染相同的内容，那么在某些情况下使用 `React.PureComponent` 可提高性能。

> 注意
>
> `React.PureComponent` 中的 `shouldComponentUpdate()` 仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。仅在你的 props 和 state 较为简单时，才使用 `React.PureComponent`，或者在深层数据结构发生变化时调用 [`forceUpdate()`](https://react.docschina.org/docs/react-component.html#forceupdate) 来确保组件被正确地更新。你也可以考虑使用 [immutable 对象](https://facebook.github.io/immutable-js/)加速嵌套数据的比较。
>
> 此外，`React.PureComponent` 中的 `shouldComponentUpdate()` 将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是“纯”的组件。

------

##### `React.memo`

```
const MyComponent = React.memo(function MyComponent(props) {
  /* 使用 props 渲染 */
});
```

`React.memo` 为[高阶组件](https://react.docschina.org/docs/higher-order-components.html)。它与 [`React.PureComponent`](https://react.docschina.org/docs/react-api.html#reactpurecomponent) 非常相似，但只适用于函数组件，而不适用 class 组件。

如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 `React.memo` 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。

`React.memo` 仅检查 props 变更。如果函数组件被 `React.memo` 包裹，且其实现中拥有 [`useState`](https://react.docschina.org/docs/hooks-state.html) 或 [`useContext`](https://react.docschina.org/docs/hooks-reference.html#usecontext) 的 Hook，当 context 发生变化时，它仍会重新渲染。

默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现。

```
function MyComponent(props) {
  /* 使用 props 渲染 */
}
function areEqual(prevProps, nextProps) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
}
export default React.memo(MyComponent, areEqual);
```

此方法仅作为**[性能优化](https://react.docschina.org/docs/optimizing-performance.html)**的方式而存在。但请不要依赖它来“阻止”渲染，因为这会产生 bug。

> 注意
>
> 与 class 组件中 [`shouldComponentUpdate()`](https://react.docschina.org/docs/react-component.html#shouldcomponentupdate) 方法不同的是，如果 props 相等，`areEqual` 会返回 `true`；如果 props 不相等，则返回 `false`。这与 `shouldComponentUpdate` 方法的返回值相反。

------

##### `createElement()`

```
React.createElement(
  type,
  [props],
  [...children]
)
```

创建并返回指定类型的新 [React 元素](https://react.docschina.org/docs/rendering-elements.html)。其中的类型参数既可以是标签名字符串（如 `'div'` 或 `'span'`），也可以是 [React 组件](https://react.docschina.org/docs/components-and-props.html) 类型 （class 组件或函数组件），或是 [React fragment](https://react.docschina.org/docs/react-api.html#reactfragment) 类型。

使用 [JSX](https://react.docschina.org/docs/introducing-jsx.html) 编写的代码将会被转换成使用 `React.createElement()` 的形式。如果使用了 JSX 方式，那么一般来说就不需要直接调用 `React.createElement()`。请查阅[不使用 JSX](https://react.docschina.org/docs/react-without-jsx.html) 章节获得更多信息。

------

##### `cloneElement()`

```
React.cloneElement(
  element,
  [props],
  [...children]
)
```

以 `element` 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。新的子元素将取代现有的子元素，而来自原始元素的 `key` 和 `ref` 将被保留。

`React.cloneElement()` 几乎等同于：

```
<element.type {...element.props} {...props}>{children}</element.type>
```

但是，这也保留了组件的 `ref`。这意味着当通过 `ref` 获取子节点时，你将不会意外地从你祖先节点上窃取它。相同的 `ref` 将添加到克隆后的新元素中。

引入此 API 是为了替换已弃用的 `React.addons.cloneWithProps()`。

------

##### `createFactory()`

```
React.createFactory(type)
```

返回用于生成指定类型 React 元素的函数。与 [`React.createElement()`](https://react.docschina.org/docs/react-api.html#createelement) 相似的是，类型参数既可以是标签名字符串（像是 `'div'` 或 `'span'`），也可以是 [React 组件](https://react.docschina.org/docs/components-and-props.html) 类型 （class 组件或函数组件），或是 [React fragment](https://react.docschina.org/docs/react-api.html#reactfragment) 类型。

此辅助函数已废弃，建议使用 JSX 或直接调用 `React.createElement()` 来替代它。

如果你使用 JSX，通常不会直接调用 `React.createFactory()`。请参阅[不使用 JSX](https://react.docschina.org/docs/react-without-jsx.html) 以获得更多信息。

------

##### `isValidElement()`

```
React.isValidElement(object)
```

验证对象是否为 React 元素，返回值为 `true` 或 `false`。

------

##### `React.Children`

`React.Children` 提供了用于处理 `this.props.children` 不透明数据结构的实用方法。

##### `React.Children.map`

```
React.Children.map(children, function[(thisArg)])
```

在 `children` 里的每个直接子节点上调用一个函数，并将 `this` 设置为 `thisArg`。如果 `children` 是一个数组，它将被遍历并为数组中的每个子节点调用该函数。如果子节点为 `null` 或是 `undefined`，则此方法将返回 `null` 或是 `undefined`，而不会返回数组。

> 注意
>
> 如果 `children` 是一个 `Fragment` 对象，它将被视为单一子节点的情况处理，而不会被遍历。

##### `React.Children.forEach`

```
React.Children.forEach(children, function[(thisArg)])
```

与 [`React.Children.map()`](https://react.docschina.org/docs/react-api.html#reactchildrenmap) 类似，但它不会返回一个数组。

##### `React.Children.count`

```
React.Children.count(children)
```

返回 `children` 中的组件总数量，等同于通过 `map` 或 `forEach` 调用回调函数的次数。

##### `React.Children.only`

```
React.Children.only(children)
```

验证 `children` 是否只有一个子节点（一个 React 元素），如果有则返回它，否则此方法会抛出错误。

> 注意：
>
> `React.Children.only()` 不接受 [`React.Children.map()`](https://react.docschina.org/docs/react-api.html#reactchildrenmap) 的返回值，因为它是一个数组而并不是 React 元素。

##### `React.Children.toArray`

```
React.Children.toArray(children)
```

将 `children` 这个复杂的数据结构以数组的方式扁平展开并返回，并为每个子节点分配一个 key。当你想要在渲染函数中操作子节点的集合时，它会非常实用，特别是当你想要在向下传递 `this.props.children` 之前对内容重新排序或获取子集时。

> 注意：
>
> `React.Children.toArray()` 在拉平展开子节点列表时，更改 key 值以保留嵌套数组的语义。也就是说，`toArray` 会为返回数组中的每个 key 添加前缀，以使得每个元素 key 的范围都限定在此函数入参数组的对象内。

------

##### `React.Fragment`

`React.Fragment` 组件能够在不额外创建 DOM 元素的情况下，让 `render()` 方法中返回多个元素。

```
render() {
  return (
    <React.Fragment>
      Some text.
      <h2>A heading</h2>
    </React.Fragment>
  );
}
```

你也可以使用其简写语法 `<></>`。欲了解更多相关信息，请参阅 [React v16.2.0: Fragments 支持改进](https://react.docschina.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)。

##### `React.createRef`

`React.createRef` 创建一个能够通过 ref 属性附加到 React 元素的 [ref](https://react.docschina.org/docs/refs-and-the-dom.html)。

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

​    this.inputRef = React.createRef();  }

  render() {
    return <input type="text" ref={this.inputRef} />;  }

  componentDidMount() {
    this.inputRef.current.focus();  }
}

##### `React.forwardRef`

`React.forwardRef` 会创建一个React组件，这个组件能够将其接受的 [ref](https://react.docschina.org/docs/refs-and-the-dom.html) 属性转发到其组件树下的另一个组件中。这种技术并不常见，但在以下两种场景中特别有用：

- [转发 refs 到 DOM 组件](https://react.docschina.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components)
- [在高阶组件中转发 refs](https://react.docschina.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components)

`React.forwardRef` 接受渲染函数作为参数。React 将使用 `props` 和 `ref` 作为参数来调用此函数。此函数应返回 React 节点。

```
const FancyButton = React.forwardRef((props, ref) => (  <button ref={ref} className="FancyButton">    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```



在上述的示例中，React 会将 `<FancyButton ref={ref}>` 元素的 `ref` 作为第二个参数传递给 `React.forwardRef` 函数中的渲染函数。该渲染函数会将 `ref` 传递给 `<button ref={ref}>` 元素。

因此，当 React 附加了 ref 属性之后，`ref.current` 将直接指向 `<button>` DOM 元素实例。

欲了解更多相关信息，请参阅 [refs 转发](https://react.docschina.org/docs/forwarding-refs.html)。

##### `React.lazy`

`React.lazy()` 允许你定义一个动态加载的组件。这有助于缩减 bundle 的体积，并延迟加载在初次渲染时未用到的组件。

你可以在[代码分割文档](https://react.docschina.org/docs/code-splitting.html#reactlazy)中学习如何使用它。查阅[此文章](https://medium.com/@pomber/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d)可以了解更多用法细节。

```
// 这个组件是动态加载的
const SomeComponent = React.lazy(() => import('./SomeComponent'));
```

请注意，**渲染 `lazy` 组件依赖该组件渲染树上层的 `<React.Suspense>` 组件。这是指定加载指示器（loading indicator）的方式。**

> **注意**
>
> 使用 `React.lazy` 的动态引入特性需要 JS 环境支持 Promise。在 IE11 及以下版本的浏览器中需要通过引入 polyfill 来使用该特性。

##### `React.Suspense`

`React.Suspense` 可以指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件。目前，懒加载组件是 `<React.Suspense>` 支持的**唯一**用例：

```
// 该组件是动态加载的
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // 显示 <Spinner> 组件直至 OtherComponent 加载完成
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}
```

它已被收录在了我们的[代码分割指南](https://react.docschina.org/docs/code-splitting.html#reactlazy)中。请注意，`lazy` 组件可以位于 `Suspense` 组件树的深处——它不必包装树中的每一个延迟加载组件。最佳实践是将 `<Suspense>` 置于你想展示加载指示器（loading indicator）的位置，而 `lazy()` 则可被放置于任何你想要做代码分割的地方。

虽然目前尚未支持其它特性，但未来我们计划让 `Suspense` 支持包括数据获取在内的更多场景。你可以在 [roadmap](https://react.docschina.org/blog/2018/11/27/react-16-roadmap.html) 中了解相关信息。

> 注意:
>
> `React.lazy()` 和 `<React.Suspense>` 尚未在 `ReactDOMServer` 中支持。这是已知问题，将会在未来解决。

### React.Component

本章节提供了 React class 组件的详细 API 参考。本章节默认你已熟悉基本的 React 概念，例如 [组件 & Props](https://react.docschina.org/docs/components-and-props.html)，以及 [State & 生命周期](https://react.docschina.org/docs/state-and-lifecycle.html)等。如果你还未熟悉，请先阅读之前章节进行学习。

#### 概览

React 的组件可以定义为 class 或函数的形式。class 组件目前提供了更多的功能，这些功能将在此章节中详细介绍。如需定义 class 组件，需要继承 `React.Component`：

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

在 `React.Component` 的子类中有个必须定义的 [`render()`](https://react.docschina.org/docs/react-component.html#render) 函数。本章节介绍其他方法均为可选。

**我们强烈建议你不要创建自己的组件基类。** 在 React 组件中，[代码重用的主要方式是组合而不是继承](https://react.docschina.org/docs/composition-vs-inheritance.html)。

> 注意:
>
> React 并不会强制你使用 ES6 的 class 语法。如果你倾向于不使用它，你可以使用 `create-react-class` 模块或类似的自定义抽象来代替。请查阅[不使用 ES6](https://react.docschina.org/docs/react-without-es6.html) 了解更多。

##### 组件的生命周期

每个组件都包含“生命周期方法”，你可以重写这些方法，以便于在运行过程中特定的阶段执行这些方法。**你可以使用此[生命周期图谱](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)作为速查表**。在下述列表中，常用的生命周期方法会被加粗。其余生命周期函数的使用则相对罕见。

###### 挂载

当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

- [**`constructor()`**](https://react.docschina.org/docs/react-component.html#constructor)
- [`static getDerivedStateFromProps()`](https://react.docschina.org/docs/react-component.html#static-getderivedstatefromprops)
- [**`render()`**](https://react.docschina.org/docs/react-component.html#render)
- [**`componentDidMount()`**](https://react.docschina.org/docs/react-component.html#componentdidmount)

> 注意:
>
> 下述生命周期方法即将过时，在新代码中应该[避免使用它们](https://react.docschina.org/blog/2018/03/27/update-on-async-rendering.html)：
>
> - [`UNSAFE_componentWillMount()`](https://react.docschina.org/docs/react-component.html#unsafe_componentwillmount)

###### 更新

当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

- [`static getDerivedStateFromProps()`](https://react.docschina.org/docs/react-component.html#static-getderivedstatefromprops)
- [`shouldComponentUpdate()`](https://react.docschina.org/docs/react-component.html#shouldcomponentupdate)
- [**`render()`**](https://react.docschina.org/docs/react-component.html#render)
- [`getSnapshotBeforeUpdate()`](https://react.docschina.org/docs/react-component.html#getsnapshotbeforeupdate)
- [**`componentDidUpdate()`**](https://react.docschina.org/docs/react-component.html#componentdidupdate)

> 注意:
>
> 下述方法即将过时，在新代码中应该[避免使用它们](https://react.docschina.org/blog/2018/03/27/update-on-async-rendering.html)：
>
> - ~~[`UNSAFE_componentWillUpdate()`](https://react.docschina.org/docs/react-component.html#unsafe_componentwillupdate)
> - [`UNSAFE_componentWillReceiveProps()`](https://react.docschina.org/docs/react-component.html#unsafe_componentwillreceiveprops)

###### 卸载

当组件从 DOM 中移除时会调用如下方法：

- [**`componentWillUnmount()`**](https://react.docschina.org/docs/react-component.html#componentwillunmount)

###### 错误处理

当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

- [`static getDerivedStateFromError()`](https://react.docschina.org/docs/react-component.html#static-getderivedstatefromerror)
- [`componentDidCatch()`](https://react.docschina.org/docs/react-component.html#componentdidcatch)

##### 其他 APIs

组件还提供了一些额外的 API：

- [`setState()`](https://react.docschina.org/docs/react-component.html#setstate)
- [`forceUpdate()`](https://react.docschina.org/docs/react-component.html#forceupdate)

##### class 属性

- [`defaultProps`](https://react.docschina.org/docs/react-component.html#defaultprops)
- [`displayName`](https://react.docschina.org/docs/react-component.html#displayname)

#### 实例属性

- [`props`](https://react.docschina.org/docs/react-component.html#props)
- [`state`](https://react.docschina.org/docs/react-component.html#state)

------

### 参考

#### 常用的生命周期方法

本节中的方法涵盖了创建 React 组件时能遇到的绝大多数用例。**想要更好了解这些方法，可以参考[生命周期图谱](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)。**

##### `render()`

```
render()
```

**`render()` 方法是 class 组件中唯一必须实现的方法**。

当 `render` 被调用时，它会检查 `this.props` 和 `this.state` 的变化并返回以下类型之一：

- **React 元素**。通常通过 JSX 创建。例如，`<div />` 会被 React 渲染为 DOM 节点，`<MyComponent />` 会被 React 渲染为自定义组件，无论是 `<div />` 还是 `<MyComponent />` 均为 React 元素。
- **数组或 fragments**。 使得 render 方法可以返回多个元素。欲了解更多详细信息，请参阅 [fragments](https://react.docschina.org/docs/fragments.html) 文档。
- **Portals**。可以渲染子节点到不同的 DOM 子树中。欲了解更多详细信息，请参阅有关 [portals](https://react.docschina.org/docs/portals.html) 的文档
- **字符串或数值类型**。它们在 DOM 中会被渲染为文本节点
- **布尔类型或 `null`**。什么都不渲染。（主要用于支持返回 `test && <Child />` 的模式，其中 test 为布尔类型。)

`render()` 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。

如需与浏览器进行交互，请在 `componentDidMount()` 或其他生命周期方法中执行你的操作。保持 `render()` 为纯函数，可以使组件更容易思考。

> 注意
>
> 如果 `shouldComponentUpdate()` 返回 false，则不会调用 `render()`。

------

##### `constructor()`

```
constructor(props)
```

**如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。**

在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 `super(props)`。否则，`this.props` 在构造函数中可能会出现未定义的 bug。

通常，在 React 中，构造函数仅用于以下两种情况：

- 通过给 `this.state` 赋值对象来初始化[内部 state](https://react.docschina.org/docs/state-and-lifecycle.html)。
- 为[事件处理函数](https://react.docschina.org/docs/handling-events.html)绑定实例

**在 `constructor()` 函数中不要调用 `setState()` 方法**。如果你的组件需要使用内部 state，请直接在构造函数中为 **`this.state` 赋值初始 state**：

```
constructor(props) {
  super(props);
  // 不要在这里调用 this.setState()
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

**只能在构造函数中直接为 `this.state` 赋值。如需在其他方法中赋值，你应使用 `this.setState()` 替代。**

要避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 `componentDidMount` 中。

> 注意
>
> **避免将 props 的值复制给 state！这是一个常见的错误：**
>
> ```
> constructor(props) {
>  super(props);
>  // 不要这样做
>  this.state = { color: props.color };
> }
> ```
>
> 如此做毫无必要（你可以直接使用 `this.props.color`），同时还产生了 bug（更新 prop 中的 `color` 时，并不会影响 state）。
>
> **只有在你刻意忽略 prop 更新的情况下使用。**此时，应将 prop 重命名为 `initialColor` 或 `defaultColor`。必要时，你可以[修改它的 `key`](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key)，以强制“重置”其内部 state。
>
> 请参阅关于[避免派生状态的博文](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)，以了解出现 state 依赖 props 的情况该如何处理。

------

##### `componentDidMount()`

```
componentDidMount()
```

`componentDidMount()` 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需**通过网络请求获取数据，此处是实例化请求的好地方。**

这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 `componentWillUnmount()` 里取消订阅

你可以在 `componentDidMount()` 里**直接调用 `setState()`**。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 `render()` 两次调用的情况下，用户也不会看到中间状态。请谨慎使用该模式，因为它会导致性能问题。通常，你应该在 `constructor()` 中初始化 state。如果你的渲染依赖于 DOM 节点的大小或位置，比如实现 modals 和 tooltips 等情况下，你可以使用此方式处理

------

##### `componentDidUpdate()`

```
componentDidUpdate(prevProps, prevState, snapshot)
```

`componentDidUpdate()` 会在更新后会被立即调用。首次渲染不会执行此方法。

**当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。**

```
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

你也可以在 `componentDidUpdate()` 中**直接调用 `setState()`**，但请注意**它必须被包裹在一个条件语句里**，正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。**不要将 props “镜像”给 state，请考虑直接使用 props**。 欲了解更多有关内容，请参阅[为什么 props 复制给 state 会产生 bug](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)。

如果组件实现了 `getSnapshotBeforeUpdate()` 生命周期（不常用），则它的返回值将作为 `componentDidUpdate()` 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。

> 注意
>
> 如果 [`shouldComponentUpdate()`](https://react.docschina.org/docs/react-component.html#shouldcomponentupdate) 返回值为 false，则不会调用 `componentDidUpdate()`。

------

##### `componentWillUnmount()`

```
componentWillUnmount()
```

`componentWillUnmount()` 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等。

`componentWillUnmount()` 中**不应调用 `setState()`**，**因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。**

------

##### 不常用的生命周期方法

本节中的生命周期方法并不太常用。它们偶尔会很方便，但是大部分情况下组件可能都不需要它们。你可以在[生命周期图谱](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)中，选择“显示不常用的生命周期”复选框，即可看到下述相关方法。

##### `shouldComponentUpdate()`

```
shouldComponentUpdate(nextProps, nextState)
```

根据 `shouldComponentUpdate()` 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为。

当 props 或 state 发生变化时，`shouldComponentUpdate()` 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 `forceUpdate()` 时不会调用该方法。

此方法仅作为**[性能优化的方式](https://react.docschina.org/docs/optimizing-performance.html)**而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该**考虑使用内置的 [`PureComponent`](https://react.docschina.org/docs/react-api.html#reactpurecomponent) 组件**，而不是手动编写 `shouldComponentUpdate()`。`PureComponent` 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。

如果你一定要手动编写此函数，可以将 `this.props` 与 `nextProps` 以及 `this.state` 与`nextState` 进行比较，并返回 `false` 以告知 React 可以跳过更新。请注意，返回 `false` 并不会阻止子组件在 state 更改时重新渲染。

我们不建议在 `shouldComponentUpdate()` 中进行深层比较或使用 `JSON.stringify()`。这样非常影响效率，且会损害性能。

目前，如果 `shouldComponentUpdate()` 返回 `false`，则不会调用 [`UNSAFE_componentWillUpdate()`](https://react.docschina.org/docs/react-component.html#unsafe_componentwillupdate)，[`render()`](https://react.docschina.org/docs/react-component.html#render) 和 [`componentDidUpdate()`](https://react.docschina.org/docs/react-component.html#componentdidupdate)。后续版本，React 可能会将 `shouldComponentUpdate` 视为提示而不是严格的指令，并且，当返回 `false` 时，仍可能导致组件重新渲染。

------

##### `static getDerivedStateFromProps()`

```
static getDerivedStateFromProps(props, state)
```

`getDerivedStateFromProps` 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

此方法适用于[罕见的用例](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state)，即 state 的值在任何时候都取决于 props。例如，实现 `<Transition>` 组件可能很方便，该组件会比较当前组件与下一组件，以决定针对哪些组件进行转场动画。

派生状态会导致代码冗余，并使组件难以维护。 [确保你已熟悉这些简单的替代方案：](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

- 如果你需要**执行副作用**（例如，数据提取或动画）以响应 props 中的更改，请改用 [`componentDidUpdate`](https://react.docschina.org/docs/react-component.html#componentdidupdate)。
- 如果只想在 **prop 更改时重新计算某些数据**，[请使用 memoization helper 代替](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)。
- 如果你想**在 prop 更改时“重置”某些 state**，请考虑使组件[完全受控](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)或[使用 `key` 使组件完全不受控](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) 代替。

此方法无权访问组件实例。如果你需要，可以通过提取组件 props 的纯函数及 class 之外的状态，在`getDerivedStateFromProps()`和其他 class 方法之间重用代码。

请注意，不管原因是什么，都会在*每次*渲染前触发此方法。这与 `UNSAFE_componentWillReceiveProps` 形成对比，后者仅在父组件重新渲染时触发，而不是在内部调用 `setState` 时。

------

##### `getSnapshotBeforeUpdate()`

```
getSnapshotBeforeUpdate(prevProps, prevState)
```

`getSnapshotBeforeUpdate()` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`。

此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等。

应返回 snapshot 的值（或 `null`）。

例如：

```js
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 我们是否在 list 中添加新的 items ？
    // 捕获滚动位置以便我们稍后调整滚动位置。
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
    // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
    //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```

在上述示例中，重点是从 `getSnapshotBeforeUpdate` 读取 `scrollHeight` 属性，因为 “render” 阶段生命周期（如 `render`）和 “commit” 阶段生命周期（如 `getSnapshotBeforeUpdate` 和 `componentDidUpdate`）之间可能存在延迟。

------

##### Error boundaries

[Error boundaries](https://react.docschina.org/docs/error-boundaries.html) 是 React 组件，它会在其子组件树中的任何位置捕获 JavaScript 错误，并记录这些错误，展示降级 UI 而不是崩溃的组件树。Error boundaries 组件会捕获在渲染期间，在生命周期方法以及其整个树的构造函数中发生的错误。

如果 class 组件定义了生命周期方法 `static getDerivedStateFromError()` 或 `componentDidCatch()` 中的任何一个（或两者），它就成为了 Error boundaries。通过生命周期更新 state 可让组件捕获树中未处理的 JavaScript 错误并展示降级 UI。

仅使用 Error boundaries 组件来从意外异常中恢复的情况；**不要将它们用于流程控制。**

欲了解更多详细信息，请参阅 [*React 16 中的错误处理*](https://react.docschina.org/blog/2017/07/26/error-handling-in-react-16.html)。

> 注意
>
> Error boundaries 仅捕获组件树中**以下**组件中的错误。但它本身的错误无法捕获。

##### `static getDerivedStateFromError()`

```
static getDerivedStateFromError(error)
```

此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {    // 更新 state 使下一次渲染可以显降级 UI    return { hasError: true };  }
  render() {
    if (this.state.hasError) {      // 你可以渲染任何自定义的降级  UI      return <h1>Something went wrong.</h1>;    }
    return this.props.children; 
  }
}
```

> 注意
>
> `getDerivedStateFromError()` 会在`渲染`阶段调用，因此不允许出现副作用。 如遇此类情况，请改用 `componentDidCatch()`。

------

##### `componentDidCatch()`

```
componentDidCatch(error, info)
```

此生命周期在后代组件抛出错误后被调用。 它接收两个参数：

1. `error` —— 抛出的错误。
2. `info` —— 带有 `componentStack` key 的对象，其中包含[有关组件引发错误的栈信息](https://react.docschina.org/docs/error-boundaries.html#component-stack-traces)。

`componentDidCatch()` 会在“提交”阶段被调用，因此允许执行副作用。 它应该用于记录错误之类的情况：

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显示降级 UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {    // "组件堆栈" 例子:    //   in ComponentThatThrows (created by App)    //   in ErrorBoundary (created by App)    //   in div (created by App)    //   in App    logComponentStackToMyService(info.componentStack);  }
  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级 UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

> 注意
>
> 如果发生错误，你可以通过调用 `setState` 使用 `componentDidCatch()` 渲染降级 UI，但在未来的版本中将不推荐这样做。 可以使用静态 `getDerivedStateFromError()` 来处理降级渲染。

------

##### 过时的生命周期方法

以下生命周期方法标记为“过时”。这些方法仍然有效，但不建议在新代码中使用它们。参阅此[博客文章](https://react.docschina.org/blog/2018/03/27/update-on-async-rendering.html)以了解更多有关迁移旧版生命周期方法的信息。

##### `UNSAFE_componentWillMount()`

```
UNSAFE_componentWillMount()
```

> 注意
>
> 此生命周期之前名为 `componentWillMount`。该名称将继续使用至 React 17。可以使用 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) 自动更新你的组件。

`UNSAFE_componentWillMount()` 在挂载之前被调用。它在 `render()` 之前调用，因此在此方法中同步调用 `setState()` 不会触发额外渲染。通常，我们建议使用 `constructor()` 来初始化 state。

避免在此方法中引入任何副作用或订阅。如遇此种情况，请改用 `componentDidMount()`。

此方法是服务端渲染唯一会调用的生命周期函数。

------

##### `UNSAFE_componentWillReceiveProps()`

```
UNSAFE_componentWillReceiveProps(nextProps)
```

> 注意
>
> 此生命周期之前名为 `componentWillReceiveProps`。该名称将继续使用至 React 17。可以使用 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) 自动更新你的组件。

> 注意:
>
> 使用此生命周期方法通常会出现 bug 和不一致性：
>
> - 如果你需要**执行副作用**（例如，数据提取或动画）以响应 props 中的更改，请改用 [`componentDidUpdate`](https://react.docschina.org/docs/react-component.html#componentdidupdate) 生命周期。
> - 如果你使用 `componentWillReceiveProps` **仅在 prop 更改时重新计算某些数据**，请[使用 memoization helper 代替](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)。
> - 如果你使用 `componentWillReceiveProps` 是为了**在 prop 更改时“重置”某些 state**，请考虑使组件[完全受控](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component)或[使用 `key` 使组件完全不受控](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key) 代替。
>
> 对于其他使用场景，[请遵循此博客文章中有关派生状态的建议](https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)。

`UNSAFE_componentWillReceiveProps()` 会在已挂载的组件接收新的 props 之前被调用。如果你需要更新状态以响应 prop 更改（例如，重置它），你可以比较 `this.props` 和 `nextProps` 并在此方法中使用 `this.setState()` 执行 state 转换。

请注意，如果父组件导致组件重新渲染，即使 props 没有更改，也会调用此方法。如果只想处理更改，请确保进行当前值与变更值的比较。

在[挂载](https://react.docschina.org/docs/react-component.html#mounting)过程中，React 不会针对初始 props 调用 `UNSAFE_componentWillReceiveProps()`。组件只会在组件的 props 更新时调用此方法。调用 `this.setState()` 通常不会触发 `UNSAFE_componentWillReceiveProps()`。

------

##### `UNSAFE_componentWillUpdate()`

```
UNSAFE_componentWillUpdate(nextProps, nextState)
```

> 注意
>
> 此生命周期之前名为 `componentWillUpdate`。该名称将继续使用至 React 17。可以使用 [`rename-unsafe-lifecycles` codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) 自动更新你的组件。

当组件收到新的 props 或 state 时，会在渲染之前调用 `UNSAFE_componentWillUpdate()`。使用此作为在更新发生之前执行准备更新的机会。初始渲染不会调用此方法。

注意，你不能此方法中调用 `this.setState()`；在 `UNSAFE_componentWillUpdate()` 返回之前，你也不应该执行任何其他操作（例如，dispatch Redux 的 action）触发对 React 组件的更新

通常，此方法可以替换为 `componentDidUpdate()`。如果你在此方法中读取 DOM 信息（例如，为了保存滚动位置），则可以将此逻辑移至 `getSnapshotBeforeUpdate()` 中。

> 注意
>
> 如果 `shouldComponentUpdate()` 返回 false，则不会调用 `UNSAFE_componentWillUpdate()`。

------

#### 其他 API

不同于上述生命周期方法（React 主动调用），以下方法是你可以在组件中调用的方法。

只有两个方法：`setState()` 和 `forceUpdate()`。

##### `setState()`

```js
setState(updater, [callback])
```

`setState()` 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件。这是**用于更新用户界面以响应事件处理器和处理服务器数据的主要方式**

将 `setState()` 视为*请求*而不是立即更新组件的命令。为了更好的感知性能，React 会延迟调用它，然后通过一次传递更新多个组件。React 并不会保证 state 的变更会立即生效。

`setState()` 并不总是立即更新组件。它会**批量推迟更新**。这使得在调用 `setState()` 后立即读取 `this.state` 成为了隐患。为了消除隐患，请使用 `componentDidUpdate` 或者 `setState` 的回调函数（`setState(updater, callback)`），这两种方式都可以保证在应用更新后触发。如需基于之前的 state 来设置当前的 state，请阅读下述关于参数 `updater` 的内容。

除非 `shouldComponentUpdate()` 返回 `false`，否则 `setState()` 将始终执行重新渲染操作。如果可变对象被使用，且无法在 `shouldComponentUpdate()` 中实现条件渲染，那么仅在新旧状态不一时调用 `setState()`可以避免不必要的重新渲染

参数一为带有形式参数的 `updater` 函数：

```
(state, props) => stateChange
```

**`state` 是对应用变化时组件状态的引用。当然，它不应直接被修改。你应该使用基于 `state` 和 `props` 构建的新对象来表示变化。例如，假设我们想根据 `props.step` 来增加 state：**

```js
this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
```

updater 函数中接收的 `state` 和 `props` 都保证为最新。updater 的返回值会与 `state` 进行浅合并。

`setState()` 的第二个参数为可选的回调函数，它将在 `setState` 完成合并并重新渲染组件后执行。通常，我们**建议使用 `componentDidUpdate()` 来代替此方式。**

`setState()` 的第一个参数除了接受函数外，还可以**接受对象类型**：

```
setState(stateChange[, callback])
```

`stateChange` 会将传入的对象浅层合并到新的 state 中，例如，调整购物车商品数：

```
this.setState({quantity: 2})
```

这种形式的 `setState()` 也是异步的，并且在同一周期内会对多个 `setState` 进行批处理。例如，如果在同一周期内多次设置商品数量增加，则相当于：

```
Object.assign(
  previousState,
  {quantity: state.quantity + 1},
  {quantity: state.quantity + 1},
  ...
)
```

后调用的 `setState()` 将覆盖同一周期内先调用 `setState` 的值，因此商品数仅增加一次。如果后续状态取决于当前状态，我们建议使用 updater 函数的形式代替：

```
this.setState((state) => {
  return {quantity: state.quantity + 1};
});
```

有关更多详细信息，请参阅：

- [State 和生命周期指南](https://react.docschina.org/docs/state-and-lifecycle.html)
- [深入学习：何时以及为什么 `setState()` 会批量执行？](https://stackoverflow.com/a/48610973/458193)
- [深入：为什么不直接更新 `this.state`？](https://github.com/facebook/react/issues/11527#issuecomment-360199710)

------

##### `forceUpdate()`

```
component.forceUpdate(callback)
```

默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 `render()` 方法依赖于其他数据，则可以调用 `forceUpdate()` 强制让组件重新渲染。

调用 `forceUpdate()` 将致使组件调用 `render()` 方法，此操作会跳过该组件的 `shouldComponentUpdate()`。但其子组件会触发正常的生命周期方法，包括 `shouldComponentUpdate()` 方法。如果标记发生变化，React 仍将只更新 DOM。

通常你应该避免使用 `forceUpdate()`，尽量在 `render()` 中使用 `this.props` 和 `this.state`。

------

#### Class 属性

##### `defaultProps`

**`defaultProps` 可以为 Class 组件添加默认 props**。这**一般用于 props 未赋值，但又不能为 null 的情况**。例如：

```js
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```

如果未提供 `props.color`，则默认设置为 `'blue'`

```js
  render() {
    return <CustomButton /> ; // props.color 将设置为 'blue'
  }
```

如果 `props.color` 被设置为 `null`，则它将保持为 `null`

```js
  render() {
    return <CustomButton color={null} /> ; // props.color 将保持是 null
  }
```

------

##### `displayName`

**`displayName` 字符串多用于调试消息**。通常，你不需要设置它，因为它可以根据函数组件或 class 组件的名称推断出来。如果调试时需要显示不同的名称或创建高阶组件，请参阅[使用 displayname 轻松进行调试](https://react.docschina.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)了解更多。

------

#### 实例属性

##### `props`

`this.props` 包括被该组件调用者定义的 props。欲了解 props 的详细介绍，请参阅[组件 & Props](https://react.docschina.org/docs/components-and-props.html)。

需特别注意，`this.props.children` 是一个特殊的 prop，通常由 JSX 表达式中的子组件组成，而非组件本身定义。

##### `state`

组件中的 state 包含了随时可能发生变化的数据。state 由用户自定义，它是一个普通 JavaScript 对象。

如果某些值未用于渲染或数据流（例如，计时器 ID），则不必将其设置为 state。此类值可以在组件实例上定义。

欲了解关于 state 的更多信息，请参阅 [State & 生命周期](https://react.docschina.org/docs/state-and-lifecycle.html)。

永远不要直接改变 `this.state`，因为后续调用的 `setState()` 可能会替换掉你的改变。请把 `this.state` 看作是不可变的。

### ReactDOM

如果你使用一个 `<script>` 标签引入 React，所有的顶层 API 都能在全局 `ReactDOM` 上调用。如果你使用 npm 和 ES6，你可以用 `import ReactDOM from 'react-dom'`。如果你使用 npm 和 ES5，你可以用 `var ReactDOM = require('react-dom')`。

#### 概览

`react-dom` 的 package 提供了可在应用顶层使用的 DOM（DOM-specific）方法，如果有需要，你可以把这些方法用于 React 模型以外的地方。不过一般情况下，大部分组件都不需要使用这个模块。

- [`render()`](https://react.docschina.org/docs/react-dom.html#render)
- [`hydrate()`](https://react.docschina.org/docs/react-dom.html#hydrate)
- [`unmountComponentAtNode()`](https://react.docschina.org/docs/react-dom.html#unmountcomponentatnode)
- [`findDOMNode()`](https://react.docschina.org/docs/react-dom.html#finddomnode)
- [`createPortal()`](https://react.docschina.org/docs/react-dom.html#createportal)

##### 浏览器支持

React 支持所有的现代浏览器，包括 IE9 及以上版本，但是需要为旧版浏览器比如 IE9 和 IE10 引入[相关的 polyfills 依赖](https://react.docschina.org/docs/javascript-environment-requirements.html)。

> 注意：
>
> 我们不支持那些不兼容 ES5 方法的旧版浏览器，但如果你的应用包含了 polyfill，例如 [es5-shim 和 es5-sham](https://github.com/es-shims/es5-shim) 你可能会发现你的应用仍然可以在这些浏览器中正常运行。但是如果你选择这种方法，你便需要孤军奋战了。

------

#### 参考

##### `render()`

```
ReactDOM.render(element, container[, callback])
```

在提供的 `container` 里渲染一个 React 元素，并返回对该组件的[引用](https://react.docschina.org/docs/more-about-refs.html)（或者针对[无状态组件](https://react.docschina.org/docs/components-and-props.html#function-and-class-components)返回 `null`）。

如果 React 元素之前已经在 `container` 里渲染过，这将会对其执行更新操作，并仅会在必要时改变 DOM 以映射最新的 React 元素。

如果提供了可选的回调函数，该回调将在组件被渲染或更新之后被执行。

> 注意：
>
> `ReactDOM.render()` 会控制你传入容器节点里的内容。当首次调用时，容器节点里的所有 DOM 元素都会被替换，后续的调用则会使用 React 的 DOM 差分算法（DOM diffing algorithm）进行高效的更新。
>
> `ReactDOM.render()` 不会修改容器节点（只会修改容器的子节点）。可以在不覆盖现有子节点的情况下，将组件插入已有的 DOM 节点中。
>
> `ReactDOM.render()` 目前会返回对根组件 `ReactComponent` 实例的引用。 但是，目前**应该避免使用返回的引用**，因为它是历史遗留下来的内容，而且在未来版本的 React 中，组件渲染在某些情况下可能会是异步的。 **如果你真的需要获得对根组件 `ReactComponent` 实例的引用，那么推荐为根元素添加 [callback ref](https://react.docschina.org/docs/more-about-refs.html#the-ref-callback-attribute)。**
>
> 使用 `ReactDOM.render()` 对服务端渲染容器进行 hydrate 操作的方式已经被废弃，并且会在 React 17 被移除。作为替代，请使用 [`hydrate()`](https://react.docschina.org/docs/react-dom.html#hydrate)。

------

##### `hydrate()`

```
ReactDOM.hydrate(element, container[, callback])
```

与 [`render()`](https://react.docschina.org/docs/react-dom.html#render) 相同，但它用于在 [`ReactDOMServer`](https://react.docschina.org/docs/react-dom-server.html) 渲染的容器中对 HTML 的内容进行 hydrate 操作。React 会尝试在已有标记上绑定事件监听器。

React 希望服务端与客户端渲染的内容完全一致。React 可以弥补文本内容的差异，但是你需要将不匹配的地方作为 bug 进行修复。在开发者模式下，React 会对 hydration 操作过程中的不匹配进行警告。但并不能保证在不匹配的情况下，修补属性的差异。由于性能的关系，这一点非常重要，因为大多是应用中不匹配的情况很少见，并且验证所有标记的成本非常昂贵。

如果单个元素的属性或者文本内容，在服务端和客户端之间有无法避免差异（比如：时间戳），则可以为元素添加 `suppressHydrationWarning={true}` 来消除警告。这种方式只在一级深度上有效，应只作为一种应急方案（escape hatch）。请不要过度使用！除非它是文本内容，否则 React 仍不会尝试修补差异，因此在未来的更新之前，仍会保持不一致。

如果你执意要在服务端与客户端渲染不同内容，你可以采用双重（two-pass）渲染。在客户端渲染不同内容的组件可以读取类似于 `this.state.isClient` 的 state 变量，你可以在 `componentDidMount()` 里将它设置为 `true`。这种方式在初始渲染过程中会与服务端渲染相同的内容，从而避免不匹配的情况出现，但在 hydration 操作之后，会同步进行额外的渲染操作。注意，因为进行了两次渲染，这种方式会使得组件渲染变慢，请小心使用。

记得保证弱网环境下的用户体验。JavaScript 代码的加载要比最初的 HTML 渲染晚的多。因此如果你只在客户端渲染不同的内容，其转换可能会不稳定。但是，如果执行顺利，那么在服务端负责渲染的 shell 会对渲染提供帮助，并且只显示客户端上额外的小组件。欲了解如何在不出现标记不匹配的情况下执行此操作，请参考上一段的解释。

------

##### `unmountComponentAtNode()`

```
ReactDOM.unmountComponentAtNode(container)
```

从 DOM 中卸载组件，会将其事件处理器（event handlers）和 state 一并清除。如果指定容器上没有对应已挂载的组件，这个函数什么也不会做。如果组件被移除将会返回 `true`，如果没有组件可被移除将会返回 `false`。

------

##### `findDOMNode()`

> 注意:
>
> `findDOMNode` 是一个访问底层 DOM 节点的应急方案（escape hatch）。在大多数情况下，不推荐使用该方法，因为它会破坏组件的抽象结构。[严格模式下该方法已弃用。](https://react.docschina.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)

```
ReactDOM.findDOMNode(component)
```

如果组件已经被挂载到 DOM 上，此方法会返回浏览器中相应的原生 DOM 元素。此方法对于从 DOM 中读取值很有用，例如获取表单字段的值或者执行 DOM 检测（performing DOM measurements）。**大多数情况下，你可以绑定一个 ref 到 DOM 节点上，可以完全避免使用 findDOMNode。**

当组件渲染的内容为 `null` 或 `false` 时，`findDOMNode` 也会返回 `null`。当组件渲染的是字符串时，`findDOMNode` 返回的是字符串对应的 DOM 节点。从 React 16 开始，组件可能会返回有多个子节点的 fragment，在这种情况下，`findDOMNode` 会返回第一个非空子节点对应的 DOM 节点。

> 注意:
>
> `findDOMNode` 只在已挂载的组件上可用（即，已经放置在 DOM 中的组件）。如果你尝试调用未挂载的组件（例如在一个还未创建的组件上调用 `render()` 中的 `findDOMNode()`）将会引发异常。
>
> `findDOMNode` 不能用于函数组件。

------

##### `createPortal()`

```
ReactDOM.createPortal(child, container)
```

创建 portal。[Portal](https://react.docschina.org/docs/portals.html) 将提供一种将子节点渲染到 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外。

### ReactDOMServer

`ReactDOMServer` 对象允许你将组件渲染成静态标记。通常，它被使用在 Node 服务端上：

```
// ES modules
import ReactDOMServer from 'react-dom/server';
// CommonJS
var ReactDOMServer = require('react-dom/server');
```

#### 概览

下述方法可以被使用在服务端和浏览器环境。

- [`renderToString()`](https://react.docschina.org/docs/react-dom-server.html#rendertostring)
- [`renderToStaticMarkup()`](https://react.docschina.org/docs/react-dom-server.html#rendertostaticmarkup)

下述附加方法依赖一个**只能在服务端使用**的 package（`stream`）。它们在浏览器中不起作用。

- [`renderToNodeStream()`](https://react.docschina.org/docs/react-dom-server.html#rendertonodestream)
- [`renderToStaticNodeStream()`](https://react.docschina.org/docs/react-dom-server.html#rendertostaticnodestream)

------

#### 参考

##### `renderToString()`

```
ReactDOMServer.renderToString(element)
```

将 React 元素渲染为初始 HTML。React 将返回一个 HTML 字符串。你可以使用此方法在服务端生成 HTML，并在首次请求时将标记下发，以加快页面加载速度，并允许搜索引擎爬取你的页面以达到 SEO 优化的目的。

如果你在已有服务端渲染标记的节点上调用 [`ReactDOM.hydrate()`](https://react.docschina.org/docs/react-dom.html#hydrate) 方法，React 将会保留该节点且只进行事件处理绑定，从而让你有一个非常高性能的首次加载体验。

------

##### `renderToStaticMarkup()`

```
ReactDOMServer.renderToStaticMarkup(element)
```

此方法与 [`renderToString`](https://react.docschina.org/docs/react-dom-server.html#rendertostring) 相似，但此方法不会在 React 内部创建的额外 DOM 属性，例如 `data-reactroot`。如果你希望把 React 当作静态页面生成器来使用，此方法会非常有用，因为去除额外的属性可以节省一些字节。

如果你计划在前端使用 React 以使得标记可交互，请不要使用此方法。你可以在服务端上使用 [`renderToString`](https://react.docschina.org/docs/react-dom-server.html#rendertostring) 或在前端上使用 [`ReactDOM.hydrate()`](https://react.docschina.org/docs/react-dom.html#hydrate) 来代替此方法。

------

##### `renderToNodeStream()`

```
ReactDOMServer.renderToNodeStream(element)
```

将一个 React 元素渲染成其初始 HTML。返回一个可输出 HTML 字符串的[可读流](https://nodejs.org/api/stream.html#stream_readable_streams)。通过可读流输出的 HTML 完全等同于 [`ReactDOMServer.renderToString`](https://react.docschina.org/docs/react-dom-server.html#rendertostring) 返回的 HTML。你可以使用本方法在服务器上生成 HTML，并在初始请求时将标记下发，以加快页面加载速度，并允许搜索引擎抓取你的页面以达到 SEO 优化的目的。

如果你在已有服务端渲染标记的节点上调用 [`ReactDOM.hydrate()`](https://react.docschina.org/docs/react-dom.html#hydrate) 方法，React 将会保留该节点且只进行事件处理绑定，从而让你有一个非常高性能的首次加载体验。

> 注意:
>
> 这个 API 仅允许在服务端使用。不允许在浏览器使用。
>
> 通过本方法返回的流会返回一个由 utf-8 编码的字节流。如果你需要另一种编码的流，请查看像 [iconv-lite](https://www.npmjs.com/package/iconv-lite) 这样的项目，它为转换文本提供了转换流。

------

##### `renderToStaticNodeStream()`

```
ReactDOMServer.renderToStaticNodeStream(element)
```

此方法与 [`renderToNodeStream`](https://react.docschina.org/docs/react-dom-server.html#rendertonodestream) 相似，但此方法不会在 React 内部创建的额外 DOM 属性，例如 `data-reactroot`。如果你希望把 React 当作静态页面生成器来使用，此方法会非常有用，因为去除额外的属性可以节省一些字节。

通过可读流输出的 HTML，完全等同于 [`ReactDOMServer.renderToStaticMarkup`](https://react.docschina.org/docs/react-dom-server.html#rendertostaticmarkup) 返回的 HTML。

如果你计划在前端使用 React 以使得标记可交互，请不要使用此方法。你可以在服务端上使用 [`renderToNodeStream`](https://react.docschina.org/docs/react-dom-server.html#rendertonodestream) 或在前端上使用 [`ReactDOM.hydrate()`](https://react.docschina.org/docs/react-dom.html#hydrate) 来代替此方法。

> 注意:
>
> 此 API 仅限于服务端使用，在浏览器中是不可用的。
>
> 通过本方法返回的流会返回一个由 utf-8 编码的字节流。如果你需要另一种编码的流，请查看像 [iconv-lite](https://www.npmjs.com/package/iconv-lite) 这样的项目，它为转换文本提供了转换流。

Is this page useful?[编辑此页面](https://github.com/reactjs/zh-hans.reactjs.org/tree/master/content/docs/reference-react-dom-server.md)

### DOM 元素

React 实现了一套独立于浏览器的 DOM 系统，兼顾了性能和跨浏览器的兼容性。我们借此机会完善了浏览器 DOM 实现的一些特殊情况。

在 React 中，所有的 DOM 特性和属性（包括事件处理）都应该是小驼峰命名的方式。例如，与 HTML 中的 `tabindex` 属性对应的 React 的属性是 `tabIndex`。例外的情况是 `aria-*` 以及 `data-*` 属性，一律使用小写字母命名。比如, 你依然可以用 `aria-label` 作为 `aria-label`。

#### 属性差异

React 与 HTML 之间有很多属性存在差异：

##### checked

当 `<input>` 组件的 type 类型为 `checkbox` 或 `radio` 时，组件支持 `checked` 属性。你可以使用它来设置组件是否被选中。这对于构建受控组件（controlled components）很有帮助。而 `defaultChecked` 则是非受控组件的属性，用于设置组件首次挂载时是否被选中。

##### className

`className` 属性用于指定 CSS 的 class，此特性适用于所有常规 DOM 节点和 SVG 元素，如 `<div>`，`<a>` 及其它标签。

如果你在 React 中使用 Web Components（这是一种不常见的使用方式），请使用 class 属性代替。

##### dangerouslySetInnerHTML

`dangerouslySetInnerHTML` 是 React 为浏览器 DOM 提供 `innerHTML` 的替换方案。通常来讲，使用代码直接设置 HTML 存在风险，因为很容易无意中使用户暴露于[跨站脚本（XSS）](https://en.wikipedia.org/wiki/Cross-site_scripting)的攻击。因此，你可以直接在 React 中设置 HTML，但当你想设置 `dangerouslySetInnerHTML` 时，需要向其传递包含 key 为 `__html` 的对象，以此来警示你。例如：

```
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

##### htmlFor

由于 `for` 在 JavaScript 中是保留字，所以 React 元素中使用了 `htmlFor` 来代替。

##### onChange

`onChange` 事件与预期行为一致：每当表单字段变化时，该事件都会被触发。我们故意没有使用浏览器已有的默认行为，是因为 `onChange` 在浏览器中的行为和名称不对应，并且 React 依靠了该事件实时处理用户输入。

##### selected

`<option>` 组件支持 `selected` 属性。你可以使用该属性设置组件是否被选择。这对构建受控组件很有帮助。

##### style

> 注意
>
> 在文档中，部分例子为了方便，直接使用了 `style`，但是**通常不推荐将 `style` 属性作为设置元素样式的主要方式**。在多数情况下，应使用 [`className`](https://react.docschina.org/docs/dom-elements.html#classname) 属性来引用外部 CSS 样式表中定义的 class。`style` 在 React 应用中多用于在渲染过程中添加动态计算的样式。另请参阅：[FAQ：Styling 和 CSS](https://react.docschina.org/docs/faq-styling.html)。

`style` 接受一个采用小驼峰命名属性的 JavaScript 对象，而不是 CSS 字符串。这与 DOM 中 `style` 的 JavaScript 属性是一致的，同时会更高效的，且能预防跨站脚本（XSS）的安全漏洞。例如：

```
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

注意：样式不会自动补齐前缀。如需支持旧版浏览器，请手动补充对应的样式属性：

```
const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

function ComponentWithTransition() {
  return <div style={divStyle}>This should work cross-browser</div>;
}
```

Style 中的 key 采用小驼峰命名是为了与 JS 访问 DOM 节点的属性保持一致（例如：`node.style.backgroundImage` ）。浏览器引擎前缀都应以大写字母开头，[除了 `ms`](https://www.andismith.com/blog/2012/02/modernizr-prefixed/)。因此，`WebkitTransition` 首字母为 ”W”。

React 会自动添加 ”px” 后缀到内联样式为数字的属性后。如需使用 ”px” 以外的单位，请将此值设为数字与所需单位组成的字符串。例如：

```
// Result style: '10px'
<div style={{ height: 10 }}>
  Hello World!
</div>

// Result style: '10%'
<div style={{ height: '10%' }}>
  Hello World!
</div>
```

但并非所有样式属性都转换为像素字符串。有些样式属性是没有单位的(例如 `zoom`，`order`，`flex`)。无单位属性的完整列表在[此处](https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59)。

##### suppressContentEditableWarning

通常，当拥有子节点的元素被标记为 `contentEditable` 时，React 会发出一个警告，因为这不会生效。该属性将禁止此警告。尽量不要使用该属性，除非你要构建一个类似 [Draft.js](https://facebook.github.io/draft-js/) 的手动管理 `contentEditable` 属性的库。

##### suppressHydrationWarning

如果你使用 React 服务端渲染，通常会在当服务端与客户端渲染不同的内容时发出警告。但是，在一些极少数的情况下，很难甚至于不可能保证内容的一致性。例如，在服务端和客户端上，时间戳通常是不同的。

如果设置 `suppressHydrationWarning` 为 `true`，React 将不会警告你属性与元素内容不一致。它只会对元素一级深度有效，并且打算作为应急方案。因此不要过度使用它。你可以在 [`ReactDOM.hydrate()` 文档](https://react.docschina.org/docs/react-dom.html#hydrate) 中了解更多关于 hydration 的信息。

##### value

`<input>` 和 `<textarea>` 组件支持 `value` 属性。你可以使用它为组件设置 value。这对于构建受控组件是非常有帮助。`defaultValue` 属性对应的是非受控组件的属性，用于设置组件第一次挂载时的 value。

##### All Supported HTML Attributes

在 React 16 中，任何标准的[或自定义的](https://react.docschina.org/blog/2017/09/08/dom-attributes-in-react-16.html) DOM 属性都是完全支持的。

React 为 DOM 提供了一套以 JavaScript 为中心的 API。由于 React 组件经常采用自定义或和 DOM 相关的 props 的关系，React 采用了`小驼峰命名`的方式，正如 DOM APIs 那样：

```
<div tabIndex="-1" />      // Just like node.tabIndex DOM API
<div className="Button" /> // Just like node.className DOM API
<input readOnly={true} />  // Just like node.readOnly DOM API
```

除了上述文档提到的特殊拼写方式以外，这些 props 的用法与 HTML 的属性也极为类似。

React 支持的 DOM 属性有：

```
accept acceptCharset accessKey action allowFullScreen alt async autoComplete
autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked
cite classID className colSpan cols content contentEditable contextMenu controls
controlsList coords crossOrigin data dateTime default defer dir disabled
download draggable encType form formAction formEncType formMethod formNoValidate
formTarget frameBorder headers height hidden high href hrefLang htmlFor
httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list
loop low manifest marginHeight marginWidth max maxLength media mediaGroup method
min minLength multiple muted name noValidate nonce open optimum pattern
placeholder poster preload profile radioGroup readOnly rel required reversed
role rowSpan rows sandbox scope scoped scrolling seamless selected shape size
sizes span spellCheck src srcDoc srcLang srcSet start step style summary
tabIndex target title type useMap value width wmode wrap
```

同样，所有的 SVG 属性也完全得到了支持：

```
accentHeight accumulate additive alignmentBaseline allowReorder alphabetic
amplitude arabicForm ascent attributeName attributeType autoReverse azimuth
baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight
clip clipPath clipPathUnits clipRule colorInterpolation
colorInterpolationFilters colorProfile colorRendering contentScriptType
contentStyleType cursor cx cy d decelerate descent diffuseConstant direction
display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground
end exponent externalResourcesRequired fill fillOpacity fillRule filter
filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize
fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy
g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef
gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic
imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength
kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor
limitingConeAngle local markerEnd markerHeight markerMid markerStart
markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode
numOctaves offset opacity operator order orient orientation origin overflow
overlinePosition overlineThickness paintOrder panose1 pathLength
patternContentUnits patternTransform patternUnits pointerEvents points
pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits
r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions
requiredFeatures restart result rotate rx ry scale seed shapeRendering slope
spacing specularConstant specularExponent speed spreadMethod startOffset
stdDeviation stemh stemv stitchTiles stopColor stopOpacity
strikethroughPosition strikethroughThickness string stroke strokeDasharray
strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity
strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor
textDecoration textLength textRendering to transform u1 u2 underlinePosition
underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic
vHanging vIdeographic vMathematical values vectorEffect version vertAdvY
vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing
writingMode x x1 x2 xChannelSelector xHeight xlinkActuate xlinkArcrole
xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlns xmlnsXlink xmlBase
xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
```

你也可以使用自定义属性，但要注意属性名全都为小写。

### 合成事件

此参考指南记录了构成 React 事件系统一部分的 `SyntheticEvent` 包装器。请参考有关[事件处理](https://react.docschina.org/docs/handling-events.html)的指南来了解更多。

#### 概览

`SyntheticEvent` 实例将被传递给你的事件处理函数，它是浏览器的原生事件的跨浏览器包装器。除兼容所有浏览器外，它还拥有和浏览器原生事件相同的接口，包括 `stopPropagation()` 和 `preventDefault()`。

如果因为某些原因，当你需要使用浏览器的底层事件时，只需要使用 `nativeEvent` 属性来获取即可。每个 `SyntheticEvent` 对象都包含以下属性：

```
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
void persist()
DOMEventTarget target
number timeStamp
string type
```

> 注意：
>
> 截止 v0.14，当事件处理函数返回 `false` 时，不再阻止事件冒泡。你可以选择使用 `e.stopPropagation()` 或者 `e.preventDefault()` 替代。

##### 事件池

`SyntheticEvent` 是合并而来。这意味着 `SyntheticEvent` 对象可能会被重用，而且在事件回调函数被调用后，所有的属性都会无效。出于性能考虑，你不能通过异步访问事件。

```
function onClick(event) {
  console.log(event); // => nullified object.
  console.log(event.type); // => "click"
  const eventType = event.type; // => "click"

  setTimeout(function() {
    console.log(event.type); // => null
    console.log(eventType); // => "click"
  }, 0);

  // 不起作用，this.state.clickEvent 的值将会只包含 null
  this.setState({clickEvent: event});

  // 你仍然可以导出事件属性
  this.setState({eventType: event.type});
}
```

> 注意：
>
> 如果你想异步访问事件属性，你需在事件上调用 `event.persist()`，此方法会从池中移除合成事件，允许用户代码保留对事件的引用。

#### 支持的事件

React 通过将事件 normalize 以让他们在不同浏览器中拥有一致的属性。

以下的事件处理函数在冒泡阶段被触发。如需注册捕获阶段的事件处理函数，则应为事件名添加 `Capture`。例如，处理捕获阶段的点击事件请使用 `onClickCapture`，而不是 `onClick`。

- [Clipboard Events](https://react.docschina.org/docs/events.html#clipboard-events)
- [Composition Events](https://react.docschina.org/docs/events.html#composition-events)
- [Keyboard Events](https://react.docschina.org/docs/events.html#keyboard-events)
- [Focus Events](https://react.docschina.org/docs/events.html#focus-events)
- [Form Events](https://react.docschina.org/docs/events.html#form-events)
- [Generic Events](https://react.docschina.org/docs/events.html#generic-events)
- [Mouse Events](https://react.docschina.org/docs/events.html#mouse-events)
- [Pointer Events](https://react.docschina.org/docs/events.html#pointer-events)
- [Selection Events](https://react.docschina.org/docs/events.html#selection-events)
- [Touch Events](https://react.docschina.org/docs/events.html#touch-events)
- [UI Events](https://react.docschina.org/docs/events.html#ui-events)
- [Wheel Events](https://react.docschina.org/docs/events.html#wheel-events)
- [Media Events](https://react.docschina.org/docs/events.html#media-events)
- [Image Events](https://react.docschina.org/docs/events.html#image-events)
- [Animation Events](https://react.docschina.org/docs/events.html#animation-events)
- [Transition Events](https://react.docschina.org/docs/events.html#transition-events)
- [Other Events](https://react.docschina.org/docs/events.html#other-events)

------

#### 参考

##### 剪贴板事件

事件名：

```
onCopy onCut onPaste
```

属性：

```
DOMDataTransfer clipboardData
```

------

##### 复合事件

事件名:

```
onCompositionEnd onCompositionStart onCompositionUpdate
```

属性:

```
string data
```

------

##### 键盘事件

事件名:

```
onKeyDown onKeyPress onKeyUp
```

属性:

```
boolean altKey
number charCode
boolean ctrlKey
boolean getModifierState(key)
string key
number keyCode
string locale
number location
boolean metaKey
boolean repeat
boolean shiftKey
number which
```

`key` 属性可以是 [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values) 里记录的任意值。

------

##### 焦点事件

事件名：

```
onFocus onBlur
```

这些焦点事件在 React DOM 上的所有元素都有效，不只是表单元素。

属性：

```
DOMEventTarget relatedTarget
```

------

##### 表单事件

事件名：

```
onChange onInput onInvalid onReset onSubmit 
```

想了解 onChange 事件的更多信息，查看 [Forms](https://react.docschina.org/docs/forms.html) 。

------

##### 通用事件

事件名称：

```
onError onLoad
```

------

##### Mouse Events

鼠标事件：

```
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
```

`onMouseEnter` 和 `onMouseLeave` 事件从离开的元素向进入的元素传播，不是正常的冒泡，也没有捕获阶段。

属性：

```
boolean altKey
number button
number buttons
number clientX
number clientY
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
number pageX
number pageY
DOMEventTarget relatedTarget
number screenX
number screenY
boolean shiftKey
```

------

##### 指针事件

事件名:

```
onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture
onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut
```

`onPointerEnter` 和 `onPointerLeave` 事件从离开的元素向进入的元素传播，不是正常的冒泡，也没有捕获阶段。

属性：

如 [W3 spec](https://www.w3.org/TR/pointerevents/) 中定义的，指针事件通过以下属性扩展了[鼠标事件](https://react.docschina.org/docs/events.html#mouse-events)：

```
number pointerId
number width
number height
number pressure
number tangentialPressure
number tiltX
number tiltY
number twist
string pointerType
boolean isPrimary
```

关于跨浏览器支持的说明：

并非每个浏览器都支持指针事件（在写这篇文章时，已支持的浏览器有：Chrome，Firefox，Edge 和 Internet Explorer）。React 故意不通过 polyfill 的方式适配其他浏览器，主要是符合标准的 polyfill 会显著增加 react-dom 的 bundle 大小。

如果你的应用要求指针事件，我们推荐添加第三方的指针事件 polyfil 。

------

##### 选择事件

事件名：

```
onSelect
```

------

##### 触摸事件

事件名：

```
onTouchCancel onTouchEnd onTouchMove onTouchStart
```

属性：

```
boolean altKey
DOMTouchList changedTouches
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
boolean shiftKey
DOMTouchList targetTouches
DOMTouchList touches
```

------

##### UI 事件

事件名：

```
onScroll
```

属性：

```
number detail
DOMAbstractView view
```

------

##### 滚轮事件

事件名：

```
onWheel
```

属性：

```
number deltaMode
number deltaX
number deltaY
number deltaZ
```

------

##### 媒体事件

事件名：

```
onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting
```

------

##### 图像事件

事件名：

```
onLoad onError
```

------

##### 动画事件

事件名：

```
onAnimationStart onAnimationEnd onAnimationIteration
```

属性：

```
string animationName
string pseudoElement
float elapsedTime
```

------

##### 过渡事件

事件名：

```
onTransitionEnd
```

属性：

```
string propertyName
string pseudoElement
float elapsedTime
```

------

##### 其他事件

事件名：

```
onToggle
```

### JavaScript 环境要求

React 16 依赖集合类型 [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) 和 [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) 。如果你要支持无法原生提供这些能力（例如 IE < 11）或实现不规范（例如 IE 11）的旧浏览器与设备，考虑在你的应用库中包含一个全局的 polyfill ，例如 [core-js](https://github.com/zloirock/core-js) 或 [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) 。

React 16 使用 core-js 支持老版本浏览器，其 polyfill 环境可能如下：

```
import 'core-js/es/map';
import 'core-js/es/set';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

React 同时还依赖于 `requestAnimationFrame`（甚至包括测试环境）。 你可以使用 [raf](https://www.npmjs.com/package/raf) 的 package 增添 `requestAnimationFrame` 的 shim：

```
import 'raf/polyfill';
```

## HOOK

### Hook API 索引

*Hook* 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

本页面主要描述 React 中内置的 Hook API。

如果你刚开始接触 Hook，那么可能需要先查阅 [Hook 概览](https://react.docschina.org/docs/hooks-overview.html)。你也可以在 [Hooks FAQ](https://react.docschina.org/docs/hooks-faq.html) 章节中获取有用的信息。

- [基础 Hook](https://react.docschina.org/docs/hooks-reference.html#basic-hooks)
  - [`useState`](https://react.docschina.org/docs/hooks-reference.html#usestate)
  - [`useEffect`](https://react.docschina.org/docs/hooks-reference.html#useeffect)
  - [`useContext`](https://react.docschina.org/docs/hooks-reference.html#usecontext)
- [额外的 Hook](https://react.docschina.org/docs/hooks-reference.html#additional-hooks)
  - [`useReducer`](https://react.docschina.org/docs/hooks-reference.html#usereducer)
  - [`useCallback`](https://react.docschina.org/docs/hooks-reference.html#usecallback)
  - [`useMemo`](https://react.docschina.org/docs/hooks-reference.html#usememo)
  - [`useRef`](https://react.docschina.org/docs/hooks-reference.html#useref)
  - [`useImperativeHandle`](https://react.docschina.org/docs/hooks-reference.html#useimperativehandle)
  - [`useLayoutEffect`](https://react.docschina.org/docs/hooks-reference.html#uselayouteffect)
  - [`useDebugValue`](https://react.docschina.org/docs/hooks-reference.html#usedebugvalue)

#### 基础 Hook

##### `useState`

```
const [state, setState] = useState(initialState);
```

返回一个 state，以及更新 state 的函数。

在初始渲染期间，返回的状态 (`state`) 与传入的第一个参数 (`initialState`) 值相同。

`setState` 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列。

```
setState(newState);
```

在后续的重新渲染中，`useState` 返回的第一个值将始终是更新后最新的 state。

> 注意
>
> React 会确保 `setState` 函数的标识是稳定的，并且不会在组件重新渲染时发生变化。这就是为什么可以安全地从 `useEffect` 或 `useCallback` 的依赖列表中省略 `setState`。

##### 函数式更新

如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 `setState`。该函数将接收先前的 state，并返回一个更新后的值。下面的计数器组件示例展示了 `setState` 的两种用法：

```
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

“+” 和 “-” 按钮采用函数式形式，因为被更新的 state 需要基于之前的 state。但是“重置”按钮则采用普通形式，因为它总是把 count 设置回初始值。

如果你的更新函数返回值与当前 state 完全相同，则随后的重渲染会被完全跳过。

> 注意
>
> 与 class 组件中的 `setState` 方法不同，`useState` 不会自动合并更新对象。你可以用函数式的 `setState` 结合展开运算符来达到合并更新对象的效果。
>
> ```
> setState(prevState => {
>   // 也可以使用 Object.assign
>   return {...prevState, ...updatedValues};
> });
> ```
>
> `useReducer` 是另一种可选方案，它更适合用于管理包含多个子值的 state 对象。

##### 惰性初始 state

`initialState` 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用：

```
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

##### 跳过 state 更新

调用 State Hook 的更新函数并传入当前的 state 时，React 将跳过子组件的渲染及 effect 的执行。（React 使用 [`Object.is` 比较算法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description) 来比较 state。）

需要注意的是，React 可能仍需要在跳过渲染前渲染该组件。不过由于 React 不会对组件树的“深层”节点进行不必要的渲染，所以大可不必担心。如果你在渲染期间执行了高开销的计算，则可以使用 `useMemo` 来进行优化。

#### `useEffect`

```
useEffect(didUpdate);
```

该 Hook 接收一个包含命令式、且可能有副作用代码的函数。

在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。

使用 `useEffect` 完成副作用操作。赋值给 `useEffect` 的函数会在组件渲染到屏幕之后执行。你可以把 effect 看作从 React 的纯函数式世界通往命令式世界的逃生通道。

默认情况下，effect 将在每轮渲染结束后执行，但你可以选择让它 [在只有某些值改变的时候](https://react.docschina.org/docs/hooks-reference.html#conditionally-firing-an-effect) 才执行。

##### 清除 effect

通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，`useEffect` 函数需返回一个清除函数。以下就是一个创建订阅的例子：

```
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // 清除订阅
    subscription.unsubscribe();
  };
});
```

为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染（通常如此），则**在执行下一个 effect 之前，上一个 effect 就已被清除**。在上述示例中，意味着组件的每一次更新都会创建新的订阅。若想避免每次更新都触发 effect 的执行，请参阅下一小节。

##### effect 的执行时机

与 `componentDidMount`、`componentDidUpdate` 不同的是，在浏览器完成布局与绘制**之后**，传给 `useEffect` 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。

然而，并非所有 effect 都可以被延迟执行。例如，在浏览器执行下一次绘制前，用户可见的 DOM 变更就必须同步执行，这样用户才不会感觉到视觉上的不一致。（概念上类似于被动监听事件和主动监听事件的区别。）React 为此提供了一个额外的 [`useLayoutEffect`](https://react.docschina.org/docs/hooks-reference.html#uselayouteffect) Hook 来处理这类 effect。它和 `useEffect` 的结构相同，区别只是调用时机不同。

虽然 `useEffect` 会在浏览器绘制后延迟执行，但会保证在任何新的渲染前执行。React 将在组件更新前刷新上一轮渲染的 effect。

##### effect 的条件执行

默认情况下，effect 会在每轮组件渲染完成后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新创建。

然而，在某些场景下这么做可能会矫枉过正。比如，在上一章节的订阅示例中，我们不需要在每次组件更新时都创建新的订阅，而是仅需要在 `source` prop 改变时重新创建。

要实现这一点，可以给 `useEffect` 传递第二个参数，它是 effect 所依赖的值数组。更新后的示例如下：

```
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
```

此时，只有当 `props.source` 改变后才会重新创建订阅。

> 注意
>
> 如果你要使用此优化方式，请确保数组中包含了**所有外部作用域中会发生变化且在 effect 中使用的变量**，否则你的代码会引用到先前渲染中的旧变量。请参阅文档，了解更多关于[如何处理函数](https://react.docschina.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies) 以及[数组频繁变化时的措施](https://react.docschina.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often) 的内容。
>
> 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循输入数组的工作方式。
>
> 如果你传入了一个空数组（`[]`），effect 内部的 props 和 state 就会一直持有其初始值。尽管传入 `[]` 作为第二个参数有点类似于 `componentDidMount` 和 `componentWillUnmount` 的思维模式，但我们有 [更好的](https://react.docschina.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies) [方式](https://react.docschina.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often) 来避免过于频繁的重复调用 effect。除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 `useEffect`，因此会使得处理额外操作很方便。
>
> 我们推荐启用 [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) 中的 [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) 规则。此规则会在添加错误依赖时发出警告并给出修复建议。

依赖项数组不会作为参数传给 effect 函数。虽然从概念上来说它表现为：所有 effect 函数中引用的值都应该出现在依赖项数组中。未来编译器会更加智能，届时自动创建数组将成为可能。

##### `useContext`

```
const value = useContext(MyContext);
```

接收一个 context 对象（`React.createContext` 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 `value` prop 决定。

当组件上层最近的 `<MyContext.Provider>` 更新时，该 Hook 会触发重渲染，并使用最新传递给 `MyContext` provider 的 context `value` 值。即使祖先使用 [`React.memo`](https://react.docschina.org/docs/react-api.html#reactmemo) 或 [`shouldComponentUpdate`](https://react.docschina.org/docs/react-component.html#shouldcomponentupdate)，也会在组件本身使用 `useContext` 时重新渲染。

别忘记 `useContext` 的参数必须是 *context 对象本身*：

- **正确：** `useContext(MyContext)`
- **错误：** `useContext(MyContext.Consumer)`
- **错误：** `useContext(MyContext.Provider)`

调用了 `useContext` 的组件总会在 context 值变化时重新渲染。如果重渲染组件的开销较大，你可以 [通过使用 memoization 来优化](https://github.com/facebook/react/issues/15156#issuecomment-474590693)。

> 提示
>
> 如果你在接触 Hook 前已经对 context API 比较熟悉，那应该可以理解，`useContext(MyContext)` 相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`。
>
> `useContext(MyContext)` 只是让你能够*读取* context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为下层组件*提供* context。

**把如下代码与 Context.Provider 放在一起**

```
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);  return (    <button style={{ background: theme.background, color: theme.foreground }}>      I am styled by theme context!    </button>  );
}
```

对先前 [Context 高级指南](https://react.docschina.org/docs/context.html)中的示例使用 hook 进行了修改，你可以在链接中找到有关如何 Context 的更多信息。

### 额外的 Hook

以下介绍的 Hook，有些是上一节中基础 Hook 的变体，有些则仅在特殊情况下会用到。不用特意预先学习它们。

#### `useReducer`

```
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

[`useState`](https://react.docschina.org/docs/hooks-reference.html#usestate) 的替代方案。它接收一个形如 `(state, action) => newState` 的 reducer，并返回当前的 state 以及与其配套的 `dispatch` 方法。（如果你熟悉 Redux 的话，就已经知道它如何工作了。）

在某些场景下，`useReducer` 会比 `useState` 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 `useReducer` 还能给那些会触发深更新的组件做性能优化，因为[你可以向子组件传递 `dispatch` 而不是回调函数](https://react.docschina.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down) 。

以下是用 reducer 重写 [`useState`](https://react.docschina.org/docs/hooks-reference.html#usestate) 一节的计数器示例：

```
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

> 注意
>
> React 会确保 `dispatch` 函数的标识是稳定的，并且不会在组件重新渲染时改变。这就是为什么可以安全地从 `useEffect` 或 `useCallback` 的依赖列表中省略 `dispatch`。

##### 指定初始 state

有两种不同初始化 `useReducer` state 的方式，你可以根据使用场景选择其中的一种。将初始 state 作为第二个参数传入 `useReducer` 是最简单的方法：

```
  const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}  );
```

> 注意
>
> React 不使用 `state = initialState` 这一由 Redux 推广开来的参数约定。有时候初始值依赖于 props，因此需要在调用 Hook 时指定。如果你特别喜欢上述的参数约定，可以通过调用 `useReducer(reducer, undefined, reducer)` 来模拟 Redux 的行为，但我们不鼓励你这么做。

##### 惰性初始化

你可以选择惰性地创建初始 state。为此，需要将 `init` 函数作为 `useReducer` 的第三个参数传入，这样初始 state 将被设置为 `init(initialArg)`。

这么做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利：

```
function init(initialCount) {  return {count: initialCount};}
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':      return init(action.payload);    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

##### 跳过 dispatch

如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及副作用的执行。（React 使用 [`Object.is` 比较算法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description) 来比较 state。）

需要注意的是，React 可能仍需要在跳过渲染前再次渲染该组件。不过由于 React 不会对组件树的“深层”节点进行不必要的渲染，所以大可不必担心。如果你在渲染期间执行了高开销的计算，则可以使用 `useMemo` 来进行优化。

#### `useCallback`

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 回调函数。

把内联回调函数及依赖项数组作为参数传入 `useCallback`，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 `shouldComponentUpdate`）的子组件时，它将非常有用。

`useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`。

> 注意
>
> 依赖项数组不会作为参数传给回调函数。虽然从概念上来说它表现为：所有回调函数中引用的值都应该出现在依赖项数组中。未来编译器会更加智能，届时自动创建数组将成为可能。
>
> 我们推荐启用 [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) 中的 [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) 规则。此规则会在添加错误依赖时发出警告并给出修复建议。

#### `useMemo`

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 值。

把“创建”函数和依赖项数组作为参数传入 `useMemo`，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

记住，传入 `useMemo` 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 `useEffect` 的适用范畴，而不是 `useMemo`。

如果没有提供依赖项数组，`useMemo` 在每次渲染时都会计算新的值。

**你可以把 `useMemo` 作为性能优化的手段，但不要把它当成语义上的保证。**将来，React 可能会选择“遗忘”以前的一些 memoized 值，并在下次渲染时重新计算它们，比如为离屏组件释放内存。先编写在没有 `useMemo` 的情况下也可以执行的代码 —— 之后再在你的代码中添加 `useMemo`，以达到优化性能的目的。

> 注意
>
> 依赖项数组不会作为参数传给“创建”函数。虽然从概念上来说它表现为：所有“创建”函数中引用的值都应该出现在依赖项数组中。未来编译器会更加智能，届时自动创建数组将成为可能。
>
> 我们推荐启用 [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) 中的 [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) 规则。此规则会在添加错误依赖时发出警告并给出修复建议。

#### `useRef`

```
const refContainer = useRef(initialValue);
```

`useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。返回的 ref 对象在组件的整个生命周期内保持不变。

一个常见的用例便是命令式地访问子组件：

```
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

本质上，`useRef` 就像是可以在其 `.current` 属性中保存一个可变值的“盒子”。

你应该熟悉 ref 这一种[访问 DOM](https://react.docschina.org/docs/refs-and-the-dom.html) 的主要方式。如果你将 ref 对象以 `<div ref={myRef} />` 形式传入组件，则无论该节点如何改变，React 都会将 ref 对象的 `.current` 属性设置为相应的 DOM 节点。

然而，`useRef()` 比 `ref` 属性更有用。它可以[很方便地保存任何可变值](https://react.docschina.org/docs/hooks-faq.html#is-there-something-like-instance-variables)，其类似于在 class 中使用实例字段的方式。

这是因为它创建的是一个普通 Javascript 对象。而 `useRef()` 和自建一个 `{current: ...}` 对象的唯一区别是，`useRef` 会在每次渲染时返回同一个 ref 对象。

请记住，当 ref 对象内容发生变化时，`useRef` 并*不会*通知你。变更 `.current` 属性不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用[回调 ref](https://react.docschina.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) 来实现。

#### `useImperativeHandle`

```
useImperativeHandle(ref, createHandle, [deps])
```

`useImperativeHandle` 可以让你在使用 `ref` 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。`useImperativeHandle` 应当与 [`forwardRef`](https://react.docschina.org/docs/react-api.html#reactforwardref) 一起使用：

```
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

在本例中，渲染 `<FancyInput ref={inputRef} />` 的父组件可以调用 `inputRef.current.focus()`。

#### `useLayoutEffect`

其函数签名与 `useEffect` 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新。

尽可能使用标准的 `useEffect` 以避免阻塞视觉更新。

> 提示
>
> 如果你正在将代码从 class 组件迁移到使用 Hook 的函数组件，则需要注意 `useLayoutEffect` 与 `componentDidMount`、`componentDidUpdate` 的调用阶段是一样的。但是，我们推荐你**一开始先用 `useEffect`**，只有当它出问题的时候再尝试使用 `useLayoutEffect`。
>
> 如果你使用服务端渲染，请记住，*无论* `useLayoutEffect` *还是* `useEffect` 都无法在 Javascript 代码加载完成之前执行。这就是为什么在服务端渲染组件中引入 `useLayoutEffect` 代码时会触发 React 告警。解决这个问题，需要将代码逻辑移至 `useEffect` 中（如果首次渲染不需要这段逻辑的情况下），或是将该组件延迟到客户端渲染完成后再显示（如果直到 `useLayoutEffect` 执行之前 HTML 都显示错乱的情况下）。
>
> 若要从服务端渲染的 HTML 中排除依赖布局 effect 的组件，可以通过使用 `showChild && <Child />` 进行条件渲染，并使用 `useEffect(() => { setShowChild(true); }, [])` 延迟展示组件。这样，在客户端渲染完成之前，UI 就不会像之前那样显示错乱了。

#### `useDebugValue`

```
useDebugValue(value)
```

`useDebugValue` 可用于在 React 开发者工具中显示自定义 hook 的标签。

例如，[“自定义 Hook”](https://react.docschina.org/docs/hooks-custom.html) 章节中描述的名为 `useFriendStatus` 的自定义 Hook：

```
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // 在开发者工具中的这个 Hook 旁边显示标签  // e.g. "FriendStatus: Online"  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}
```

> 提示
>
> 我们不推荐你向每个自定义 Hook 添加 debug 值。当它作为共享库的一部分时才最有价值。

### 延迟格式化 debug 值

在某些情况下，格式化值的显示可能是一项开销很大的操作。除非需要检查 Hook，否则没有必要这么做。

因此，`useDebugValue` 接受一个格式化函数作为可选的第二个参数。该函数只有在 Hook 被检查时才会被调用。它接受 debug 值作为参数，并且会返回一个格式化的显示值。

例如，一个返回 `Date` 值的自定义 Hook 可以通过格式化函数来避免不必要的 `toDateString` 函数调用：

```
useDebugValue(date, date => date.toDateString());
```

## 贡献

### 设计原则

编写该文档的目的是，使开发者更易于了解我们如何决策 React（应该做哪些，不应该做哪些），以及我们的开发理念。我们非常欢迎来自社区的贡献，但如若违背这些理念，实非我们所愿。

> **注意：**
>
> 文章描述了 React 自身的设计原则，而非 React 组件或应用，阅读者需要对 React 有深入的理解。
>
> 如需 React 的入门文档，查看 [React 哲学](https://react.docschina.org/docs/thinking-in-react.html)。

#### 组合

组件之间的组合是 React 的重要特征。不同开发者写的组件应该可以一起正常执行。给一个组件添加功能，而不会对整个代码库造成涟漪似的变化，这对我们很重要。

比如，应该可以在不影响任何使用它的组件的情况下，将一些内部 state 引入该组件。类似的，在必要的情况下可以在任何组件里添加一些初始化和销毁的代码。

在组件中使用 state 或者生命周期函数没什么“不好”。跟所有强大的特性一样，应该适度使用它们，我们并不打算移除他们。相反，我们认为他们是 React 之所以好用的一部分。我们未来也许会启用[更多函数模式](https://github.com/reactjs/react-future/tree/master/07 - Returning State)，但内部 state 和生命周期函数都会在里面。

人们常常认为组件“只是函数”，但在我们看来，组件要好用的话，需要的不止这些。在 React 中，组件描述了任何可组合的行为，包含渲染、生命周期和 state。一些类似 [Relay](https://facebook.github.io/relay/) 的外部库给组件带来了其他增强功能，比如描述数据之间的依赖关系。有可能这些做法会以某种形式回到 React 中。

#### 共用抽象

一般而言我们[拒绝添加](https://www.youtube.com/watch?v=4anAwXYqLG8)一些开发者可以实现的特性。我们不想因为无用的库代码使得大家的应用变的累赘，然而也有特例。

比如，如果 React 不支持内部 state 或者生命周期函数，大家会为此创建自己的抽象。当有多种抽象竞争的时候，React 不能强制使用或利用这些抽象中的任何一个。React 必须选择最基本的共同点。

这就是我们增加 React 特性的原因。如果我们发现很多组件以不兼容或者不高效的方式实现了某些特性，我们会倾向在 React 中实现它。我们轻易不这样做，只有我们非常确定提高抽象层级有助于整个生态系统时我们才会这样做。State、生命周期函数、跨浏览器事件的正规化都是很好的范例。

我们总是和社区一起商议这样的优化提议。你可以在 React 问题跟踪的 [“big picture”](https://github.com/facebook/react/issues?q=is:open+is:issue+label:"Type:+Big+Picture") 标签上找到一些这样的讨论。

#### 应急方案

React 是务实的，Facebook 的产品需求驱使它这样。尽管 React 受一些目前还非主流的编程思想比如函数式编程的影响，这个项目的一个明确目标是广泛地接触具有不同技能和经验的开发者。

如果要废弃某个我们不喜欢的模式，我们有责任在废弃之前，考虑所有已知的用例并且教育社区这些模式的[替代做法](https://react.docschina.org/blog/2016/07/13/mixins-considered-harmful.html)。如果某些有助于开发应用的模式很难以声明式的方式表达，我们会提供一个[命令式的 API](https://react.docschina.org/docs/more-about-refs.html)。如果我们发现很多应用中必要的模式我们找不到一个完美的API，我们会[提供一个临时欠佳的 API](https://react.docschina.org/docs/legacy-context.html)，只要以后可以移除它并且方便后续的优化。

#### 稳定性

我们重视 API 的稳定性。在 Facebook，我们有超过 5 万多个组件在使用 React。很多其他公司，包括 [Twitter](https://twitter.com/) 和 [Airbnb](https://www.airbnb.com/) 也是 React 的重度用户。这就是我们一般不愿意变更公共 API 或行为的原因。

然而我们认为“没有变更”的这种稳定性被高估了，它很快会演变成停滞不前。我们偏向这样理解稳定性：“在生产环境大规模使用，当需要变更时有一个明确的（自动化更好）迁移路径。”。

当我们废弃一个模式时，我们会研究它在 Facebook 内部的使用情况并添加废弃警告。这样我们可以评估变更的影响范围。有时觉得时机太早了，我们就不作变更。我们需要更策略化的思考来让代码库准备好这样的变更。

如果我们自信地认为这次改动破坏性不是非常大，而且迁移策略对所有用户场景都可行，我们会在开源社区发布废弃警告。我们和很多 Facebook 以外的 React 用户联系紧密，而且我们会监控流行的开源项目并指导他们解决这些废弃警告。

只考虑 Facebook 里的 React 的代码库大小，成功的内部迁移往往是个好兆头：其他公司迁移也不会有困难。然而时不时会有人提出我们没有考虑到的场景，我们会给他们一个紧急出路，或者反思我们的做法。

没有充分的理由我们不会废弃任何特性。我们意识到有时废弃警告会让开发者沮丧，但我们添加废弃警告是因为它们为社区中的很多人认为有价值的优化和新特性扫除了障碍。

例如，我们在 React 15.2.0 中添加了一个[未知 DOM 属性的警告](https://react.docschina.org/warnings/unknown-prop.html)，很多项目因此受到影响。然而修复这些警告非常重要，因为我们可以在 React 中新增支持[自定义属性](https://github.com/facebook/react/issues/140)。以往的每一次废弃警告都有像这样的考量在里面。

我们添加废弃警告时会保留到当前大版本，在[下一次大版本中改变行为](https://react.docschina.org/blog/2016/02/19/new-versioning-scheme.html)。如果这其中设计到大量重复性的人力工作，我们会发布一个[代码更改](https://www.youtube.com/watch?v=d0pOgY8__JM)脚本自动化大部分的改动。Codemods 使我们能够在庞大的代码库中继续前行，我们也推荐大家使用。

你可以在 [react-codemod](https://github.com/reactjs/react-codemod) 仓库中找到我们发布的 codemods。

#### 互操作性

我们很看重与已有系统的互操作性和渐进式的采用。Facebook 有一个庞大的非 React 的代码库。Facebook 的网站混合使用了名为 XHP 的服务端组件系统、React 之前的内部 UI 库和 React。任何产品团队能够[开始在小功能上使用React](https://www.youtube.com/watch?v=BF58ZJ1ZQxY)而不是重写他们的代码，这对我们很重要。

这就是 React 提供应急方案的原因：让不同的模型协同工作，让不同的 UI 库协同工作。你可以把一个已有的命令式 UI 封装成声明式的组件，反之亦然。这对渐进采用而言至关重要。

#### 调度

即便你的组件以 function 的方式声明，在 React 中你也并不会直接调用它们。每个组件返回一个该渲染什么的描述，该描述会包含开发者写的组件如 `<LikeButton>` 和 平台特定的组件如 `<div>`。由 React 决定在未来的某个时间点展开 `<LikeButton>`，并根据组件的渲染结果递归地把这些变更实际应用到 UI 树上。

虽然只是微小的区别，但这样做意义重大。因为你不需要调用组件方法而是让 React 调用它，这意味着如果必要 React 可以延迟调用。在 React 当前的实现中，React 在单个 tick 周期中递归地走完这棵树，然后调用整个更新后树的渲染方法。但是以后 React 可能会[延迟一些更新操作来防止掉帧](https://github.com/facebook/react/issues/6170)。

这在 React 的设计中很常见。有一些流行的库实现了 “push” 模式，即当新数据到达时再计算。然而 React 坚持 “pull” 模式，即计算可以延迟到必要时再执行。

React 不是一个常规的数据处理库，它是开发用户界面的库。我们认为 React 在一个应用中的位置很独特，它知道当前哪些计算当前是相关的，哪些不是。

如果不在当前屏幕，我们可以延迟执行相关逻辑。如果数据数据到达的速度快过帧速，我们可以合并、批量更新。我们优先执行用户交互（例如按钮点击形成的动画）的工作，延后执行相对不那么重要的后台工作（例如渲染刚从网络上下载的新内容），从而避免掉帧。

要清楚我们现在还没有利用调度。然而，我们之所以偏好自己控制调度以及异步`setState()`，是因为拥有了选择的自由度。

如果我们允许用户使用在一些变体的[函数反应式编程](https://en.wikipedia.org/wiki/Functional_reactive_programming)范式中常见的“推”模式直接拼接视图，我们将会很难获得调度的控制权。

React 的一个关键目标是在把控制权转交给 React 之前执行的用户代码量最少。这确保 React 保持调度的能力，并根据它所知道的 UI 的情况把工作切分成小块处理。

在团队内部有个笑话，React 本该叫做“调度”因为 React 不想变得完全“反应式（reactive）”。

#### 开发者体验

提供好的开发者体验对我们很重要。

例如，我们维护了 [React DevTools](https://github.com/facebook/react-devtools)，它让大家在 Chrome 和 Firefox 浏览器中可以检查 React 组件树。我们听说它大幅提高了 Facebook 的工程师和社区的生产效率。

我们还提供了对开发有所帮助的开发者警告。比如你以浏览器不理解的方式嵌套标签或者你在编写 API 时常见的错别字，React 会警告你。开发者警告和相关的检查导致了 React 的开发版本比生产版本速度慢。

Facebook 内部的使用模式帮助我们了解常见的错误有哪些，以及如何提前预防。当我们添加新特性时，我们尝试去预测可能会发生的错误并发出警告。

我们一直在寻找提高开发者体验的方法。我们很乐意听取大家的建议，接受大家的贡献，把开发者体验做的更好。

#### 调试

当发生错误时，你有一些线索可以追溯到代码库中的具体代码，这很重要。在 React 中，props 和 state 就是线索。

当你看到屏幕上出现错误时，你可以打开 React 开发者工具，找到负责渲染的组件，检查它的 props 和 state 是否正确。如果正确，你就知道为题要么在于组件的 `render()` 方法，要么在于某个被 `render()` 调用的方法。可见问题被独立出来了。

如果 state 发生错误，你就知道问题在于这个文件中的某个 `setState()` 调用，定位和修复也相对简单，因为在单个文件中 `setState()` 调用次数很少。

如果 props 出现错误，你可以在检查器中沿着树向上排查，查找到第一个因为向下传递了错误的 props 而“污染了这口井”的组件。

能够以当前的 props 和 state 这种形式追溯到其产生的任何 UI，这种能力对 React 来说非常重要。state 不会包裹在闭包和组合子中，并且在 React 中可以直接获取，这是 React 一个非常明确的设计目标。

尽管 UI 是动态变化的，但是我们认为 state 和 props 的同步执行的 `render()` 函数使得调试变成了无聊但是有限的步骤，而不是瞎猜。我们在 React 里保留了这个限制，即使它使调试在某些场景下变得更加困难，比如复杂的动画。

#### 配置

我们发现全局的运行时配置会造成很多问题。

比如我们时常收到这样的请求，实现类似于 `React.configure(options)` 或者 `React.register(component)` 的方法。然而这样做会出现很多问题，而我们对此并没有很好的解决方案。

如果有人在第三方组件库中调用了这样的方法怎么办？如果一个 React 应用内嵌了另一个 React 应用，而且他们需要的配置不兼容怎么办？一个第三方组件怎么申明它需要某个特定配置呢？我们认为全局的配置与组合搭配效果不好。既然组合是 React 的核心，那么我们不在代码里提供全局的配置。

然而我们在构建层面提供了一些全局的配置。比如我们提供了独立的开发和生产环境的构建。我们后面也许会[增加一个分析构建](https://github.com/facebook/react/issues/6627)。我们对考虑使用其他构建参数保持开放态度。

#### DOM 之外

我们认为 React 的价值在于它使我们写出更少 bug 的组件，而且组件很方便组合。React 当初的渲染目标是 DOM，但 [React Native](https://reactnative.dev/) 对 Facebook 和社区来说同样重要。

React 的一个重要设计约束是要渲染引擎无关。这在内部呈现增加了一些开销，另一方面，对内核的任何优化将对所有平台都有益。

单一的编程模型使我们能够围绕产品形成工程团队，而不是围绕平台。目前来看这样的取舍对我们来说很值得。

#### 实现

相比优雅的实现，我们更想提供尽可能优雅的 API。现实是不完美的，如果能让用户无需写这些代码，在合适的范围内，我们偏向把丑陋的代码写在库里。我们评估新代码时，我们看中的是正确地实现、高性能并且能够带来良好的开发体验，优雅是第二位的。

我们宁可写无聊的代码也不写耍聪明的代码。代码是一次性的而且经常变更，所以[除非极度必要，不引入新的内部抽象](https://youtu.be/4anAwXYqLG8?t=13m9s)很重要。很方便移动、改动和删除的啰嗦的代码比过早抽象且难以变更的优雅的代码更好。

#### 针对工具优化

React 一些常用的 API 名字很冗长。比如，我们采用 `componentDidMount()` 而非 `didMount()` 或者 `onMount()`。这是[有意为之的](https://github.com/reactjs/react-future/issues/40#issuecomment-142442124)，目的是使得和 React 的交互点具有高可见性。

在像 Facebook 这样庞大的代码库中，能够搜索某些特定 API 的使用很重要。我们重视清晰冗长的名字，特别是在一些需要保守使用的特性上。比如，`dangerouslySetInnerHTML` 在代码评审中就很容易被发现。

针对搜索优化很重要，因为我们依赖 [codemods](https://www.youtube.com/watch?v=d0pOgY8__JM) 做不兼容的变更。我们希望非常容易、安全地在代码库中应用大量自动化变更，独特冗长的名字帮助了我们。类似地，独特的命名使得编写自定义 React 用法的[提示规则](https://github.com/yannickcr/eslint-plugin-react)变得很容易，无需担心潜在的错误匹配。

[JSX](https://react.docschina.org/docs/introducing-jsx.html) 也类似这样。尽管 React 不强制使用 JSX，在 Facebook 我们大量使用 JSX，因为它既好看有实用。

在我们的代码库中，JSX 给和 React 元素树打交道的工具提供了明确的提示。这使得构建时优化成为可能，比如[提升常量元素](https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements/)、安全地进行代码提示、codemod 内部组件用法、在代码警告中[包含 JSX 源码定位](https://github.com/facebook/react/pull/6771).

#### 内部测试

我们全力解决社区提出的问题。但我们可能会优先处理在 Facebook 内部遇到的*同样的*问题。也许这很反直觉，但是我们认为这是社区相信 React 的主要原因。

内部的重度使用使我们坚信 React 不会凭空消失。Facebook 创建了 React 是来解决它的问题的。React 给 Facebook 带来了现实的商业价值，并且在很多产品中使用。在内部测试意味着我们的目光保持敏锐，有着前进的重点方向。

这不代表我们会忽视社区提出的问题。比如，即便我们内部并不依赖他们，我们仍增加了 React 对 [web components](https://react.docschina.org/docs/webcomponents.html) 和 [SVG](https://github.com/facebook/react/pull/6243) 的支持。我们倾听者大家的痛点，并全力解决他们。是社区使 React 变得与众不同，所以我们很荣幸可以回报社区。

在 Facebook 发布了很多开源的项目之后，我们学到了让大家都开心的做法会导致项目没有重点，成长不起来。相反，我们发现选择一小部分群体，重点关注如何使他们开心带来了积极的净效应。这正是 React 的做法，到目前为止解决 Facebook 产品团队的问题很好的传递到了开源社区。

这种做法的不好之处是有时对于 Facebook 团队无需关心的事，比如“起步”的体验，我们不能够给予足够的重视。我们已经觉察到了，我们正在着手思考如何做才能使社区里的每个人都受益，不重蹈以前开源项目的覆辙。

Is this page useful?[编辑此页面](https://github.com/reactjs/zh-hans.reactjs.org/tree/master/content/docs/design-principles.md)

### 报错总结

>  // console报错信息如下
> Warning: `value` prop on `input` should not be null. Consider using the empty string to clear the component or `undefined` for uncontrolled components.

原因解析：

由于input需要设置value，而初始化state里面的value值为null，导致react解析报Waring。

解决方案：

1、waring忽略不管

2、设置input初始化值位空字符串

<input type="number" maxLength="6" placeholder="选填" value={postcode || ''} />

>  index.js:1 Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

原因

原因是因为input标签，没有定义onChange 但是提供了value属性。React会抛出警告，并将元素设置为只读。

如果目标是只读字段，最好使用readOnly属性明确加以定义。这不仅会消除警告，也会确保代码的可读性。

解决：

可以添加readOnly={true} ，或者直接添加readOnly属性，而不设置值，React会默认将该属性的值设为true。

```js
<PhoneInput
  key={key}
  label={item.label}
  name={key}
  disabled
  readOnly
  value={this.state[key]}
  interCodeValue={this.state.intercode}
/>
```

>  SignUpDialog.js:9 Uncaught TypeError: Cannot read property 'params' of undefined

> console.log(props.match.params.id)

>  Error: Invariant failed: You should not use <withRouter(MineDemo) /> outside a <Router>

问题描述：使用history的push方法手动跳转路由。结果报错

问题原因：如果一个组件要使用路由创建, 那么这个组件必须包裹在BrowserRouter, HashRouter中

解决办法：将组件包裹在BrowserRouter,或HashRouter中即可

>  Error: Invariant failed: You should not use <Prompt> outside a <Router>

Router容器包裹着路由跳转的Prompt

> // Line 31:24: Expected '===' and instead saw '==' eqeqeq 

esink报错 使用eslint-disable-line忽略这行的eslink

>  React项目警告：Imported JSX component xxx must be in PascalCase or


问题原因
React发现了带下划线的组件命名，将带下划线的组件命名改为驼峰命名即可

> 使用export class Game 导入import Game from "./Game/Game";
>
> Attempted import error: './Game/Game' does not contain a default export (imported as 'Game').

**export default 和 export 区别：**

- 1.export与export default均可用于导出常量、函数、文件、模块等	 
- 2.你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用 
- 3.在一个文件或模块中，export、import可以有多个，export default仅有一个 
- 4.通过export方式导出，在导入时要加{ }，export default则不需要

```javascript
1.export
//a.js
export const str = "blablabla~";
export function log(sth) { 
  return sth;
}
对应的导入方式：
//b.js
import { str, log } from 'a'; //也可以分开写两次，导入的时候带花括号
2.export default
//a.js
const str = "blablabla~";
export default str;
对应的导入方式：
//b.js
import str from 'a'; //导入的时候没有花括号
```

**使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名  **

```javascript
//a.js
let sex = "boy";
export default sex（sex不能加大括号）
//原本直接export sex外部是无法识别的，加上default就可以了.但是一个文件内最多只能有一个export default。
//其实此处相当于为sex变量值"boy"起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default。
```

```javascript
// b.js
// 本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
import any from "./a.js"
import any12 from "./a.js" 
console.log(any,any12)   // boy,boy
```

> TypeError: Class extends value undefined is not a constructor or null
>
> 这个类继承的值无法解构或者解构的值为空

Component写错成Compontent

> Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
>
> 错误：超过最大更新深度。当组件重复调用componentWillUpdate或componentDidUpdate中的setState时，可能会发生这种情况。React限制嵌套更新的数量以防止无限循环。

onClick = {() => this.props.onClick()} 写错成onClick={this.props.onClick()}>

> Failed to compile
>
> ```
> ./src/Game/Board.js
> SyntaxError: Board.js: Unexpected keyword 'this' (37:43)
> ```

const status = "Next player : " + {this.state.xIsNext ? 'X' : 'O'}; =>

const status = "Next player : " + (this.state.xIsNext ? 'X' : 'O');

>  **Warning: Each child in an array or iterator should have a unique “key” prop. Check the render method of “Game”.**

为元素指定key