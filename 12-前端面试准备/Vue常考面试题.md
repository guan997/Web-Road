# Vue常考面试题

## 基本使用



## 高级特性



## 为何在v-for中用key
- 必须用key，且不能是index和random
- diff算法中通过tag和key来判断，是否是sameNode
- 减少渲染次数，提升渲染性能
## vue组件如何通讯
- 父子组件props和this.$emit
- 自定义事件event.$no event.$off event.$emit
- vuex

## 组件渲染和更新的过程



## Vue 生命周期

1. beforeCreate: 在实例创建之前调用，由于实例还未创建，所以无法访问实例上的 data 
   computed 、 method 等。基本业务逻辑是不需要它的。
2. created: 在实例创建完成后调用，这时已完成数据的观测，可以获取数据和更改数据，但还无法与dom进行交互，如果想要访问dom，可以使用 vm.$nextTick 。此时可以对数据进更改，不会触发 updated 。（不能获取到真实的 DOM 元素）可以在里边完成 ajax，不能操作 DOM。  
3. . beforeMount: 在挂载之前调用，这时的模板已编译完成并生成 render 函数，准备开始渲染。在此时也可以对数据进行更改，不会触发 updated 。
4. mounted: 在挂载完成后调用，真实的dom挂载完毕，可以访问到dom节点，使用 $refs 属性对dom进行操作。
5. beforeUpdate: 在更新之前调用，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，在当前阶段进行更改数据，不会造成重渲染。
6. updated： 在更新完成之后调用，组件dom已完成更新。要注意的是避免在此期间更改数据，这可能会导致死循环。
7. beforeDestroy： 在实例销毁之前调用，这时实例还可以被使用，一般这个周期内可以做清除计时器和取消事件监听的工作。
8. destroyed： 在实例销毁之后调用，这时已无法访问实例。当前实例从父实例中被移除，观测被卸载，所有事件监听器被移除，子实例也统统被销毁  

## Vue 父组件和子组件生命周期执行顺序
渲染过程
1. 父组件 beforeCreate
2. 父组件 created
3. 父组件 beforeMount
4. 子组件 beforeCreate
5. 子组件 created
6. 子组件 beforeMount
7. 子组件 mounted
8. 父组件 mounted
子组件早于父组件挂载，因为创建节点树时使用的是递归，子组件会先被创建完成，最后才是整个父节
点创建完成。
更新过程
1. 父组件 beforeUpdate
2. 子组件 beforeUpdate
3. 子组件 updated
4. 父组件 updated
销毁过程
1. 父组件 beforeDestroy
2. 子组件 beforeDestroy
3. 子组件 destroyed
4. 父组件 destroyed  

## 至少说出 vue.js 中的4种指令和它们的用法

- v- if：判 断对象是否隐藏。
- v-for：循环渲染 。
- v-bind：绑定一个属性 。
- v-model ：实现数据双向绑定 。

## v-if 和 v-show 的区别？以及适用场景有哪些？

v-if 相当于真正的条件渲染，当条件为假，元素不会被渲染。
而 v-show 不管初始条件是什么，第一次的时候元素总被渲染。之后的切换相当于 display:none和 display:block 的切换。
适用场景：
v-if : 适用于在运行时很少改变条件，不需要频繁切换条件的场景
v-show : v-show 则适用于需要非常频繁切换条件的场景。  

## 为何data必须是一个函数？

​	如果data是一个函数的话，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。

​	所以说vue组件的data必须是函数。这都是因为js的特性带来的，跟vue本身设计无关。

​	js本身的面向对象编程也是基于原型链和构造函数，应该会注意原型链上添加一般都是一个函数方法而不会去添加一个对象了。

## 双向数据绑定v-model的实现原理

- input元素的value = this.name
- 绑定input事件this.name = $event.target.value
- data更新触发re-render

## 如何自己实现v-model

```vue
<template>
    <div>
        <input type="text" :value="text" @input="$emit('change', $event.target.value)">
    </div>
    <!-- 使用：value不使用v-model -->
    <!-- change和model.event对应起来 -->
</template>

<script>
export default {
    model:{
        prop:'text',//对应到props：text
        event: 'change'
    },
    props: {
        text:String
    }
}
</script>
```

## 多个组件有相同的逻辑，如何抽离

- mixin
- 以及mixin的一些缺点 待补充

## 何时使用异步组件

- 加载大组件
- 路由异步加载

## 如何将组件所有的props传递给子组件

- props
- <User v-bind="$props"/>

## ajax请求应该放在哪个生命周期

- mounted
- JS是单线程的，ajax异步获取数据
- 放在mounted之前没有用，只有让逻辑更加混乱

## 何时使用keep-alive

- 缓存组件，不需要重复渲染
- 如多个静态tab页的切换
- 优化性能

## ＜keep-alive＞组件的作用 

​	当 ＜keep - alive＞ 包裹动态纽件时，会缓存不活动的组件实例，而不是销毁它们 。
​	<keep alive＞是一个抽象纽件，它自身不会渲染 一 个 DOM 元素，也不会出现在父纽件
当在 ＜keep-alive＞ 内切换组件时，它的 activated 和 deactivated 这两个生命周期钩子
函数将会执行 。

```vue
<keep-alive>
	<component :is =” view ” ></component>
</keep-alive>
```

## 何时需要使用beforeDestory

- 解绑自定义事件event.$off
- 清除定时器
- 解绑自定义的DOM事件，如window scroll等

## Vuex中action和mutation有何区别

- action中处理异步，mutation不可以
- mutation做原子操作（每次做一个操作）
- action可以整合多个mutation

## Vue—router常用的路由模式

在 vue-router 单页面应用中，则是路径之间的切换，也就是组件的切换。路由模块的本质 就是建立起url和页面之间的映射关系。
vue-router 原理是更新视图而不重新请求页面。 vue-router 共有3种模式：hash模式、history模式、abstract模式。  

### 1、Hash 模式(默认)

hash 模式使用 hashchange 监听地址栏的 hash 值的变化，加载对应的页面。每次的 hash 值变化后依然会在浏览器留下历史记录，可以通过浏览器的前进后退按钮回到上一个页面。  

### 2、History 模式

hashchange 只能改变 # 后面的代码片段。
这种模式充分利用了 html5 history interface 中新增的 pushState() 和 replaceState() 方
法。这两个方法应用于浏览器记录栈，在当前已有的 back、forward、go 基础之上，它们提供了对历史记录修改的功能。只是当它们执行修改时，虽然改变了当前的 URL ，但浏览器不会立即向后端发送请求  

### 3、abstract

不涉及和浏览器地址的相关记录。通过数组维护模拟浏览器的历史记录栈。  

## 如何配置vue-router异步加载

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
watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；  

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
- 前端通用的性能哟花，如图片懒加载、路由懒加载、按需引入
- 使用SSR服务器端渲染（服务端渲染是指 Vue 在客户端将标签渲染成的整个 html 片段的工作在服务端完成  ）