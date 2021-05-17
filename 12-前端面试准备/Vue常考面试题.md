# Vue

## 基本使用

### 如何遍历对象

- 遍历数组v-for="(item, index) in list" :key="item.id"
- 遍历对象v-for="(val,key, index) in listObj" :key="key"

### v-for和v-if不能在一起使用

​	当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级，这意味着 `v-if` 将分别重复运行于每个 `v-for` 循环中

​	所以，不推荐v-if和v-for同时使用

​	可以在外层使用v-if，或者放在计算属性遍历

```js
<ul>
    <li v-for="user in activeUsers" :key="user.id">
    {{user.name}}
    </li>
</ul>
computed:{
    activeUsers:function(){
        return this.users.filter(function (user) {
            return user.isActive
        })
    }
}
```

### 为何在v-for中用key
- 必须用key，且不能是index和random
- diff算法中通过tag和key来判断，是否是sameNode
- 减少渲染次数，提升渲染性能
### 事件

- event参数，自定义参数
- 事件修饰符，按键修饰符
- 事件被绑定到哪里？事件是被注册到当前元素的

```js
<!-- 事件-->
<template>
    <div>
        <p>{{num}}</p>
        <button @click="increment1">+1</button>
        <!-- $event表示传入自定义参数 -->
        <button @click="increment2(2, $event)">+2</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        increment1(event) {
            // eslint-disable-next-line
            console.log('event', event, event.__proto__.constructor) // 是原生的 event 对象
            // eslint-disable-next-line
            console.log(event.target)
            // eslint-disable-next-line
            console.log(event.currentTarget) // 注意，事件是被注册到当前元素的，和 React 不一样
            this.num++

            // 1. event 是原生的
            // 2. 事件被挂载到当前元素
            // 和 DOM 事件一样
        },
        increment2(val, event) {
            // eslint-disable-next-line
            console.log(event.target)
            this.num = this.num + val
        },
        loadHandler() {
            // do some thing
        }
    },
    mounted() {
        window.addEventListener('load', this.loadHandler)
    },
    beforeDestroy() {
        //【注意】用 vue 绑定的事件，组建销毁时会自动被解绑
        // 自己绑定的事件，需要自己销毁！！！
        window.removeEventListener('load', this.loadHandler)
    }
}
</script>
```

```vue
<!-- 事件修饰符 -->
<!-- 阻止单击事件继续传播 -->
        <a href="#" v-on:click.stop="doThis">stop</a>
        <!-- 提交事件不在重载页面 -->
        <form action="#" v-on:submit.prevent="doThis">submit.prevent</form>
        <!-- 修饰符可以串联 -->
        <a href="#" v-on:click.stop.prevent="doThis">stop.prevent</a>
        <!-- 只有修饰符 -->
        <form action="#" v-on:submit.prevent>submit.prevent</form>
        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即内部元素出发的时间先在此处理，然后才由内部元素进行处理 -->
        <div v-on:click.capture="doThis">capture</div>
        <!-- 只在当event。target是在当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <div v-on:click.self="doThis">self</div>

        <!-- 按键修饰符 -->
        <button @click.ctrl="onClick">ctrl</button>
        <!-- 有且只有ctrl被按下的时候才触发 -->
        <button @click.ctrl.exact="onClick">ctrl.exact</button>
        <!-- 没有任何系统修饰符被按下的时候才触发 -->
        <button @click.exact="onClick">exact</button>
        
```

### 表单

```vue
		<p>输入框: {{name}}</p>
        <!-- 截取前后空格 -->
        <input type="text" v-model.trim="name"/>
        <!-- lazy防抖 -->
        <input type="text" v-model.lazy="name"/>
        <!-- number转换成数字 -->
        <input type="text" v-model.number="age"/>

        <p>多行文本: {{desc}}</p>
        <textarea v-model="desc"></textarea>
        <!-- 注意，<textarea>{{desc}}</textarea> 是不允许的！！！ -->

        <p>复选框 {{checked}}</p>
        <input type="checkbox" v-model="checked"/>

        <p>多个复选框 {{checkedNames}}</p>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>

        <p>单选 {{gender}}</p>
        <input type="radio" id="male" value="male" v-model="gender"/>
        <label for="male">男</label>
        <input type="radio" id="female" value="female" v-model="gender"/>
        <label for="female">女</label>

        <p>下拉列表选择 {{selected}}</p>
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

        <p>下拉列表选择（多选） {{selectedList}}</p>
        <select v-model="selectedList" multiple>
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
```

### vue组件使用

- props和$emit
- 组件间通讯-自定义事件
- 组件生命周期

### vue组件如何通讯

