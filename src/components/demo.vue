<template>
  <div class="demo-wrap">

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
  name: 'demo', // 注意关键字最好不要用来命名
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {

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

  },
  filters: {
    
  }
}
// Vue.filter('number', (data, n) => {return data.toFixed(n) * 1000000 / 1000000}); // 第一个data参数是|号前的具体数据对象，第二个n接受格式化函数的传参，js的小数位不稳定所以要在toFixed(n)方法后乘上1百万/1百万来稳定浮点数

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.demo-wrap {
  width: 100%;
}

</style>
