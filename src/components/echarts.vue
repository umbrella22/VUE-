<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>
<script>
export default {
  // 接受外部传值,可更改类,宽高和数据,其中数据为必要元素
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
    // 监听数据变化
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  methods: {
    initChart() {
      // 默认将本页div挂载为echarts的挂载点
      this.chart = this.$echarts.init(this.$el);
      this.setOptions(this.chartData);
    },
    setOptions({ Odata, Bdata, Xdata } = {}) {
      this.chart.setOption({
        // 设置标题
        title: {
          text: "折线图主标题",
          left: "center",
          subtext: "副标题"
        },
        xAxis: {
          // data表示底部显示的数据
          data: Xdata,
          // 影响折线图是否从头开始
          boundaryGap: false,
          // 是否显示坐标刻度
          axisTick: {
            show: false
          },
          // 设置X轴的轴线颜色
          axisLine: {
            lineStyle: {
              color: "#E6E6F4"
            }
          },
          // 设置X轴下的文字颜色
          axisLabel: {
            textStyle: {
              color: "#3B3B53"
            }
          }
        },
        // 折线图Y轴参数
        yAxis: {
          // 设置Y轴的轴线颜色
          axisLine: {
            lineStyle: {
              color: "#E6E6F4"
            }
          },
          // 设置Y轴下文字颜色
          axisLabel: {
            textStyle: {
              color: "#C8C8C8"
            }
          },
          // 是否显示坐标刻度
          axisTick: {
            show: false
          },
          splitNumber: 10
        },
        // 设置图表在页面中的位置以及是否显示边数据
        grid: {
          left: "3%",
          right: "4%",
          bottom: 39,
          containLabel: true
        },
        // 图例组件
        legend: {
          data: [
            {
              name: "橘线",
              icon: "rect",
              textStyle: {
                color: "#333333"
              }
            },
            {
              name: "蓝线",
              icon: "rect",
              textStyle: {
                color: "#333333"
              }
            }
          ],
          y: "bottom"
        },
        // 线条样式设置
        series: [
          {
            name: "橘线",
            type: "line",
            color: "#EEB947",
            itemStyle: {
              normal: {
                // 设置折线中的线条粗细和颜色
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 2,
                  color: "#E5BD62" //折线的颜色
                }
              }
            }, //线条样式
            symbolSize: 0, //折线点的大小
            // 图形区域填充样式
            areaStyle: {
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
                ]) //背景渐变色
              }
            },
            // 橘线数据
            data: Odata,
            // 动画时间
            animationDuration: 1000,
            // 动画效果
            animationEasing: "cubicInOut"
          },
          {
            name: "蓝线",
            type: "line",
            itemStyle: {
              normal: {
                //
                color: "#60B5EC",
                // 设置折线中的线条粗细和颜色
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 2,
                  color: "#60B5EC" //折线的颜色
                }
              }
            }, //线条样式
            symbolSize: 0, //折线点的大小
            // 图形区域填充样式
            areaStyle: {
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
                ]) //背景渐变色
              }
            },

            // 蓝线数据
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
