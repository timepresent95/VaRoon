<template>
  <div>
    <div class="focusSetting">
      <div class="startDay">시작일</div>
      <select class="startSelector" v-model="startDay">
        <option v-for="(data, index) in recentDates" :key="index" :value="data">{{data}}</option>
      </select>
      <div class="endDay">끝 일</div>
      <select class="endSelector" v-model="endDay">
        <option v-for="(data, index)  in recentDates" :key="index" :value="data">{{data}}</option>
      </select>
    </div>
    <div class="focusChartIn">
      <VueApexCharts type="line" width="867" height="613" :options="chartOptions" :series="series"></VueApexCharts>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    VueApexCharts
  },
  watch: {
    startDay() {
      this.startIndex = 0;
      while (this.recentDates[this.startIndex] !== this.startDay)
        this.startIndex++;
    },
    endDay() {
      this.endIndex = 0;
      while (this.recentDates[this.endIndex] !== this.endDay) this.endIndex++;
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
    }
  },
  data() {
    return {
      recentDates: [],
      gameDatas: [],
      blurDatas: [],
      pdDatas: [],
      focusDatas: [],
      recentDate: "",
      startDay: "",
      endDay: "",
      startIndex: 0,
      endIndex: 0,
      series: [
        {
          name: "Focus",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chartOptions: {
        tooltip: {
          custom: this.cusotm_tooltip
        },
        markers: {
          size: 3,
          hover: {
            size: 6
          },
          colors: "#636df7"
        },
        stroke: {
          width: [3],
          colors: "#636df7"
        }
      }
    };
  },
  methods: {
    ...mapActions(["FOCOUS_CHART"]),
    chartDataUpdate() {
      this.series = [
        {
          name: "Focus",
          data: this.focusDatas.slice(this.startIndex, this.endIndex + 1)
        }
      ];
    },
    cusotm_tooltip({ series, seriesIndex, dataPointIndex }) {
      return (
        `<div>Focus: ${series[seriesIndex][dataPointIndex]}</div>` +
        `<div>Game: ${this.gameDatas[this.startIndex + dataPointIndex]}</div>` +
        `<div>Blur: ${this.blurDatas[this.startIndex + dataPointIndex]}</div>` +
        `<div>Recent: ${
          this.recentDates[this.startIndex + dataPointIndex]
        }</div>` +
        `<div>PD-Horizontal: ${this.pdDatas[this.startIndex + dataPointIndex].horizontal}</div>` +
        `<div>PD-vertical: ${this.pdDatas[this.startIndex + dataPointIndex].vertical}</div>`
      );
    }
  },
  created() {
    this.FOCOUS_CHART().then(data => {
      console.log(data);
      this.recentDates = Array.from(data.playLogList, data => data.date);
      this.gameDatas = Array.from(data.playLogList, data => data.curGame);
      this.blurDatas = Array.from(data.playLogList, data => data.blur);
      this.pdDatas = Array.from(data.playLogList, data => data.pd);
      this.focusDatas = Array.from(data.playLogList, data => data.focus);
      this.startIndex = 0;
      this.endIndex = this.recentDates.length - 1;
      this.startDay = this.recentDates[this.startIndex];
      this.endDay = this.recentDates[this.endIndex];
    });
  }
};
</script>
<style>
.focusSetting {
  width: 274px;
  height: 613px;
  min-height: 613px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  float: left;
  margin-right: 21px;
}
.focusChartIn {
  float: left;
  width: 867px;
  height: 613px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}
.focusChartIn .chartVue {
  position: absolute;
}

.startDay {
  position: absolute;
  left: 49.1px;
  top: 36px;
}
.endDay {
  position: absolute;
  left: 49.1px;
  top: 162px;
}
.startSelector {
  position: absolute;
  left: 49.7px;
  top: 82px;
}
.endSelector {
  position: absolute;
  left: 49.7px;
  top: 208px;
}
</style>
