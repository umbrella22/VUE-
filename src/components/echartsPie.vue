<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>
<script>
export default {
  // 接受外部传值,可更改类,宽高和数据,其中数据为必要元素
  name: "echartsLine",
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
    setOptions({ total, sop } = {}) {
      let ptg = (Number(sop) / Number(total)) * 100;
      this.chart.setOption({
        color: ["#BBBBBB", "#60B5EC"],
        series: [
          {
            type: "pie",
            radius: ["18%", "20%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "center",
                textStyle: {
                  fontSize: 20
                },
                formatter: function() {
                  return parseInt(ptg) + "%";
                }
              }
            },
            data: [
              // 灰色
              { value: total - sop },
              // 蓝色
              { value: sop }
            ]
          }
        ]
      });
      this.chart.resize();
    }
  },
  beforeDestroy() {
    this.chart.dispose();
    this.chart = null;
  }
};
</script>
