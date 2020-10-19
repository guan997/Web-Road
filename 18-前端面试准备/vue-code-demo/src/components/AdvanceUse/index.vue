<template>
  <div>
    <p>vue高级特性</p>
    <hr />
    <!-- 自定义v-model -->
    <p>{{ name }}</p>
    <CustomVModel v-model="name"/>
  </div>
</template>
<script>
import CustomVModel from "./CustomVModel";
export default {
  components: {
    CustomVModel,
  },
  data() {
    return {
      name: "百度",
      website: {
        url: "baidu.com",
        title: "baidu",
        subTitle: "百度一下，你就知道",
      },
    };
  },
};
</script>