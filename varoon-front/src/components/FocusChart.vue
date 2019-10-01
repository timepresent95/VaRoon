<template>
  <div>
    <div class="pdChartIn">
      <VueApexCharts width="1160" height="613" type="bar" :options="chartOptions" :series="series"></VueApexCharts>
      <div class="text">
        <div style="margin-bottom: 13px;" class="recentCheck">
          <span class="category">최근 검사일</span>
          <span class="categoryResult">{{recentDate}}</span>
        </div>
        <div class="angle">
          <span class="category">사시각도</span>
          <span class="categoryResult">L-{{angleL}} / R-{{angleR}}</span>
        </div>
      </div>
    </div>
    <div class="selectBox">
      <div class="startDay">시작일</div>
      <select class="startSelector" v-model="startDay">
        <option value="2019.09.01">2019.09.01</option>
        <option value="2019.09.02">2019.09.02</option>
        <option value="2019.09.03">2019.09.03</option>
        <option value="2019.09.04">2019.09.04</option>
        <option value="2019.09.05">2019.09.05</option>
        <option value="2019.09.06">2019.09.06</option>
        <option value="2019.09.07">2019.09.07</option>
        <option value="2019.09.08">2019.09.08</option>
        <option value="2019.09.09">2019.09.09</option>
        <option value="2019.09.10">2019.09.10</option>
        <option value="2019.09.11">2019.09.11</option>
        <option value="2019.09.12">2019.09.12</option>
      </select>
      <div class="endDay">끝 일</div>
      <select class="endSelector" v-model="endDay">
        <option value="2019.09.01">2019.09.01</option>
        <option value="2019.09.02">2019.09.02</option>
        <option value="2019.09.03">2019.09.03</option>
        <option value="2019.09.04">2019.09.04</option>
        <option value="2019.09.05">2019.09.05</option>
        <option value="2019.09.06">2019.09.06</option>
        <option value="2019.09.07">2019.09.07</option>
        <option value="2019.09.08">2019.09.08</option>
        <option value="2019.09.09">2019.09.09</option>
        <option value="2019.09.10">2019.09.10</option>
        <option value="2019.09.11">2019.09.11</option>
        <option value="2019.09.12">2019.09.12</option>
      </select>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    VueApexCharts
  },
  watch: {
    startDay() {},
    endDay() {}
  },
  data() {
    return {
      name: "ㅇㅇㅇ",
      recentDate: "19.05.01",
      angleL: 12,
      angleR: 13,
      startDay: "2019.09.01",
      endDay: "2019.09.12",
      series: [
        {
          name: "angleL",
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          name: "angleR",
          data: [53, 32, 33, 52, 13, 44, 32]
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
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
        }
      }
    };
  }
};
</script>
<style>
.pdChartIn {
  height: 613px;
}
.pdChartIn .chartVue {
  position: absolute;
}
.pdChartIn .text {
  position: absolute;
  left: 852px;
  top: 37px;
  width: 500px;
}
.pdChartIn .category {
  width: 69px;
  height: 16px;
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: right;
  color: #000000;
  display: inline-block;
}
.pdChartIn .categoryResult {
  margin-left: 25px;
  width: 86px;
  height: 16px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 14px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
  color: #000000;
}
.selectBox {
  width: 1159.5px;
  height: 100px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  position: absolute;
  left: 0px;
  top: 637px;
}
.selectBox .startDay {
  position: absolute;
  left: 106.3px;
  top: 41px;
}
.selectBox .endDay {
  position: absolute;
  left: 707.3px;
  top: 41px;
}
.selectBox .startSelector {
  position: absolute;
  left: 264.3px;
  top: 41px;
}
.selectBox .endSelector {
  position: absolute;
  left: 823.3px;
  top: 41px;
}
</style>