`ComponentsDemo`

- 父子组件通信  props和this.$emit

  props父组件向子组件传递一个信息，$emit子组件向父组件触发一个事件

- 非父子组件通信：自定义事件event.$on (绑定)  event.$off(关闭)  event.$emit(调用)

  `父组件初始化完才能初始化子组件，子组件渲染完才能渲染父组件`

- vuex

### Vue 生命周期

挂载->更新->销毁阶段

<img src="https://cn.vuejs.org/images/lifecycle.png" height="1200"/>

1. beforeCreate: 在实例创建之前调用，由于实例还未创建，所以无法访问实例上的 data 
   computed 、 method 等。基本业务逻辑是不需要它的。
2. created: 在实例创建完成后调用，这时已完成数据的观测，可以获取数据和更改数据，但还无法与dom进行交互，如果想要访问dom，可以使用 vm.$nextTick 。此时可以对数据进更改，不会触发 updated 。（不能获取到真实的 DOM 元素）可以在里边完成 ajax，不能操作 DOM。  
3.  beforeMount: 在挂载之前调用，这时的模板已编译完成并生成 render 函数，准备开始渲染。在此时也可以对数据进行更改，不会触发 updated 。
4. mounted: 在挂载完成后调用，真实的dom挂载完毕，可以访问到dom节点，使用 $refs 属性对dom进行操作。
5. beforeUpdate: 在更新之前调用，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，在当前阶段进行更改数据，不会造成重渲染。
6. updated： 在更新完成之后调用，组件dom已完成更新。要注意的是避免在此期间更改数据，这可能会导致死循环。
7. beforeDestroy： 在实例销毁之前调用，这时实例还可以被使用，一般这个周期内可以做清除计时器和销毁自定义事件。
8. destroyed： 在实例销毁之后调用，这时已无法访问实例。当前实例从父实例中被移除，观测被卸载，所有事件监听器被移除，子实例也统统被销毁  

### Vue 父组件和子组件生命周期执行顺序

父组件初始化完才能初始化子组件，子组件渲染完才能渲染父组件

#### 渲染过程
1. 父组件 beforeCreate

2. 父组件 created

3. 父组件 beforeMount

4. 子组件 beforeCreate

5. 子组件 created

6. 子组件 beforeMount

7. 子组件 mounted

8. 父组件 mounted
    子组件早于父组件挂载，因为创建节点树时使用的是递归，子组件会先被创建完成，最后才是整个父节点创建完成。

#### 更新过程

1. 父组件 beforeUpdate

2. 子组件 beforeUpdate

3. 子组件 updated

4. 父组件 updated
#### 销毁过程

1. 父组件 beforeDestroy

2. 子组件 beforeDestroy

3. 子组件 destroyed

4. 父组件 destroyed  

## 高级特性

### 自定义v-model

```vue
<!-- <CustomVModel v-model="name"/> -->
<template>
    <div>
        <input type="text" :value="text1" @input="$emit('change1', $event.target.value)">
        <!-- 1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来 -->
    </div>
</template>
<script>
export default {
    model:{
        prop:'text1',// 对应 props text1
        event:'change1'
    },
    props:{
        text1:String,
        default(){
            return ''
        }
    }
}
</script>
```

### $nextTick

$nextTick:在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

```js
// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})
```

- Vue是异步渲染（原理）

- data改变之后，DOM不会立刻渲染

- $nextTick会在DOM渲染之后被触发，以获取最新DOM节点

  ```js
  // 1. 异步渲染，$nextTick 待 DOM 渲染完再回调
  // 2. 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次
  
  // vue是异步的
  // $nextTick将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
  // 它跟全局方法 Vue.nextTick一样，不同的是回调的 this 自动绑定到调用它的实例上 
  ```

### slot

slot：具名插槽

 <slot>{{ user.lastName }}</slot>

`<slot>` 元素有一个特殊的 attribute：`name`。这个 attribute 可以用来定义额外的插槽

```vue
<!--container组件-->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

一个不带 `name` 的 `<slot>` 出口会带有隐含的名字“default”。

在向具名插槽提供内容的时候，我们可以在一个 `<template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称：

```vue
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>插入到main slot中，即没有命名的slot</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

`<template>` 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 `v-slot` 的 `<template>` 中的内容都会被视为默认插槽的内容。

作用域插槽

```vue
<ScopedSlotDemo :url="website.url">
      <template v-slot="slotProps">
        {{slotProps.slotData.title}}
      </template>
</ScopedSlotDemo> 
<!--slot组件-->
<slot :slotData="website">
            {{website.subTitle}} <!-- 默认值显示 subTitle ，即父组件不传内容时 -->
