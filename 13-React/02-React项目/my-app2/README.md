# React App

# 项目安装

npx create-react-app my-app --tlate typescript

```js
|-- my-app
    |-- .gitignore
    |-- package.json 依赖
    |-- README.md 说明文档
    |-- tsconfig.json 用来配置typescript
    |-- yarn.lock 锁定版本号
    |-- public文件夹不参与打包,文件夹的所有文件都为index.html服务（绝大多数情况下不改动）
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json 配置pwa加载情况
    |   |-- robots.txt 配置搜索引擎规则
    |-- src 所有文件最终将打包成为bunndle.js
        |-- App.css 所有资源文件都放在src中
        |-- App.test.tsx
        |-- App.tsx一般主要描述app本身
        |-- index.css
        |-- index.tsx一般做一些准备工作，入口文件
        |-- logo.svg
        |-- react-app-env.d.ts主要引入一些预先定义好的typescript类别
        |-- reportWebVitals.ts埋点上报
        |-- setupTests.ts做一些单元测试，@testing-library/jest-dom测试库
```

常见问题：

- 路径尽量不要写相对路径，因为层数多，代码可阅读性不好

  - 在tsconfig.json的compilerOptions下写入基本路径"baseUrl": "./src",
  - tsconfig.json文件中要使用双引号

