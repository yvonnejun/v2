<template>
  <div class="content-wrap">
    <p>{{articles}}</p>
    <el-button
    type="primary"
    @click="sendJSONP">
    360搜索
    </el-button>  
  </div>
</template>

<script>
export default { 
  name: 'events',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      articles: '123'
    }
  },
  methods: {
    sendJSONP () {
        
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
