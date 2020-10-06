<template>
  <div>
    <MyTree
      :data.sync="data"
      v-if="data.length"
      :fileDrop="fileDrop"
      :diectoryDrop="diectoryDrop"
      :delete="deleteFn"
      :rname="rname"
    ></MyTree>
  </div>
</template>

<script>
import { getTreeList } from "../api";
import MyTree from "./MyTree.vue";
export default {
  data() {
    return { data: [], fileDrop: [{ text: "rm", value: "删除文件" }],
    diectoryDrop:[
      {text:'rn',value:'修改名字'},
      {text:'rm',value:'删除文件夹'},
    ] };
  },
  components: {
    MyTree,
  },
  methods: {
    rname(id,newName){
      console.log(id,newName);
    },
    deleteFn(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve();
        },3000)
      })
    }
  },
  async mounted() {
    let { data } = await getTreeList();
    // console.log(data);
    // 1 扁平的数据如何变成 多层数据 递归数据
    // 如果是父文件夹就有parent属性
    data.parent.forEach((p) => (p.type = "parent"));
    this.data = [...data.parent, ...data.child];
    // {1:{name:"文件夹1",pid:0,id:1}}
    console.log(this.data)
  },
};
</script>