- 格式化代码配置要标准

  - prettier格式化工具

  - yarn add  --exact prettier -D安装依赖 npm install prettier-D

  - echo {}> .prettierrc.json新建配置文件 `echo新建`

  - 新建.prettierignore,类似于.gitignore不需要格式化文件内容是 build coverage

  - yarn prettier --write手动格式化命令

  - 借助pre-commit hook实现自动化格式命令：npx mrm lint-staged(如果报错请指定版本)

    - package.json中出现“husky”方便管理 commit hook的工具

    - commit之前运行lint-staged

    - lint-staged 是运行“*.{js,css,md,ts,tsx}”:"prettier --write"格式化

    - prettier 和eslint有冲突，需要为了eslink配置一下

    - yarn add eslint-config-prettier -D

    - 在package.json下的eslintConfig下添加"prettier"用prettier覆盖一部分原来的规则"eslintConfig": {

        "extends": [

         "react-app",

         "react-app/jest",

         "prettier"

        ]

- git commit要有意义

  - commitlint在每次提交时都检查commit是否规范，不符合就失败

  - 安装comiit依赖yarn add @commitlint/cli @commitlint/config-conventional --dev

  - 之后运行echo "module.exports = {extends:['@commitlint/config-conventional']}" > commitlint.config.js配置

  - 之后在package.json中的"husky": {

      "hooks": {

       "pre-commit": "lint-staged",

       "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"

      }

    - 规则

    - ```
      ype-enum
      condition: type is found in value
      
      rule: always
      
      level: error
      
      value
      
      [
        'build',
        'chore',
        'ci',//脚本配置
        'docs',//文档
        'feat',//功能
        'fix',
        'perf',//性能
        'refactor',
        'revert',
        'style',//样式
        'test'
      ];
      echo "foo: some message" # fails
      echo "fix: some message" # passes
      type-case
      description: type is in case value
      rule: always
      level: error
      value
      'lowerCase'
      echo "FIX: some message" # fails
      echo "fix: some message" # passes
      ```

# MOCK方案对比

## 简要说明

在接下来章节的实战代码中大家将会使用`window.fetch`请求后端接口

但是在真实工作环境中，由于后端与前端并行开发，所以在前期是没有后端接口可以使用的

所以学会最适合自己的 Mock 数据的方法就非常重要

这一节会给大家对比业界常见的 Mock 方案，选择并配置其中最合适的方案

## 常见 MOCK 方案

### 1. 代码侵入 (直接在代码中写死 Mock 数据，或者请求本地的 JSON 文件)

优点：无

缺点：

1. 和其他方案比 Mock 效果不好
2. 与真实 Server 环境的切换非常麻烦，一切需要侵入代码切换环境的行为都是不好的

### 2. 请求拦截

代表：[Mock.js](http://mockjs.com/)

示例：

```
Mock.mock(/\\\\/api\\\\/visitor\\\\/list/, 'get', {
  code: 2000,
  msg: 'ok',
  'data|10': [
    {
      'id|+1': 6,
      'name': '@csentence(5)',
      'tag': '@integer(6, 9)-@integer(10, 14)岁 @cword("零有", 1)基础',
      'lesson_image': "<https://images.pexels.com/3737094/pexels-photo-3737094.jpeg>",
      'lesson_package': 'L1基础指令课',
      'done': '@integer(10000, 99999)',
    }
  ]
})
```

优点：

1. 与前端代码分离
2. 可生成随机数据

缺点：

1. 数据都是动态生成的假数据，无法真实模拟增删改查的情况
2. 只支持 ajax，不支持 fetch

(想要了解 ajax 和 fetch 区别的同学来点[我](https://zhuanlan.zhihu.com/p/24594294))

### 3. 接口管理工具

代表：[rap](https://github.com/thx/RAP), [swagger](https://swagger.io/), [moco](https://github.com/dreamhead/moco), [yapi](https://github.com/YMFE/yapi)

优点：

1. 配置功能强大，接口管理与 Mock 一体，后端修改接口 Mock 也跟着更改，可靠

缺点：

1. 配置复杂，依赖后端，可能会出现后端不愿意出手，或者等配置完了，接口也开发出来了的情况。
2. 一般会作为大团队的基础建设而存在， 没有这个条件的话慎重考虑

__json_server_mock__告诉代码没什么关系，私人电话传递信息

### 4. 本地 node 服务器

代表：[json-server](https://github.com/typicode/json-server)

npm install -g json-server//安装
json-server --watch db.json//启用
yarn add json-server -D //配置

```js

 __json_server_mock__
"json-server": "json-server
 __json_server_mock__/db.json --watch --port 3001",
   启用npm run json-serve（mock）
__JSON_serve_mock//创立文件夹
      "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "json-server": "json-server __json_server_mock__/db.json --watch",
    "prepare": "husky install"
  },
```

优点：

1. 配置简单，json-server 甚至可以 0 代码 30 秒启动一个 REST API Server
2. 自定义程度高，一切尽在掌控中
3. 增删改查真实模拟

缺点：

1. 与接口管理工具相比，无法随着后端 API 的修改而自动修改

## 本课程 Mock 计划

所有不是因为业务修改源代码的行为都是不好的行为，为了避免经常改变api路径

- 新建.env和.env.development分别写线上路径和本地端口路径

- // 根据运行的命令去自动选择读取.env还是.env.development

  const apiUrl = process.env.REACT_APP_API_URL;

  fetch(`${apiUrl}/projects`).then( 路径被反引号包裹

从本章开始，使用 json-server Mock 2 章，

在这 2 章里让大家尽可能多的接触到不同的(GET, POST, DELETE, PATCH)Mock 场景，

剩下的章节里使用真实的接口

### REST API

一句话总结：URI 代表 资源/对象，METHOD 代表行为

```
GET /tickets // 列表
GET /tickets/12 // 详情
POST /tickets  // 增加
PUT /tickets/12 // 替换
PATCH /tickets/12 // 修改
DELETE /tickets/12 // 删除
```

点 [我](https://segmentfault.com/q/1010000005685904) 了解 `patch vs put`

decodeURIComponent()反转译字

encodeURIComponent("转译")转译成字母

encodeURI("URI")转译整个URI

## JSX渲染

yarn add qs避免url后手动追加name

​    fetch(`${apiUrl}/projects?name=${param.name}&personId=${param.personId}`) =>

   fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(

qs.stringify(cleanObject(param))会把param准换为name=${param.name}&personId=${param.personId}`

```js
//index.jsx
import React from "react"
import * as qs from 'qs';
import {cleanObject,useMount,useDebounce} from '../../utils/index';
import { useEffect, useState } from "react"
import {SearchPanel} from './search-panel'
import {List} from './list'
// 根据运行的命令去自动选择读取.env还是.env.development
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])
    // 负责人列表
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });
    const [list, setList] = useState([]);
    // 利用useDebounce快速处理事件，减少请求
    const debouncedParam = useDebounce(param, 2000);
    // 获取项目列表api的数据 :当param改变时获取
    // 使用fetch获取，返回给response
    useEffect(() => {
        // 传搜索对象post 为避免param.name对象为空值，避免歧义
        // fetch(`${apiUrl}/projects?name=${param.name}&personId=${param.personId}`).then(async response => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [debouncedParam])
    // useEffect(() => {
    //     fetch(`${apiUrl}/users`).then(async response => {
    //         if (response.ok) {
    //             setUsers(await response.json())
    //         }
    //     })
    // }, [])//只在页面加载时执行一次 初始化，如果不想看到满屏空数组和useEffect，把useEffect抽象出来
    // 避免加载时有空数组
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    })
    // useDebounce
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List list={list} users={users}/>
        </div>
    )
}
//list
import React from "react"
export const List = ({ users, list }) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr key={project.id}>
                    <td>{project.name}</td>
                    {/* 不含personname需要用personid渲染 从user中找personid */}
                    {/* 如果找不到值很有可能变成undefined */}
                    {/* ?.表示 如果前面表达式为undefined则整个表达式都是undefined，故不会报任何错误 */}
                    {/* 为undefined时默认值为未知 */}
                    <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
                </tr>)
            }
        </tbody>
    </table>
}
//search-panel
import React from "react"
// import { useEffect, useState } from "react"
// 解构赋值
export const SearchPanel = ({users,param, setParam}) => {
    return <form>
        <div>
            {/* setParam(Object.assing({},param,{name:evt.target.value})) */}
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            },10000)}/>
            {/* 选择负责人 */}
            <select 
                value={param.personId} 
                onChange={evt => setParam({
                    ...param,
                    personId: evt.target.value
            })}>
                <option value={''}>负责人</option>
                {users.map(user => 
                    <option value = {user.id} key = {user.id}>
                        {user.name}
                    </option>)}
            </select>
        </div>
    </form>
}
//utils/index
import { useEffect, useState } from "react";

