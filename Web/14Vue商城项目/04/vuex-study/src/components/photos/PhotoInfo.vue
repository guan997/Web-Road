<template>
  <div class="photoinfo-container">
    <!-- 大标题 -->
    <h3>{{photoinfo.title}}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间:{{photoinfo.add_time | dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>
    <hr />
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <!-- v-for="(item, index) in list" :src="item.src" @click="$preview.open(index, list)" :key="item.src" -->
      <vue-preview class="imgPrev" :slides="list" @close="handleClose"></vue-preview>
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
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
      photoinfo: {}, // 新闻对象
      list: [], //缩略图数组
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    handleClose() {
      console.log("close event");
    },
    getPhotoInfo() {
      // 获取图片的详情
      this.$http.get("api/getimageInfo/" + this.id).then((result) => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    getThumbs() {
      //获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then((result) => {
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          result.body.message.forEach((item) => {
            item.w = 600;
            item.h = 400;
            // item.src = item.img_url;  //大图
            item.msrc = item.src; //小图
          });
          // 把完整的数据保存到 list 中
          this.list = result.body.message;
        } else {
          Toast("获取缩略图图片失败...");
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
.photoinfo-container {
  padding: 3px;
  h3 {
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
    color: #26a2ff;
  }
  .subtitle {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
    text-indent: 1em;
  }
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
}
</style>