<template>
  <div class="usermanage-wrap">
    <!-- elementui示例 -->
    <!--1、layout24列布局-->
    <el-row>
      <el-col :span="24">
        <h2>添加用户</h2>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">添加用户</el-button>
              <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <el-alert
          title="成功提交"
          class="success-alert"
          type="success"
          show-icon
          v-if="form.successShow"
          :class="{'slidedown': form.successShow}">
        </el-alert>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
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
    
  </div>
</template>

<script>
var that;
export default { 
  name: 'usermanage',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        successShow: false,
        desc: ''
      },
      tableData: [{
          age: '25',
          name: '王小虎',
          email: '962308611@qq.com'
        }, {
          age: '25',
          name: '王小虎',
          email: '962308611@qq.com'
        }, {
          age: '25',
          name: '王小虎',
          email: '962308611@qq.com'
        }, {
          age: '25',
          name: '王小虎',
          email: '962308611@qq.com'
        }]
    }
  },
  methods: {
    onSubmit() {
      that = this; 
      console.log('submit!');
      this.$data.form.successShow = true;
      setTimeout(function () {
        that.$data.form.successShow = false;
        console.log('hide');
      }, 2000);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.elementview-wrap {
  width: 100%;
  min-height: 760px;
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
  text-align: center;
}
</style>
