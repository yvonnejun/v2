<template>
  <div class="attr-wrap">
    <!-- vue：axios示例 -->  
    <el-button
      type="primary"
      @click="send">
      服务方式
    </el-button>  
    <!-- loading表格 -->
    <el-table
      v-loading="loading2"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(192, 192, 192, 0.6)"
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
import Vue from 'vue'
export default { 
  name: 'events',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
        tableData: [],
        loading2: true
      }
  },
  methods: {
    send () {
      console.log(this.$api);
      this.axios({
          method:"get",
          // url:'/static/mock/users/users.json',
          url: this.$api.API.USERS.getUsers,
          params:{
              // firstName:"Fred",
              // lastName:"Flintstone"
          }
      }).then(res => {
        console.log(res);
        setTimeout(() => {  
          this.$data.loading2 = false;
          this.$data.tableData = res.data;
        }, 500);
        // this.$data.loading2 = false;
      }).catch(err => {
        debugger
        console.log(err);
      });
    }
  },
  created () {
    // console.log(this.$api);
  },
  mounted () { // 生命周期--DOM加载后
    Vue.nextTick(() => {
      // console.log(this.$api);
      const params = {};
      // this.$api.ajax('/static/mock/users/users.json', 'get', params).then(res => {
      this.$api.ajax(this.$api.API.USERS.getUsers, 'get', params).then(res => {
        console.log(res.data);
         setTimeout(() => {  
            this.$data.loading2 = false;
            this.$data.tableData = res.data;
          }, 500);
      }).catch(err => {
        console.log(err);
      });
    });
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
