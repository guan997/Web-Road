<template>
  <el-tree
    :data="allData"
    default-expand-all
    :render-content="render"
  ></el-tree>
</template>
<script>
import _ from "lodash";
export default {
  props: {
    data: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      allData: [],
    };
  },
  watch: {
    //需要监控父组件传递的data属性，如果有更新重新渲染
    data() {
      //数据更新后重新渲染
      this.transformData();
    },
  },
  methods: {
      isParent(data){
          return data.type === 'parent';
      },
    render(h, { node, data, store }) {
    //   console.log(data.type);
      return(<div>
      {
          this.isParent(data)? <i class="el-icon-folder"></i>:
          <i class="el-icon-document"></i>
      }{data.name}</div>);
    },
    transformData() {
      //   需要根据数据进行克隆，克隆后的数据进行操作
      let AllData = _.cloneDeep(this.data);
      // 目的就是防止在子组件中操作我们父组件的数据
      let treeMapList = AllData.reduce((memo, current) => {
        // current.label = current.name;
        memo[current["id"]] = current;
        return memo;
      }, {});
      console.log(treeMapList);
      // vue里vuex源码靠的就是reduce
      let result = AllData.reduce((arr, current) => {
        // 父id
        let pid = current.pid;
        let parent = treeMapList[pid];
        //   是否有父id
        if (parent) {
          //   添加子文件或文件夹
          parent.children
            ? parent.children.push(current)
            : (parent.children = [current]);
          //   没有父id
        } else if (pid === 0) {
          //这是跟文件夹
          arr.push(current);
        }
        return arr;
      }, []);
      this.addData = result;
      console.log(this.addData);
    },
  },
  mounted() {
    this.transformData();
  },
};
</script>