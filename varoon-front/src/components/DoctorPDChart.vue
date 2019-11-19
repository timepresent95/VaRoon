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
          <div
            class="categoryResult"
          >L-[{{String(angleL[0]).slice(0,6)}},{{String(angleL[1]).slice(0,6)}}] / R-[{{String(angleR[0]).slice(0,6)}},{{String(angleR[1]).slice(0,6)}}]</div>
        </div>
      </div>
      <div class="pdLegend">
        <div v-for="(item, index) in endIndex-startIndex+1" :key="index" class="cirecleBox">
          <div :class="pdCircle_idx(index+1, endIndex-startIndex+1)"></div>
          <p class="circleText">{{recentDatesSlice[startIndex+index-1]}}</p>
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

import { mapActions, mapState } from "vuex";

export default {
  components: {
    GChart
  },
  computed: {
    ...mapState(["Docpdlist"])
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
    startIndex(newVal, oldVal) {
      if (this.startIndex > this.endIndex) {
        this.startDay = this.recentDates[oldVal - 1];
        alert("wrong!!");
      } else if (this.endIndex - this.startIndex > 4) {
        this.endDay = this.recentDates[this.startIndex + 3];
      }
      this.chartDataUpdate();
    },
    endIndex(newVal, oldVal) {
      if (this.startIndex > this.endIndex) {
        this.endDay = this.recentDates[oldVal - 1];
        alert("wrong!!");
      } else if (this.endIndex - this.startIndex > 4) {
        this.startDay = this.recentDates[this.endIndex - 5];
      }
      this.chartDataUpdate();
    }
  },
  created() {
    this.rangeDataArr = Array.from(this.Docpdlist);
    this.recentDates = Array.from(
      this.rangeDataArr,
      rangeDataArr => rangeDataArr.date
    );
    this.leftPDs = Array.from(
      Array.from(this.rangeDataArr, rangeDataArr => rangeDataArr.leftPD),
      data => [data.horizontal, data.vertical]
    );
    this.recentDatesSlice = Array.from(this.recentDates, data => data.slice(5));
    this.rightPDs = Array.from(
      Array.from(this.rangeDataArr, data => data.rightPD),
      data => [data.horizontal, data.vertical]
    );
    this.startIndex = this.recentDates.length - 5;
    this.endIndex = this.recentDates.length - 1;
    this.startDay = this.recentDates[this.startIndex];
    this.endDay = this.recentDates[this.endIndex];
    this.angleL = this.leftPDs[this.endIndex];
    this.angleR = this.rightPDs[this.endIndex];
    this.recentDate = this.recentDates[this.endIndex];
  },
  data() {
    return {
      rangeDataArr: [],
      recentDatesSlice: [],
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
      series1: [["id", "horizontal", "vartical", "color"], ["1", 0, 0, 0]],
      series2: [["id", "horizontal", "vartical", "color"], ["2", 0, 0, 0]],
      chartOptions: {
        legend: "none",
        width: 430,
        height: 413,
        colorAxis: {
          colors: ["white", "Blue"],
          legend: { position: "none" }
        },
        sizeAxis: { minSize: 1, maxSize: 10 },
        bubble: {
          textStyle: { auraColor: "none", color: "#ffffff", fontSize: 0.1 }
        },
        hAxis: { title: "Horizontal", maxValue: 20, minValue: -20 },
        vAxis: { title: "Vertical", maxValue: 20, minValue: -20 }
      }
    };
  },
  methods: {
    ...mapActions(["PD_CHART"]),
    chartDataUpdate() {
      const nameTag = ["checkupDay", "horizontal", "vartical", "dataNum"];
      this.series1 = this.leftPDs
        .slice(this.startIndex - 1, this.endIndex)
        .map((data, index) => [
          this.recentDates[this.startIndex + index - 1],
          data[0],
          data[1],
          this.recentDates.length - this.endIndex + index
        ]);
      this.series1.unshift(nameTag);
      this.series2 = this.rightPDs
        .slice(this.startIndex - 1, this.endIndex)
        .map((data, index) => [
          this.recentDates[this.startIndex + index - 1],
          data[0],
          data[1],
          this.startIndex + index
        ]);
      this.series2.unshift(nameTag);
    },
    pdCircle_idx(idx, total) {
      if (total === 4 && idx >= 3) return `pdCircle${idx + 1}`;
      else if (total === 3) return `pdCircle${idx * 2 - 1}`;
      else if (total === 2 && idx == 2) return `pdCircle5`;
      else if (total === 1) return `pdCircle5`;
      else return `pdCircle${idx}`;
    }
  }
};
</script>
<style>
.pdChartIn {
  height: 513px;
}
.leftPDChart {
  position: absolute;
  top: 100px;
}
.rightPDChart {
  position: absolute;
  top: 100px;
  left: 400px;
}
.pdChartIn .chartVue {
  position: absolute;
}
.pdChartIntext {
  position: absolute;
  left: 502px;
  top: 87px;
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

.pdCircle5 {
  width: 15px;
  height: 15px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: rgba(51, 77, 247, 1);
}

.pdCircle4 {
  width: 15px;
  height: 15px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: rgba(99, 109, 247, 1);
}

.pdCircle3 {
  width: 15px;
  height: 15px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: rgba(152, 156, 249, 1);
}

.pdCircle2 {
  width: 15px;
  height: 15px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: rgba(203, 205, 251, 1);
}

.pdCircle1 {
  width: 15px;
  height: 15px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: #ffffff;
}

.pdCircle {
  width: 30px;
  height: 30px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: rgba(51, 77, 247, 1);
}
.pdLegend {
  width: 1000px;
  position: absolute;
  left: 240px;
  top: 550px;
}
.cirecleBox {
  width: 60px;
  height: 50px;
  float: left;
  padding-left: 10px;
}
.circleText {
  text-align: center;
  position: relative;
  left: -5px;
}
</style>
