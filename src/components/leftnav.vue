<template>
  <div class="content-wrap">
    <p>{{user.name}}</p>
    <p>{{user.age}}</p>
    <el-button
    type="primary"
    @click="doAdd">
    添加属性
    </el-button>  
    <el-button
    type="primary"
    @click="doUpdate">
    修改属性
    </el-button>  
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
    doUpdate () {
      this.user.name = 'LiLei'; // 这样对已经存在的属性直接的修改是能渲染到视图的
    },
    doAdd () {
      // this.user.age = 25; // 这样只能改变值，但不能渲染到视图
      // this.$set(this.user, 'age', 25); // 这样写能添加属性的同时并渲染到视图上去
      // 实战写法是像下面这样，要判断下存在与否再添加
      if (this.user.age) {
        this.user.age++;
      } else {
        this.$set(this.user, 'age', 25);
      }
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
.content-wrap {
  width: 100%;
  min-height: 760px;
}

</style>
