<template>
  <div class="attr-wrap">
    <!-- vue属性示例 -->
    <div class="logo">
      <!--<img src="../assets/img/logo2.png" alt="logo">实测有效-->
      <img :src="logo2" alt="logo">
    </div>
    <div :style="{width: w + 'px', height: h + 'px', background: bgColor}"></div>
    <div :style="{width: w + 'px', height: h + 'px', background: 'url(' + viewbg + ') no-repeat left top'}"></div>
    <div :style="divStyle"></div>
    <div :style="[divStyle1, textStyle]">数组对象样式</div>

    <div class="classStyle">class样式类引用</div>
    <div class="classStyle2"><i class="icon-cs"></i>class样式类引用2</div>
    <!--调用common.less测试(里面有背景图片引用),实测在common.less里面相对定位url("../img/background/viewbg.png")和绝对定位url("/static/img/icon/alarmicon.png")也是可行的-->
    <div class="classStyle3"><i class="icon-cs3"></i>class样式类引用3</div>
  </div>
</template>

<script>
export default { 
  name: 'events',
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
        // logo2: '/static/img/logo2.png'   // 实测把图片等静态资源放在static目录里面是能有效引用出来的
        logo2: require('../assets/img/logo2.png'),   // 实测那就是直接传入图片编码，用require()加载也是有效的，这个感觉更灵活，可以将图片放在自己规划的目录中
        w: 300,
        h: 150,
        viewbg: '/static/img/background/viewbg.png', // 这个属性是给上面的那种写法background: 'url(' + viewbg + ') no-repeat left top'用的
        bgColor: 'pink',
        divStyle: {width: '400px', height: '200px', background: 'olive'},
        divStyle1: {width: '500px', height: '300px', background: 'url("/static/img/background/viewbg.png") no-repeat left top', textAlign: 'center'}, // 实测这样写url("/static/img/background/viewbg.png")是有效的
        // divStyle1: {width: '500px', height: '300px', background: 'url(' + this.viewbg + ') no-repeat left top', textAlign: 'center'}, // 实测这样写this.viewbg值是undefined,图片引用无效
        textStyle: {color: '#ff0000', fontSize: '20px;', fontWeight: 'bold'},
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.attr-wrap {
  width: 100%;
  min-height: 760px;
}
.classStyle {
  width: 700px;
  height: 300px;
  background: url("/static/img/background/viewbg.png") no-repeat center center;
  color: #fff;
}
.classStyle2 {
  width: 900px;
  height: 300px;
  background: url("../assets/img/background/viewbg.png") no-repeat center center;
  color: #fff;
}
.icon-cs {
  display: inline-block;
  width: 17px;
  height: 15px;
  background: url("../assets/img/icon/alarmicon.png") no-repeat center center;
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

</style>
