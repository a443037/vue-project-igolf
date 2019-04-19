<template>
  <div>
    <!-- 小电视，用来盛放自定义组件 -->
    <h1>我是公共部分</h1>
       <router-view></router-view>
    <h1>我是公共部分</h1>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
  h1{
    color:red
  }
</style>