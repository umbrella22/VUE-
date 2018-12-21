<template>
  <div id="app">
    <!-- <div class="animated bounceInRigth" v-text="totalPrice"></div> -->
    
    <!-- <addout></addout>
    <yu></yu> -->
    <list></list>
    <!-- 这里的view指定新页面的位置 -->
    <router-view></router-view>
    <!-- 这里指的是新页面的入口 -->
    <!-- <router-link :to="{path:'404'}">错误页面</router-link> -->
  </div>
  <!-- -->
  <!-- <HelloWorld/> -->
  
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import addout from './components/addout.vue'
import yu from './components/text.vue'
import list from './components/list.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld,
    addout,
    yu,
    list
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
