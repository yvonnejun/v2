<template>
  <div class="hello">
    <!-- v-model双绑示例 -->
    欢迎语：<input type="text" v-model="data.msg">
    <br>
    <h1>{{ data.msg }}</h1>
    <!-- v-for简单的数组循环列表示例 -->
    <ul v-for="value in data.arr">
      <li>{{value}}</li>
    </ul>
    <br>
    <!-- v-for实战中常用到的数组对象集合循环示例 -->
    <ul v-for="(value, index) in data.users">
      <li>{{index}} = {{value}}</li>
    </ul>
    <br>
    <!-- v-for实战中常用到的数组对象集合循环示例 -->
    <ul v-for="(value, index) in data.users">
      <li><a href="">{{value.name}}</a><b>{{value.age}}</b></li>
    </ul>
    <!-- v-on:事件类型实战中常用来绑定事件示例 注意单个组件内只能有且只有一个根父元素作为包含元素，跳出这个包含元素就成了多个复合元素集，这是vue格式的组件不允许的规则，一定不能这么写，这些-->
    <button v-on:click="event.show()">click me</button>
    <button v-on:click="event.changeData('这是改变后的home组件')">change home</button>

  </div>
</template>

<script>
export default { //vue格式的组件内部直接作用与当前的模板template,是不需要绑定el："#id"来指定绑定元素作用域的
  name: 'home',
  data () {
    return {
      data: {
        msg: '欢迎来到home组件',
        arr: [12, 45, 32, 67, 88],
        users:[
          {id: 9527, name: '唐伯虎', age: 23},
          {id: 9528, name: '方唐镜', age: 25},
          {id: 9529, name: '秋香', age: 25},
          {id: 9530, name: '哈士奇', age: 25},
          {id: 9537, name: '周星驰', age: 25},
          {id: 9547, name: '至尊宝', age: 25},
          {id: 9557, name: '济公', age: 25},
          {id: 9567, name: '孙悟空', age: 25},
          {id: 9577, name: '唐僧', age: 25},
        ]
      },
      event: {
        show: function () {
          console.log('show方法调用成功');
        },
        changeData: function (str) {
          this.msg = str;
          console.log(this.msg);
        }

      }
    }
  },
  // method () {
  //   return {
  //     show: function () {
  //       console.log(11111111111111112222233333);
  //     }

  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
h1, h2 {
  font-weight: normal;
  color: @rcolor;
}

</style>
