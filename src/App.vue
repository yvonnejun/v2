<template>
  <div id="app">
    <!-- 顶部top栏 -->
    <headernav></headernav>
    <!-- 侧边栏导航 -->
    <leftnav></leftnav>
    <div style="float:left; width: calc(100% - 235px); margin-left: 235px; position: relative; top: -720px;">
      <!--全局组件loading的调用-->
      <!-- <Loading></Loading> -->
      <!-- 指令输入框：<el-input placeholder="请输入内容" v-autoClick></el-input>
      指令输入框：<input placeholder="请输入内容" v-autoFocus></input> -->
      <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <router-view/>
      </transition>
      <!--动态组件加载，就是在同一挂载点进行组件id的切换-->
      <components :is="componentsName"></components>
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
      componentsName: 'greenbublle',
    }
  },
  components: {
    headernav,
    leftnav,
  },
  methods: {
 
  },
  computed: {

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
