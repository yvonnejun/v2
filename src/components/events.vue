<template>
  <div class="events-wrap">
    <!-- elementui示例 -->
    <!--1、layout24列布局-->
    <el-row>
      <el-col :span="24">
        <h2 @mouseover="handleEnter('划过标题栏', $event)" @mouseout="handleEnter('划出标题栏1111', $event)" class="demoh1">事件</h2>
        <h1 @mouseenter="handleEnter('划过标题栏h1', $event)" @mouseleave="handleEnter('划出划出划出', $event)" class="demoh1">大事件1</h1>
        <h1 @mousedown="handleEnter('鼠标按下标题栏h1', $event)" @mouseup="handleEnter('鼠标松开松开松开', $event)" class="demoh1">大事件2</h1>
        <input type="text" @keydown="handleEdit($event)" placeholder="键盘事件">
        <input type="text" @keyup="handleEdit($event)" placeholder="按键松开事件">
        <input type="text" @keydown.enter="handleEnter('我是回车键触发的', $event)" placeholder="回车事件">
        <!-- 获取事件对象$event传参 -->
        <el-button type="primary" icon="el-icon-edit" @click="handleEdit($event)">点击我</el-button>


        <el-button type="primary" icon="el-icon-share" @mouseover="handleEnter('划过分享按钮', $event)">share</el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-col :span="4">
          <div :class="searchStyle">
            <el-input v-model="form.input1" prefix-icon="el-icon-search" placeholder="搜索" ></el-input>
          </div>
          <el-button type="primary" icon="el-icon-search" @click="ShowSearch()">搜索</el-button>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="form.username" @change="showName($event)"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <el-button type="primary" icon="el-icon-search" @click="ShowSearch()">搜索</el-button>
        </el-col>
        <div @click="handleParent" class="styleParent">
          <a class="styleChild" href="#" @click.stop.prevent="handleChildren">我是子元素</a>
        </div>
      </el-col>
    </el-row>


    <div @mouseover="overShow" @mouseout="outHide"> 
      <el-menu>
        <el-submenu>
          <template slot="title"><i class="el-icon-document"></i>
            <span :class="{show:showText,hide:hideText}">批次信息</span>
          </template>
          <el-menu-item>全部批次信息查看</el-menu-item>
          <el-menu-item>接受中批次信息查看</el-menu-item>
          <el-menu-item>审核中批次信息查看</el-menu-item>
          <el-menu-item>已完成批次信息查看</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default { 
  name: 'events',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
        form: {
          input1: '',
          username: ''
        },
        flagShowSearch: false,
        searchStyle: {searchWrapHide: !this.flagShowSearch, searchWrap: this.flagShowSearch},
        showText: false,
        hideText: true
    }
  },
  methods: {
    ShowSearch() {
      this.flagShowSearch = true; // 多个样式原来实战是这么玩的，改变boolean值以后，还要再刷一遍这个样式对象
      this.searchStyle = {
        searchWrapHide: !this.flagShowSearch, searchWrap: this.flagShowSearch
      }
    },
    handleEdit(event) {
      console.log(event.code);   // code是键盘上的字母(大写)前面加个key,如点了a，显示KeyA
      console.log(event.key);   // key是键盘上的字母
      console.log(event.keyCode);  // 小驼峰的keyCode才是有效的属性
      console.log(event);
      console.log(event.target);
      console.log(event.type);
      console.log(event.offsetX);
      console.log(event.offsetY);
    },
    handleParent() {
       this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
       });
    },
    handleChildren() {
      this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
      });
    },
    showName(event) {
      console.log(event);
    },
    handleEnter(str, event) {
      // alert(str);
      console.log(str);
      console.log(event.target);
      console.log(event);
    },
    overShow () {
      this.showText = !this.showText
      this.hideText = !this.hideText
    },
    outHide () {
      this.showText = !this.showText
      this.hideText = !this.hideText
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.show{
    display: block;
}
.hide{
    display: none;
}
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
.styleChild {
  display: block;
  width: 90px;
  height: 20px;
  background: orange;
  border-radius: 6px;
  border: 1px solid olive;
}
.styleParent {
 width: 240px;
 height: 60px;
 background: orange;
}
.demoh1 {
  width: 800px;
  height:160px;
  background:#e3e3e3;
  border: 1px solid orange;
  border-radius: 6px;
  margin-bottom: 15px;
}
</style>
