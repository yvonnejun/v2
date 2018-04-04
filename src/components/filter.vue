<template>
  <div class="content-wrap">
    <!--个位数前置加0-->
    <div>{{9 | addZero}}</div>
    <!--保留两位小数-->
    <div>{{123.31258 | number(2)}}</div>
    <!--日期格式化-->
    <div>{{1402233166999 | formatDate}}</div>
    <!--个位数前置加一个$美元符-->
    <div>{{6 | addDollar}}</div>
    <!--保留4位小数-->
    <div>{{123.31258 | numberFour(4)}}</div>
    <!--日期格式化-->
    <div>{{1402233166999 | formatDateTime}}</div>
    <el-button
    type="primary"
    @click="doClick">
    click me
    </el-button>  
  </div>
</template>

<script>
import Vue from 'vue'
export default { 
  name: 'filters', // 注意关键字最好不要用来命名
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      
    }
  },
  methods: {
    doClick () {
      
    }
  },
  created () {

  },
  mounted () {

  },
  filters: {
    addDollar (data) {
      return data < 10 ? '$' + data : '￥' + data;
    },
    numberFour (data, n) {
      return data.toFixed(n) * 1000000 / 1000000;
    },
    formatDateTime (data) {
      let d = new Date(data);
      return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    },
  }
}
Vue.filter('addZero', data => {return data < 10 ? '0' + data : data});
Vue.filter('number', (data, n) => {return data.toFixed(n) * 1000000 / 1000000}); // 第一个data参数是|号前的具体数据对象，第二个n接受格式化函数的传参，js的小数位不稳定所以要在toFixed(n)方法后乘上1百万/1百万来稳定浮点数
Vue.filter('formatDate', data => {
  let d = new Date(data); // 注意这里的data参数必须是时间戳形式，否则无效
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.content-wrap {
  width: 100%;
  min-height: 760px;
}

</style>
