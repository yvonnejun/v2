<template>
  <div class="content-wrap">
    <h1>{{articles.title}}</h1>
    <p>{{articles.author}}</p>
    <el-button
    type="primary"
    @click="doDelete">
    删除子属性
    </el-button>  
  </div>
</template>

<script>
export default { 
  name: 'delete',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      articles: {
        title: '这篇文章',
        author: 'junyang9'
      }
    }
  },
  methods: {
    doDelete () {
      if (this.articles.title) {
        this.$delete(this.articles, 'title');
      } else {
        this.$set(this.articles, 'title', '文章开头');
      }
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
