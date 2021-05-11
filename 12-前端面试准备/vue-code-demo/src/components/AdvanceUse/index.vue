<template>
  <div>
    <p>vue高级特性</p>
    <hr />
    <!-- 自定义v-model -->
    <!-- <p>{{ name }}</p> -->
    <!-- <CustomVModel v-model="name"/> -->

    <!-- <NextTick/> -->

    <!-- slot插槽 -->
    <!-- <SlotDemo :url="website.url">
      {{website.title}}
    </SlotDemo> -->

    <!-- 作用域插槽 -->
    <!-- <ScopedSlotDemo :url="website.url"> -->
      <!-- slotProps名字自定义 -->
      <!-- <template v-slot="slotProps"> -->
        <!-- slotData要和子组件名称对应起来 -->
        <!-- {{ slotProps.slotData.title }}
      </template>
    </ScopedSlotDemo> -->
    
    <!-- 动态组件 -->
    <!-- <component :is="NextTickName"/> -->
    <!-- <div v-for="(val, key) in newsData" :key="key">
      <component :is="val.type" />
    </div> -->

    <!-- 异步组件 -->
    <!-- <FormDemo v-if="showFormDemo"/>
    <button @click="showFormDemo = !showFormDemo">show form demo</button> -->

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
// import ScopedSlotDemo from "./ScopedSlotDemo";
// import KeepAlive from './KeepAlive'
import MixinDemo from './MixinDemo'

export default {
  components: {
    // CustomVModel,
    // NextTick
    // ScopedSlotDemo,
    // SlotDemo
    // KeepAlive
    MixinDemo,
    // FormDemo: () => import('../BaseUse/FormDemo')
  },
  data() {
    return {
      name: "百度",
      website: {
        url: "baidu.com",
        title: "baidu",
        subTitle: "百度一下，你就知道",
      },
      showFormDemo:false,
      // NextTickName: "NextTick",
      newsData: {
        1: {
          type: "text",
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