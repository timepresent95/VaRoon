<template>
  <div>
    <div class="rangeChartIn">
      <div class="rangeBox">
        <div class="rangeboxId">우안</div>
        <VueApexCharts
          class="rangeChart"
          type="radar"
          width="325"
          height="325"
          :options="chartOptions"
          :series="leftSeries"
        ></VueApexCharts>
      </div>
      <div class="rangeBox">
        <div class="rangeboxId">좌안</div>
        <VueApexCharts
          class="rangeChart"
          type="radar"
          width="325"
          height="325"
          :options="chartOptions"
          :series="rightSeries"
        ></VueApexCharts>
      </div>
      <div class="settingTitle">측정 날짜</div>
      <div class="rangeSetting">
        <ul v-for="(date, index) in recentDate" :key="index">
          <input type="radio" :value="index" v-model="selectDateIndex" />
          {{date}}
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
/*
TODO:

  그래프 위치 조정해야함

  아직 props값이 들어오기 전에 처리


*/
import VueApexCharts from "vue3-apexcharts";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    VueApexCharts
  },
  computed: {
    ...mapState(["DocrangesList"])
  },
  watch: {
    selectDateIndex() {
      this.updateChart();
    }
  },
  created() {
    this.rangeDataArr = Array.from(this.DocrangesList).reverse();
    this.recentDate = Array.from(this.rangeDataArr, data => data.date);
    this.selectDateIndex = 0;
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
            "leftup",
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
      let newData_init = [
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.up,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.rightUp,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.right,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.rightDown,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.down,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.leftDown,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.left,
        this.rangeDataArr[this.rangeDataArr.length - 1].leftRange.leftUp
      ];
      this.leftSeries = [
        {
          name: "init_L",
          data: newData_init
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
      newData_init = [
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.up,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.rightUp,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.right,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.rightDown,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.down,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.leftDown,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.left,
        this.rangeDataArr[this.rangeDataArr.length - 1].rightRange.leftUp
      ];
      this.rightSeries = [
        {
          name: "init_R",
          data: newData_init
        },
        {
          name: "rangeR",
          data: newData
        }
      ];
    }
  }
};
</script>
<style>
.rangeSetting {
  height: 320px;
  width: 274px;
  min-height: 213px;
  border-radius: 3px;
  background-color: #ffffff;
  float: left;
  margin-right: 21px;
  overflow: scroll;
  position: absolute;
  top: 480px;
  left: 320px;
}
.rangeChartIn {
  width: 867px;
  height: 813px;
  border-radius: 3px;
  background-color: #ffffff;
}
.rangeBox {
  height: 433px;
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
  position: absolute;
  top: 500px;
  left: 200px;
  margin-bottom: 26px;
}
.rangeSetting ul {
  position: relative;
  left: 49.1px;
  margin-bottom: 20px;
}
</style>
