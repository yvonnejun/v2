<template>
  <div class="expand-grid-wrap">
  
  </div>
</template>

<script>
import Vue from 'vue'
export default { 
  name: 'expand-grid', // 展开行数据表格组件
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      flag: true,
      arr: ['Tom', 'Lucy', 'Jack', 'Maky'],
      name: ''
    }
  },
  computed: {
   
  },
  methods: {
    doClick () {

    },
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

</script>

<!-- Add "scoped" attribute to limit CSS edit to this component only -->
<!-- 所以作为公共组件最好不要写scoped来限制修改样式，因为每个页面不一样，一个公共组件的引用不能满足所有页面定制化样式，还需要在当前页面，所以要放开样式的修改才行 -->
<style lang="less">
@rcolor: red;
.expand-grid-wrap {
  width: 100%;
}

</style>
