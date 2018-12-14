<template>
  <div id="app">
    
    <img src="./assets/logo.png">
    {{ totalPrice }}
    <addout></addout>
    <yu></yu>
    <!-- 这里的view指定新页面的位置 -->
    <router-view></router-view>
    <!-- 这里指的是新页面的入口 -->
    <router-link :to="{path:'404'}">错误页面</router-link>
  </div>
  <!-- -->
  <!-- <HelloWorld/> -->
  
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import addout from './components/addout.vue'
import yu from './components/text.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld,
    addout,
    yu
  },
  computed:{
    totalPrice(){
      return this.$store.state.totalPrice
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
  margin-top: 60px;
}
</style>
