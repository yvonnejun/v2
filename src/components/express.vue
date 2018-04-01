<template>
  <div class="attr-wrap">
    <!-- vue表达式{{}}示例:貌似不用cloak也可等待单线程加载完后才加载数据，不会出现双大括号显示在页面上的bug -->
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>{{msg}}</h1>
    <el-button
      type="primary"
      @click="openFullScreen"
      v-loading.fullscreen.lock="fullscreenLoading">
      指令方式
    </el-button>
    <el-button
      type="primary"
      @click="openFullScreen2">
      服务方式
    </el-button>     

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
        msg: '表达式示例',
        fullscreenLoading: false,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading2: true
      }
  },
  methods: {
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  },
  created() {
    alert('DOM创建完成但还未加载时'); // DOM创建后，加载前,实测双大括号也不会突兀的显示出来，会等到加载完DOM树后才显示
  },
  mounted() { // 生命周期--DOM加载后
    // alert('初始化加载');
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    setTimeout(() => {
      loading.close();
    }, 2000);
    setTimeout(() => {
      this.$data.loading2 = false;
    }, 4000);
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
