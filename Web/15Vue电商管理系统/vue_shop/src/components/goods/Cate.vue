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
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddCateDialog">添加分类</el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <tree-table
        class="treeTable"
        :data="catelist"
        :columns="columns"
        show-index
        index-text="#"
        border
        :show-row-hover="false"
        :selection-type="false"
        :expand-type="false"
      >
        <!-- 是否有效 -->
        <template slot="isok" slot-scope="scope">
          <i
            class="el-icon-success"
            v-if="scope.row.cat_deleted === false"
            style="color: lightgreen;"
          ></i>
          <i class="el-icon-error" v-else style="color: red;"></i>
        </template>
        <!-- 排序 -->
        <template slot="order" slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
          <el-tag size="mini" v-else-if="scope.row.cat_level === 1">二级</el-tag>
          <el-tag size="mini" v-else>三级</el-tag>
        </template>
        <!-- 操作 -->
        <template slot="opt" slot-scope="scope">
          <el-button
            type="primary"
            @click="showEditDialog(scope.row.cat_id)"
            icon="el-icon-edit"
            size="mini"
          >编辑</el-button>
          <el-button
            type="danger"
            @click="removeCateById(scope.row.cat_id)"
            icon="el-icon-delete"
            size="mini"
          >删除</el-button>
        </template>
      </tree-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="querInfo.pagenum"
        :page-sizes="[3, 5, 10, 15]"
        :page-size="querInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
    <!-- 添加分类对话框 -->
    <el-dialog title="添加分类" :visible.sync="addDialogVisible" @close="addDialogClosed" width="50%">
      <!-- 添加分类的表单 -->
      <el-form
        :model="addCateForm"
        :rules="addCateFormRules"
        ref="addCateFormRef"
        label-width="100px"
      >
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" prop="cascaderProps">
          <!-- options用来指定数据源 -->
          <!-- props用来指定配置对象 -->
          <el-cascader
            :props="{ expandTrigger: 'hover', checkStrictly : true , value: 'cat_id', label: 'cat_name',children: 'children'}"
            v-model="selsectedKeys"
            :options="parentCateList"
            @change="parentCateChanged"
            clearable
          ></el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCate">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑商品分类信息对话框 -->
    <el-dialog
      title="修改商品分类"
      :visible.sync="editDialogVisible"
      width="50%"
      @close="editDialogClosed"
    >
      <el-form :model="editForm" :rules="editFormCate" ref="editFormRef" label-width="100px">
        <el-form-item label="分类Id">
          <el-input v-model="editForm.cat_id" disabled></el-input>
        </el-form-item>
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="editForm.cat_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editCate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 商品分类的数据列表，默认为空
      catelist: [],
      // 查询条件
      querInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5,
      },
      // 总数据条数
      total: 0,
      // 为table指定列的定义
      columns: [
        {
          label: '分类名称',
          prop: 'cat_name',
        },
        {
          label: '是否有效',
          // 表示，将当前定义为模板列
          type: 'template',
          // 表示当前这一列使用模板名称
          template: 'isok',
        },
        {
          label: '排序',
          // 表示，将当前定义为模板列
          type: 'template',
          // 表示当前这一列使用模板名称
          template: 'order',
        },
        {
          label: '操作',
          // 表示，将当前定义为模板列
          type: 'template',
          // 表示当前这一列使用模板名称
          template: 'opt',
        },
      ],
      //   控制添加分类对话框的状态
      addDialogVisible: false,
      //   添加分类的表单数据对象
      addCateForm: {
        //   将要添加的分类的名称
        cat_name: '',
        // 父级分类的id
        cat_pid: 0,
        // 分类的等级，默认要添加的是1级分类
        cat_level: 0,
      },
      //   添加分类表单验证规则的对象
      addCateFormRules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' },
        ],
      },
      //   父级分类的列表
      parentCateList: [],
      //   指定级联选择器的配置对象
      cascaderProps: {
        value: 'cat_id',
        label: 'cat_name',
        children: 'children',
      },
      // 选中的父级分类的id数组
      selsectedKeys: [],
      // 控制修改用户对话框的显示
      editDialogVisible: false,
      // 查询到的用户信息对象
      editForm: {},
      // 修改表单的验证规则对象
      editFormCate: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' },
        ],
      },
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    //   获取商品列表数据
    async getCateList() {
      const { data: res } = await this.$http.get('categories', {
        params: this.querInfo,
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品列表失败')
      }
      //   console.log(res.data)
      this.catelist = res.data.result
      this.total = res.data.total
    },
    // 监听pagesize改变
    handleSizeChange(newSize) {
      this.querInfo.pagesize = newSize
      this.getCateList()
    },
    // 监听pagenum改变
    handleCurrentChange(newNum) {
      this.querInfo.pagenum = newNum
      this.getCateList()
    },
    // 点击按钮，展示添加分类的对话框
    showAddCateDialog() {
      // 获取父级分类的数据列表
      this.getParentCateList()
      this.addDialogVisible = true
    },
    // 获取父级分类的数据列表
    async getParentCateList() {
      const { data: res } = await this.$http.get('categories', {
        params: { type: 2 },
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取分级分类数据失败')
      }
      // console.log(res.data)
      this.parentCateList = res.data
    },
    // 选择项发生变化触发这个函数
    parentCateChanged() {
      // console.log(this.selsectedKeys)
      // 如果selectedKeys数组中的length大于0，证明选中的父级分类
      // 反之，就说明没有选中任何分类
      if (this.selsectedKeys.length > 0) {
        // 父级分类的id
        this.addCateForm.cat_pid = this.selsectedKeys[this.selsectedKeys.length - 1]
        // 为当前分类的等级赋值
        this.addCateForm.cat_level = this.selsectedKeys.length
      } else {
        // 父级分类的id
        this.addCateForm.cat_name = 0
        // 为当前分类的等级赋值
        this.addCateForm.cat_level = 0
      }
    },
    // 点击按钮，添加新的分类
    addCate() {
      this.$refs.addCateFormRef.validate(async (valid) => {
        if (!valid) return
        const { data: res } = await this.$http.post('categories', this.addCateForm)
        // console.log(res)
        if (res.meta.status !== 201) {
          return this.$message.error('添加分类失败')
        }
        this.$message.success('添加分类成功')
        this.getCateList()
        this.addDialogVisible = false
      })
      // console.log(this.addCateForm)
    },
    // 监听对话框的关闭事件，重置表单数据
    addDialogClosed() {
      this.$refs.addCateFormRef.resetFields()
      this.selsectedKeys = []
      this.addCateForm.cat_level = 0
      this.addCateForm.cat_pid = 0
    },
    // 根据id删除对应的角色信息
    async removeCateById(id) {
      // 弹框删除对应的用户信息
      const confirmResult = await this.$confirm('将删除此商品分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).catch((err) => err)
      // 如果用户确认了删除，则返回为字符串 confirm
      // 如果用户取消了删除，则返回了 cancel
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      // console.log(id)
      const { data: res } = await this.$http.delete('categories/' + id)
      if (res.meta.status !== 200) {
        return this.$message.error('删除商品分类失败:' + res.meta.msg)
      }
      this.$message.success('删除成功')
      this.getCateList()
    },
    // 点击编辑显示编辑用户信息对话框
    async showEditDialog(id) {
      // console.log(id)
      const { data: res } = await this.$http.get('categories/' + id)
      // console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error('查询商品分类信息失败:' + res.meta.msg)
      }
      this.editForm = res.data
      // console.log(this.editForm.cat_id)
      this.editDialogVisible = true
    },
    // 监听编辑商品分类的对话框的关闭事件
    editDialogClosed() {
      this.$refs.editFormRef.resetFields()
    },
    // 点击确认提交编辑商品分类事件
    editCate() {
      // console.log('ok')
      this.$refs.editFormRef.validate(async (valid) => {
        if (!valid) return
        // 发起修改商品分类信息的数据请求
        const { data: res } = await this.$http.put('categories/' + this.editForm.cat_id, {
          cat_name: this.editForm.cat_name,
        })
        // console.log(res)
        if (res.meta.status !== 200) {
          return this.$message.error('编辑商品分类失败:' + res.meta.msg)
        }
        this.editDialogVisible = false
        // 重新获取角色的列表
        this.getCateList()
        this.$message.success('编辑商品分类成功')
      })
    },
  },
}
</script>
<style lang="less" scoped>
.treeTable {
  margin-top: 15px;
}
.el-cascader {
  width: 100%;
}

// 取消级联小圆点
.el-cascader-panel .el-radio {
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  top: 10px;
  right: 10px;
}
.el-cascader-panel .el-radio__input {
  visibility: hidden;
}
.el-cascader-panel .el-cascader-node__postfix {
  top: 10px;
}
</style>
