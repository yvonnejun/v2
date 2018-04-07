<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--{{msg}}-->
    <!-- 顶部top栏 -->
    <headernav></headernav>
    <!-- 侧边栏导航 -->
    <leftnav></leftnav>
    <!-- 定义跳转链接 -->
    <!-- <div>
      <router-link to="/events">事件页</router-link>
      <router-link to="/attr">属性页</router-link>
      <router-link to="/set">设置页</router-link>
      <router-link to="/home">主页</router-link>
    </div> -->
    <div style="float:left; width: calc(100% - 235px); margin-left: 235px; position: relative; top: -720px;">
      <router-view/>
    </div>
  </div>
</template>

<script>
import headernav from './components/headernav.vue'
import leftnav from './components/leftnav.vue'
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello world',
    }
  },
  components: {
    headernav,
    leftnav,
  },
  methods: {

  },
  mounted () { // 生命周期:初始加载
    console.log(this.$route)
  },
  watch: {
    $route (to, from) {
        // console.log(to)
        console.log(to.path)
        // console.log(from)
        console.log(from.path)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
