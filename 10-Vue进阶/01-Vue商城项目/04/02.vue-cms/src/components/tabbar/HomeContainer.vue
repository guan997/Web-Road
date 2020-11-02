<template>
  <div>
    <!-- 这是轮播图区域 -->
    <swiper-box :lunbotuLists="lunbotuLists" :isfull="true"></swiper-box>

    <!-- 九宫格到六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="../../images/menu1.png" alt />
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodlist">
          <img src="../../images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/newslist">
          <img src="../../images/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/newslist">
          <img src="../../images/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/newslist">
          <img src="../../images/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponents/swiper.vue'
export default {
  data() {
    return {
      lunbotuLists: [], //保存轮播图的按钮
    };
  },
  created() {
    this.getLunbotus();
  },
  methods: {
    // 获取轮播图的方法
    getLunbotus() {
      this.$http
        .get("api/getlunbo")
        .then((result) => {
          // console.log(result.body);
          if (result.body.status === 0) {
            this.lunbotuLists = result.body.message;
          } else {
            Toast("加载轮播图失败");
          }
        });
    },
  },
  components: {
    "swiper-box":swiper
  }
};
</script>
<style lang="scss" scope>

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