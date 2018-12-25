<template>
  <div class="top-wrap">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to="/set">设置页</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <router-link to="/home">home</router-link>
        </template>
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
      <el-menu-item index="3">
        <router-link to="/filter">过滤页</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/watch">监控页</router-link>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">
          <router-link to="/home">Echarts图表</router-link>
        </template>
        <el-submenu index="5-4">
          <template slot="title">柱状图</template>
          <el-menu-item index="5-4-1">
            <router-link to="/ebar2">柱状图2demo</router-link>
          </el-menu-item>
          <el-menu-item index="5-4-2">
            <router-link to="/ebar3">柱状图3demo</router-link>
          </el-menu-item>
        </el-submenu>
        <!-- 注意这里的索引一定要区分开来，否则点上面的导航栏下面的也一起跑出来 -->
        <el-submenu index="5-5">
          <template slot="title">饼图</template>
          <el-menu-item index="5-5-1">
            <router-link to="/epie1">圆环图demo</router-link>
          </el-menu-item>
          <el-menu-item index="5-5-2">
            <router-link to="/epie2">圆环图2demo</router-link>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="6">
        <router-link to="/table-viticalScrollbar">列表页-带竖直滚动条</router-link>
      </el-menu-item>
      <el-menu-item index="7">
        <router-link to="/layui-carousel">layui-demo页</router-link>
      </el-menu-item>
      <el-menu-item index="8">
        <router-link to="/carousel1">carousel1-带缩略图的轮播图页</router-link>
      </el-menu-item>
      <el-submenu index="9">
        <template slot="title">elementui-列表</template>
        <el-menu-item index="9-1">
          <router-link to="/base-list">基础列表</router-link>
        </el-menu-item>
        <el-menu-item index="9-2">
          <router-link to="/pager-list">带分页列表</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
   
  </div>
</template>

<script>
export default { 
  name: 'headernav',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      activeIndex: '1',
      activeIndex2: '1'
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
.top-wrap {
  width: 100%;
}

</style>
