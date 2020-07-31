<template>
  <div class="newsinfo-container">
      <!-- 标题 -->
    <h3 class="title">{{newsinfo.title}}</h3>
    <!-- 次标题 -->
    <p class="subtitle">
      <span>发布人：{{newsinfo.add_time | dateFormat}}</span>
      <span>时间：{{newsinfo.click}}次</span>
    </p>
    <hr />
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>
    <!-- 评论区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
// 导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id, //见url地址传递过来的值传递给data 方便调佣
      newsinfo: {}, //新闻对象
    };
  },
  created() {
    this.getNewInfo();
  },
  methods: {
    getNewInfo() {
      //获取新闻详情
      this.$http.get("api/getnew/" + this.id).then((result) => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取新闻失败");
        }
      });
    },
  },
  components:{
    //   用来注册子组件的节点
      "comment-box":comment
  }
};
</script>
<style lang="scss" >
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    color: red;
    display: flex;
    justify-content: center;
    padding: 15px 0px;
  }
  .subtitle {
    font-size: 13px;
    color: blue;
    display: flex;
    justify-content: space-between;
    .content {
      img {
        width: 100%;
      }
    }
  }
}
</style>