<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <!-- 搜索和添加商品 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getGoodsList">
            <el-button slot="append" icon="el-icon-search" @click="getGoodsList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="goAddpage">添加商品</el-button>
        </el-col>
      </el-row>
    </el-card>

    <!-- table表格 -->
    <el-table :data="goodsList" border stripe>
      <el-table-column label="#" type="index"></el-table-column>
      <el-table-column label="商品名称" prop="goods_name"></el-table-column>
      <el-table-column label="商品价格(元)" prop="goods_price" width="106px"></el-table-column>
      <el-table-column label="商品重量" prop="goods_weight" width="95px"></el-table-column>
      <el-table-column label="创建时间" prop="add_time" width="160px">
        <template slot-scope="scope">{{scope.row.add_time | dateFormat}}</template>
      </el-table-column>
      <el-table-column label="操作" width="180px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="showEditDialog(scope.row.goods_id)"
            icon="el-icon-edit"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteList(scope.row.goods_id)"
            icon="el-icon-delete"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[5, 8, 15, 20]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      background
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //   商品列表
      goodsList: [],
      //   总数据条数
      total: 0,
      //   查询参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      //   当前页码
      currentPage: 0
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    //   根据分页获取对应的商品列表
    async getGoodsList() {
      const { data: res } = await this.$http.get('goods', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品列表失败:' + res.meta)
      }
      // this.$message.success('获取商品列表成功')
      this.goodsList = res.data.goods
      this.total = res.data.total
      //   console.log(this.goodsList)
      //   console.log(res)
    },
    // 每页显示个数的选项
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getGoodsList()
    },
    // 页码大小
    handleCurrentChange(newNum) {
      this.queryInfo.pagenum = newNum
      this.getGoodsList()
    },
    showEditDialog(id) {},
    // 删除商品事件
    async deleteList(id) {
      // 弹框删除对应的参数信息
      const confirmResult = await this.$confirm(
        '将删除此商品信息, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch((err) => err)
      // 如果用户确认了删除，则返回为字符串 confirm
      // 如果用户取消了删除，则返回了 cancel
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      const { data: res } = await this.$http.delete(`goods/${id}`)
      if (res.meta.status !== 200) {
        return this.$message.error('删除商品失败')
      }
      this.$message.success('删除商品成功')
      this.getGoodsList()
    },
    // 商品添加
    goAddpage() {
      this.$router.push('/goods/add')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
