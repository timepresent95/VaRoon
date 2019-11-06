<template>
  <div>
    <div class="rangeSetting" ref="rangeSet">
      <div class="settingTitle">측정 날짜</div>
      <ul class="rangeUl" v-for="(date, index) in recentDate" :key="index">
        <input class="rangeRadio" type="radio" :value="index" v-model="selectDateIndex" />
        <div class="rangeRadioTag">{{date}}</div>
      </ul>
      <div style="height: 100px;"></div>
    </div>
    <div class="rangeChartIn">
      <div class="rangeBox">
        <div class="rangeboxId">좌안</div>
        <VueApexCharts
          class="rangeChart"
          type="radar"
          width="375"
          height="375"
          :options="chartOptions"
          :series="leftSeries"
        ></VueApexCharts>
      </div>
      <div class="rangeBox">
        <div class="rangeboxId">우안</div>
        <VueApexCharts
          class="rangeChart"
          type="radar"
          width="375"
          height="375"
          :options="chartOptions"
          :series="rightSeries"
        ></VueApexCharts>
      </div>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";

import { mapActions } from "vuex";

export default {
  components: {
    VueApexCharts
  },
  watch: {
    selectDateIndex() {
      this.updateChart();
    }
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
          name: "normal-average",
          data: [31.8, 39.69, 47.39, 52.71, 47.76, 49.23, 46.39, 40.74]
        },
        {
          name: "rangeR",
          data: []
        }
      ],
      rightSeries: [
        {
          name: "normal-average",
          data: [31.8, 39.69, 47.39, 52.71, 47.76, 49.23, 46.39, 40.74]
        },
        {
          name: "rangeL",
          data: []
        }
      ],
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"]
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
            "leftup"
          ]
        }
      }
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
        this.rangeDataArr[this.selectDateIndex].leftRange.leftUp
      ];
      this.leftSeries = [
        {
          name: "normal-average",
          data: [31.8, 39.69, 47.39, 52.71, 47.76, 49.23, 46.39, 40.74]
        },
        {
          name: "rangeL",
          data: newData
        }
      ];
      newData = [
        this.rangeDataArr[this.selectDateIndex].rightRange.up,
        this.rangeDataArr[this.selectDateIndex].rightRange.rightUp,
        this.rangeDataArr[this.selectDateIndex].rightRange.right,
        this.rangeDataArr[this.selectDateIndex].rightRange.rightDown,
        this.rangeDataArr[this.selectDateIndex].rightRange.down,
        this.rangeDataArr[this.selectDateIndex].rightRange.leftDown,
        this.rangeDataArr[this.selectDateIndex].rightRange.left,
        this.rangeDataArr[this.selectDateIndex].rightRange.leftUp
      ];
      this.rightSeries = [
        {
          name: "normal-average",
          data: [31.8, 39.69, 47.39, 52.71, 47.76, 49.23, 46.39, 40.74]
        },
        {
          name: "rangeR",
          data: newData
        }
      ];
    },
    scrollTest() {
      const height = this.$refs.rangeSet.scrollHeight;
      this.$refs.rangeSet.scrollTo(0, height);
    }
  },
  mounted() {
    this.RANGE_CHART()
      .then(data => {
        this.rangeDataArr = data;
        this.recentDate = Array.from(data, data => data.date);
        this.recentDate = this.recentDate.reverse();
        this.selectDateIndex = 0;
      })
      .catch(_ => {
        alert("error");
      });
  },
  updated() {}
};
</script>
<style>
.rangeSetting {
  width: 274px;
  height: 613px;
  overflow: scroll;
  min-height: 613px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  float: left;
  margin-right: 21px;
}
.rangeChartIn {
  float: left;
  width: 867px;
  height: 613px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}
.rangeBox {
  height: 613px;
  width: 433.5px;
  float: left;
}
.rangeboxId {
  width: 43px;
  height: 27px;
  font-family: NanumBarunGothicOTF;
  font-size: 24px;
  text-align: left;
  color: #000000;
  position: absolute;
  left: 215.1px;
  top: 93px;
}
.rangeChart {
  position: absolute;
  left: 45px;
  top: 120px;
}
.settingTitle {
  height: 20px;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  line-height: 2.5;
  text-align: left;
  color: #000000;
  position: relative;
  top: 36px;
  left: 49.1px;
  margin-bottom: 26px;
}
.rangeUl {
  position: relative;
  top: 36px;
  left: 49.1px;
  margin-top: 20px;
  height: 20px;
  margin-left: 10px;
}
.rangeRadio {
  height: 20px;
  float: left;
}
.rangeRadioTag {
  width: 90px;
  float: left;
  text-align: right;
}
</style>