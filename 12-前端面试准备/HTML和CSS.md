# HTML和CSS

## 三栏布局

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }

        .layout article div {
            min-height: 100px;
        }

        .overflow {
            overflow: hidden;
        }
    </style>
</head>

<body>
    <!-- 浮动布局     -->
    <section class="layout float">
        <style>
            .layout.float .left {
                float: left;
                width: 300px;
                background: red;
            }

            .layout.float .center {
                background-color: yellow;
            }

            .layout.float .right {
                float: right;
                width: 300px;
                background-color: blue;
            }
        </style>
        <h1>三栏布局</h1>
        <article class="left-right-center">
            <div class="left"></div>
            <div class="right"></div>
            <div class="center overflow">
                <h2>浮动解决方案</h2>
                1.这是三栏布局的浮动解决方案；
                2.这是三栏布局的浮动解决方案；
                3.这是三栏布局的浮动解决方案；
                4.这是三栏布局的浮动解决方案；
                5.这是三栏布局的浮动解决方案；
                6.这是三栏布局的浮动解决方案；
            </div>
        </article>
    </section>
    <!-- 绝对布局 -->
    <section class="layout absolute">
        <style>
            .layout.absolute .left-center-right>div {
                position: absolute;
            }

            .layout.layout.absolute .left {
                left: 0;
                width: 300px;
                background: red;
            }

            .layout.absolute .center {
                left: 300px;
                right: 300px;
                background: yellow;
            }

            .layout.absolute .right {
                right: 0;
                width: 300px;
                background: blue;
            }
        </style>
        <h1>三栏布局</h1>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center overflow">
                <h2>绝对定位解决方案</h2>
                1.这是三栏布局的绝对定位解决方案；
                2.这是三栏布局的绝对定位解决方案；
                3.这是三栏布局的绝对定位解决方案；
                4.这是三栏布局的绝对定位解决方案；
                5.这是三栏布局的绝对定位解决方案；
                6.这是三栏布局的绝对定位解决方案；
            </div>
            <div class="right"></div>
        </article>
    </section>
    <!-- flexbox布局 -->
    <section class="layout flexbox">
        <style>
            .layout.flexbox {
                /* 绝对定位布局盒子脱离文档流，为防止遮盖，设置上外边距 */
                margin-top: 110px;
            }

            .layout.flexbox .left-center-right {
                display: flex;
            }

            .layout.flexbox .left {
                width: 300px;
                background: red;
            }

            .layout.flexbox .center {
                flex: 1;
                background: yellow;
            }

            .layout.flexbox .right {
                width: 300px;
                background: blue;
            }
        </style>
        <h1>三栏布局</h1>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h2>flexbox解决方案</h2>
                1.这是三栏布局的flexbox解决方案；
                2.这是三栏布局的flexbox解决方案；
                3.这是三栏布局的flexbox解决方案；
                4.这是三栏布局的flexbox解决方案；
                5.这是三栏布局的flexbox解决方案；
                6.这是三栏布局的flexbox解决方案；
            </div>
            <div class="right"></div>
        </article>
    </section>

    <!-- 表格布局 -->
    <section class="layout table">
        <style>
            .layout.table .left-center-right {
                width: 100%;
                height: 100%;
                display: table;
            }

            .layout.table .left-center-right>div {
                display: table-cell;
            }

            .layout.table .left {
                width: 300px;
                background: red;
            }

            .layout.table .center {
                background: yellow;
            }

            .layout.table .right {
                width: 300px;
                background: blue;
            }
        </style>
        <h1>三栏布局</h1>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center">
                <h2>table解决方案</h2>
                1.这是三栏布局的table解决方案；
                2.这是三栏布局的table解决方案；
                3.这是三栏布局的table解决方案；
                4.这是三栏布局的table解决方案；
                5.这是三栏布局的table解决方案；
                6.这是三栏布局的table解决方案；
            </div>
            <div class="right"></div>
        </article>
    </section>
    <!-- 网格布局 -->
    <section class="layout grid">
        <style>
            .layout.grid .left-center-right {
                width: 100%;
                display: grid;
                grid-template-rows: 100px;
                grid-template-columns: 300px auto 300px;
            }

            .layout.grid .left {
                width: 300px;
                background: red;
            }

            .layout.grid .center {
                background: yellow;
            }

            .layout.grid .right {
                background: blue;
            }
        </style>
        <h1>三栏布局</h1>
        <article class="left-center-right">
            <div class="left"></div>
            <div class="center overflow">
                <h2>网格解决方案</h2>
                1.这是三栏布局的网格解决方案；
                2.这是三栏布局的网格解决方案；
                3.这是三栏布局的网格解决方案；
                4.这是三栏布局的网格解决方案；
                5.这是三栏布局的网格解决方案；
                6.这是三栏布局的网格解决方案；
            </div>
            <div class="right"></div>
        </article>
    </section>
