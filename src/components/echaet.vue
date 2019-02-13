<template>
  <div>
    <div
      ref="myChart"
      class="demo"
    ></div>
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
        // 饼状图
        // //   图形背景色
        // backgroundColor: "#2c343c",
        // // 标题
        // title: {
        //   text: "饼状图",
        //   left: "center",
        //   top: 20,
        //   textStyle: {
        //     color: "#ccc"
        //   }
        // },
        // // 用于鼠标指针放上去显示数值
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{a} <br/>{b} : {c} ({d}%)"
        // },

        // // visualMap: {
        // //   show: false,
        // //   min: 80,
        // //   max: 600,
        // //   inRange: {
        // //     colorLightness: [0, 1]
        // //   }
        // // },
        // series: [
        //   {
        //     name: "访问来源",
        //     type: "pie",
        //     // 中心图大小
        //     radius: "55%",
        //     center: ["50%", "50%"],
        //     data: [
        //       { value: 335, name: "直接访问" },
        //       { value: 310, name: "邮件营销" },
        //       { value: 274, name: "联盟广告" },
        //       { value: 235, name: "视频广告" },
        //       { value: 400, name: "搜索引擎" }
        //     ].sort(function(a, b) {
        //       return a.value - b.value;
        //     }),
        //     roseType: "radius",
        //     // 设置周边字体背景色
        //     label: {
        //       normal: {
        //         textStyle: {
        //           color: "rgba(255, 255, 255, 0.3)"
        //         }
        //       }
        //     },
        //     // 标识线样式
        //     labelLine: {
        //       normal: {
        //         lineStyle: {
        //           color: "rgba(255, 255, 255, 0.3)"
        //         },
        //         smooth: 0.2,
        //         length: 10,
        //         length2: 20
        //       }
        //     },
        //     // 图形配置
        //     itemStyle: {
        //       normal: {
        //         //   图形颜色
        //         color: "#c23531",
        //         // 图形间阴影效果
        //         shadowBlur: 200,
        //         shadowColor: "rgba(0, 0, 0, 0.5)"
        //       }
        //     },

        //     // 动画效果
        //     animationType: "scale",
        //     animationEasing: "elasticOut",
        //     animationDelay: function(idx) {
        //       return Math.random() * 200;
        //     }
        //   }
        // ]
        // 此处为树状图
        // legend: {},
        // tooltip: {},
        // dataset: {
        //   source: [
        //     ["product", "2015", "2016", "2017"],
        //     ["Matcha Latte", 50.3, 85.8, 93.7],
        //     ["Milk Tea", 83.1, 73.4, 55.1],
        //     ["Cheese Cocoa", 86.4, 65.2, 82.5],
        //     ["Walnut Brownie", 72.4, 53.9, 39.1]
        //   ]
        // },
        // xAxis: { type: "category" },
        // yAxis: {},
        // // Declare several bar series, each will be mapped
        // // to a column of dataset.source by default.
        // series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
        // 折线图
        // 折线图x轴的参数
        xAxis: {
          // data表示底部显示的数据
          data: ["2h", "4h", "6h", "8h", "10h", "12h", "14h","16h","18h","20h","22h","24h"],
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
          splitNumber:10
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
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        // 线条名称
        legend: {
          data: ["橘线", "蓝线"]
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
            data: [10, 12, 61, 34, 15, 60, 65,56,51,64,15,20],
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
            data: [20, 82, 91, 54, 62, 40, 45,20,55,94,10,55,20],
            // 动画速度和动画时间
            animationDuration: 1000,
            animationEasing: "quadraticOut"
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.demo {
  width: 100%;
  height: 400px;
}
</style>