</slot>
```

### 动态、异步组件

动态组件：组件之间切换

- :is="conponent-name"用法
- 需要根据数据，动态渲染的场景。即组件类型不确定
- `import CustomVModel from "./CustomVModel";`

异步组件：

- import()函数
- 按需加载，异步加载大组件
- `components: {FormDemo: () => import('../BaseUse/FormDemo')}`

何时使用异步组件

- 加载大组件
- 路由异步加载

### keep-alive

#### 何时使用keep-alive

- 缓存组件，频繁切换，不需要重复渲染
- 如多个静态tab页的切换
- 优化性能

#### ＜keep-alive＞组件的作用 

​	当 ＜keep - alive＞ 包裹动态纽件时，会缓存不活动的组件实例，而不是销毁它们 。
​	<keep alive＞是一个抽象纽件，它自身不会渲染 一 个 DOM 元素，也不会出现在父纽件
当在 ＜keep-alive＞ 内切换组件时，它的 activated 和 deactivated 这两个生命周期钩子
函数将会执行 。

```vue
<keep-alive>
	<component :is =” view ” ></component>
</keep-alive>
```

#### mixin

mixins:[myMixin],//可以添加多个，会合并起来

- 多个组件有相同的逻辑，抽离出来
- Composition 解决这些问题
- mixin不完美有一些缺点 
  - 变量来源不明确，不利于阅读
  - 多mixin可能会造成命名冲突
  - mixin和组件可能出现多对多的关系，复杂度较高

#### refs

- 设置ref="名"之后
- 可以通过this.$refs.名获取Dom元素

## Vuex

- 基本概念，使用，API

  - state
  - getter
  - action
  - mutation
  - modules

- 用于Vue组件

  - dispatch
  - commit
  - mapState
  - mapGetters
  - mapActions
  - mapMutations

  <img src="https://vuex.vuejs.org/vuex.png">

  actions才能做异步操作，访问后台api，ajax操作

- state的数据结构设计

## Vue-router

### 基本使用

- `router.go(n)`在 history 记录中向前或者后退多少步

- 使用 `<router-link>` 创建 a 标签来定义导航链接

- `router.replace(location, onComplete?, onAbort?)`替换掉当前的 history 记录

- `router.beforeEach` 注册一个全局前置守卫(to, from, next)

- ```js
  // BAD
  router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    // 如果用户未能验证身份，则 `next` 会被调用两次
    next()
  })
  ```

- 路由模式(hash、H5 history)
- 路由配置(动态路由、懒加载)

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

```js
const User = {
	//获取参数
	template: '<div>User{{$route.params..id}}</div>'
}
const router = new VueRouter({
	routes:[
		//动态路径参数 以冒号开头 
		{path:'/user/id',component:User}
	]
})
```

### vue-router异步加载 懒加载

```js
export default new VueRouter({
	routes: [
		{
			path: '/',
            //path配置路径
			//compontent配置对应的组件
			compontent: () => import(
				/*webpackChunkName: "navigator"*/
				'./../compontents/Navigator'
			)
		},
		{
			path: '/feedback',
			compontent: () => import(
				/*webpackChunkName: "feedback"*/
				'./../compontents/Feedback'
			)
		},
	]
})
```

### Vue—router常用的路由模式

在 vue-router 单页面应用中，则是路径之间的切换，也就是组件的切换。路由模块的本质 就是建立起url和页面之间的映射关系。
vue-router 原理是更新视图而不重新请求页面。 vue-router 共有3种模式：hash模式、history模式、abstract模式。  

#### 1、Hash 模式(默认)

Hash 模式(默认)，如http://abc.com/#/user/10

hash 模式使用 hashchange 监听地址栏的 hash 值的变化，加载对应的页面。每次的 hash 值变化后依然会在浏览器留下历史记录，可以通过浏览器的前进后退按钮回到上一个页面。  

#### 2、History 模式

History 模式，如http://abc.com/user/10，需要服务器端的支持，无特殊需求可选择前者

hashchange 只能改变 # 后面的代码片段。
这种模式充分利用了 html5 history interface 中新增的 pushState() 和 replaceState() 方
法。这两个方法应用于浏览器记录栈，在当前已有的 back、forward、go 基础之上，它们提供了对历史记录修改的功能。只是当它们执行修改时，虽然改变了当前的 URL ，但浏览器不会立即向后端发送请求  

#### 3、abstract

不涉及和浏览器地址的相关记录。通过数组维护模拟浏览器的历史记录栈。  

### Vue路由钩子函数

#### 全局钩子

- beforeEach
  路由进入前调用

  ```js
  const router = new VueRouter({ ... })
  router.beforeEach((to, from, next) => {
  // ...
  })
  ```

- beforeResolve (2.5.0 新增)
  在所有组件内守卫和异步组件被解析之后调用

  ```js
  router.beforeResolve((to, from, next) => {
  // ...
  })
  ```

- afterEach
  路由在确认后调用

  ```js
  router.afterEach((to, from) => {
  // ...
  })
  ```

#### 路由独享钩子

- beforeEnter
  路由进入前调用， beforeEnter 在 beforeEach 之后执行

  ```vue
  const router = new VueRouter({
      routes: [
          {
              path: '/foo',
              component: Foo,
              beforeEnter: (to, from, next) => {
              // ...
              }
          }
      ]
  })
  ```

#### 组件钩子

- beforeRouteEnter
  路由确认前调用，组件实例还没被创建，不能获取组件实例 this  

  ```js
  beforeRouteEnter (to, from, next) {
      // ...
      // 可以通过回调访问实例
      next(vm => {
      // vm 为组件实例
      })
  },
  ```

- beforeRouteUpdate (2.2 新增)  

  路由改变时调用，可以访问组件实例  

  ```js
  beforeRouteUpdate (to, from, next) {
  // ...
  },
  ```

- beforeRouteLeave  

  离开该组件的对应路由时调用，可以访问组件实例 this  

  ```js
  beforeRouteLeave (to, from, next) {
  // ...
  }
  ```

## 原理

### 组件化和MVVM

数据驱动视图

```vue
<!-- MVVM -->
<template>
  //view
  <div id="app">
    // viewModel
    <p @click="changeName">{{name}}</p>
    <ul>
        <li v-for="(item, index) in list" :key="index">
            {{item}}
        </li>
    </ul>
    <button @click="addItem">添加一项</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  //model
  data() {
      return {
        name: 'vue',
        list: ['a', 'b', 'c']
      }
  },
  // viewModel
  methods: {
    changeName() {
        this.name = '小明'
    },
    addItem() {
        this.list.push(`${Date.now()}`)
    }
  }
}
</script>
```

### 响应式原理

- 响应式原理：组件data的数据一旦变化，立刻触发视图的更新
- 实现数据驱动视图的第一步
- 核心API-Object.defineProperty
  - Object.defineProperty的一些缺点(Vue3启用Proxy)
  - Proxy有兼容性问题，兼容性不好，且无法polyfill

#### Object.defineProperty基本用法

Object.defineProperty ⽅法会直接在⼀个对象上定义⼀个新属性， 或者修改⼀个对象的现有属性， 并返回这个对象。

语法：
		Object.defineProperty(obj, prop, descriptor)
obj 是要在其上定义属性的对象； prop 是要定义或修改的属性的名称； descriptor 是将被定义或修改的属性描述符。⽐较核⼼的是 descriptor ， 它有很多可选键值， 具体的可以去参阅它的⽂档。 这⾥我们最关⼼的是get 和 set ， get 是⼀个给属性提供的 getter ⽅法， 当我们访问了该属性的时候会触发 getter ⽅法； set 是⼀个给属性提供的 setter ⽅法， 当我们对该属性做修改的时候会触发 setter ⽅法。
⼀旦对象拥有了 getter 和 setter， 我们可以简单地把这个对象称为响应式对象。   那么 Vue.js 把哪些对象变成了响应式对象了呢？ 

```js
var data = {};
var name = 'xiaoming';
Object.defineProperty(data, "name", {
    get:function() {
        console.log('get')
        return name
    },
    set:function (newVal) {
        console.log('set')
        name = newVal
    }
});
//测试
console.log(data.name) // get xiaoming
data.name = 'list' //set
```

### vue是如何实现数据双向绑定的  

`双向数据绑定v-model的实现原理`

- input元素的value = this.name
- 绑定input事件this.name = $event.target.value
- data更新触发re-render

vue实现数据双向绑定的原理：就是用 Object.defineproperty() 重新定义对象  设置属性值 （set方法）和 获取属性值（get方法）的操纵来实现的

描述：

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

语法：

​				Object.defineProperty(obj, prop, descriptor)
参数：

​				obj：要定义属性的对象。

​				prop：要定义或修改的属性的名称。

​				descriptor：要定义或修改的属性描述符。

对象里目前存在的   属性描述符   有两种主要形式：数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。存取描述符是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。

get：属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。
默认为 undefined。

set：属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。
默认为 undefined。

```html
<!DOCTYPE html>
<!-- js3 vue是如何实现数据双向绑定的 -->
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="text" id="ipt">
    <p id="p">Object</p>
    <script>
        let obj = {}
        Object.defineProperty(obj, 'name', {
            get() {
                console.log('获取了属性值');
                return p.innerHTML
            },
            set(newvalue) {
                p.innerHTML = ipt.value = newvalue
                console.log('设置了属性值');
            }
        })
        //获取 obj.name 的值(会执行 get 方法)
        ipt.value = obj.name
        //监听 input 事件  
        ipt.addEventListener('input', (e) => {
            //设置 obj.name 的值(会执行 set 方法)
            obj.name = e.target.value
        })
    </script>
