# 这是一个vue商城项目
## 这是一个web前端新手学习项目
### 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
- 在制作 购物车 小图标的时候，操作会相对多一些：
- 先把 扩展图标的 css 样式，拷贝到 项目中
- 拷贝 扩展字体库 ttf 文件，到项目中
- 为 购物车 小图标 ，添加 如下样式 mui-icon mui-icon-extra mui-icon-extra-cart
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件
## 改造tabbar为router-link
## 设置路由高亮
## tabbar中的路由连接，展示对应的路由组件

## 制作首页轮播图
## 家在首页轮播图数据
1. 获取数据,使用vue-resource
2. 使用vue-resource的this.$http.get获取数据
3. 获取到的数据要保存到data身上
4. 使用v-for循环渲染每一个item帧

## 改造九宫格样式

## 制作新闻资讯页面

1. 绘制界面，使用MUI中的meadis-list
2. 使用vue-resource获取数据
3. 渲染真实数据
4. 安装插件moment处理时间格式

## 实现新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为router-link，同时，在跳转的时候应该提供唯一的Id标识符
2. 创建新闻详情页面 NewInfo.vue
3. 把路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染

## 单独封装一个comment.vue评论组件
1. 先创建一个单独的comment.vue组件模板
2. 在需要使用comment逐渐的页面中，先手动导入comment组件
    'import comment from './comment.vue' 
3. 在父组件中，使用‘comment’属性，导入comment组件，注册为自己的子组件
4. 将注册子组件的注册名称以标签形式，在页面中引用即可

## 获取所有的评论数据显示到页面

## 实现点击加载更多评论功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让pageindex++，然后重新调用this.getComments()方法重新获取最新一页的数据
3. 为了防止新数据覆盖老数据的情况，我们再点击加载更多的时候，每当获取新数据，应该让老数据调用数组的concat，拼接新数组

## 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
4. 通过 vue-resource 发送一个请求，把评论内容提交给 服务器
5. 当发表评论OK后，重新刷新列表，以查看最新的评论
-   如果调用 getComments 方法重新刷新评论列表的话，可能只能得到 最后一页的评论，前几页的评论获取不到
-   当评论成功后，在客户端，手动拼接出一个 最新的评论对象，然后 调用 数组的 unshift 方法， 把最新的评论，追加到  data 中 comments 的开头；这样，就能 完美实现刷新评论列表的需求；

##改造图片分析 按钮为 路由的链接并显示对应的组件页面

###绘制 图片列表 组件页面结构并美化样式

1. 制作 顶部的滑动条
2. 制作 底部的图片列表
## 制作顶部滑动条的坑们：

1. 需要借助于 MUI 中的 tab-top-webview-main.html 
2. 需要把 slider 区域的 mui-fullscreen 类去掉
3. 滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化一下：

- 导入 mui.js 
- 调用官方提供的 方式 去初始化：

```
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
```
4. 我们在初始化 滑动条 的时候，导入的 mui.js ，但是，控制台报错： Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode

- 经过我们合理的推测，觉得，可能是 mui.js 中用到了 'caller', 'callee', and 'arguments' 东西，但是， webpack 打包好的 bundle.js 中，默认是启用严格模式的，所以，这两者冲突了；
- 解决方案： 1. 把 mui.js 中的 非严格 模式的代码改掉；但是不现实； 2. 把 webpack 打包时候的严格模式禁用掉；
- 老版本中选择了 plan B  移除严格模式： 使用这个插件 babel-plugin-transform-remove-strict-mode
npm install babel-plugin-transform-remove-strict-mode -D
安装babel-plugin-transform-remove-strice-mode插件的办法在老版本的Babel是可以的
npm install babel-plugin-transform-remove-strict-mode
或是npm install @babel/plugin-transform-strict-mode
但在新版本的Babel中没用 依旧会报错
解决方法：
在.balelrc中添加排除项 排除你的mui.js即可
```
"ignore": [
      "./src/lib/mui/js/mui.min.js"
    ]
```
解决了strict mode的问题之后 可能还会有个不影响使用的报错：
错误信息：
[Intervention] Unable to preventDefault inside passive event listener due to target being 
添加一个全局的样式：
treated as passive.
```
* {
	touch-action: pan-y;//touch-action能够提高页面的流畅度pan-y样式的作用是启用单指垂直平移手势 即 单指在页面纵向滑动时 能提高页面的流畅度
}
```
5. 刚进入 图片分享页面的时候， 滑动条无法正常工作， 经过我们认真的分析，发现， 如果要初始化 滑动条，必须要等 DOM 元素加载完毕，所以，我们把 初始化 滑动条 的代码，搬到了 mounted 生命周期函数中；
6. 当 滑动条 调试OK后，发现， tabbar 无法正常工作了，这时候，我们需要把 每个 tabbar 按钮的 样式中  mui-tab-item 重新改一下名字；
7. 获取所有分类，并渲染 分类列表；
## 制作图片列表区域

1. 图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 lazy-load
2. 根据lazy-load的使用文档，尝试使用
3. 渲染图片列表数据

## 实现了 图片列表的 懒加载改造和 样式美化

## 实现了 点击图片 跳转到 图片详情页面

1. 在改造 li 成 router-link 的时候，需要使用 tag 属性指定要渲染为 哪种元素

## 实现 详情页面的布局和美化，同时获取数据渲染页面

## 实现 图片详情中 缩略图的功能

1. 使用 插件 vue-preview 这个缩略图插件
2.  ```<vue-preview class="imgPrev" :slides="list" @close="handleClose"></vue-preview>```
3. 注意： 每个 图片数据对象中，必须有 w 和 h 属性
4. 在新版本的vue-preview设置样式实现小图 
```
.thumbs {
    /deep/ .my-gallery {
      //deep深层作用选择器
      display: flex;
      flex-wrap: wrap; //默认换行
      figure {
        width: 30%;
        margin: 5px;
        img {
          width: 100%;
          box-shadow: 0 0 8px #999;
          border-radius: 5px;
        }
      }
    }
  }
```
## 绘制 商品列表 页面基本结构并美化

## 尝试在手机上 去进行项目的预览和测试

1. 要保证自己的手机可以正常运行；
2. 要保证 手机 和 开发项目的电脑 处于同一个 WIFI 环境中，也就是说 手机 可以 访问到 电脑的 IP
3. 打开自己的 项目中 package.json 文件，在 dev 脚本中，添加一个 --host 指令， 把 当前 电脑的 WIFI IP地址， 设置为 --host 的指令值；

- 如何查看自己电脑所处 WIFI 的IP呢， 在 cmd 终端中运行 ipconfig ， 查看 无线网的 ip 地址

## 改写商品列表
### 编程式的导航
1. 借助 router 的实例方法定义导航链接，通过编写代码来实现。

## 编写商品详情界面
1. 抽离主页轮播图
2. 解决轮播图宽度问题 （手动指定 是否为 100% 的宽度 isfull）
3. 购买商品数量使用数字选择框 组件

## 编写图文介绍界面

## 编写加入购物车小球

## 实现加入购物车时候，拿到选择的数量 
1. 解决父子组件嵌套的问题
遇到问题：无法直接在 goodsinfo 页面中获取到选中的商品数量值（goodsinfo.stock_quantity渲染的时候，数据还没有获取）
- 组件向父组件传值（事件调用机制）
- 父向子传递方法，子调用这个方法， 同时把数据当作参数传递给这个方法

