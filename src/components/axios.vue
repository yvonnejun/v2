<template>
  <div class="attr-wrap">
    <!-- vue：axios示例 -->  

    <!-- loading表格 -->
    <el-table
      v-loading="loading2"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(92, 92, 92, 0.7)"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default { 
  name: 'events',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
        // tableData: [{
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }],
        tableData: [],
        loading2: true
      }
  },
  methods: {
    send() {
      axios({
          method:"get",
          url:'/static/mock/users.json',
          params:{
              // firstName:"Fred",
              // lastName:"Flintstone"
          }
      }).then(res => {
        console.log(res);
        this.$data.tableData = res;
        setTimeout(() => {
          this.$data.loading2 = false;
        }, 1000);
        // this.$data.loading2 = false;
      }).catch(err => {
        debugger
        console.log(err);
      });
    }
  },
  mounted() { // 生命周期--DOM加载后
    // setTimeout(() => {
    //   this.$data.loading2 = false;
    // }, 2000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.attr-wrap {
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

</style>
