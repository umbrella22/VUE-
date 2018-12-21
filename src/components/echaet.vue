<template>
  <div>
    <div ref="myChart" class="demo"></div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  mounted() {
    this.make();
  },
  methods: {
    make() {
      let myChart = this.$echarts.init(this.$refs.myChart);
      myChart.setOption({
        //   图形背景色
        backgroundColor: "#2c343c",
        // 标题
        title: {
          text: "饼状图",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },
        // 用于鼠标指针放上去显示数值
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        // visualMap: {
        //   show: false,
        //   min: 80,
        //   max: 600,
        //   inRange: {
        //     colorLightness: [0, 1]
        //   }
        // },
        series: [
          {
            name: "访问来源",
            type: "pie",
            // 中心图大小
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 274, name: "联盟广告" },
              { value: 235, name: "视频广告" },
              { value: 400, name: "搜索引擎" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            // 设置周边字体背景色
            label: {
              normal: {
                textStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                }
              }
            },
            // 标识线样式
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            // 图形配置
            itemStyle: {
              normal: {
                //   图形颜色
                color: "#c23531",
                // 图形间阴影效果
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },

            // 动画效果
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.demo {
  width: 600px;
  height: 400px;
}
</style>
