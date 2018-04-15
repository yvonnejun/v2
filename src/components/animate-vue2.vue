<template>
  <div class="animateVue2-wrap">
    输入姓名：<el-input placeholder="请输入姓名"></el-input> 
    <transition-group 
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight">
      <p v-for="(item, index) in arr2" :key="index">
        <span>{{item}}</span>
      </p>
    </transition-group>
  
  </div>
</template>

<script>
import Vue from 'vue'
export default { 
  name: 'animateVue2', // vue自带的动画其原理还是css消失，显示和过渡属性的搭配
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
      flag: true,
      arr: ['Tom', 'Lucy', 'Jack', 'Maky'],
      name: ''
    }
  },
  computed: {
    arr2: function () {
      var temp = [];
      // var self = this;
      // this.arr.forEach(function (val) {
      //   if (val.indexOf(self.name) != -1) {
      //     temp.push(val);
      //   }
      // });
      // 或者用箭头函数
      this.arr.forEach( val => {
        if (val.indexOf(self.name) != -1) {
          temp.push(val);
        }
      });
      return temp;
    }
  },
  methods: {
    doClick () {

    },
  },
  directives: {

  },
 
  created () {

  },
  mounted () {

  },
  filters: {
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.animateVue2-wrap {
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
