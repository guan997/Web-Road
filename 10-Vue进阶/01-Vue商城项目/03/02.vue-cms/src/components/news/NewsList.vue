<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
         <router-link :to="'/home/newsinfo/'+item.id"><!--字符串拼接  '' -->
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发布时间：{{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    data() {
        return {
            newsList:[] //新闻列表
        };
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList(){
            // 打开新闻列表
            this.$http.get("api/getnewslist").then(result => {
                if(result.body.status === 0) {
                    // console.log(result.body);
                    // 如果成功,把数据保存到data
                    this.newsList = result.body.message;
                }else {
                    Toast("获取新闻失败"+message);
                }
            })
        }
    },
};
</script>
<style lang="scss" scoped>
.mui-table-view{
    h1{
        font-size: 14px;
    }
    .mui-ellipsis{
        padding-bottom: 50px;
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    
}
</style>