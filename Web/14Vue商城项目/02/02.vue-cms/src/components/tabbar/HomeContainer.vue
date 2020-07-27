<template>
  <div>
    <!-- 这是轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt />
      </mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格到六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: [], //保存轮播图的按钮
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    // 获取轮播图的方法
    getLunbotu() {
      this.$http.get("http://vue.studyit.io/api/getlunbo").then((result) => {
        console.log(result.body);
        if (result.body.status === 0) {
          this.lunbotuList = result.body.message;
        } else {
          Toast("加载轮播图失败");
        }
      });
    },
  },
};
</script>
<style lang="scss" scope>
.mint-swipe {
  height: 200px;
  // 交集选择器
  // .mint-swipe-item:nth-child(1){
  //     background: red;
  // }

  .mint-swipe-item {
    // $交集选择器
    &:nth-child(1) {
      background: red;
    }
    &:nth-child(2) {
      background: blue;
    }
    &:nth-child(3) {
      background: cyan;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background: white;
  border: none;
  img {
    width: 60px;
    height: 60px;
    .mui-media-body {
      font-size: 13px;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background: white;
  border: none;
}
</style>