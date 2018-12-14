<template>
<div>
<h1 class="title" v-text="title"></h1>
<h2 class="desc" v-text="desc"></h2> 
</div> 
</template>
<script>
export default {
  data () {
      return {
          title:"404",
          desc:"页面错误"
      }
  }
}
</script>
<style>
      .title {
        color: #fff;
        font-size: 64px;
        padding: 15px 30px;
        margin-bottom: 20px;
        margin-top: 50px;
        font-weight: bold;
      }
      .desc {
        font-size: 32px;
        color: #474747;
        font-weight: bold;
        line-height: 30px;
      }
</style>
