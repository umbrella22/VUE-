<template>
  <div id="app">
    <!-- <div class="animated bounceInRigth" v-text="totalPrice"></div> -->
    
    <!-- <addout></addout>
    <yu></yu> -->
    <!-- 列表效果 -->
    <!-- <list></list> -->
    <!-- 动画效果练习 -->
    <dh/>
    <!-- ionic页面演示 -->
    <!-- <ionic/> -->
    <!-- 这里的view指定新页面的位置 -->
    <router-view></router-view>
    <!-- 这里指的是新页面的入口 -->
    <!-- <router-link :to="{path:'404'}">错误页面</router-link> -->
  </div>
  <!-- vue的基础 -->
  <!-- <HelloWorld/> -->
  
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import addout from './components/addout'
import yu from './components/text'
import list from './components/list'
import dh from './components/echaet'
import ionic from './components/ionic'
export default {
  name: 'app',
  components: {
    // HelloWorld,
    addout,
    yu,
    list,
    dh,
    ionic
  },
  computed:{
    totalPrice(){
      return this.$store.state.totalPrice
    }
  }
}
</script>

<style>

</style>