// 判断是否为0 常用
export const isFalsy = (value) => value === 0 ? false : !value;
// !!value 一个“！”号是对值求反，两个“！！”转换为布尔值
// 在一个函数里，改变一个函数的本身是不好的
// 调用函数时，函数不知道函数内部有改变会原污染函数
export const cleanObject = (object) => {
    Object.assign({}, object);
    const result = { ...object };
    // 遍历对象的键
    Object.keys(result).forEach(key => {
        const value = result[key];
        // 当value为0时也需要判断，因为0有意义
        if (isFalsy(value)) {//如果value值为空，undefined，则删除
            delete result[key];
        }
    })
    return result;
};
// 避免出现[]
export const useMount = (callback) => {
    useEffect(() => {
        callback()
        // eslint-disable-next-line
    }, [])
}
// 节流
// const debounce = (func,delay) =>{
//     let timeout;
//     return(...param) =>{
//         // 闭包
//         if(timeout){//如果timeout有值 清除定时器
//             clearTimeout(timeout);
//         }//timeout没有值设置定时器
//         timeout = setTimeout(function(){
//             func(...param);
//         },delay);
//     }
// }
// const log = debounce(() => console.log('call'),5000)
// log()
// log()
// log()

// debounce 原理讲解：
// 0s ---------> 1s ---------> 2s --------> ...
//     一定要理解：这三个函数都是同步操作，所以它们都是在 0~1s 这个时间段内瞬间完成的；
//     log()#1 // timeout#1
//     log()#2 // 发现 timeout#1！取消之，然后设置timeout#2
//     log()#3 // 发现 timeout#2! 取消之，然后设置timeout#3
//             // 所以，log()#3 结束后，就只剩timeout#3在独自等待了


// 利用hook写debounce
// 上一个设置的被下一个清理，只有最后一个存取下来，
export const useDebounce = (value, delay) => {
    // useState是响应式的value值改变，useState就会触发
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        // 每次value或者delay的值变化以后，设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay);
        // 每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout);
    }, [value, delay])
    return debouncedValue;
}
// Custom Hook的最大特征就是在hook中借助别的hook，如果不借助，单纯用函数就好
```

### useEffect()

组件加载时渲染一次，使用 `useEffect` 完成副作用操作。赋值给 `useEffect` 的函数会在组件渲染到屏幕之后执行，可以选择让它 [在只有某些值改变的时候](https://react.docschina.org/docs/hooks-reference.html#conditionally-firing-an-effect) 才执行。

## Custom Hook

### 用Custom Hook提取并复用组件代码

Custom Hook是react最新也是最优秀的组件代码复用方案

写useMount和useDebounce两个Custom Hook

系统自带的hook或者自定义的Custom Hook都不可以在普通函数中运行，只能在组件中运行或者hook中运行、

在写Custom Hook的时候一定要以use开头

debounce减少工程搜索请求刷新频率，快速处理事件，减少请求

```js
// 节流
const debounce = (func,delay) =>{
    let timeout;
    return() =>{
        // 闭包
        if(timeout){//如果timeout有值 清除定时器
            clearTimeout(timeout);
        }//timeout没有值设置定时器
        timeout = setTimeout(function(){
            func();
        },delay);
    }
}
const log = debounce(() => console.log('call'),5000)
log()
log()
log()

