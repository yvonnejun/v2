<template>
  <div class="drag-wrap">
    <div class="drag-a" v-drag>世界</div>
    <div class="drag-b" v-drag>网博</div>
 
  </div>
</template>

<script>
export default { 
  name: 'drag', // 注意关键字最好不要用来命名
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {

    }
  },
  methods: {

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.drag-wrap {
  width: 100%;
  min-height: 760px;
  div {
    width: 100px;
    height: 100px;
    position: absolute;
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
  .drag-a {
    top: 70px;
    left: 50px;
    background-color: #67C23A;
  }
  .drag-b {
    top: 150px;
    left: 150px;
    background-color: #E6A23C;
  }
}

</style>
