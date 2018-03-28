<template>
  <div class="events-wrap">
    <!-- elementui示例 -->
    <!--1、layout24列布局-->
    <el-row>
      <el-col :span="24">
        <h2>事件</h2>
        
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-col :span="4">
          <div :class="searchStyle">
            <el-input v-model="form.input1" prefix-icon="el-icon-search" placeholder="搜索" ></el-input>
          </div>
          <el-button type="primary" icon="el-icon-search" @click="ShowSearch()">搜索</el-button>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default { 
  name: 'events',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
        form: {
          input1: ''
        },
        flagShowSearch: false,
        searchStyle: {searchWrapHide: !this.flagShowSearch, searchWrap: this.flagShowSearch},
    }
  },
  methods: {
    ShowSearch() {
      this.flagShowSearch = true; // 多个样式原来实战是这么玩的，改变boolean值以后，还要再刷一遍这个样式对象
      this.searchStyle = {
        searchWrapHide: !this.flagShowSearch, searchWrap: this.flagShowSearch
      }
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
.success-alert {
  position: absolute;
  top: -44px;
  transition: all 0.4s linear 0s;
}
.slidedown {
  top: 0px;
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
.searchWrapHide {
  width: 120px;
  position:relative;
  left:5px;
  display: none;
}
.searchWrap {
  display: inline-block;
  width: 120px;
  position:relative;
  left:5px;
}
</style>
