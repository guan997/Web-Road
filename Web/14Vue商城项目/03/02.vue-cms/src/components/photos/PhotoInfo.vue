<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3>标题</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间:{{newsinfo.add_time}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr />
    <!-- 缩略图区域 -->

    <!-- 图片内容区域 -->
    <div class="content" v-html="newsinfo.content">
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <!-- 评论子组件 -->
    <comment-box :id="this.id"></comment-box> 
  </div>
</template>
<script>
// 导入评论子组件
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsinfo: {}, // 新闻对象
      list:[]//缩略图数组
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      this.$http.get("api/getnew/" + this.id).then((result) => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取新闻失败！");
        }
      });
    },
  },
  components: {
    // 注册子组件的节点
    "comment-box": comment,
  },
};
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        text-indent: 1em;
        img{
            width: 100%;
        }
    }
}
</style>