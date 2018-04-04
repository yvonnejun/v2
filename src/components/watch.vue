<template>
  <div class="content-wrap">
    <p>{{articles}}</p>
    <p>{{user.name}}</p>
    <p>{{user.age}}</p>
    <p>{{foo}}</p>
    <ul v-for="item in items">
      <li>{{item.title}}</li>
    </ul>
    <el-button
    type="primary"
    @click="changeArt">
    changeArt
    </el-button>  
    <el-button
    type="primary"
    @click="changeName">
    changeName
    </el-button>  
    <el-button
    type="primary"
    @click="changeAge">
    changeAge
    </el-button>  
    <el-button
    type="primary"
    @click="changeFoo">
    changeFoo
    </el-button>  
    <el-button
    type="primary"
    @click="changeItems">
    changeItems
    </el-button>  
    <el-button
    type="primary"
    @click="changeItany">
    changeItems
    </el-button>  
  </div>
</template>

<script>
// import Vue from 'vue'
export default { 
  name: 'watch', // 注册全局组件时用，Vue.component('watch'),然后这样用，<watch></watch>这样子用
  data () {
    var fooCallback = () => {
      console.log('new foo is' + this);
    }
    /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      articles: '123',
      foo: 'foo is bar',
      itany: 'itany is marry',
      user: {
        name: 'Lucy',
        age: 25
      },
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
    changeArt () {
      this.articles = '文章标题变动'
    },
    changeName () {
      this.user.name = 'Hanmeimei'
    },
    changeAge () {
      this.user.age = 27
    },
    changeFoo () {
      this.foo = 'foo吧'
    },
    changeItany () {
      this.itany = 'itany is ok'
    },
    changeItems () {
      this.items.push({
          id: 400,
          title: '中国移动',
          img: '../assets/images/test/12-1.jpg',
          count: 3,
          price1: 2225,
          price2: 2152
      });
    }
  },
  watch: {
    articles (newValue, oldValue) {
      console.log(newValue, oldValue);
    },
    user: {
      handler (newValue, oldValue) {
        console.log(newValue, oldValue);
      },
      deep: true
    },
    items: {
        handler: function (newValue, oldValue) {
          console.log(newValue, oldValue);
        },
        deep: true
    },
    foo: 'fooCallback' // 不推荐这种用法，因为会存在this指向的问题
  },
  created () {

  },
  mounted () {

  }
}
// console.log(Vue.watch);
// window.vm.$watch('itany', function (newValue, oldValue) {
//   console.log(newValue, oldValue);
// }) 所以这种写法是不成立的
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.content-wrap {
  width: 100%;
  min-height: 760px;
}

</style>
