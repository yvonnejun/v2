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
        // this.$http.jsonp('https://sug.so.360.cn/suggest?callback=infoget&encodein=utf-8&encodeout=utf-8&format=json&fields=word&word=', {
        this.$http.jsonp('https://sug.so.360.cn/suggest', {
            params: {
                word: 'a'
            }
        }).then(res => {
            console.log(res);
        });
    }
  },
  created () {

  },
  mounted () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
        // 这里是处理正确的回调
        this.articles = response.data.subjects

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
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
