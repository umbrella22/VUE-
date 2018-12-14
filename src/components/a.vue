<template>
  <div>
      {{hello}}
      {{number}}
      {{text}}
      <button @click="emitMyEvent">点一下</button>
      <!-- 此处用来接受父组件传递过来的东西也可以自己设置空值时显示什么 -->
      <!-- 同时也可以指定不同部分的插入 -->
      <slot name="header"></slot>
      <slot>空值</slot>
      <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
    //父组件向子组件传递的时候，子组件使用props来声明父组件传递的信息是什么然后渲染到html里
    //申明的内容必须和父组件传递过来的时候的key是一样的，否则不生效
    //props接受两种数据类型，一种是数组，一种是对象，对象又可以包括数组。。。
props:{
    number:[String,Number],
    text:String
},
  data (){
      return {
          hello: '我是组件A'
      }
  },
  methods: {
      //此处的my-event应和父组件中的@后跟的一样否则不能触发。大概在父组件的html中这里的这个类似key？
      //然后key后面跟随的就是要传递的值了这里就是“我是组件A”
      emitMyEvent(){
          this.$emit('my-event',this.hello)
      }
  }
}
</script>
<style>

</style>


