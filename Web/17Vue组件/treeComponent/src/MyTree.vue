<template>
  <el-tree
    :data="allData"
    default-expand-all
    :render-content="render"
    :expand-on-click-node="false"
  ></el-tree>
</template>
<script>
import _ from "lodash";
export default {
  props: {
    delete:Function,
    data: {
      type: Array,
      default: () => [],
    },
    fileDrop:Array,
    directoryDrop:Array
  },
  data() {
    return {
      allData: [],
      currentId:'',//默认当前点击了谁的修改
      currentContent:''//当前编辑的内容
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
    isParent(data) {
      return data.type == "parent";
    },
    handleRename(data){//重命名
      this.currentId = data.name;
      this.currentId = data.id;
    },
    remove(id){//删除页面中的内容
      let list = _.cloneDeep(this.data);
      list = list.filter(l => l.id !== id);
      // .sync 可以同步数据
      this.$emit('update:data',list);//告诉父亲同步数据
      this.$message({
        type:'success',
        message:'删除成功!'
      })
    },
    handleRemove(data){//删除文件
      this.$confirm(`此操作将永久删除该文件,${data.name} 是否继续?`, '提示', {
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(()=>{
        //不能直接将数据删除 需要调用用户的删除方法
        //如果用户传递了delete方法 可以直接调用
        this.delete?this.delete(data.id).then(()=>{
          this.remove(data.id)
        }):this.remove(data.id);            
        //没有直接删除即可
      }).catch(()=>{
        this.$message({
          type:'info',
          message:'已取消删除'
        })
      })
    },
    handleCommand(data,value){
      if(value === 'rn'){
        this.handleRename(data);
      }else if(value === 'rm'){
        this.handleRemove(data);
      }
    },
    canncel(){
      this.currentId = '';
    },
    ok(data){
      let list = _.cloneDeep(this.data);
      list = list.filter(l => l.id !== id);
      item.name = this.currentContent;
      this.currentId = "";
      // .sync 可以同步数据
      this.$emit('update:data',list);//告诉父亲同步数据
      this.$message({
        type:'success',
        message:'修改成功!'
      })
    },
    handleInput(v){
      this.currentContent = v;
    },
    renderContent(h, { node, data}) {
      //   console.log(data.type);
      let list = this.isParent(data)?this.directoryDrop:this.fileDrop;
      return (
        <div style={{width:'100%'}}>
          {this.isParent(data) ? 
         node.expanded?<i class="el-icon-folder-opened"></i>:
            <i class="el-icon-folder"></i>: 
            <i class="el-icon-document"></i>
          }
          {data.id === this.currentId ? <el-input value ={this.currentContent} 
          on-input={this.handleInput}></el-input>:data.name}
          {data.id !== this.currentId ? 
          <el-dropdown placement="bottom-start" trigger="click" on-command={this.handleCommand.bind(this,data)}>
              <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon-right" > </i></span>
              <el-dropdown-menu slot="dropdown">
                  {list.map(item=>{
                    <el-dropdown-item command={item.text}>{item.value}</el-dropdown-item>
                  })}
              </el-dropdown-menu>
          </el-dropdown>:<span style={{float:'right'}}>
              <el-button type="text" on-click={this.ok.bind(this,data)}>确认</el-button>
              <el-button type="text" on-click={this.canncel}>取消</el-button>
              </span>
              }
        </div>
      );
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
      // console.log(this.addData);
    },
  },
  mounted() {
    this.transformData();
  },
};
</script>
<style lang="css">
  .el-tree{
    margin-top: 25px;
    width: 50%;
  }
  .el-dropdown{
    float: right;
  }
  .el-tree .el-tree-node__content{
    height: 32px;
  }
  .el-tree .el-input{
    width: 50%;
  }
</style>