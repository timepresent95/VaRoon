<template>
  <div>
    <div class="pdChartIn">
      <VueApexCharts type="line" width="867" height="613" :options="chartOptions" :series="series"></VueApexCharts>
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
import { mapActions, mapState } from "vuex";
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    VueApexCharts
  },
  computed: {
    ...mapState(["DocplayLogs"])
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
    },
    playLogs() {
      console.log(this.playLogs);
    }
  },
  created() {
    this.recentDates = Array.from(this.DocplayLogs, playLogs => playLogs.date);
    this.gameDatas = Array.from(this.DocplayLogs, playLogs => playLogs.curGame);
    this.blurDatas = Array.from(this.DocplayLogs, playLogs => playLogs.blur);
    this.pdDatas = Array.from(this.DocplayLogs, playLogs => playLogs.pd);
    this.focusDatas = Array.from(this.DocplayLogs, playLogs => playLogs.focus);
    this.startIndex = 0;
    this.endIndex = this.recentDates.length - 1;
    this.startDay = this.recentDates[this.startIndex];
    this.endDay = this.recentDates[this.endIndex];
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
        },
        yaxis: {
          min: 0
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
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
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
