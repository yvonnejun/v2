
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.demo-wrap {
  width: 100%;
}

</style>

<template>
  <div class="demo-wrap">

    <div id="main2"  :style="{width:'864px',height:'231px'}"></div>
  </div>
</template>

<script>
import Vue from 'vue'

var echarts = require('echarts');
export default { 
  name: 'demo', // 注意关键字最好不要用来命名
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {

    }
  },
  computed: {
    arr2: function () {
      var temp = [];
      // 或者用箭头函数
      this.arr.forEach( val => {
        if (val.indexOf(self.name) != -1) {
          temp.push(val);
        }
      });
      return temp;
    }
  },
  methods: {
    doClick () {

    }
  },
  directives: {

  },
  created () {

  },
  mounted () {
      var myChart = echarts.init(document.getElementById('main2'));
      myChart.setOption({
          title: { text: 'ECharts 入门示例' },
          tooltip: {},
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
  },
  filters: {
    
  }
}
// Vue.filter('number', (data, n) => {return data.toFixed(n) * 1000000 / 1000000}); // 第一个data参数是|号前的具体数据对象，第二个n接受格式化函数的传参，js的小数位不稳定所以要在toFixed(n)方法后乘上1百万/1百万来稳定浮点数

</script>

