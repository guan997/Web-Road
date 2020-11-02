<template>
  <div>
    <p>vue高级特性</p>
    <hr />
    <!-- 自定义v-model -->
    <!-- <p>{{ name }}</p>
    <CustomVModel v-model="name"/> -->
    <!-- <NextTick/> -->
    <!-- slot插槽 -->
    <!-- <SlotDemo :url="website.url">
      {{website.title}}
    </SlotDemo>
    <ScopedSlotDemo :url="website.url">
      <template v-slot="slotProps">
        {{slotProps.slotData.title}}
      </template>
    </ScopedSlotDemo> -->

    <!-- 动态组件 -->
    <!-- <component :is="NextTickName"/> -->
    <!-- <div v-for="(val, key) in newsData" :key="key">
      <component :is="val.type" />
    </div> -->

    <!-- keep-alive -->
    <!-- <KeepAlive/> -->

    <!-- mixin -->
    <MixinDemo/>
  </div>
</template>
<script>
// import CustomVModel from "./CustomVModel";
// import NextTick from './NextTick'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from './ScopedSlotDemo'
// import KeepAlive from './KeepAlive'
import MixinDemo from './MixinDemo'

export default {
  components: {
    // CustomVModel,
    // NextTick
    // ScopedSlotDemo,
    // SlotDemo
    // KeepAlive
    MixinDemo
  },
  data() {
    return {
      name: "百度",
      website: {
        url: "baidu.com",
        title: "baidu",
        subTitle: "百度一下，你就知道",
      },
      // NextTickName:"NextTick",
      newsData: {
        1: { 
          type: "text" 
        },
        2: {
          type: "img",
        },
        3: {
          type: "text",
        },
      },
    };
  },
};
</script>