// debounce 原理讲解：
// 0s ---------> 1s ---------> 2s --------> ...
//     一定要理解：这三个函数都是同步操作，所以它们都是在 0~1s 这个时间段内瞬间完成的；
//     log()#1 // timeout#1
//     log()#2 // 发现 timeout#1！取消之，然后设置timeout#2
//     log()#3 // 发现 timeout#2! 取消之，然后设置timeout#3
//             // 所以，log()#3 结束后，就只剩timeout#3在独自等待了

// 利用hook写debounce
// 上一个设置的被下一个清理，只有最后一个存取下来，
export const useDebounce = (value, delay) => {
    // useState是响应式的value值改变，useState就会触发
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        // 每次value或者delay的值变化以后，设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay);
        // 每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout);
    }, [value, delay])
    return debouncedValue;
}
// Custom Hook的最大特征就是在hook中借助别的hook，如果不借助，单纯用函数就好
```



## TypeScript vs JavaScript

js中在runtime时报错

TypeScript 是 "强类型" 版的 JavaScript，当我们在代码中定义变量(包括普通变量、函数、组件、hook等)的时候，TypeScript 允许我们在定义的同时指定其类型，这样使用者在使用不当的时候就会被及时报错提醒

```jsx
interface User{
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string
};
// 定义形参类型
interface SearchPanelProps{
    users:User[];
    param:{
        name:string;
        personId:string;
    },
    // setParam应该是一个函数类型，void代表无返回，param和什么的param同类型SearchPanelProps['param']
    setParam:(param:SearchPanelProps['param']) => void;
}
// ts希望对每一个函数的形参都要规定类型interface
// 解构赋值
export const SearchPanel = ({users,param, setParam} : SearchPanelProps) => {
 
```

经常用 TypeScript 的感受：比起原来的 JavaScript，TypeScript 带来了完全不一样的开发体验，bug 大大减少了，编辑器提示快了，代码更易读了， 开发速度快了(看似多写代码，其实由于前面几点节省了大量开发时间)，上手了就回不去了

crtl+可以查看ts类型说明书

lib.dom.d.ts定义了所有dom类型

import * as qs from 'qs';

qs中没有ts类型定义故用时不会报错

安装qs的ts依赖 -D开发时用

yarn add @types/qs -D

x.d.ts是说明书 点击时会跳转到它

## TypeScript 的类型

在本节中我们使用到了8种类型： number, string, boolean, 函数, array, any, void, object

这一节我们接触到了平常使用中会接触到的大部分的类型，下面我们挨个梳理一遍：

### 1. number

数字类型，包含小数、其他进制的数字：

```jsx
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```

### 2. string

字符串

```jsx
let color: string = "blue";
```

### 3. array

delay?:number ?表示这个参数可有可无，时间也可以number

在 TS 中，array 一般指**所有元素类型相同**的值的集合，比如：

```jsx
let list: Array<number> = [1, 2, 3];

// or

interface User {
  name: string
}
const john = {name: 'john'}
const jack = {name: 'jack'}
let personList = [john, jack] // 这里 john 和 jack 都是 User 类型的
```

和这种混合类型的 "数组"：

```jsx
let l = ['jack', 10]
```

**在 TS 中不是 数组/array，它们叫作 tuple**，下面会提到

### 4. boolean

布尔值

```jsx
let isDone: boolean = false;
```

### 5. 函数

两种方法

1.在我们熟悉的 "JS函数" 上直接声明参数和返回值：

因为**类型推断**，可以省略箭头前 :boolean

```jsx
/**
 * 这是我们上节课写的代码，大家可能发现了
 * 我在这里做了一些修改，在箭头前边加上了 :boolean
 * 但是在我们上节课的代码中是没有这个:boolean 的，
 * 之所以不需要加是因为 **类型推断**，这个我们在下面会讲
 * @param value
 */
const isFalsy = (value: any): boolean => { 
  return value === 0 ? true : !!value; 
}; 
```

2.直接声明你想要的函数类型：fn: () => void

```jsx
/**
 * 上节课写的 useMount 和 isFalsy
 */
export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []);
};

