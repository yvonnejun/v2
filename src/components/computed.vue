<template>
  <div class="content-wrap">
    <ul v-for="item in items">
      <li>{{item.title}}</li>
    </ul>
    <div>{{countTotal}}</div>
    <el-button
    type="primary"
    @click="changeTotal">
    change total
    </el-button>  
  </div>
</template>

<script>
export default { 
  name: 'events',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      items: [
        {
          id: 336,
          title: '智利三文鱼扒500g酸甜口味爆炒',
          img: '../assets/images/test/8-1.jpg',
          count: 1,
          price1: 106,
          price2: 80
        },
        {
          id: 337,
          title: '西班牙三文鱼扒500g酸甜口味爆炒',
          img: '../assets/images/test/8-1.jpg',
          count: 2,
          price1: 225,
          price2: 152
        }
      ]
    }
  },
  methods: {
    changeTotal () {
      this.items.forEach(function (item) {
          item.count++;
      })
    }
  },
  created () {

  },
  mounted () {

  },
  computed: {
    countTotal: function () {
        let total = 0;
        this.items.forEach(function (item) {
            total += item.count
        })
        return total
    }
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
