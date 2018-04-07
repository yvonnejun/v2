<template>
  <div class="usermanage-wrap">
    <!-- elementui示例 -->
    <!--1、layout24列布局-->
    <!-- 添加用户表单 -->
    <el-row>
      <el-col :span="18" >
        <h2>添加用户</h2>
        <el-form ref="form" :model="form" label-width="80px" label-position="right">
            <el-form-item 
              label="用户名"
              prop="name"
              :rules="[
                { required: true, message: '用户名不能为空'},
              ]"
            >
              <el-input v-model="form.name" ></el-input>
            </el-form-item>
            <el-form-item 
              label="年龄"
              prop="age"
              :rules="[
                { required: true, message: '年龄不能为空'},
                { type: 'number', message: '年龄必须为数字值'}
              ]"
            >
              <el-input type="age" v-model.number="form.age" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item 
              label="邮箱"
              prop="email"
              :rules="[
                { required: true, message: '邮箱不能为空'},
                { type: 'email', message: '邮箱必须为xx@xx.com格式'}
              ]"
            >
              <el-input v-model.email="form.email" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('form')">添加用户</el-button>
              <el-button @click="resetForm('form')">取消</el-button>
            </el-form-item>
        </el-form>
        <!-- 3个提示框 -->
        <el-alert
          title="添加成功"
          class="success-alert"
          type="success"
          show-icon
          v-if="successShow"
          :class="{'slidedown': successShow}">
        </el-alert>
       
        <el-alert
          title="添加失败"
          class="success-alert"
          type="error"
          show-icon
          v-if="errorShow"
          :class="{'slidedown': errorShow}">
        </el-alert>

         <el-alert
          title="删除成功"
          class="success-alert"
          type="success"
          show-icon
          v-if="deleteShow"
          :class="{'slidedown': deleteShow}">
        </el-alert>

      </el-col>
    </el-row>
    <!-- 用户列表 -->
    <el-row>
      <el-col :span="18">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="年龄"
              width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.age }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="姓名"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>邮件: {{ scope.row.email }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 用户登录等子路由模块 -->
    <router-view></router-view>
    <!-- 编辑模态框 -->
    <el-dialog title="用户信息" :visible.sync="dialogFormVisible">
      <el-form :model="editForm">
        <el-form-item 
          label="用户名"
          :label-width="formLabelWidth"
          prop="name"
          :rules="[
            { required: true, message: '用户名不能为空'},
          ]">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item 
          label="年龄"
          :label-width="formLabelWidth"
          prop="age"
          :rules="[
            { required: true, message: '年龄不能为空'},
            { type: 'number', message: '年龄必须为数字值'}
          ]">
          <el-input type="age" v-model.number="editForm.age" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item 
          label="邮箱"
          :label-width="formLabelWidth"
          prop="email"
          :rules="[
            { required: true, message: '邮箱不能为空'},
            { type: 'email', message: '邮箱必须为xx@xx.com格式'}
          ]">
          <el-input v-model.email="editForm.email" auto-complete="off"></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelhandle">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
var that,
    rowIndex = -1,
    editFormClone = {};
export default { 
  name: 'usermanage',
  data () {
    return {
      form: {
        age: '',
        name: '',
        email: '',
      },
      editForm: {
        age: '',
        name: '',
        email: '',
      },
      formLabelWidth: '80px',
      dialogTableVisible: false,
      dialogFormVisible: false,
      successShow: false,
      errorShow: false,
      deleteShow: false,
      tableData: []
    }
  },
  methods: {
    onSubmit(formName) {
      that = this; 
      console.log('submit!');
      
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('提交成功!');
          this.$data.tableData.push({
              age: this.$data.form.age,
              name: this.$data.form.name,
              email: this.$data.form.email
          });
          this.$data.successShow = true;
          setTimeout(function () {
            that.$data.successShow = false;
          }, 2000);
        } else {
          this.$data.errorShow = true;
          setTimeout(function () {
            that.$data.errorShow = false;
          }, 2000);
          console.log('error submit!!');
          return false;
        }
      });
     
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleEdit(index, row) {
      console.log(index, row);
      editFormClone = Object.assign({}, this.$data.tableData[index]); // Object.assign原生js的浅拷贝方法--至少做到了拷贝后的数据不会随着双绑的数据改变而改变
      
      this.$data.editForm = this.$data.tableData[index];
      rowIndex = index;
      this.$data.dialogFormVisible = true;
    },
    cancelhandle() {
      console.log(editFormClone);
      this.$data.tableData[rowIndex] = editFormClone; // 全局传递索引的rowIndex来控制数据对象的选取，并重新赋值
      console.log(this.$data.tableData[rowIndex]);
      // this.$data.form = editFormClone;
      this.$data.dialogFormVisible = false;
    },
    handleDelete(index, row) {
      var self = this;
      console.log(index, row);
      this.$data.tableData.splice(index, 1);
      this.$data.deleteShow = true;
      setTimeout(function () {
        self.$data.deleteShow = false;
      }, 2000);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.usermanage-wrap {
  width: 100%;
  min-height: 660px;
}
.success-alert {
  position: absolute;
  top: -44px;
  transition: all 0.4s linear 0s;
}
.slidedown {
  top: 0px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
}
.el-table th {
  text-align: center!important;
}
</style>
