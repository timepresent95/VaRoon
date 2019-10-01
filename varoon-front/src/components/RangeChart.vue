<template>
  <div>
    <div class="rangeSetting">
      <div class="settingTitle">측정 날짜</div>
      <ul>
        <input type="radio" />
      </ul>
    </div>
    <div class="rangeChartIn">
      <div class="rangeBox">
        <div class="rangeboxId">우안</div>
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
        <div class="rangeboxId">좌안</div>
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

export default {
  components: {
    VueApexCharts
  },
  data() {
    return {
      recentDate: "19.05.01",
      angleL: 12,
      angleR: 13,
      startDay: "2019.09.01",
      endDay: "2019.09.12",
      leftSeries: [
        {
          name: "normal-average",
          data: [30, 35, 50, 45, 40, 45, 50, 35]
        },
        {
          name: "rangeR",
          data: [53, 32, 33, 52, 13, 44, 32, 10]
        }
      ],
      rightSeries: [
        {
          name: "normal-average",
          data: [30, 35, 50, 45, 40, 45, 50, 35]
        },
        {
          name: "rangeL",
          data: [0, 32, 33, 52, 13, 44, 32, 10]
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
  }
};
</script>
<style>
.rangeSetting {
  width: 274px;
  height: 613px;
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
.rangeSetting ul {
  position: relative;
  top: 36px;
  left: 49.1px;
  margin-bottom: 20px;
}
</style>