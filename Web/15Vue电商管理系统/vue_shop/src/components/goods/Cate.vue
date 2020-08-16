<template>
    <div>
        <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
         <!-- 添加分类区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加分类</el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <tree-table :data="catelist" :columns="columns" show-index index-text="#" border :show-row-hover="false" :selection-type="false" :expand-type="false"></tree-table>
      <!-- 分页区域 -->
    </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // 商品分类的数据列表，默认为空
            catelist:[],
            // 查询条件
            querInfo:{
                type:3,
                pagenum:1,
                pagesize:5
            },
            // 总数据条数
            total:0,
            // 为table指定列的定义
            columns:[
                {
                    label:'分类名称',
                    prop:'cat_name'
                }
            ]
        }
    },
    created() {
        this.getCateList()
    },
    methods: {
        async getCateList(){
            const {data:res} = await this.$http.get('categories', {params: this.querInfo})
            if(res.meta.status !== 200){
                return this.$message.error("获取商品列表失败");
            }
            console.log(res.data)
            this.catelist = res.data.result
            this.total = res.data.total
        }
    },
}
</script>
<style lang="less" scoped>

</style>