</body>

</html>
```

## 垂直居中

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>垂直居中的三种表现形式</title>
		<style type="text/css">
			/*
			1、先让子盒子的上下边缘和父盒子的水平中心线重叠，然后再让
			子盒子再往回移动自身的一半距离
			2、实用表格的vertical-align:middle; display：table-cell
			3、使用maring计算盒子的上下边距，使盒子居中
			***/
			/* 第一种 */
			.t1{
				width: 300px;
				height: 300px;
				border: 1px solid red;
				position: relative;
				margin-bottom: 20px;
			}
			.t11{
				position: absolute;
				width: 200px;
				height: 200px;
				border: 1px solid blue;
				margin-top: 150px;
				top: -101px;
			}
			/* 第2种 */
			.t2{
				width: 300px;
				height: 300px;
				border: 1px solid red;
				display: table-cell;
				vertical-align: middle;
			}
			.t22{
				width: 200px;
				height: 200px;
				border: 1px solid blue;
			}
			/* 第3种 */
			.t3{
				margin-top: 20px;
				width: 300px;
				height: 300px;
				border: 1px solid red;
			}
			.t33{
				width: 200px;
				height: 200px;
				border: 1px solid blue;
				margin-top: 49px;
			}
		</style>
	</head>
	<body>
		<div class="t1">
			<div class="t11"></div>
		</div>
		<div class="t2">
			<div class="t22"></div>
		</div>
		<div class="t3">
			<div class="t33"></div>
		</div>
	</body>
</html>

```

## 移动web开发之rem布局

### rem基础

#### rem单位

rem (root em)是一个相对单位，类似于em，em是父元素字体大小。

不同的是rem的基准是相对于html元素的字体大小。

比如，根元素（html）设置font-size=12px; 非根元素设置width:2rem; 则换成px表示就是24px。

```
/* 根html 为 12px */
html {
   font-size: 12px;
}
/* 此时 div 的字体大小就是 24px */       
div {
    font-size: 2rem;
}
```

rem的优势：父元素文字大小可能不一致， 但是整个页面只有一个html，可以很好来控制整个页面的元素大小。

### 媒体查询

#### 什么是媒体查询

媒体查询（Media Query）是CSS3新语法。

+ 使用 @media查询，可以针对不同的媒体类型定义不同的样式
+ @media 可以针对不同的屏幕尺寸设置不同的样式
+ 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面 
+ 目前针对很多苹果手机、Android手机，平板等设备都用得到多媒体查询

#### 媒体查询语法规范

+ 用 @media开头 注意@符号
+ mediatype  媒体类型
+ 关键字 and  not  only
+ media feature 媒体特性必须有小括号包含

```
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
```

1. mediatype 查询类型

​       将不同的终端设备划分成不同的类型，称为媒体类型

<img src="https://github.com/guan997/Web-Road/tree/master/12-%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E5%87%86%E5%A4%87/images/1.jpg">

2. 关键字

​       关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件。

+ and：可以将多个媒体特性连接到一起，相当于“且”的意思。
+ not：排除某个媒体类型，相当于“非”的意思，可以省略。
+ only：指定某个特定的媒体类型，可以省略。    

3. 媒体特性

   每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。我们暂且了解三个。

   注意他们要加小括号包含

   <img src="https://github.com/guan997/Web-Road/tree/master/12-%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E5%87%86%E5%A4%87/images/2.jpg">

4. 媒体查询书写规则

   注意： 为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写,但是我们最喜欢的还是从小到大来写，这样代码更简洁

   <img src="https://github.com/guan997/Web-Road/tree/master/12-%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E5%87%86%E5%A4%87/images/3.png">

### less 基础

#### 维护css弊端

CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。

+ CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的。
+ 不方便维护及扩展，不利于复用。
+ CSS 没有很好的计算能力
+ 非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目。 

#### Less 介绍 

Less（LeanerStyle Sheets 的缩写）是一门 CSS扩展语言，也成为CSS预处理器。

