<template>
  <div class="animateVue-wrap">
    <transition 
      name="fade"
      v-on:before-enter='beforefn'
      v-on:enter='enterfn'
      v-on:after-enter='afterfn'
      v-on:before-leave='beforeleavefn'
      v-on:leave='leavefn'
      v-on:after-leave='afterleavefn'
      >
      <p v-show="flag">网博-微信</p>
    </transition>
    <el-button
      type="primary"
      @click="flag=!flag">
      点击动画
    </el-button>  
    <!-- 引用animate.css的动画类 -->
    <el-button
      type="primary"
      @click="flag2=!flag2">
      点击多元素动画
    </el-button>  
    <transition-group 
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight">
      <p v-show="flag2" :key="1">互联网</p>
      <p v-show="flag2" :key="2">物联网</p>
    </transition-group>
  
  </div>
</template>

<script>
import Vue from 'vue'
export default { 
  name: 'animateVue', // vue自带的动画其原理还是css消失，显示和过渡属性的搭配
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      flag: false,
      flag2: false,
    }
  },
  methods: {
    doClick () {

    },
    beforefn (el) {
      console.log('动画进入之前');
    },
    enterfn (el, done) {
      console.log('动画进入时');
      done();
    },
    afterfn (el) {
      console.log('动画进入之后');
    },
    beforeleavefn (el) {
      console.log('动画离开之前');
    },
    leavefn (el) {
      console.log('动画离开时');
    },
    afterleavefn (el) {
      console.log('动画离开之后');
    },
  },
  directives: {

  },
  // transition: {   
  //   'fade': {
  //     enter(el, done) {
  //       console.log(el, '动画进入时');
  //       done();
  //     },
  //     leave(el) {
  //       console.log(el, '动画离开时');
  //     }
  //   }
    
  // },
  created () {

  },
  mounted () {

  },
  filters: {
    
  }
}
// Vue.filter('number', (data, n) => {return data.toFixed(n) * 1000000 / 1000000}); // 第一个data参数是|号前的具体数据对象，第二个n接受格式化函数的传参，js的小数位不稳定所以要在toFixed(n)方法后乘上1百万/1百万来稳定浮点数

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.animateVue-wrap {
  width: 100%;
}
p {
  height: 300px;
  background-color: #409EFF
}
/*设置vue进入、离开过渡动画*/ 
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-active {
  width: 300px;
  height: 300px;
  opacity: 1;
}
.fade-leave-active {
  width: 0;
  height: 0;
  opacity: 0;
}
.fade-enter { // 注意： .fade-enter一定要写在.fade-enter-active之后，否则动画无效
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