const isFalsy: (value: any) => boolean = (value) => {
  return value === 0 ? true : !!value;
};
```

### 6. any

any 表示这个值可以是任何值，被定义为 any 就意味着不做任何类型检查

```jsx
let looselyTyped: any = 4;
// looselyTyped 的值明明是个4，哪里来的ifItExists方法呢？
// 由于声明为any，我们没法在静态检查阶段发现这个错误
// any后面用泛型规范类型
looselyTyped.ifItExists();
```

初学 TS 的同学经常会为了让TS不再报错就用了很多any，这样做会失去TS的保护。同学们应该尽量避免使用any

### 7. void

绝大部分情况下，只会用在这一个地方：表示函数不返回任何值或者返回undefined (因为函数不返回任何值的时候 === 返回 undefined)

```jsx
/**
 * 上节课写的 useMount
 */
export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []);
};
```

### 8. object

除了 number, string, boolean, bigint, symbol, null, or undefined，其他都是 object

下面是我们还没有接触到的 TS 类型

### 9. tuple

其实这个大家已经见过了，这是没有给大家指出来

这就是一个典型的 tuple

```jsx
const [users, setUsers] = useState([])
```

**tuple 是 "数量固定，类型可以各异" 版的数组**

在 React 中有可能使用 tuple 的地方就是 custom hook 的返回值，注意 isHappy → tomIsHappy 以及其他名字的变化，这里使用tuple的好处就显现出来了：便于使用者重命名

```jsx
const useHappy = () => {
   //....
   return [isHappy, makeHappy, makeUnHappy]
}

const SomeComponent = () => {
  const [tomIsHappy, makeTomHappy, makeTomUnHappy] = useHappy(false)
  // ...
}
```

### 10. enum

enum类似于对象

```jsx
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

### 11. null 和 undefined

null 和 undefined 在 TypeScript 中既是一个值，也是一个类型：

```jsx
let u: undefined = undefined;
let n: null = null;
```

### 12. unknown

unknown 表示这个值可以是任何值

这句话怎么这么熟悉，刚才是不是用来形容 any 的？

unknown 的用法：在你想用 any 的时候，用 unknown 来代替，简单来说，**unknown是一个"严格"版的 any**

```jsx
const isFalsy = (value: unknown) => { 
 // 大家不用考虑这段console有啥意义，把它打在你的代码里对应的位置，观察编辑器会不会报错；
 // 再思考它应不应该报错
  console.log(value.mayNotExist)
  return value === 0 ? true : !!value; 
}; 
```

### 13. never

```jsx
// 这个 func返回的就是never类型，用到比较少，在类型操作等场景会用到
const func = () => {
  throw new Error()
}
```

### interface

interface 不是一种类型，应该被翻译成 接口，或者说使用上面介绍的类型，创建一个我们自己的类型

```jsx
interface User {
  id: number;
}
const u: User = {id: 1}
```

## 啥时候需要声明类型

理论上来说在我们声明任何变量的时候都需要声明类型(包括普通变量、函数、组件、hook等等)，声明 函数、组件、hook 等需要声明参数 和 返回值的类型。

但是在很多情况下，TS可以帮我们自动推断，我们就不用声明了，比如：

```jsx
// 这里虽然没有显式声明，但是ts自动推断这是个number
let a = 1

// 自动推断返回值为number
function add(a: number, b: number) {
  return a + b;
}
读
// 自动推断返回值为boolean
const isFalsy = (value: unknown) => { 
  return value === 0 ? true : !!value; 
}; 
```

unknown可以负给任何值 ，也不能在unknown读任何函数

### 忽略ts 暂不处理

//@ts-ignore

## .d.ts

JS 文件 + .d.ts 文件   === ts 文件

.d.ts 文件可以让 JS 文件继续维持自己JS文件的身份，而拥有TS的类型保护

一般我们写业务代码不会用到，但是点击类型跳转一般会跳转到 .d.ts文件

## 泛型

计泛型的关键目的是在成员之间提供有意义的约束，这些成员可以是：

