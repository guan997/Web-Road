<template>
  <div>
    <MyTree :data="data" v-if="data.length"></MyTree>
  </div>
</template>


<script>
import { getTreeList } from "./api";
import MyTree from "./MyTree.vue";
export default {
  data() {
    return { data: [] };
  },
  components: {
    MyTree,
  },
  async mounted() {
    let { data } = await getTreeList();
    console.log(data);
    // 1 扁平的数据如何变成 多层数据 递归数据
    // 如果是父文件夹就有parent属性
    data.parent.forEach((p) => (p.type = "parent"));
    this.data = [...data.parent, ...data.child];
    // {1:{name:"文件夹1",pid:0,id:1}}
  },
};
</script>