</body>

</html>
```

获取对象 obj.name的值时，会触发 get 方法，得到是 p 标签的内容；

设置对象 obj.name的值时，会触发 set 方法，将 p 标签的内容设置成已经变换的值(用户输入input的内容)。

这样就实现了一个简单的数据双向绑定.

vdom和diff算法

模板编译

组件渲染过程

前端路由

# 面试题

## 至少说出 vue.js 中的4种指令和它们的用法

- v- if：判 断对象是否隐藏。
- v-for：循环渲染 。
- v-bind：绑定一个属性 。
- v-model ：实现数据双向绑定 。

## v-if 和 v-show 的区别？以及适用场景有哪些？

v-if 相当于真正的条件渲染，当条件为假，元素不会被渲染。
而 v-show 不管初始条件是什么，第一次的时候元素总被渲染，相当于 display:none和 display:block 的切换。
适用场景：
v-if : 适用于在运行时很少改变条件，不需要频繁切换条件的场景
v-show : v-show 则适用于需要非常频繁切换条件的场景。  

## 为何data必须是一个函数？

​	如果data是一个函数的话，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。

​	所以说vue组件的data必须是函数。这都是因为js的特性带来的，跟vue本身设计无关。

​	js本身的面向对象编程也是基于原型链和构造函数，应该会注意原型链上添加一般都是一个函数方法而不会去添加一个对象了。

## 如何将组件所有的props传递给子组件

- props
- <User v-bind="$props"/>

## ajax请求应该放在哪个生命周期

- mounted
- JS是单线程的，ajax异步获取数据
- 放在mounted之前没有用，只有让逻辑更加混乱

## 何时需要使用beforeDestory

- 解绑自定义事件event.$off
- 清除定时器
- 解绑自定义的DOM事件，如window scroll等

## Vuex中action和mutation有何区别

- action中处理异步，mutation不可以
- mutation做原子操作（每次做一个操作）
- action可以整合多个mutation

## 用vnode描述一个DOM结构

```html
<div id="div1" class="container">
    <p>组件</p>
    <ul style="font-size:20px">
        <li>a</li>
    </ul>
