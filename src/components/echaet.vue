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
        // 折线图标题
        // title: {
        //   text: "折线图主标题",
        //   left: "center",
        //   subtext: "副标题"
        // },
        // xAxis: {
        //   // data表示底部显示的数据
        //   data: Xdata,
        //   // 影响折线图是否从头开始
        //   boundaryGap: false,
        //   // 未发现明显的改变
        //   axisTick: {
        //     show: false
        //   },
        //   // 设置X轴的轴线颜色
        //   axisLine: {
        //     lineStyle: {
        //       color: "#E6E6F4"
        //     }
        //   },
        //   // 设置X轴下的文字颜色
        //   axisLabel: {
        //     textStyle: {
        //       color: "#3B3B53"
        //     }
        //   }
        // },
        // // 折线图Y轴参数
        // yAxis: {
        //   // 设置Y轴的轴线颜色
        //   axisLine: {
        //     lineStyle: {
        //       color: "#E6E6F4"
        //     }
        //   },
        //   // 设置X轴下文字颜色
        //   axisLabel: {
        //     textStyle: {
        //       color: "#C8C8C8"
        //     }
        //   },
        //   axisTick: {
        //     show: false
        //   },
        //   splitNumber: 10
        // },
        // // 鼠标悬浮时显示此项
        // // tooltip: {
        // //   trigger: "axis",
        // //   axisPointer: {
        // //     type: "cross"
        // //   },
        // //   padding: [5, 10]
        // // },
        // // 设置图表在页面中的位置以及是否显示边数据
        // grid: {
        //   left: "3%",
        //   right: "4%",
        //   bottom: 39,
        //   containLabel: true
        // },
        // // 线条名称
        // legend: {
        //   data: [
        //     {
        //       name: "橘线",
        //       icon: "rect",
        //       textStyle: {
        //         color: "#333333"
        //       }
        //     },
        //     {
        //       name: "蓝线",
        //       icon: "rect",
        //       textStyle: {
        //         color: "#333333"
        //       }
        //     }
        //   ],
        //   y: "bottom"
        // },
        // // 线条样式设置
        // series: [
        //   {
        //     name: "橘线",
        //     // 设置是否平缓
        //     // smooth: true,
        //     type: "line",
        //     color:'#EEB947',
        //     itemStyle: {
        //       normal: {
        //         // 设置折线中的线条粗细和颜色
        //         lineStyle: {
        //           // 系列级个性化折线样式
        //           width: 2,
        //           color: "#E5BD62" //折线的颜色
        //         }
        //       },
        //       // 点击折线之后,上面每个点的颜色
        //       // emphasis: {
        //       //   color: "#E5BD62",
        //       //   lineStyle: {
        //       //     // 系列级个性化折线样式
        //       //     width: 1,
        //       //     color: "#E5BD62"
        //       //   }
        //       // }
        //     }, //线条样式
        //     symbolSize: 0, //折线点的大小
        //     // 是否显示每个点的数据,并确定其显示的位置
        //     // label: {
        //     //   normal: {
        //     //     show: false,
        //     //     position: "top"
        //     //   }
        //     // },
        //     // 图形区域填充样式
        //     areaStyle: {
        //       normal: {
        //         //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
        //         color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //           {
        //             offset: 0,
        //             color: "#FBEFDB" // 0% 处的颜色
        //           },
        //           {
        //             offset: 0.8,
        //             color: "#fff" // 100% 处的颜色
        //           },
        //           {
        //             offset: 1,
        //             color: "#fff" // 100% 处的颜色
        //           }
        //         ]) //背景渐变色
        //       }
        //     },
        //     data: Odata,
        //     animationDuration: 1000,
        //     animationEasing: "cubicInOut"
        //   },
        //   {
        //     name: "蓝线",
        //     // smooth: true,
        //     type: "line",
        //     itemStyle: {
        //       normal: {
        //         // 
        //         color:'#60B5EC',
        //         // 设置折线中的线条粗细和颜色
        //         lineStyle: {
        //           // 系列级个性化折线样式
        //           width: 2,
        //           color: "#60B5EC" //折线的颜色
        //         }
        //       },
        //       // 点击折线之后,上面每个点的颜色
        //       // emphasis: {
        //       //   color: "#60B5EC",
        //       //   lineStyle: {
        //       //     // 系列级个性化折线样式
        //       //     width: 1,
        //       //     color: "#60B5EC"
        //       //   }
        //       // }
        //     }, //线条样式
        //     symbolSize: 0, //折线点的大小
        //     // 是否显示每个点的数据,并确定位置
        //     // label: {
        //     //   normal: {
        //     //     show: false,
        //     //     position: "top"
        //     //   }
        //     // },
        //     // 图形区域填充样式
        //     areaStyle: { normal: {
        //       //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
        //         color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //           {
        //             offset: 0,
        //             color: "#C8E7FB" // 0% 处的颜色
        //           },
        //           {
        //             offset: 0.8,
        //             color: "#fff" // 100% 处的颜色
        //           },
        //           {
        //             offset: 1,
        //             color: "#fff" // 100% 处的颜色
        //           }
        //         ]), //背景渐变色
        //     } },

        //     // 每个点的数据
        //     data: Bdata,
        //     // 动画速度和动画时间
        //     animationDuration: 1000,
        //     animationEasing: "quadraticOut"
        //   }
        // ]
        // 环状图
        // 设置颜色,顺时针渲染颜色
        color: ["#BBBBBB", "#60B5EC"],
        series: [
          {
            // 设置图形属性为饼状图
            type: "pie",
            // 设置内环和外环
            radius: ["13%", "16%"],
            // 设置是否可以挪动文字
            avoidLabelOverlap: false,
            // 设置中间百分比数字
            label: {
              normal: {
                show: true,
                position: "center",
                textStyle: {
                  fontSize: 20,
                  fontWeight: "bold"
                },
                // 设置文字,使用回调函数
                formatter: function() {
                  return "20%";
                }
              }
            },
            // 设置环的进度
            data: [
              // 灰色
              { value: total - sop },
              // 蓝色
              { value: sop }
            ]
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
