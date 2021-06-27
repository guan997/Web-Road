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
##### React的检查工具下载
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

​```js
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

组件更新会经历的生命周期如下：

- static getDerivedStateFromProps()

  shouldComponentUpdaate():根据该函数的返回值，判断React组件的输出是否受当前state或props更改的影响，当props或state发生变化时，shouldComponentUpdate()会在渲染执行之前被调用，返回值默认为true。首次渲染或使用forceUpdate()时不会调用该方法，请注意，返回false并不会组织子组件在state更改时重新渲染，一般不要企图依靠此方法来阻止渲染。（不要频繁使用这个api，这回导致错误，可使用全局变量判断是否要重新渲染）

渲染过程错误处理API：

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

### 拉取API数据

React 的一种非常常见的用法是从 API 中提取数据。了解如何通过状态数组创建组件、渲染和映射。此代码的新方面是`componentDidMount()`React 生命周期方法。**生命周期**是在 React 中调用方法的顺序。**挂载**是指一个项目被插入到 DOM 中。

当我们拉入 API 数据时，我们想使用`componentDidMount`，因为我们想确保在我们引入数据之前组件已经渲染到 DOM。在下面的片段中，您将看到我们如何从 Wikipedia API 引入数据并将其显示在页面上
api.js

```jsx
import React, {Component} from 'react'

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const {data} = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
  }
}

export default App
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











