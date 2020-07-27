<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">原生模式actionsheet</h1>
    </header>
    <br />
    <br />
    <h1>这是 App 组件</h1>
    <mt-button size="small" type="primary" @click="show">点击弹出toast</mt-button>
    <mt-button size="normal" type="primary" plain icon="back" disabled>normal</mt-button>

    <div>
      <span class="mui-badge">1</span>
      <span class="mui-badge mui-badge-primary">12</span>
      <span class="mui-badge mui-badge-success">123</span>
      <span class="mui-badge mui-badge-warning">3</span>
      <span class="mui-badge mui-badge-danger">45</span>
      <span class="mui-badge mui-badge-purple">456</span>
    </div>

    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">Goodslist</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
var generateParenthesis = function (n) {
  let res = [];
  //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
  const help = (cur, left, right) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    if (left < n) {
      help(cur + "(", left + 1, right);
    }
    if (right < left) {
      help(cur + ")", left, right + 1);
    }
  };
  help("", 0, 0);
  return res;
};
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // instance: null,
    };
  },
  created() {
    // this.getList();
  },
  methods: {
    // getList() {
    //   // 模拟获取列表的 一个 AJax 方法
    //   // 在获取数据之前，立即 弹出 Toast 提示用户，正在加载数据
    //   this.show();
    //   setTimeout(() => {
    //      //  当 3 秒过后，数据获取回来了，要把 Toast 移除
    //     this.instance.close();
    //   }, 3000);
    // },
    show() {
      let instance = Toast({
        message: "提示",
        position: "bottom",
        position: "top",
        duration: -1, // 如果是 -1 则弹出之后不消失
        // className	Toast 的类名。可以为其添加样式	String
        // iconClass	icon 图标的类名
        className: "mytoast",
        iconClass: "glyphicon glyphicon-star",
      });
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
  },
};
</script>


<style>
</style>
