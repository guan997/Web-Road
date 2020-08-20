<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>参数列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <!-- 警示区域 -->
      <el-alert :closable="false" title="注意:只允许为第三级分类设置相关参数！" type="warning" show-icon></el-alert>
      <!-- 选择商品分类区域 -->
      <el-row class="cat_opt">
        <el-col prop="cascaderProps">
          <span>选择商品分类：</span>
          <!-- 选择商品分类的级联选择框 -->
          <el-cascader
            :props="{ expandTrigger: 'hover', checkStrictly : true , value: 'cat_id', label: 'cat_name',children: 'children'}"
            v-model="selsectedKeys"
            :options="cateList"
            @change="cascaderCateChanged"
            clearable
          ></el-cascader>
        </el-col>
      </el-row>
    </el-card>
    <!-- tabs栏区域 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="动态参数" name="many">
        <!-- 添加参数的按钮 -->
        <el-button
          type="primary"
          size="mini"
          :disabled="isBtnDisabled"
          @click="addDialogVisible=true"
        >添加参数</el-button>
        <!-- 动态参数表格 -->
        <el-table :data="manyTableData" border stripe>
          <!-- 展开行 -->
          <el-table-column type="expand">
            <template slot-scope="scope">
              <!-- 循环渲染tag标签 -->
              <el-tag
                closable
                v-for="(item,i) in scope.row.attr_vals"
                :key="i"
                @close="handleClose(i,scope.row)"
              >{{item}}</el-tag>
              <!-- 添加按钮 -->
              <el-input
                class="input-new-tag"
                v-if="scope.row.inputVisible"
                v-model="scope.row.inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm(scope.row)"
                @blur="handleInputConfirm(scope.row)"
              ></el-input>
              <el-button
                v-else
                class="button-new-tag"
                size="small"
                @click="showInput(scope.row)"
              >+ New Tag</el-button>
            </template>
          </el-table-column>
          <!-- 索引列 -->
          <el-table-column type="index" label="#"></el-table-column>
          <el-table-column label="参数名称" prop="attr_name"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="showEditDialog(scope.row.attr_id)"
                icon="el-icon-edit"
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteParams(scope.row.attr_id)"
                icon="el-icon-delete"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="静态属性" name="only">
        <!-- 添加参数的按钮 -->
        <el-button
          type="primary"
          size="mini"
          :disabled="isBtnDisabled"
          @click="addDialogVisible=true"
        >添加属性</el-button>
        <!-- 静态属性表格 -->
        <el-table :data="onlyTableData" border stripe>
          <!-- 展开行 -->
          <el-table-column type="expand">
            <template slot-scope="scope">
              <!-- 循环渲染tag标签 -->
              <el-tag
                closable
                v-for="(item,i) in scope.row.attr_vals"
                :key="i"
                @close="handleClose(i,scope.row)"
              >{{item}}</el-tag>
              <!-- 添加按钮 -->
              <el-input
                class="input-new-tag"
                v-if="scope.row.inputVisible"
                v-model="scope.row.inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm(scope.row)"
                @blur="handleInputConfirm(scope.row)"
              ></el-input>
              <el-button
                v-else
                class="button-new-tag"
                size="small"
                @click="showInput(scope.row)"
              >+ New Tag</el-button>
            </template>
          </el-table-column>
          <!-- 索引列 -->
          <el-table-column type="index" label="#"></el-table-column>
          <el-table-column label="属性名称" prop="attr_name"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="showEditDialog(scope.row.attr_id)"
                icon="el-icon-edit"
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteParams(scope.row.attr_id)"
                icon="el-icon-delete"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- 添加参数的对话框 -->
    <el-dialog
      :title="'添加'+titleText"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <!-- 添加参数的表单 -->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="100px">
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="addForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addParams">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改参数的对话框 -->
    <el-dialog
      :title="'修改'+titleText"
      :visible.sync="editDialogVisible"
      width="50%"
      @close="editDialogClosed"
    >
      <!-- 修改参数的表单 -->
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="100px">
        <el-form-item :label="titleText" prop="attr_name">
          <el-input v-model="editForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editParams">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 商品分类数据
      cateList: [],
      //   指定级联选择器的配置对象
      cascaderProps: {
        value: 'cat_id',
        label: 'cat_name',
        children: 'children',
      },
      // 级联选择框绑定的数组
      selsectedKeys: [],
      // 被激活的页签的名称
      activeName: 'many',
      // 动态参数的数据
      manyTableData: [],
      // 静态属性的数据
      onlyTableData: [],
      // 控制添加参数对话框的状态
      addDialogVisible: false,
      // 添加参数的表单数据对象
      addForm: {
        attr_name: '',
      },
      // 添加参数的属性规则
      addFormRules: {
        attr_name: [
          { required: true, message: '请输入参数名称', trigger: 'blur' },
        ],
      },
      // 修改添加参数对话框的状态
      editDialogVisible: false,
      // 修改参数的表单数据对象
      editForm: {
        attr_name: '',
      },
      // 修改参数的属性规则
      editFormRules: {
        attr_name: [
          { required: true, message: '请输入参数名称', trigger: 'blur' },
        ],
      },
      // 控制添加文本框按钮显示和隐藏
      inputVisible: false,
      // 文本框的值
      inputValue: '',
    }
  },
  created() {
    // 获取商品分类数据
    this.getCateList()
  },
  methods: {
    // 获取商品分类数据
    async getCateList() {
      const { data: res } = await this.$http.get('categories')
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类失败')
      }
      this.cateList = res.data
      // console.log(this.cateList)
    },
    // 级联选择框选中项变化，触发这个函数
    cascaderCateChanged() {
      this.getParamsData()
    },
    // tab页点击事件的处理函数
    handleClick() {
      // console.log(this.activeName)
      this.getParamsData()
    },
    // 获取参数的列表数据
    async getParamsData() {
      // 证明选中的不是三级分类
      if (this.selsectedKeys.length !== 3) {
        this.selsectedKeys = []
        // 对tab进行清空，防止无数据的项出现上一次的数据
        this.manyTableData = []
        this.onlyTableData = []
        return
      }
      // 证明选中是三级分类
      // console.log(this.selsectedKeys)
      // 根据所选分类的id，和当前所处的面板，获取对应的参数
      const { data: res } = await this.$http.get(
        `categories/${this.cateId}/attributes`,
        {
          params: {
            sel: this.activeName,
          },
        }
      )
      if (res.meta.status !== 200) {
        return this.$message.error('获取参数列表失败')
      }
      // 分割字符串
      res.data.forEach((item) => {
        // 判断字符串数组是否为空
        item.attr_vals = item.attr_vals ? item.attr_vals.split(' ') : []
        // 为每一行都添加inputValue
        //  控制文本框的显示和隐藏
        item.inputVisible = false
        // 文本框中输入的值
        item.inputValue = ''
      })
      // console.log(res.data)
      if (this.activeName === 'many') {
        this.manyTableData = res.data
      } else {
        this.onlyTableData = res.data
      }
    },
    // 监听添加参数对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields()
    },
    // 点击确认按钮添加参数事件
    addParams() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return
        const { data: res } = await this.$http.post(
          `categories/${this.cateId}/attributes`,
          {
            attr_name: this.addForm.attr_name,
            attr_sel: this.activeName,
          }
        )
        // console.log(res)
        if (res.meta.status !== 201) {
          return this.$message.error('参数列表添加失败')
        }
        this.$message.success('参数列表添加成功')
        this.addDialogVisible = false
        this.getParamsData()
      })
    },
    // 点击显示修改参数的对话框显示
    async showEditDialog(attr_id) {
      const { data: res } = await this.$http.get(
        `categories/${this.cateId}/attributes/${attr_id}`,
        {
          params: {
            sel: this.activeName,
          },
        }
      )
      if (res.meta.status !== 200) {
        return this.$message.error('获取参数信息失败')
      }
      // console.log(res)
      this.editForm = res.data
      this.editDialogVisible = true
    },
    // 监听修改参数的对话框的关闭事件
    editDialogClosed() {
      this.$refs.editFormRef.resetFields()
    },
    // 点击确认按钮修改参数事件
    editParams() {
      this.$refs.editFormRef.validate(async (valid) => {
        if (!valid) return
        const { data: res } = await this.$http.put(
          `categories/${this.cateId}/attributes/${this.editForm.attr_id}`,
          {
            attr_name: this.editForm.attr_name,
            attr_sel: this.activeName,
          }
        )
        if (res.meta.status !== 200) {
          return this.$message.error('参数信息修改失败')
        }
        // console.log(res)
        this.$message.success('参数信息修改成功')
        this.editDialogVisible = false
        this.getParamsData()
      })
    },
    // 根据id删除参数信息
    async deleteParams(attr_id) {
      // 弹框删除对应的参数信息
      const confirmResult = await this.$confirm(
        '将删除此参数信息, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      ).catch((err) => err)
      // 如果用户确认了删除，则返回为字符串 confirm
      // 如果用户取消了删除，则返回了 cancel
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      // 删除的业务逻辑
      const { data: res } = await this.$http.delete(
        `categories/${this.cateId}/attributes/${attr_id}`
      )
      if (res.meta.status !== 200) {
        return this.$$message.error('删除对应参数信息失败')
      }
      this.$message.success('删除成功')
      this.getParamsData()
    },
    // 文本框失去焦点，或按下enter都会触发
    async handleInputConfirm(row) {
      if (row.inputValue.trim().length === 0) {
        row.inputValue = ''
        row.inputVisible = false
        return
      }
      // 如果没有return，则证明用户输入正确，需要进行一定处理
      // 把文本框的inputValue值添加到后台
      row.attr_vals.push(row.inputValue.trim())
      row.inputValue = ''
      row.inputVisible = false
      this.saveAttrVals(row)
    },
    // 将对attr_vals的操作，保存到数据库
    async saveAttrVals(row) {
      const { data: res } = await this.$http.put(
        `categories/${this.cateId}/attributes/${row.attr_id}`,
        {
          attr_name: row.attr_name,
          attr_sel: row.attr_sel,
          attr_vals: row.attr_vals.join(' '),
        }
      )
      if (res.meta.status !== 200) {
        return this.$message.error('修改参数项失败')
      }
      this.$message.success('修改参数项成功')
    },
    // 点击按钮，展示文本框
    showInput(row) {
      row.inputVisible = true
      // 让文本框自动获取焦点
      // $nextTick方法的作用：单页面上元素被重新渲染之后，会指定回调函数中的代码
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    // 文本框删除事件
    handleClose(i, row) {
      row.attr_vals.splice(i, 1)
      this.saveAttrVals(row)
    },
  },
  computed: {
    // 如果tab栏按钮需要被禁用，则返回true
    isBtnDisabled() {
      if (this.selsectedKeys.length !== 3) {
        return true
      }
      return false
    },
    // 当前选中的三级分类的ID
    cateId() {
      if (this.selsectedKeys.length === 3) {
        return this.selsectedKeys[2]
      }
      return null
    },
    // 动态计算标题的文本
    titleText() {
      if (this.activeName == 'many') {
        return '动态参数'
      }
      return '静态属性'
    },
  },
}
</script>
<style lang="less" scoped>
.cat_opt {
  margin: 15px 0;
}
.input-new-tag {
  width: 120px;
}
</style>