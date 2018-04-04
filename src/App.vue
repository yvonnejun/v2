<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--{{msg}}-->
    

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hello world'
    }
  },
  mounted () { // 生命周期:初始加载
    console.log(this.$route)
  },
  watch: {
    $route (to, from) {
        // console.log(to)
        console.log(to.path)
        // console.log(from)
        console.log(from.path)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
