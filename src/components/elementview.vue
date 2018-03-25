<template>
  <div class="elementview-wrap">
    {{data.msg}}
    <!-- elementui示例 -->
    <!--1、卡片-->
    <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h1 style="line-height: 36px; color: #20A0FF">木垒智慧社区</h1>
          </div>
          <div v-for="article in data.articles" class="text item">
            {{article.title}}
          </div>
    </el-card>

    <!--2、按钮-->
    <el-button>默认按钮</el-button>
    <el-button type="primary">主按钮</el-button>
    <el-button type="text">文本无边框按钮</el-button>

    <!--3、图标（出不来）-->
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
   
  </div>
</template>

<script>
export default { //vue格式的组件内部直接作用与当前的模板template,是不需要绑定el："#id"来指定绑定元素作用域的,真正的el只绑定再App这个根组件上面
  name: 'elementview',
  data () {
    return {
      data: {
        msg: '欢迎来到elementview组件',
        articles:[
          {id: 9527, title: '唐伯虎', age: 23},
          {id: 9528, title: '方唐镜', age: 25},
          {id: 9529, title: '秋香', age: 25},
          {id: 9530, title: '哈士奇', age: 25},
          {id: 9537, title: '周星驰', age: 25},
          {id: 9547, title: '至尊宝', age: 25},
          {id: 9557, title: '济公', age: 25},
          {id: 9567, title: '孙悟空', age: 25},
          {id: 9577, title: '唐僧', age: 25},
        ]
      },
      event: {

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
.elementview-wrap {
  width: 100%;
  min-height: 760px;
}
h1, h2 {
  font-weight: normal;
  color: @rcolor;
}

</style>
