<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--{{msg}}-->
    <!-- 顶部top栏 -->
    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/set">设置页</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title"><router-link to="/home">home</router-link></template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3"><router-link to="/filter">过滤页</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/watch">监控页</router-link></el-menu-item>
    </el-menu> -->
    <!-- 侧边栏导航 -->
    <el-col :span="6">
      <!-- <h5>默认颜色</h5> -->
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" style="min-height: 720px;">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span><router-link to="/home">home</router-link></span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title"><router-link to="/set">设置页</router-link></span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title"><router-link to="/watch">监控页</router-link></span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title"><router-link to="/filter">过滤页</router-link></span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <!-- 定义跳转链接 -->
    <!-- <div>
      <router-link to="/events">事件页</router-link>
      <router-link to="/attr">属性页</router-link>
      <router-link to="/set">设置页</router-link>
      <router-link to="/home">主页</router-link>
    </div> -->
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello world',
      // activeIndex: '1',
      // activeIndex2: '1'
    }
  },
  methods: {
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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
