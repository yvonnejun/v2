<template>
  <div class="my-hello">
    <!-- v-model双绑示例 -->
    <h2>我是父组件hello</h2>
    <h2>我访问自己的data数据：{{msg}}--{{name}}</h2>
    <hr/>
    <my-world :message="msg" :name="name" :age="age" :user="user" @parentComponent-event="getData"></my-world>
    <hr/>
    <hr/>
    <h2>访问子组件数据：{{sex}}--{{height}}</h2>
  </div>
</template>

<script>
import myWorld from './my-world'
export default { //vue格式的组件内部直接作用与当前的模板template,是不需要绑定el："#id"来指定绑定元素作用域的
  name: 'my-hello',
  data () {
    return {
      msg: 'Hello,world',
      name: 'Lucy',
      age: 23,
      user: {id: 9527, username: '唐伯虎'},
      sex: '',
      height: 0
    }
  },
  components: {
    myWorld,
  },
  methods: {
    getData(sex, height) {
      this.sex = sex;
      this.height = height;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.my-hello {
  width: 100%;
}

</style>
