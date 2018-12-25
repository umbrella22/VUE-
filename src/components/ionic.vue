<template>
<!-- 只在安卓环境中生效，且很多不完整，待研究 -->
  <ion-app>
    <ion-header>

      <ion-navbar>
        <ion-title>标题</ion-title>
      </ion-navbar>

    </ion-header>

    <ion-content padding>
        <!-- 按钮不知道为什么不生效 -->
      <ion-button @click="dj">按钮</ion-button>

    </ion-content>
  </ion-app>
</template>
<script>
export default {
  data: () => ({
    title: "我是标题"
  }),
  methods: {
    dj() {
      console.log("点击生效");
    }
  }
};
</script>
<style scoped>
</style>
