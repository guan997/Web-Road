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

    - 

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

