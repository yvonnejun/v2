<template>
  <div class="elementlayout-wrap">
    {{msg}}
    <!-- elementui示例 -->
    <!--1、layout24列布局-->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark" :class="{highlight: flag1}"  @mouseover="highlight()">{{colstr1}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-button type="primary" @click="change()">点我刷新视图</el-button>
    <el-button type="primary">点我显示隐藏</el-button>
  </div>
</template>

<script>
export default { //vue格式的组件内部直接作用与当前的模板template,是不需要绑定el："#id"来指定绑定元素作用域的,真正的el只绑定再App这个根组件上面
  name: 'elementlayout',
  data () {
    return {
      // datas: { //这种data()写法不能嵌套使用对象，所有属性和方法都直接绑定在return{}对象中，这样才能动态用$data和$option获取，修改
        msg: '欢迎来到elementlayout组件',
        colstr1: '24列布局第一行',
        flag1: false,
      // },
      // event: {
        change: function () {
          this.colstr1 = '24列布局第一行第一列'; // 只绑定一层的话，this值也可双绑改变视图值
          // this.$forceUpdate();
          // this.$set(this.$data, "data.colstr1", '24列布局第一行第一列');
        },
        highlight: function () {
          this.$data.flag1 = true; // 利用$data来动态改变视图值
        }
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.elementview-wrap {
  width: 100%;
  min-height: 760px;
}
h1, h2 {
  font-weight: normal;
  color: @rcolor;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .grid-content{
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
  }
  .highlight {
    color: red;
  }
</style>
