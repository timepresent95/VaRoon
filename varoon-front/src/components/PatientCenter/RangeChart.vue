<template>
  <article class="range-chart-component">
    <div class="range-setting" ref="rangeSet">
      <div class="setting-title">측정 날짜</div>
      <ul class="range-ul" v-for="(date, index) in recentDate" :key="index">
        <input
          class="range-radio"
          type="radio"
          :value="index"
          v-model="selectDateIndex"
        />
        <div class="range-radio-tag">{{ date }}</div>
      </ul>
      <div style="height: 100px"></div>
    </div>
    <div class="range-chart-in">
      <div class="range-box">
        <div class="rangebox-id">좌안</div>
        <VueApexCharts
          class="range-chart"
          type="radar"
          width="375"
          height="375"
          :options="chartOptions"
          :series="leftSeries"
        ></VueApexCharts>
        <div class="click-induce">&uarr;Click this</div>
      </div>
      <div class="range-box">
        <div class="rangebox-id">우안</div>
        <VueApexCharts
          class="range-chart"
          type="radar"
          width="375"
          height="375"
          :options="chartOptions"
          :series="rightSeries"
        ></VueApexCharts>
        <div class="click-induce">&uarr;Click this</div>
      </div>
    </div>
  </article>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";

import { mapActions } from "vuex";

export default {
  components: {
    VueApexCharts,
  },
  watch: {
    selectDateIndex() {
      this.updateChart();
    },
  },
  data() {
    return {
      rangeDataArr: [],
      recentDate: [],
      selectDateIndex: "",
      angleL: 12,
      angleR: 13,
      startDay: "2019.09.01",
      endDay: "2019.09.12",
      leftSeries: [
        {
          name: "init_R",
          data: [31.8, 39.69, 47.39, 52.71, 47.76, 49.23, 46.39, 40.74],
        },
        {
          name: "rangeR",
          data: [],
        },
      ],
      rightSeries: [
        {
          name: "init_L",
          data: [31.8, 39.69, 47.39, 52.71, 47.76, 49.23, 46.39, 40.74],
        },
        {
          name: "rangeL",
          data: [],
        },
      ],
      chartOptions: {
        legend: {
          show: true,
          fontSize: "22px",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },

        xaxis: {
          categories: [
            "up",
            "rightup",
            "right",
            "rightdown",
            "down",
            "leftdown",
            "left",
            "leftup",
          ],
        },
      },
    };
  },
  methods: {
    ...mapActions(["RANGE_CHART"]),
    updateChart() {
      let newData = [
        this.rangeDataArr[this.selectDateIndex].leftRange.up,
        this.rangeDataArr[this.selectDateIndex].leftRange.rightUp,
        this.rangeDataArr[this.selectDateIndex].leftRange.right,
        this.rangeDataArr[this.selectDateIndex].leftRange.rightDown,
        this.rangeDataArr[this.selectDateIndex].leftRange.down,
        this.rangeDataArr[this.selectDateIndex].leftRange.leftDown,
        this.rangeDataArr[this.selectDateIndex].leftRange.left,
        this.rangeDataArr[this.selectDateIndex].leftRange.leftUp,
      ];
      let newData_init = [
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.up,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.rightUp,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.right,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.rightDown,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.down,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.leftDown,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.left,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.leftUp,
      ];
      this.leftSeries = [
        {
          name: "init_L",
          data: newData_init,
        },
        {
          name: "rangeL",
          data: newData,
        },
      ];
      newData = [
        this.rangeDataArr[this.selectDateIndex].rightRange.up,
        this.rangeDataArr[this.selectDateIndex].rightRange.rightUp,
        this.rangeDataArr[this.selectDateIndex].rightRange.right,
        this.rangeDataArr[this.selectDateIndex].rightRange.rightDown,
        this.rangeDataArr[this.selectDateIndex].rightRange.down,
        this.rangeDataArr[this.selectDateIndex].rightRange.leftDown,
        this.rangeDataArr[this.selectDateIndex].rightRange.left,
        this.rangeDataArr[this.selectDateIndex].rightRange.leftUp,
      ];
      newData_init = [
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.up,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.rightUp,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.right,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.rightDown,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.down,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.leftDown,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.left,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.leftUp,
      ];
      this.rightSeries = [
        {
          name: "init_R",
          data: newData_init,
        },
        {
          name: "rangeR",
          data: newData,
        },
      ];
    },
    scrollTest() {
      const height = this.$refs.rangeSet.scrollHeight;
      this.$refs.rangeSet.scrollTo(0, height);
    },
  },
  mounted() {
    this.RANGE_CHART()
      .then((data) => {
        this.rangeDataArr = data.reverse();
        this.recentDate = Array.from(data, (data) => data.date);
        this.selectDateIndex = 0;
      })
      .catch((_) => {
        alert("error");
      });
  },
  updated() {},
};
</script>
<style>
.range-chart-component {
  display: flex;
  margin: 30px auto;
  width: 1162px;
}
.range-setting {
  width: 274px;
  height: 613px;
  overflow: scroll;
  min-height: 613px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  margin-right: 21px;
}
.range-chart-in {
  display: flex;
  width: 867px;
  height: 613px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}
.range-box {
  height: 613px;
  width: 433.5px;
}
.rangebox-id {
  width: 43px;
  height: 27px;
  font-family: NanumBarunGothicOTF;
  font-size: 24px;
  text-align: left;
  color: #000000;
}
.setting-title {
  height: 20px;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  line-height: 2.5;
  text-align: left;
  color: #000000;
  margin-bottom: 26px;
}
.range-ul {
  margin-top: 20px;
  height: 20px;
  margin-left: 10px;
}
.range-radio {
  height: 20px;
}
.range-radio-tag {
  width: 90px;
  text-align: right;
}
</style>
