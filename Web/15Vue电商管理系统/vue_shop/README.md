# vue_shop

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 导入数据库
### 初始化后台文件
node .\app.js
error: -4078 数据库没有连接成功，重新打开数据库
### 开启后台接口 
node .\app.js

ESlint报错：Trailing spaces not allowed no-trailing-spaces
解决方案：
1.某行代码后面存在空格,去掉空格
2.调整规则,设定允许空格和空行
项目.eslintrc.js文件 rules节点下设定
```
rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces':["error", { "ignoreComments": true ,"skipBlankLines":true}]
    // ignoreComments 允许注释尾随空格,skipBlankLines允许 空行空格
  }
```


### 登录/退出功能
1. 编写登录页面

2. 实现表单验证
2.1 使用Form 组件，为el-form通过 rules 属性绑定约定的验证规则对象
2.2 定义验证规则属性
2.3 将 Form-Item 的 prop 属性设置为需校验的字段名

3. 实现重置功能
3.1 通过ref 获取表单实例对象
3.2 调用resetFields()方法对整个表单进行重置 (数据恢复成默认值，因为其是双向数据绑定)

4. 实现登录校验功能
4.1 通过ref 获取表单实例对象
4.2 调用validate()方法	对整个表单进行校验的方法参数为一个回调函数。
4.3 实现登录结果信息提示
4.4 将登录成功之后的 token，保存到客户端的 sessionStorage 中
4.5 通过编程式导航跳转到后台主页，路由地址是 /home

5. 实现登录功能
5.1 通过路由导航守卫控制访问权限

6. 实现退出功能

处理ESlint语法报错
添加格式化配置文件，   
 // 使用分号, 默认true
    "semi": false,
 // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    "singleQuote": false,
    
```
{
  "semi": false,
  "singleQuote": true
}  
```

函数名称或function关键字与开始参数之间允许有空格
.eslintrc.js
```
  rules: {
    'space-before-function-paren': 0
  },
```


### 主页布局
1. 页面效果实现
2. 左侧菜单栏数据获取
3. 通过双层for循环渲染左侧菜单
- ndex只接受字符串,不接受数值,在后面拼接字符串
4. 为选中项设置颜色并添加分类图标
5. 实现侧边栏的折叠与展开效果