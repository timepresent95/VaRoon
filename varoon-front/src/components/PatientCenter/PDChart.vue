<template>
  <article class="pd-chart">
    <header class="pd-chart-header">
      <div class="pd-legend">
        <div
          v-for="(item, index) in endIndex - startIndex + 1"
          :key="index"
          class="cirecle-box"
        >
          <div
            :class="pdCircle_idx(index + 1, endIndex - startIndex + 1)"
          ></div>
          <p class="circle-text">
            {{ recentDatesSlice[startIndex + index - 1] }}
          </p>
        </div>
      </div>
      <div class="text">
        <p class="category">최근 검사일 {{ recentDate }}</p>
        <p class="category">
          사시각도 L-[{{ String(angleL[0]).slice(0, 6) }},{{
            String(angleL[1]).slice(0, 6)
          }}] / R-[{{ String(angleR[0]).slice(0, 6) }},{{
            String(angleR[1]).slice(0, 6)
          }}]
        </p>
      </div>
    </header>
    <div class="pd-chart-in">
      <GChart
        class="left-pd-chart"
        type="BubbleChart"
        :data="series1"
        :options="chartOptions2"
      />
      <GChart
        class="right-pd-chart"
        type="BubbleChart"
        :data="series2"
        :options="chartOptions1"
      />
    </div>
    <div class="select-box">
      <div class="start-day">시작일</div>
      <select class="start-selector" v-model="startDay">
        <option v-for="(data, index) in recentDates" :key="index" :value="data">
          {{ data }}
        </option>
      </select>
      <div class="end-day">끝 일</div>
      <select class="end-selector" v-model="endDay">
        <option v-for="(data, index) in recentDates" :key="index" :value="data">
          {{ data }}
        </option>
      </select>
    </div>
  </article>
</template>
<script>
import { GChart } from "vue-google-charts";

import { mapActions } from "vuex";

export default {
  components: {
    GChart,
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
    },
  },
  data() {
    return {
      rangeDataArr: [],
      recentDates: [],
      recentDatesSlice: [],
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
      series1: [
        ["id", "horizontal", "vartical", "color"],
        ["1", 0, 0, 0],
      ],
      series2: [
        ["id", "horizontal", "vartical", "color"],
        ["2", 0, 0, 0],
      ],
      chartOptions1: {
        legend: "none",
        width: 580,
        height: 513,
        colorAxis: {
          colors: ["white", "Blue"],
          legend: { position: "none" },
        },
        sizeAxis: { minSize: 1, maxSize: 10 },
        bubble: {
          textStyle: { auraColor: "none", color: "#ffffff", fontSize: 0.1 },
        },
        title: "우안",
        titleTextStyle: {
          fontSize: 20,
          bold: true,
        },
        hAxis: { title: "Horizontal", maxValue: 20, minValue: -20 },
        vAxis: { title: "Vertical", maxValue: 20, minValue: -20 },
      },
      chartOptions2: {
        legend: "none",
        width: 580,
        height: 513,
        colorAxis: {
          colors: ["white", "Blue"],
          legend: { position: "none" },
        },
        sizeAxis: { minSize: 1, maxSize: 10 },
        bubble: {
          textStyle: { auraColor: "none", color: "#ffffff", fontSize: 0.1 },
        },
        title: "좌안",
        titleTextStyle: {
          fontSize: 20,
          bold: true,
        },
        hAxis: { title: "Horizontal", maxValue: 20, minValue: -20 },
        vAxis: { title: "Vertical", maxValue: 20, minValue: -20 },
      },
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
          this.recentDates.length - this.endIndex + index,
        ]);
      this.series1.unshift(nameTag);
      this.series2 = this.rightPDs
        .slice(this.startIndex - 1, this.endIndex)
        .map((data, index) => [
          this.recentDates[this.startIndex + index - 1],
          data[0],
          data[1],
          this.startIndex + index,
        ]);
      this.series2.unshift(nameTag);
    },
    pdCircle_idx(idx, total) {
      if (total === 4 && idx >= 3) return `pdCircle${idx + 1}`;
      else if (total === 3) return `pdCircle${idx * 2 - 1}`;
      else if (total === 2 && idx == 2) return `pd-circle5`;
      else if (total === 1) return `pd-circle5`;
      else return `pdCircle${idx}`;
    },
  },
  created() {
    this.PD_CHART().then((data) => {
      this.rangeDataArr = data;
      console.log(data);
      this.recentDates = Array.from(data, (data) => data.date);
      this.leftPDs = Array.from(
        Array.from(data, (data) => data.leftPD),
        (data) => [data.horizontal, data.vertical]
      );
      this.recentDatesSlice = Array.from(this.recentDates, (data) =>
        data.slice(5)
      );
      this.rightPDs = Array.from(
        Array.from(data, (data) => data.rightPD),
        (data) => [data.horizontal, data.vertical]
      );
      this.startIndex = this.recentDates.length - 5;
      this.endIndex = this.recentDates.length - 1;
      this.startDay = this.recentDates[this.startIndex];
      this.endDay = this.recentDates[this.endIndex];
      this.angleL = this.leftPDs[this.endIndex];
      this.angleR = this.rightPDs[this.endIndex];
      this.recentDate = this.recentDates[this.endIndex];
    });
  },
};
</script>
<style>
.pd-chart-header {
  display: flex;
  width: 1160px;
  justify-content: flex-end;
  margin: 20px auto;
}
.pd-chart-in {
  width: 1160px;
  height: 613px;
  display: flex;
  margin: 0 auto;
}
.pd-chart-in .category {
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  margin-right: 25px;
}
.select-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1160px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}
.pd-circle5 {
  width: 15px;
  height: 15px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: rgba(51, 77, 247, 1);
}

.pd-circle4 {
  width: 15px;
  height: 15px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: rgba(99, 109, 247, 1);
}

.pd-circle3 {
  width: 15px;
  height: 15px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: rgba(152, 156, 249, 1);
}

.pd-circle2 {
  width: 15px;
  height: 15px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: rgba(203, 205, 251, 1);
}

.pd-circle1 {
  width: 15px;
  height: 15px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: #ffffff;
}

.pd-circle {
  width: 30px;
  height: 30px;
  border: 0.5px solid rgb(204, 204, 205);
  border-radius: 50px;
  background: rgba(51, 77, 247, 1);
}
.cirecle-box {
  width: 60px;
  height: 50px;
  padding-left: 10px;
}
.circle-text {
  text-align: center;
}
</style>