- 类的实例成员
- 类的方法
- 函数参数
- 函数返回值

 // 泛型 S S自定义 泛型让代码保持了良好的灵活性

  // function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

  export const useDebounce = <V>(value : V, delay?:number) :any => {

### [#](https://jkchao.github.io/typescript-book-chinese/typings/generices.html#动机和示例)动机和示例

下面是对一个先进先出的数据结构——队列，在 `TypeScript` 和 `JavaScript` 中的简单实现。

```ts
class Queue {
  private data = [];
  push = item => this.data.push(item);
  pop = () => this.data.shift();
}
```

在上述代码中存在一个问题，它允许你向队列中添加任何类型的数据，当然，当数据被弹出队列时，也可以是任意类型。在下面的示例中，看起来人们可以向队列中添加`string` 类型的数据，但是实际上，该用法假定的是只有 `number` 类型会被添加到队列里。

```ts
class Queue {
  private data = [];
  push = item => this.data.push(item);
  pop = () => this.data.shift();
}

const queue = new Queue();

queue.push(0);
queue.push('1'); // Oops，一个错误

// 一个使用者，走入了误区
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1)); // RUNTIME ERROR
```

一个解决的办法（事实上，这也是不支持泛型类型的唯一解决办法）是为这些约束创建特殊类，如快速创建数字类型的队列：

```ts
class QueueNumber {
  private data = [];
  push = (item: number) => this.data.push(item);
  pop = (): number => this.data.shift();
}

const queue = new QueueNumber();

queue.push(0);
queue.push('1'); // Error: 不能推入一个 `string` 类型，只能是 `number` 类型

// 如果该错误得到修复，其他将不会出现问题
```

当然，快速也意味着痛苦。例如当你想创建一个字符串的队列时，你将不得不再次修改相当大的代码。我们真正想要的一种方式是无论什么类型被推入队列，被推出的类型都与推入类型一样。当你使用泛型时，这会很容易：

```ts
// 创建一个泛型类
class Queue<T> {
  private data: T[] = [];
  push = (item: T) => this.data.push(item);
  pop = (): T | undefined => this.data.shift();
}

// 简单的使用
const queue = new Queue<number>();
queue.push(0);
queue.push('1'); // Error：不能推入一个 `string`，只有 number 类型被允许
```

另外一个我们见过的例子：一个 `reverse` 函数，现在在这个函数里提供了函数参数与函数返回值的约束：

```ts
function reverse<T>(items: T[]): T[] {
  const toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}

const sample = [1, 2, 3];
let reversed = reverse(sample);

reversed[0] = '1'; // Error
reversed = ['1', '2']; // Error

reversed[0] = 1; // ok
reversed = [1, 2]; // ok
```

在此章节中，你已经了解在*类*和*函数*上使用泛型的例子。一个值得补充一点的是，你可以为创建的成员函数添加泛型：

```ts
class Utility {
  reverse<T>(items: T[]): T[] {
    const toreturn = [];
    for (let i = items.length; i >= 0; i--) {
      toreturn.push(items[i]);
    }
    return toreturn;
  }
}
```

TIP

你可以随意调用泛型参数，当你使用简单的泛型时，泛型常用 `T`、`U`、`V` 表示。如果在你的参数里，不止拥有一个泛型，你应该使用一个更语义化名称，如 `TKey` 和 `TValue` （通常情况下，以 `T` 作为泛型的前缀，在其他语言如 C++ 里，也被称为模板）

### [#](https://jkchao.github.io/typescript-book-chinese/typings/generices.html#误用的泛型)误用的泛型

我见过开发者使用泛型仅仅是为了它的 hack。当你使用它时，你应该问问自己：你想用它来提供什么样的约束。如果你不能很好的回答它，你可能会误用泛型，如：

```ts
declare function foo<T>(arg: T): void;
```

在这里，泛型完全没有必要使用，因为它仅用于单个参数的位置，使用如下方式可能更好：

```ts
declare function foo(arg: any): void;
```

### [#](https://jkchao.github.io/typescript-book-chinese/typings/generices.html#设计模式：方便通用)设计模式：方便通用

考虑如下函数：

```ts
declare function parse<T>(name: string): T;
```

在这种情况下，泛型 `T` 只在一个地方被使用了，它并没有在成员之间提供约束 `T`。这相当于一个如下的类型断言：

```ts
declare function parse(name: string): any;

const something = parse('something') as TypeOfSomething;
```

仅使用一次的泛型并不比一个类型断言来的安全。它们都给你使用 API 提供了便利。

另一个明显的例子是，一个用于加载 json 返回值函数，它返回你任何传入类型的 `Promise`：

```ts
const getJSON = <T>(config: { url: string; headers?: { [key: string]: string } }): Promise<T> => {
  const fetchConfig = {
    method: 'GET',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(config.headers || {})
  };
  return fetch(config.url, fetchConfig).then<T>(response => response.json());
};
```

请注意，你仍然需要明显的注解任何你需要的类型，但是 `getJSON<T>` 的签名 `config => Promise<T>` 能够减少你一些关键的步骤（你不需要注解 `loadUsers` 的返回类型，因为它能够被推出来）：

```ts
type LoadUserResponse = {
  user: {
    name: string;
    email: string;
  }[];
};

function loaderUser() {
  return getJSON<LoadUserResponse>({ url: 'https://example.com/users' });
}
```

与此类似：使用 `Promise<T>` 作为一个函数的返回值比一些如：`Promise<any>` 的备选方案要好很多。

### [#](https://jkchao.github.io/typescript-book-chinese/typings/generices.html#配合-axios-使用)配合 axios 使用

通常情况下，我们会把后端返回数据格式单独放入一个 interface 里：

```ts
// 请求接口数据
export interface ResponseData<T = any> {
  /**
   * 状态码
   * @type { number }
   */
  code: number;

  /**
   * 数据
   * @type { T }
   */
  result: T;

  /**
   * 消息
   * @type { string }
   */
  message: string;
}
```

当我们把 API 单独抽离成单个模块时：

```ts
// 在 axios.ts 文件中对 axios 进行了处理，例如添加通用配置、拦截器等
import Ax from './axios';

import { ResponseData } from './interface.ts';

export function getUser<T>() {
  return Ax.get<ResponseData<T>>('/somepath')
    .then(res => res.data)
    .catch(err => console.error(err));
}
```

接着我们写入返回的数据类型 `User`，这可以让 TypeScript 顺利推断出我们想要的类型：

```ts
interface User {
  name: string;
  age: number;
}

async function test() {
  // user 被推断出为
  // {
  //  code: number,
  //  result: { name: string, age: number },
  //  message: string
  // }
  const user = await getUser<User>();
}
```

https://jkchao.github.io/typescript-book-chinese/typings/generices.html

# 报错

## npx mrm lint-staged报错

```js
G:\Code\react-blogs>npx mrm lint-staged
npx: 300 安装成功，用时 93.663 秒
C:\Users\liu\AppData\Roaming\npm-cache\_npx\8712\node_modules\mrm\bin\mrm.js:55
                throw err;
                ^

Error: Cannot find module 'C:\Users\liu\AppData\Roaming\npm-cache\_npx\8712\lib\node_modules\mrm-task-lint-staged'
Require stack:
- C:\Users\liu\AppData\Roaming\npm-cache\_npx\8712\node_modules\mrm\src\index.js
- C:\Users\liu\AppData\Roaming\npm-cache\_npx\8712\node_modules\mrm\bin\mrm.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at C:\Users\liu\AppData\Roaming\npm-cache\_npx\8712\node_modules\mrm\src\index.js:164:18
    at new Promise (<anonymous>)
    at runTask (C:\Users\liu\AppData\Roaming\npm-cache\_npx\8712\node_modules\mrm\src\index.js:154:9)
    at processTicksAndRejections (internal/process/task_queues.js:93:5) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'C:\\Users\\liu\\AppData\\Roaming\\npm-cache\\_npx\\8712\\node_modules\\mrm\\src\\index.js',
    'C:\\Users\\liu\\AppData\\Roaming\\npm-cache\\_npx\\8712\\node_modules\\mrm\\bin\\mrm.js'
  ]
}
```

原因：Node.js（windows系统）:ExperimentalWarning: The fs.promises API is experimental

根本原因是node的版本不是最新的，而在项目引入的模块是最新的，node.js的版本低于模块的版本。

```js
npx mrm@2 lint-staged
```

## eslint

src\utils\index.js
  Line 24:7:  React Hook useEffect has a missing dependency: 'callback'. Either include it or remove the dependency array. If 'callback' changes too often, 
find the parent component that defines it and wrap that definition in useCallback  react-hooks/exhaustive-deps

export const useMount = (callback) => {

  useEffect(() => {

​    callback()

​    // eslint-disable-next-line

  },[])

}