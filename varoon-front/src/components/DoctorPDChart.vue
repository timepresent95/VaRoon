<template>
  <div>
    <div class="pdChartIn">
      <GChart class="leftPDChart" type="BubbleChart" :data="series1" :options="chartOptions" />
      <GChart class="rightPDChart" type="BubbleChart" :data="series2" :options="chartOptions" />
      <div class="pdChartIntext">
        <div style="margin-bottom: 13px;" class="recentCheck">
          <div class="category" style="float: left">최근 검사일</div>
          <div class="categoryResult">{{recentDate}}</div>
        </div>
        <div class="angle">
          <div class="category" style="float: left">사시각도</div>
          <div class="categoryResult">L-{{angleL}} / R-{{angleR}}</div>
        </div>
      </div>
    </div>
    <div class="selectBox">
      <div class="startDay">시작일</div>
      <select class="startSelector" v-model="startDay">
        <option v-for="(data, index) in recentDates" :key="index" :value="data">{{data}}</option>
      </select>
      <div class="endDay">끝 일</div>
      <select class="endSelector" v-model="endDay">
        <option v-for="(data, index)  in recentDates" :key="index" :value="data">{{data}}</option>
      </select>
    </div>
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";

import { mapActions } from "vuex";

export default {
  components: {
    GChart
  },
  watch: {
    startDay() {
      this.startIndex = 0;
      while (this.recentDates[this.startIndex++] !== this.startDay);
    },
    endDay() {
      this.endIndex = 0;
      while (this.recentDates[this.endIndex++] !== this.endDay);
    },
    startIndex() {
      if (this.startIndex > this.endIndex) {
        alert("wrong!!");
        this.startDay = this.recentDates[0];
      }
      this.chartDataUpdate();
    },
    endIndex() {
      if (this.startIndex > this.endIndex) {
        alert("wrong!!");
        this.endDay = this.recentDates[this.recentDates.length - 1];
      }
      this.chartDataUpdate();
    },
    pdlist() {
      this.rangeDataArr = Array.from(this.pdlist);
      this.recentDates = Array.from(
        this.rangeDataArr,
        rangeDataArr => rangeDataArr.date
      );
      this.leftPDs = Array.from(
        Array.from(this.rangeDataArr, rangeDataArr => rangeDataArr.leftPD),
        data => [data.horizontal, data.vertical]
      );
      this.rightPDs = Array.from(
        Array.from(this.rangeDataArr, data => data.rightPD),
        data => [data.horizontal, data.vertical]
      );
      this.startIndex = 0;
      this.endIndex = this.recentDates.length - 1;
      this.startDay = this.recentDates[this.startIndex];
      this.endDay = this.recentDates[this.endIndex];
      this.angleL = this.leftPDs[this.endIndex];
      this.angleR = this.rightPDs[this.endIndex];
      this.recentDate = this.recentDates[this.endIndex];
      console.log(this.rangeDataArr);
    }
  },
  props: {
    pdlist: {}
  },
  data() {
    return {
      rangeDataArr: [],
      recentDates: [],
      recentDate: "",
      leftPDs: [],
      rightPDs: [],
      name: "ㅇㅇㅇ",
      angleL: [],
      angleR: [],
      startDay: "",
      endDay: "",
      startIndex: 0,
      endIndex: 0,
      series1: [["id", "horizontal", "vartical", "color"], ["", 0, 0, 0, 1]],
      series2: [["id", "horizontal", "vartical", "color"], ["", 0, 0, 0, 1]],
      chartOptions: {
        legend: "none",
        width: 580,
        height: 613,
        colorAxis: { colors: ["black", "white"], legend: { position: "none" } },
        sizeAxis: { minSize: 1, maxSize: 10 },
        bubble: {
          textStyle: { auraColor: "none", color: "#ffffff", fontSize: 0.1 }
        }
      }
    };
  },
  methods: {
    ...mapActions(["PD_CHART"]),
    chartDataUpdate() {
      const nameTag = ["checkupDay", "horizontal", "vartical", "recentPlus"];
      this.series1 = this.leftPDs
        .slice(this.startIndex, this.endIndex + 1)
        .map((data, index) => [
          this.recentDates[this.startIndex + index - 1],
          data[0],
          data[1],
          index
        ]);

      this.series1.unshift(nameTag);
      this.series2 = this.rightPDs
        .slice(this.startIndex, this.endIndex + 1)
        .map((data, index) => [
          this.recentDates[this.startIndex + index - 1],
          data[0],
          data[1],
          index
        ]);
      this.series2.unshift(nameTag);
    }
  }
};
</script>
<style>
.pdChartIn {
  height: 613px;
}
.leftPDChart {
  position: absolute;
}
.rightPDChart {
  position: absolute;
  left: 600px;
}
.pdChartIn .chartVue {
  position: absolute;
}
.pdChartIntext {
  position: absolute;
  left: 552px;
  top: 37px;
  width: 500px;
}
.pdChartIn .category {
  width: 69px;
  height: 16px;
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  text-align: right;
  display: inline-block;
  margin-right: 25px;
}
.pdChartIntext .categoryResult {
  margin-left: 25px;
  height: 16px;
  width: 300px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  display: block;
  color: #000000;
}
.selectBox {
  width: 867px;
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
  left: 507.3px;
  top: 41px;
}
.selectBox .startSelector {
  position: absolute;
  left: 264.3px;
  top: 41px;
}
.selectBox .endSelector {
  position: absolute;
  left: 623.3px;
  top: 41px;
}
</style>
