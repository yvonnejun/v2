<template>
  <div class="demo-wrap">

    <button class="layui-btn layui-btn-normal">一个标准的按钮</button>  
    <div class="layui-carousel" id="test1">
      <div carousel-item>
        <div>条目1</div>
        <div>条目2</div>
        <div>条目3</div>
        <div>条目4</div>
        <div>条目5</div>
      </div>
    </div>
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
    layui.use('carousel', function(){
      var carousel = layui.carousel;
      //建造实例
      carousel.render({
        elem: '#test1'
        ,width: '100%' //设置容器宽度
        ,arrow: 'always' //始终显示箭头
        //,anim: 'updown' //切换动画方式
      });
    });
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
