<template>
  <div class="login-wrap">
    <!-- elementui示例 -->
    <!--1、layout24列布局-->
    <!-- rest风格传参 -->
    <h2>{{$route.params}}</h2>
    <!-- 用户登录 -->
    <el-row>
      <el-col :span="18">
        <h2>用户登录</h2>
        <el-form :model="form" status-icon :rules="rules2" ref="form" label-width="100px" class="demo-ruleForm">
          <el-form-item 
              label="用户名"
              prop="name"
              :rules="[
                { required: true, message: '用户名不能为空'},
              ]">
              <el-input v-model="form.name" ></el-input>
              <!-- <el-input v-model="$route.params.username" ></el-input> -->
          </el-form-item>
          <el-form-item 
              label="密码"
              prop="pass" 
              :rules="[
                { required: true, message: '密码不能为空'},
              ]">
            <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="onLogin('form')">登录</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import router from '../router'
var that,
    rowIndex = -1,
    editFormClone = {};
export default { 
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form: {
        // name: '',
        name: this.$route.params.username, // 在vue单组件文件中，所有实例都是用this来调用
        // pass: '',
        pass: this.$route.params.password,
      },
      formLabelWidth: '80px',
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        // checkPass: [
        //   { validator: validatePass2, trigger: 'blur' }
        // ]
      }
    }
  },
  methods: {
    onLogin(formName) {
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
.login-wrap {
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
