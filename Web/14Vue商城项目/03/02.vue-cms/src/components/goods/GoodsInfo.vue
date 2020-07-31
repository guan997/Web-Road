<template>
  <div class="goodsinfo-container">
    <!-- 这是轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper-box :lunbotuLists="lunbotuLists" :isfull="false"></swiper-box>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{ goodsinfo.market_price }}</del>&nbsp;
            销售价格：
            <span class="now_price">￥{{ goodsinfo.sell_price}}</span>
          </p>
          <p class="price">购买数量：<number></number></p>
          <p>
            <mt-button type="primary" size="small" @click="getGoodsInfo">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="getGoodsInfo">加入购物车</mt-button>
             <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
            <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
            <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
            <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
          </p>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" plain size="large" @click="getDesc(id) ">图文介绍</mt-button>
        <mt-button type="danger" plain size="large" @click="getComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
// 导入轮播图组件
import swiper from "../subcomponents/swiper.vue";
// 导入 数字选择框 组件
import number from "../subcomponents/goodsinfo_number.vue";
export default {
  data() {
    return {
      id: this.$route.params.id, // 将路由参数对象中的 id 挂载到 data , 方便后期调用
      selectedCount: 1, // // 保存用户选中的商品数量， 默认，认为用户买1个
      goodsinfo: [], //存放商品的信息
      lunbotuLists: [], // 轮播图的数据
    };
  },
  created() {
    this.getGoodsInfo();
    this.getLunbotus();
  },
  methods: {
    // 获取商品列表
    getGoodsInfo() {
      this.$http
        .get("api/goods/getinfo/" + this.id)
        .then((result) => {
          if (result.body.status === 0) {
            this.goodsinfo = result.body.message[0];
          }
        });
    },
    // 获取轮播图的方法
    getLunbotus() {
      this.$http.get("api/getthumimages/" + this.id).then((result) => {
        if (result.body.status === 0) {
          result.body.message.forEach((item) => {
            item.img = item.src;
          });
          this.lunbotuLists = result.body.message;
        } else {
          Toast("加载轮播图失败");
        }
      });
    },
    getDesc(id){
        // 点击使用编程式导航跳转到图文介绍页面
        this.$router.push({name:'goodsdesc',params:{id}});
    },
    getComment(id){
        // 点击跳转到评论介绍页面
        this.$router.push({name:'goodscomment',params:{id}});
    }
  },
  components: {
    "swiper-box": swiper,
    "number":number
  },
};
</script>
<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
</style>