做为 CSS的一种形式的扩展，它并没有减少CSS的功能，而是在现有的CSS语法上，为CSS加入程序式语言的特性。

它在CSS 的语法基础之上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS的维护成本，就像它的名称所说的那样，Less可以让我们用更少的代码做更多的事情。

Less中文网址：[http://](http://lesscss.cn/)[less](http://lesscss.cn/)[css.cn/](http://lesscss.cn/)

常见的CSS预处理器：Sass、Less、Stylus

一句话：Less是一门 CSS 预处理语言，它扩展了CSS的动态特性。

Less安装

①安装nodejs，可选择版本(8.0)，网址：<http://nodejs.cn/download/>

②检查是否安装成功，使用cmd命令（win10是window+r 打开运行输入cmd）  ---输入“node –v”查看版本即可

③基于nodejs在线安装Less，使用cmd命令“npm install -g less”即可

④检查是否安装成功，使用cmd命令“ lessc -v ”查看版本即可

Less 使用之变量

变量是指没有固定的值，可以改变的。因为我们CSS中的一些颜色和数值等经常使用。

```
@变量名:值;
```

+ 必须有@为前缀
+ 不能包含特殊字符
+ 不能以数字开头
+ 大小写敏感

```
@color: pink;
```

Less 编译 vocode Less 插件

Easy LESS 插件用来把less文件编译为css文件

安装完毕插件，重新加载下 vscode。

只要保存一下Less文件，会自动生成CSS文件。

<img src="https://github.com/guan997/Web-Road/tree/master/12-%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E5%87%86%E5%A4%87/images/4.png">

Less 嵌套

```
// 将css改为less
#header .logo {
  width: 300px;
}

#header {
    .logo {
       width: 300px;
    }
}

```

如果遇见 （交集|伪类|伪元素选择器） ，利用&进行连接

```
a:hover{
    color:red;
}
a{
  &:hover{
      color:red;
  }
}
```

Less 运算

任何数字、颜色或者变量都可以参与运算。就是Less提供了加（+）、减（-）、乘（*）、除（/）算术运算。

```
/*Less 里面写*/
@witdh: 10px + 5;
div {
    border: @witdh solid red;
}
/*生成的css*/
div {
  border: 15px solid red;
}
/*Less 甚至还可以这样 */
width: (@width + 5) * 2;

```

+ 乘号（*）和除号（/）的写法  
+ 运算符中间左右有个空格隔开 1px + 5
+ 对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位 
+ 如果两个值之间只有一个值有单位，则运算结果就取该单位

### rem适配方案

1.让一些不能等比自适应的元素，达到当设备尺寸发生改变的时候，等比例适配当前设备。

2.使用媒体查询根据不同设备按比例设置html的字体大小，然后页面元素使用rem做尺寸单位，当html字体大小变化元素尺寸也会发生变化，从而达到等比缩放的适配。

技术方案：

1.less+rem+媒体查询

2.lflexible.js+rem

总结： 

两种方案现在都存在。

方案2 更简单，现阶段大家无需了解里面的js代码。

#### rem实际开发适配方案1

①假设设计稿是750px

②假设我们把整个屏幕划分为15等份（划分标准不一可以是20份也可以是10等份）

③每一份作为html字体大小，这里就是50px

④那么在320px设备的时候，字体大小为320/15就是  21.33px

⑤用我们页面元素的大小除以不同的 html字体大小会发现他们比例还是相同的

⑥比如我们以750为标准设计稿

⑦一个100*100像素的页面元素在  750屏幕下，  就是 100/ 50  转换为rem  是  2rem*2rem  比例是1比1

⑧320屏幕下，  html字体大小为21.33   则 2rem=  42.66px  此时宽和高都是 42.66  但是宽和高的比例还是 1比1

⑨但是已经能实现不同屏幕下  页面元素盒子等比例缩放的效果

总结：

①最后的公式：页面元素的rem值 =  页面元素值（px） /  （屏幕宽度  /  划分的份数）

②屏幕宽度/划分的份数就是 htmlfont-size 的大小

③或者：页面元素的rem值 =  页面元素值（px） /  html font-size 字体大小

### 苏宁首页

苏宁首页地址 ：[苏宁首页](m.suning.com)

1、 技术选型

方案：我们采取单独制作移动页面方案

技术：布局采取rem适配布局（less + rem  + 媒体查询）

设计图： 本设计图采用 750px 设计尺寸

2、搭建文件结构

<img src="../images/5.jpg">

3、设置视口标签以及引入初始化样式

```
<meta name="viewport" content="width=device-width, user-scalable=no,         initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

<link rel="stylesheet" href="css/normalize.css">
```

4、设置公共common.less文件

+ 新建common.less    设置好最常见的屏幕尺寸，利用媒体查询设置不同的html字体大小，因为除了首页其他页面也需要
+ 我们关心的尺寸有 320px、360px、375px、384px、400px、414px、424px、480px、540px、720px、750px
+ 划分的份数我们定为 15等份
+ 因为我们pc端也可以打开我们苏宁移动端首页，我们默认html字体大小为 50px，注意这句话写到最上面

### rem 适配方案2

手机淘宝团队出的简洁高效 移动端适配库

我们再也不需要在写不同屏幕的媒体查询，因为里面js做了处理

它的原理是把当前设备划分为10等份，但是不同设备下，比例还是一致的。

我们要做的，就是确定好我们当前设备的html 文字大小就可以了

比如当前设计稿是 750px， 那么我们只需要把 html 文字大小设置为 75px(750px / 10) 就可以

里面页面元素rem值： 页面元素的px 值 /  75  

剩余的，让flexible.js来去算

github地址：[https://github.com/amfe/lib-flexible](https://link.jianshu.com/?t=https://github.com/amfe/lib-flexible)

总结：

因为flexible是默认将屏幕分为10等分

但是当屏幕大于750的时候希望不要再去重置html字体了

所以要自己通过媒体查询设置一下

并且要把权重提到最高

VSCode  px 转换rem 插件 cssrem 

因为cssrem中css自动转化为rem是参照默认插件的16转换的所以需要自己配置

<img src="https://github.com/guan997/Web-Road/tree/master/12-%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E5%87%86%E5%A4%87/images/6.jpg">

<img src="https://github.com/guan997/Web-Road/tree/master/12-%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E5%87%86%E5%A4%87/images/7.jpg">

## 移动web开发——flex布局

### 1.0传统布局和flex布局对比

#### 1.1传统布局

+ 兼容性好
+ 布局繁琐
+ 局限性，不能再移动端很好的布局

#### 1.2 flex布局

+ 操作方便，布局极其简单，移动端使用比较广泛
+ pc端浏览器支持情况比较差
+ IE11或更低版本不支持flex或仅支持部分

### 1.3 建议

+  如果是pc端页面布局，还是采用传统方式
+  如果是移动端或者是不考虑兼容的pc则采用flex

### 2.0 flex布局原理

+ flex 是 flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为 flex 布局。
+ 当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。
+ flex布局又叫伸缩布局 、弹性布局 、伸缩盒布局 、弹性盒布局 
+ 采用 Flex 布局的元素，称为 Flex 容器（flex

container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex
item），简称"项目"。

**总结**：就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式

#### 3.0 父项常见属性

+ flex-direction：设置主轴的方向
+ justify-content：设置主轴上的子元素排列方式
+ flex-wrap：设置子元素是否换行  
+ align-content：设置侧轴上的子元素的排列方式（多行）
+ align-items：设置侧轴上的子元素排列方式（单行）
+ flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

#### 3.1 flex-direction设置主轴的方向

+ 在 flex 布局中，是分为主轴和侧轴两个方向，同样的叫法有 ： 行和列、x 轴和y 轴
+ 默认主轴方向就是 x 轴方向，水平向右
+ 默认侧轴方向就是 y 轴方向，水平向下

<img src="E:/学习文档/前端学习文档/课程笔记/移动web开发Flex 伸缩布局/images/1.jpg">

+ 注意： 主轴和侧轴是会变化的，就看 flex-direction 设置谁为主轴，剩下的就是侧轴。而我们的子元素是跟着主轴来排列的

  <img src="E:/学习文档/前端学习文档/课程笔记/移动web开发Flex 伸缩布局/images/2.jpg">

  

#### 3.2 justify-content 设置主轴上的子元素排列方式

<img src="E:/学习文档/前端学习文档/课程笔记/移动web开发Flex 伸缩布局/images/3.jpg">

#### 3.3 flex-wrap设置是否换行

+ 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，flex布局中默认是不换行的。
+ nowrap 不换行
+ wrap 换行

#### 3.4 align-items 设置侧轴上的子元素排列方式（单行 ）

+ 该属性是控制子项在侧轴（默认是y轴）上的排列方式  在子项为单项（单行）的时候使用
+ flex-start 从头部开始
+ flex-end 从尾部开始
+ center 居中显示
+ stretch 拉伸

#### 3.5 align-content  设置侧轴上的子元素的排列方式（多行）

设置子项在侧轴上的排列方式 并且只能用于子项出现 换行 的情况（多行），在单行下是没有效果的。

<img src="E:/学习文档/前端学习文档/课程笔记/移动web开发Flex 伸缩布局/images/4.jpg">



#### 3.6 align-content 和align-items区别

+ align-items  适用于单行情况下， 只有上对齐、下对齐、居中和 拉伸
+ align-content适应于换行（多行）的情况下（单行情况下无效）， 可以设置 上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值。 
+ 总结就是单行找align-items  多行找 align-content

#### 3.7 flex-flow 属性是 flex-direction 和 flex-wrap 属性的复合属性

```
flex-flow:row wrap;
```

### 4.0 flex布局子项常见属性

+ flex子项目占的份数
+ align-self控制子项自己在侧轴的排列方式
+ order属性定义子项的排列顺序（前后顺序）

#### 4.1  flex 属性

flex 属性定义子项目分配剩余空间，用flex来表示占多少份数。

```
.item {
    flex: <number>; /* 默认值 0 */
}

```

#### 4.2 align-self控制子项自己在侧轴上的排列方式

align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。

默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

````
span:nth-child(2) {
      /* 设置自己在侧轴上的排列方式 */
      align-self: flex-end;
}

````

#### 4.3 order 属性定义项目的排列顺序

数值越小，排列越靠前，默认为0。

注意：和 z-index 不一样。

```
.item {
    order: <number>;
}
```

### 5.0 携程网首页案例制作

携程网链接：http://m.ctrip.com

1.技术选型

方案：我们采取单独制作移动页面方案

技术：布局采取flex布局

2.搭建相关文件夹

<img src="E:/学习文档/前端学习文档/课程笔记/移动web开发Flex 伸缩布局/images/5.jpg">

3.设置视口标签以及引入初始化样式

```
<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/index.css">
```

4.常用初始化样式

```
body {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma,"Lucida Grande",Verdana,"Microsoft Yahei",STXihei,hei;
  color: #000;
  background: #f2f2f2;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}

```

5.模块名字划分

<img src="E:/学习文档/前端学习文档/课程笔记/移动web开发Flex 伸缩布局/images/6.jpg">

## 移动端WEB开发之响应式布局

### 1.0 响应式开发原理 

#### 1.1 响应式开发原理

就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。

设备的划分情况：

+ 小于768的为超小屏幕（手机）
+ 768~992之间的为小屏设备（平板）
+ 992~1200的中等屏幕（桌面显示器）
+ 大于1200的宽屏设备（大桌面显示器）

#### 1.2 响应式布局容器

响应式需要一个父级做为布局容器，来配合子级元素来实现变化效果。

原理就是在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。

父容器版心的尺寸划分

+ 超小屏幕（手机，小于 768px）：设置宽度为 100%
+ 小屏幕（平板，大于等于 768px）：设置宽度为 750px
+ 中等屏幕（桌面显示器，大于等于 992px）：宽度设置为 970px
+ 大屏幕（大桌面显示器，大于等于 1200px）：宽度设置为 1170px 

但是我们也可以根据实际情况自己定义划分

###  2.0 bootstrap的介绍

#### 2.1Bootstrap简介

Bootstrap 来自 Twitter（推特），是目前最受欢迎的前端框架。Bootstrap 是基于HTML、CSS 和 JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。

[中文网](lhttp://www.bootcss.com/)  [官网](lhttp://getbootstrap.com/)  [推荐网站](http://bootstrap.css88.com/)

框架：顾名思义就是一套架构，它有一套比较完整的网页功能解决方案，而且控制权在框架本身，有预制样式库、组件和插件。使用者要按照框架所规定的某种规范进行开发。

#### 2.2 bootstrap优点

+ 标准化的html+css编码规范
+ 提供了一套简洁、直观、强悍的组件
+ 有自己的生态圈，不断的更新迭代
+ 让开发更简单，提高了开发的效率

#### 2.3 版本简介

2.x.x：停止维护,兼容性好,代码不够简洁，功能不够完善。

3.x.x：目前使用最多,稳定,但是放弃了IE6-IE7。对 IE8 支持但是界面效果不好,偏向用于开发响应式布局、移动设备优先的WEB 项目。

4.x.x：最新版，目前还不是很流行

#### 2.4bootstrap基本使用

在现阶段我们还没有接触JS相关课程，所以我们只考虑使用它的样式库。

Bootstrap 使用四步曲： 

1. 创建文件夹结构  

   ![](E:/学习文档/前端学习文档/课程笔记/移动web开发之响应式布局/images/1.png)

   

2. 创建 html 骨架结构 

   ```
   <!DOCTYPE html>
   <html lang="zh-CN">
     <head>
       <meta charset="utf-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
       <title>Bootstrap 101 Template</title>
   
       <!-- Bootstrap -->
       <link href="css/bootstrap.min.css" rel="stylesheet">
   
       <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
       <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
       <!--[if lt IE 9]>
         <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
         <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
       <![endif]-->
     </head>
     <body>
       <h1>你好，世界！</h1>
   
       <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
       <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
       <!-- Include all compiled plugins (below), or include individual files as needed -->
       <script src="js/bootstrap.min.js"></script>
     </body>
   </html>
   ```

   

3. 引入相关样式文件  

   ```
   <!-- Bootstrap 核心样式-->
   <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
   ```

   

4. 书写内容 

   直接拿Bootstrap 预先定义好的样式来使用

   修改Bootstrap 原来的样式，注意权重问题

   学好Bootstrap 的关键在于知道它定义了哪些样式，以及这些样式能实现什么样的效果

#### 2.5 bootstrap布局容器

Bootstrap 需要为页面内容和栅格系统包裹一个 .container 或者.container-fluid 容器，它提供了两个作此用处的类。

.container

+ 响应式布局的容器  固定宽度
+ 大屏 ( >=1200px)  宽度定为 1170px
+ 中屏 ( >=992px)   宽度定为  970px
+ 小屏 ( >=768px)   宽度定为  750px
+ 超小屏  (100%) 

.container-fluid

+ 流式布局容器 百分百宽度
+ 占据全部视口（viewport）的容器。

#### 2.6 bootstrap栅格系统

Bootstrap提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。

栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。

+ 按照不同屏幕划分为1~12 等份
+ 行（row） 可以去除父容器作用15px的边距
+ xs-extra small：超小； sm-small：小；  md-medium：中等； lg-large：大；
+ 列（column）大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列
+ 每一列默认有左右15像素的 padding
+ 可以同时为一列指定多个设备的类名，以便划分不同份数  例如 class="col-md-4 col-sm-6"

栅格嵌套

栅格系统内置的栅格系统将内容再次嵌套。简单理解就是一个列内再分成若干份小列。我们可以通过添加一个新的 .row 元素和一系列 .col-sm-* 元素到已经存在的 .col-sm-*
元素内。

```
<!-- 列嵌套 -->
 <div class="col-sm-4">
    <div class="row">
         <div class="col-sm-6">小列</div>
         <div class="col-sm-6">小列</div>
    </div>
</div>

```

列偏移

使用 .col-md-offset-* 类可以将列向右侧偏移。这些类实际是通过使用 * 选择器为当前元素增加了左侧的边距（margin）。

```
 <!-- 列偏移 -->
  <div class="row">
      <div class="col-lg-4">1</div>
      <div class="col-lg-4 col-lg-offset-4">2</div>
  </div>

```

列排序

通过使用 .col-md-push-* 和 .col-md-pull-* 类就可以很容易的改变列（column）的顺序。

```
 <!-- 列排序 -->
  <div class="row">
      <div class="col-lg-4 col-lg-push-8">左侧</div>
      <div class="col-lg-8 col-lg-pull-4">右侧</div>
  </div>

```

响应式工具

为了加快对移动设备友好的页面开发工作，利用媒体查询功能，并使用这些工具类可以方便的针对不同设备展示或隐藏页面内容。

![](E:/学习文档/前端学习文档/课程笔记/移动web开发之响应式布局/images/2.jpg)

### 3.0 阿里百秀案例制作

#### 3.1 技术选型

方案：我们采取响应式页面开发方案

技术：bootstrap框架

设计图： 本设计图采用 1280px 设计尺寸

项目结构搭建

Bootstrap 使用四步曲： 

1. 创建文件夹结构  

2. 创建 html 骨架结构  
3. 引入相关样式文件  
4. 书写内容 

container宽度修改

因为本效果图采取 1280的宽度， 而Bootstrap 里面 container宽度 最大为 1170px，因此我们需要手动改下container宽度

```
 /* 利用媒体查询修改 container宽度适合效果图宽度  */
  @media (min-width: 1280px) { 
    .container { 
	width: 1280px; 
     } 
   }

```













 



## 布局方式

### 1.静态布局：

传统布局，屏幕宽高变化时，盒子使用横向或者竖向的滚动条来查看被遮挡部分，也就是不管浏览器窗口的大小怎么变化就按html语义标签排列的布局来布置。

### 2.弹性布局(flex)：

css3引入的，flex布局；优点在于其容易上手，根据flex规则很容易达到某个布局效果，然而缺点是：浏览器兼容性比较差，只能兼容到ie9及以上；

**Flex 布局**

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

**容器的属性**

- flex-direction决定主轴的方向（即项目的排列方向）。
  - row（默认值）：主轴为水平方向，起点在左端。
  - row-reverse：主轴为水平方向，起点在右端。
  - column：主轴为垂直方向，起点在上沿。
  - column-reverse：主轴为垂直方向，起点在下沿。
- flex-wrap 是否换行
  - flex-wrap: nowrap | wrap | wrap-reverse;
- flex-flow：flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
- justify-content定义了项目在主轴上的对齐方式。
  - flex-start（默认值）：左对齐
  - flex-end：右对齐
  - center： 居中
  - space-between：两端对齐，项目之间的间隔都相等。
  - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
- align-items：定义项目在交叉轴上如何对齐。
  - flex-start：交叉轴的起点对齐。
  - flex-end：交叉轴的终点对齐。
  - center：交叉轴的中点对齐。
  - baseline: 项目的第一行文字的基线对齐。
  - stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
- align-content定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
  - flex-start：与交叉轴的起点对齐。
  - flex-end：与交叉轴的终点对齐。
  - center：与交叉轴的中点对齐。
  - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  - space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  - stretch（默认值）：轴线占满整个交叉轴。

### 3.自适应布局：

分别为不同的屏幕分辨率定义布局，在每个布局中，页面元素不随窗口大小的调整而发生变化，当窗口大小到达一定分辨率时变化一次。

### 4.流式布局：

页面元素的宽度按照屏幕进行适配调整，元素的位置不变，大小变化，屏幕太大或者太小导致元素不能正常显示。

### 5.响应式布局：

<meta name="viewport" content="divice-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

使用meta标签设置，页面元素宽度随窗口调整自动适配。主要属性及其含义如下：name="viewport"：  名称=视图；width=device-width 页面宽度=设备宽度(可以理解为获取你手机的屏幕宽度)；initial-scale - 初始的缩放比例 ；minimum-scale - 允许用户缩放到的最小比例  ；maximum-scale - 允许用户缩放到的最大比例 ；user-scalable - 用户是否可以手动缩放 。

6.网格布局：grid

二维布局系统，随意的定义每行每列的数目和大小。也非常简单方便，兼容性较差。



## 瀑布流

`[艾涵](https://www.cnblogs.com/ainyi/)`

### 纯 css 写瀑布流
#### 1.multi-columns 方式：
通过 Multi-columns 相关的属性 column-count、column-gap 配合 break-inside 来实现瀑布流布局。
multi-columns
多列
columns：<' column-width '> || <' column-count '>
设置或检索对象的列数和每列的宽度。复合属性
设置这样的 html 结构：

```css
/*列数及列宽固定*/
-moz-columns:200px 3;
-webkit-columns:200px 3;
columns:200px 3;

/*列宽固定，根据容器宽度液态分布列数*/
-moz-columns:200px;
-webkit-columns:200px;
columns:200px;
```
column-width：<length> | auto
设置或检索对象每列的宽度；
auto：根据 <' column-count '> 自定分配宽度
```css
/*列宽固定，根据容器宽度液态分布列数*/
-moz-column-width:200px;
-webkit-column-width:200px;
column-width:200px;
```
column-count：<integer> | auto
设置或检索对象的列数；
auto：根据 <' column-width '> 自定分配宽度
```css
/*列数固定，根据容器宽度液态分布列宽*/
-moz-column-count:5;
-webkit-column-count:5;
column-count:5;
```
column-gap：<length> | normal
设置或检索对象的列与列之间的间隙
```css
/*固定列间隙为40px*/
-moz-column-gap:40px;
-webkit-column-gap:40px;
column-gap:40px;

/*列间隙column-gap:normal；font-size为14px时，列间隙column-gap:normal的计算值也为14px*/
-moz-column-gap:normal;
-webkit-column-gap:normal;
column-gap:normal;
```
当然为了布局具有响应式效果，可以借助媒体查询属性，在不同屏幕大小的条件下设置瀑布流容器 masonry 的 `column-count 来自适应改变列数`：

```css
@media screen and (max-width: 800px) {
                .masonry {
                    column-count: 2; // two columns on larger phones
                }
            }
            @media screen and (max-width: 500px) {
                .masonry {
                    column-count: 1; // two columns on larger phones
                }
            }
```

#### 2.flexbox 方式：

通过采用 flex-flow 来控制列，并且允许它换行。

这里关键是容器的高度，这里要显式的设置 height 属性，当然除了设置 px 值，还可以设置%，让容器的高度和浏览器视窗高度一样。

这里height可以设置成任何高度值（采用任何的单位），但不能不显式的设置，如果没有显式的设置，容器就无法包裹住项目列表。
`WaterfallFlow.html`

我们可以发现，使用纯 css 写瀑布流，每一块 item 都是从上往下排列，不能做到从左往右排列：

![img](https://images2018.cnblogs.com/blog/1344447/201804/1344447-20180410131318225-135739229.png)

 

 

这样子若是动态加载图片的瀑布流，体验就会很不好

我们想要的是这样：

![img](https://images2018.cnblogs.com/blog/1344447/201804/1344447-20180410131140018-1659527281.png)

 

这样做只能通过 js 来写瀑布流

### js 瀑布流实现方式：

css 的绝对定位方式：根据每张图片的位置设置 top 和 left 值：
css内容
```css
.masonry {
                width: 100%;
                margin-top: 50px;
                position:relative;
            }
            .item {
                z-index: 10;
                transition: 0.25s;
                overflow: hidden;
                position: absolute;
            }
            .item img{
                width: 100%;
                height:100%;
                transition: 0.25s;
            }
            .item:hover img{
                z-index: 100;
                transition: 0.25s;
                overflow: hidden;
                animation: bounceIn 0.25s ease-in 2 alternate;
            }
            @keyframes bounceIn{
                100% {
                    transform: scale(1.07);
                }
            }
```
```js
//瀑布流效果
//这里有一个坑（已经修复）：
//因为是动态加载远程图片，在未加载完全无法获取图片宽高
//未加载完全就无法设定每一个item(包裹图片)的top。

//item的top值：第一行：top为0
//            其他行：必须算出图片宽度在item宽度的缩小比例，与获取的图片高度相乘，从而获得item的高度
//                   就可以设置每张图片在瀑布流中每块item的top值（每一行中最小的item高度，数组查找）
//item的left值：第一行：按照每块item的宽度值*块数
//             其他行：与自身上面一块的left值相等
function waterFall() {
    // 1- 确定图片的宽度 - 滚动条宽度
    var pageWidth = getClient().width-8;
    var columns = 3; //3列
    var itemWidth = parseInt(pageWidth/columns); //得到item的宽度
    $(".item").width(itemWidth); //设置到item的宽度

    var arr = [];

    $(".masonry .item").each(function(i){
        var height = $(this).find("img").height();
        var width = $(this).find("img").width();
        var bi = itemWidth/width; //获取缩小的比值
        var boxheight = parseInt(height*bi); //图片的高度*比值 = item的高度

        if (i < columns) {
            // 2- 确定第一行
            $(this).css({
                top:0,
                left:(itemWidth) * i
            });
            arr.push(boxheight);

        } else {
            // 其他行
            // 3- 找到数组中最小高度  和 它的索引
            var minHeight = arr[0];
            var index = 0;
            for (var j = 0; j < arr.length; j++) {
                if (minHeight > arr[j]) {
                    minHeight = arr[j];
                    index = j;
                }
            }
            // 4- 设置下一行的第一个盒子位置
            // top值就是最小列的高度
            $(this).css({
                top:arr[index],
                left:$(".masonry .item").eq(index).css("left")
            });

            // 5- 修改最小列的高度
            // 最小列的高度 = 当前自己的高度 + 拼接过来的高度
            arr[index] = arr[index] + boxheight;
        }
    });
}


//clientWidth 处理兼容性
function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}



 // 页面尺寸改变时实时触发
window.onresize = function() {
    //重新定义瀑布流
    waterFall();
};



//初始化
window.onload = function(){

    //实现瀑布流
    waterFall();

}
```