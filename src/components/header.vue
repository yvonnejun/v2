<template>
  <div class="content-wrap">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
    </el-menu>
  </div>
</template>

<script>
export default { 
  name: 'set',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      user: {
        activeIndex: '1',
        activeIndex2: '1'
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
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
