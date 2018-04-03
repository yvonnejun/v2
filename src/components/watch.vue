<template>
  <div class="content-wrap">
    <p>{{articles}}</p>
    <el-button
    type="primary"
    @click="changeArticle">
    computedPro
    </el-button>  
  </div>
</template>

<script>
export default { 
  name: 'watch',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      articles: '123'
    }
  },
  methods: {
    changeArticle () {

    }
  },
  created () {

  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.content-wrap {
  width: 100%;
  min-height: 760px;
}

</style>
