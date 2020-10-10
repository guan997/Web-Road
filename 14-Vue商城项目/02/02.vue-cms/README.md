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