</div>
```

```js
{
    tag:'div',
    props:{
        className:'container',
		id:div1
    }
    children:[
        {
            tag:'p',
            children:'组件'
        },
        {
            tag:'ul',
        	props:{style="font-size:20px"},
            children:[
                {
                    tag:'li',
                    children:'a'
                }
            ]
        }
    ]
}
```

## 监听data变化的核心API是什么

- Object.defineProperty
- 深度监听、监听数组
- 有何缺点

## vue如何监听数组变化

- Object.defineProperty不能监听数组变化
- 重新定义原型，重写push pop等方法，实现监听
- proxy可以原生支持监听数组变化

## 描述响应式原理

- 监听data的变化过程
- 组件渲染和更新的流程

## diff算法的事件复杂度

- O(n)
- O(n^3)基础上做了一些调整

## computed 的特点

- 缓存，data不变不会重新计算
- 提高性能

## computed 和 watch 区分以及使用场景?

computed：计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；
watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；  watch监听引用类型，拿不到oldVal

## 简述diff算法过程

- patch(elem,vnode)和patch(vnode,newVnode)
- patchVnode和addVnodes和removeVnodes
- updateChildren(key的重要性)

## vue为何是异步渲染，$nextTick何用

- 异步渲染(以及合并data修改)，以提高渲染性能
- $nextTick在DOM更新完之后，触发回调

## vue常见性能优化方式

- 合理使用v-show和v-if
- 合理使用computed
- v-for时加key，以及避免和v-if同时使用
- 自定义事件、DOM事件及时销毁
- 合理使用异步组件
- 合理使用keep-alive
- data层级不要太深
- 使用vue-loader在开发环境做模板编译（预编译）
- webpack层面的优化
- 前端通用的性能优化，如图片懒加载、路由懒加载、按需引入
- 使用SSR服务器端渲染（服务端渲染是指 Vue 在客户端将标签渲染成的整个 html 片段的工作在服务端完成  ）