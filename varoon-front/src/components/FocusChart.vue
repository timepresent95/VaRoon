<template>
  <div>
    <div class="pdChartIn">
      <GChart class="leftPDChart" type="ColumnChart" :data="chartData" :options="chartOptions" />
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
import { mapActions } from "vuex";
import { GChart } from "vue-google-charts";

export default {
  components: {
    GChart
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
      name: "",
      focusDataArr: [],
      recentDates: [],
      recentDate: "",
      startDay: "",
      endDay: "",
      startIndex: 0,
      endIndex: 0,
      leftFocusDatas: [],
      rightFocusDatas: [],
      leftPDDatas: [],
      rightPDDatas: [],
      chartData: [
        ["date", "leftFocus", "rightFocus", { role: "annotation" }],
        ["0000.01.01", 100, 100, "[1,2],[2,1]"]
        // label작업 하다가 맘
      ],
      chartOptions: {
        legend: "none",
        width: 1160,
        height: 613,
        tooltip: { isHtml: true },
        focusTarget: "category"
      }
    };
  },
  methods: {
    ...mapActions(["FOCOUS_CHART"]),
    chartDataUpdate() {
      let startIdx = this.startIndex;
      const newData = [
        [
          "date",
          { role: "annotation" },
          { role: "tooltip", p: { html: true } },
          "leftFocus",
          "rightFocus"
        ]
      ];
      while (startIdx <= this.endIndex) {
        newData.push([
          this.recentDates[startIdx],
          `(${this.leftPDDatas[startIdx].horizontal}${this.leftPDDatas[startIdx].vertical})(${this.rightPDDatas[startIdx].horizontal}${this.rightPDDatas[startIdx].vertical})`,
          this.drawGraph(
            this.leftPDDatas[startIdx].horizontal,
            this.leftPDDatas[startIdx].vertical,
            this.rightPDDatas[startIdx].horizontal,
            this.rightPDDatas[startIdx].vertical
          ),
          this.leftFocusDatas[startIdx],
          this.rightFocusDatas[startIdx]
        ]);
        startIdx = startIdx + 1;
      }
      console.log(newData);
      this.chartData = newData;
    },
    drawGraph(leftH, leftV, rightH, rightV) {
      const leftHo = Math.abs(leftH);
      const leftVe = Math.abs(leftV);
      const rightHo = Math.abs(rightH);
      const rightVe = Math.abs(rightV);
      const first = (h, v) => [147 - h * 10, 147 - v * 10];
      const second = (h, v) => [150, 147 - v * 10];
      const third = (h, v) => [150, 150];
      const fourth = (h, v) => [147 - h * 10, 150];
      let Lpos;
      let Rpos;
      if (leftH < 0 && leftV > 0) Lpos = first(leftHo, leftVe);
      else if (leftH > 0 && leftV > 0) Lpos = second(leftHo, leftVe);
      else if (leftH > 0 && leftV < 0) Lpos = third(leftHo, leftVe);
      else Lpos = fourth(leftHo, leftVe);
      if (rightH < 0 && rightV > 0) Rpos = first(rightHo, rightVe);
      else if (rightH > 0 && rightV > 0) Rpos = second(rightHo, rightVe);
      else if (rightH > 0 && rightV < 0) Rpos = third(rightHo, rightVe);
      else Rpos = fourth(rightHo, rightVe);
      return (
        '<div style="width:300px; height:300px; float:left;border-right: solid 0.5px #000000; ">' +
        '<div style="width:300px; height: 150px; border-bottom: solid 0.5px #c2c2c2; position:absolute;"></div>' +
        '<div style="width:150px; height: 300px; border-right: solid 0.5px #c2c2c2; position:absolute;"></div>' +
        `<div style="width:${leftHo * 10}px; height: ${leftVe * 10}px;
         border: solid 2px #4b74ff; background-color: #a5b9ff; position:absolute;
         left:${Lpos[0]}px; top:${Lpos[1]}px"></div>` +
        `<div style="position:absolute; left: 150px;
        top:${150 - leftV * 10}px">${leftV}</div>` +
        `<div style="position:absolute; top: 150px;
        left:${150 + leftH * 10}px">${leftH}</div>` +
        "</div>" +
        '<div style="width:300px; height:300px; float:left">' +
        '<div style="width:300px; height: 150px; border-bottom: solid 0.5px #c2c2c2; position:absolute;"></div>' +
        '<div style="width:150px; height: 300px; border-right: solid 0.5px #c2c2c2; position:absolute;"></div>' +
        `<div style="width:${rightHo * 10}px; height: ${rightVe * 10}px;
         border: solid 2px #4b74ff; background-color: #a5b9ff; position:absolute;
         left:${Rpos[0] + 300}px; top:${Rpos[1]}px"></div>` +
        `<div style="position:absolute; left: 450px;
        top:${150 - rightV * 10}px">${rightV}</div>` +
        `<div style="position:absolute; top: 150px;
        left:${450 + rightH * 10}px">${rightH}</div>` +
        "</div>"
      );
    }
  },
  created() {
    this.FOCOUS_CHART().then(data => {
      this.focusDataArr = data;
      this.recentDates = Array.from(data, data => data.date);
      this.leftFocusDatas = Array.from(data, data => data.leftFocus);
      this.rightFocusDatas = Array.from(data, data => data.rightFocus);
      this.leftPDDatas = Array.from(data, data => data.leftPd);
      this.rightPDDatas = Array.from(data, data => data.rightPd);
      this.startIndex = 0;
      this.endIndex = this.recentDates.length - 1;
      this.startDay = this.recentDates[this.startIndex];
      this.endDay = this.recentDates[this.endIndex];
    });
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
