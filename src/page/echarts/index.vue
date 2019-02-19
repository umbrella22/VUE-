<template>
  <div>
    <echartsLine :chart-data="chartData"></echartsLine>
    <Button type="primary" @click="click">切换数据</Button>
    <!-- <progress-bar value="55" :options="bardata"></progress-bar> -->
    <echartsPie :chart-data="echartsPiedata"></echartsPie>
  </div>
</template>
<script>
import echartsLine from "@/components/echarts";
import echartsPie from "@/components/echartsPie";
import progressBar from "svg-progress-bar";
export default {
  components: { echartsLine, echartsPie },
  data: () => ({
    chartData: {
      Odata: [10, 12, 61, 34, 15, 60, 65, 56, 51, 64, 15, 20],
      Bdata: [20, 82, 91, 54, 62, 40, 45, 20, 55, 94, 10, 55],
      Xdata:["2h", "4h", "6h", "8h", "10h", "12h", "14h","16h","18h","20h","22h","24h"]
    },
    chData: {
      Odata: [],
      Bdata: [],
      Xdata: []
    },
    echartsPiedata:{
      total:100,
      sop:50
    }
  }),
  computed: {
    bardata() {
      return {
        radius: 35.75,
        text: function(value) {
          return (
            this.htmlifyNumber(value) +
            '<span style="font-size: 0.4em;">%</span>'
          );
        },
        textColor: "rgb(33, 150, 243)",
        pathColors: ['#999','#60B5EC'],
        // pathColors: ['#60B5EC','#999'],
        circleLineCap: 'round',
        varyStrokeArray: [5,5]
      };
      
    }
  },
  methods: {
    click() {
      let temp = this.chartData;
      this.chData.Odata = this.chartData.Bdata;
      this.chData.Bdata = this.chartData.Odata;
      this.chData.Xdata = this.chartData.Xdata;
      console.log(this.chData);
      this.chartData = this.chData;
    }
  }
};
</script>
<style scoped>
</style>
