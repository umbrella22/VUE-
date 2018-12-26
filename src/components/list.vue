<template>
  <div
    ref="box"
    class="box"
  >
    <!-- <Scroll :on-reach-bottom="jiazai"> -->
    <Card
      dis-hover
      class="card animated"
      :class="item.animateClass"
      v-if="item.show"
      v-for="(item, index) in animateList"
      :key="index"
    >{{ item.text }}</Card>
    <!-- </Scroll> -->
  </div>
</template>

<script>
import api from "../api/getlist";
export default {
  data() {
    return {
      animateList: [
        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },

        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },

        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },

        {
          text: "数据",
          show: false,
          animateClass: ""
        },

        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        },
        {
          text: "数据",
          show: false,
          animateClass: ""
        }
      ],
      box: Object
    };
  },
  mounted() {
    this.animateShow({
      speed: 120,
      effect: "bounceInRight",
      arr: this.animateList
    });
    this.ch();
  },
  methods: {
    // jiazai() {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       const last = this.animateList[this.animateList.length - 1];
    //       for (let i = 1; i < 4; i++) {
    //         this.animateList.push(last + i);
    //       }
    //       resolve();
    //     }, 2000);
    //   });
    // },
    ch() {
      api.getlist(res => {
        console.log(res);
      });
    },
    animateShow(parameter) {
      let param = {
        speed: parameter.speed || 300,
        effect: parameter.effect || "fadeInLeft",
        arr: parameter.arr
      };
      let index = 0;
      param.arr.forEach((element, i) => {
        element.animateClass = param.effect;
        setTimeout(() => {
          param.arr[index].show = true;
          index++;
        }, i * param.speed);
      });
    }
  }
};
</script>

<style scoped>
.box {
  background-color: #787878;
  overflow: hidden;
}
.card {
  margin: 20px;
}
</style>
