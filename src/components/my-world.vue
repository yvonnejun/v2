<template>
  <div class="my-world">
    <h4>我是子组件world</h4>
    <!-- 这是props为数组的情况，直接拿值 -->
    <h4>我访问父组件中传递过来的数据{{message}},>>>{{name}}</h4>
    <!-- props为对象的情况，可以给传过来的属性值进行校验处理 -->
    <h4>我访问父组件中传递过来的数据{{message}},>>>{{name}}，>>>{{age}}，>>>{{user.username}}</h4>
    <!-- 点击触发send()方法中的emit()方法广播传参给父组件 -->
    <el-button type="primary" @click="send">点击向父组件广播传参</el-button>
  </div>
</template>

<script>
export default { //vue格式的组件内部直接作用与当前的模板template,是不需要绑定el："#id"来指定绑定元素作用域的
  name: 'my-world',
  data () {
    return {
      sex: 'male',
      height: 180
    }
  },
  // props: ['message', 'name'], // props为数组的情况可直接传值获取
  props: { // props为对象的情况可用来对获取的属性名类型等进行验证
    message: String, // 只有一个校验属性时，那就是类型-->字符串类型
    name: {
      type: String, // 字符串类型
      required: true // 非空
    },
    age: {
      type: Number, // 数字类型
      default: 20, // 给个默认值20
      validator: function (value) { // 验证方法是返回值大于0
        return value > 0;
      }
    },
    user: {
      type: Object, // 对象类型
      default: function () { // 对象类型的值的默认类型需用default方法来返回得到默认对象值
        return {id: 3306, username: '秋香'}
      }
    }

  }, 
  methods: {
    // 而子组件想父组件传值的方式就是emit()广播带参数传值
    send() {
      this.$emit('parentComponent-event', this.sex, this.height);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.my-world {
  width: 100%;
}

</style>
