<template>
  <div class="left-wrap">
   <el-col :span="24">
      <!-- <h5>默认颜色</h5> -->
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" style="min-height: 720px;">

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span><router-link to="/usermanage">用户管理</router-link></span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1"><router-link to="/usermanage/login/lucy/123456">用户登录</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/usermanage/regist?name=tom&pwd=111111">用户注册</router-link></el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3"><router-link to="/axios">axios</router-link></el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title"><router-link to="/set">设置管理</router-link></span>
        </el-menu-item>
        <el-menu-item index="0">
            <i class="el-icon-location"></i>
            <span slot="title"><router-link to="/home">home</router-link></span>
          </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title"><router-link to="/watch">监控管理</router-link></span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title"><router-link to="/filter">过滤管理</router-link></span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title" @click="push">计算属性管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-document"></i>
          <span slot="title"><router-link to="/elementuploadfile">文件上传管理</router-link></span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-document"></i>
          <span slot="title"><router-link to="/drag">拖拽管理</router-link></span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default { 
  name: 'set',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      user: {
        name: 'Lucy'
      }
    }
  },
  methods: {
    push () {
      console.log(this.$router);
      // 对象
      // this.$router.push({path: '/login?url=' + this.$route.path}); // 记住这写法，方法前的router是带r的，属性前的route是不带r的
      this.$router.push({path: '/computed'}); // 这就跳转到了computed页面了，带参数跳转就学上面的写法即可
      // this.$route.push({path: 'computed'});
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
.left-wrap {
  width: 235px;
  float: left;
}

</style>
