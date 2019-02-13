<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "350px"
    },
    chartData: {
      type: Object
    }
  },
  data: () => ({
    chart: null
  }),
  mounted() {
    this.initChart();
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  methods: {
    initChart() {
      // 默认将本页div挂载为echarts的挂载点,并且使用macarons主题
      this.chart = this.$echarts.init(this.$el);
      this.setOptions(this.chartData);
    },
    setOptions({ Odata, Bdata, Xdata } = {}) {
      this.chart.setOption({
        title: {
          text: "折线图主标题",
          x: "center"
        },
        xAxis: {
          // data表示底部显示的数据
          data: Xdata,
          // 影响折线图是否从头开始
          boundaryGap: false,
          // 未发现明显的改变
          axisTick: {
            show: false
          }
        },
        // 折线图Y轴参数
        yAxis: {
          axisTick: {
            show: false
          },
          splitNumber: 10
        },
        // 和触摸有关
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          },
          padding: [5, 10]
        },
        // 设置图表在页面中的位置以及是否显示边数据
        grid: {
          left: '3%',
          right: '4%',
          bottom: 39,
          containLabel: true
        },
        // 线条名称
        legend: {
          data: ["橘线", "蓝线"],
          y: "bottom"
        },
        // 线条样式设置
        series: [
          {
            name: "橘线",
            // 设置是否平缓
            // smooth: true,
            type: "line",

            itemStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#FBEFDB" // 0% 处的颜色
                  },
                  {
                    offset: 0.8,
                    color: "#fff" // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#fff" // 100% 处的颜色
                  }
                ]), //背景渐变色
                // 设置折线中的线条粗细和颜色
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 2,
                  color: "#E5BD62" //折线的颜色
                }
              },
              // 点击折线之后,上面每个点的颜色
              emphasis: {
                color: "#E5BD62",
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 1,
                  color: "#E5BD62"
                }
              }
            }, //线条样式
            symbolSize: 0, //折线点的大小
            // 是否显示每个点的数据,并确定其显示的位置
            // label: {
            //   normal: {
            //     show: false,
            //     position: "top"
            //   }
            // },
            areaStyle: { normal: {} },
            data: Odata,
            animationDuration: 1000,
            animationEasing: "cubicInOut"
          },
          {
            name: "蓝线",
            // smooth: true,
            type: "line",
            itemStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#C8E7FB" // 0% 处的颜色
                  },
                  {
                    offset: 0.8,
                    color: "#fff" // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#fff" // 100% 处的颜色
                  }
                ]), //背景渐变色
                // 设置折线中的线条粗细和颜色
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 2,
                  color: "#60B5EC" //折线的颜色
                }
              },
              // 点击折线之后,上面每个点的颜色
              emphasis: {
                color: "#60B5EC",
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 1,
                  color: "#E5BD62"
                }
              }
            }, //线条样式
            symbolSize: 0, //折线点的大小
            // 是否显示每个点的数据,并确定位置
            // label: {
            //   normal: {
            //     show: false,
            //     position: "top"
            //   }
            // },
            areaStyle: { normal: {} },

            // 每个点的数据
            data: Bdata,
            // 动画速度和动画时间
            animationDuration: 1000,
            animationEasing: "quadraticOut"
          }
        ]
      });
    }
  },
  beforeDestroy() {
    this.chart.dispose();
    this.chart = null;
  }
};
</script>
