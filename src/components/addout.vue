<template>
  <div class="hello">
    <button @click="addOne">添加</button>
    <button @click="minusOne">减少</button>
  </div>
</template>

<script>
  export default {
    name: "Addout",
        data(){
          return {
            price:5
          }
        },
      methods:{
          addOne(){
            //这是使用的是同步的数据更新
            this.$store.commit('increment',this.price);
            //使用异步的数据更新
            this.$store.dispatch('increase',this.price)
          },
        minusOne(){
            this.$store.commit('decrement',this.price);
        }
      }
    }
</script>

<style>

</style>
