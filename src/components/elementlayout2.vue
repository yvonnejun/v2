<template>
  <div class="elementlayout2-wrap">
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
    <el-row v-show="flagShow">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-button type="primary" @click="change()">点我刷新视图</el-button>
    <el-button type="primary" @click="hideRow()">点我隐藏</el-button>
    <el-button type="primary" @click="showRow()">点我显示</el-button>
  </div>
</template>

<script>
export default { 
  name: 'elementlayout2',
  data () {
    return {
        colstr1: '24列布局第一行',
        flag1: false,
        flagShow: true,
        change: function () {
          this.colstr1 = '24列布局第一行第一列';
        },
        highlight: function () {
          this.$data.flag1 = true;
        },
        hideRow: function () {
          this.$data.flagShow = false;
        },
        showRow: function () {
          this.$data.flagShow = true;
        },
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
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
  }
  .highlight {
    color: red;
  }
</style>
