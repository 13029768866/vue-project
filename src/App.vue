<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
// 引入组件
import Tab from './base/Tab';
export default {
  name: "App",
  // 注册组件 
  components:{
    Tab
  }
};
</script>

<style>
*{margin: 0;padding: 0;}
ul li {list-style: none;}
a {text-decoration: none;}
input,button{-webkit-appearance: none;}
.content{position: fixed; width: 100%;top: 50px;bottom: 50px;overflow:auto;}
</style>
