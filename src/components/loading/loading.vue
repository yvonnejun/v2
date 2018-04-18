<template>
  <div class="loading-wrap">
    {{msg}}
  </div>
</template>

<script>
export default { 
  name: 'loading', // 注意关键字最好不要用来命名
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      msg:'Loading…'
    }
  },
  computed: {

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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.loading-wrap {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 5rem;
  color: royalblue;
}

</style>
