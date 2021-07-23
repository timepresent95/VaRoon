<template>
  <div class="sellingRevenueContent">
    <div class="RevenueTitle">Revenue</div>
    <div class="RevenueTotalCost">
      총 수익
      <span class="RevenueBlue">{{totalCost}}</span> 원
    </div>
    <div class="RevenueChartBox">
      <div class="RevenueChart">
        <VueApexCharts
          ref="revenueChart"
          class="RevenueLineChart"
          type="line"
          width="770"
          height="477"
          :options="chartOptions"
          :series="series"
        ></VueApexCharts>
        <div class="RevenueCheck">
          <div @click="first = !first" class="RevenueChk1">
            <img
              @click="clickCheckBox('다크 소울 3')"
              class="RevenueChkedBox"
              src="@/images/checkbox-checked-img@2x.png"
              v-if="first"
            />
            <div @click="clickCheckBox('다크 소울 3')" class="RevenueChkBox" v-else></div>
            <div class="RevenueChkTag">다크 소울 3</div>
          </div>
          <div @click="second = !second" class="RevenueChk1">
            <img
              @click="clickCheckBox('Civilization 4')"
              class="RevenueChkedBox"
              src="@/images/checkbox-checked-img@2x.png"
              v-if="second"
            />
            <div @click="clickCheckBox('Civilization 4')" class="RevenueChkBox" v-else></div>
            <div class="RevenueChkTag">Civilization 4</div>
          </div>
          <div @click="third = !third" class="RevenueChk1">
            <img
              @click="clickCheckBox('Ark Evolved')"
              class="RevenueChkedBox"
              src="@/images/checkbox-checked-img@2x.png"
              v-if="third"
            />
            <div @click="clickCheckBox('Ark Evolved')" class="RevenueChkBox" v-else></div>
            <div class="RevenueChkTag">Ark Evolved</div>
          </div>
        </div>
      </div>
      <!-- <div class="RevenueDayBar">
        <div class="startBar">
          <div class="startTag">시작 일</div>
          <div></div>
        </div>
        <div class="RevenueDayLine"></div>
        <div class="endBar">
          <div class="endTag">끝 일</div>
          <div></div>
        </div>
      </div>-->
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
      first: true,
      second: true,
      third: true,
      totalCost: 500000,
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "top"
            }
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month"
          }
        },
        markers: {
          size: 6
        }
      },
      series: [
        {
          name: "다크 소울 3",
          data: [8, 10, 23, 36, 32, 32, 33]
        },
        {
          name: "Civilization 4",
          data: [12, 11, 14, 18, 17, 21, 13]
        },
        {
          name: "Ark Evolved",
          data: [30, 21, 24, 28, 17, 11, 23]
        }
      ]
    };
  },
  methods: {
    clickCheckBox(idx) {
      this.$refs.revenueChart.toggleSeries(idx);
    }
  }
};
</script>
<style>
.sellingRevenueContent {
  width: 1620px;
  position: relative;
  left: 308px;
  background-color: #ffffff;
  height: 1080px;
}
.RevenueTitle {
  width: 127px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  position: absolute;
  top: 64px;
  left: 75px;
}
.RevenueTotalCost {
  width: 290px;
  height: 42px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 36px;
  position: absolute;
  top: 154px;
  left: 75px;
}
.RevenueBlue {
  color: #4b74ff;
  font-weight: bold;
}
.RevenueChartBox {
  width: 1320px;
  height: 830px;
  position: absolute;
  top: 232px;
  left: 79px;
}
.RevenueChart {
  width: 920px;
  height: 593px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}
.RevenueLineChart {
  position: absolute;
  left: 64px;
  top: 60px;
}
.RevenueDayBar {
  width: 1159.5px;
  height: 100px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  margin-top: 24px;
}
.startBar {
  width: 604px;
  height: 100px;
  float: left;
}
.startTag {
  width: 47px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  position: relative;
  top: 41px;
  left: 106.3px;
}
.RevenueDayLine {
  width: 0;
  height: 49px;
  border: solid 0.5px #a6a6a6;
  position: relative;
  top: 25.5px;
  float: left;
}
.endBar {
  width: 550px;
  height: 100px;
  float: left;
}
.endTag {
  width: 33px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  position: relative;
  top: 41px;
  left: 106.3px;
}
.RevenueCheck {
  width: 250px;
  height: 593px;
  position: relative;
  left: 920px;
}
.RevenueChk1 {
  position: relative;
  top: 37px;
  margin-top: 37px;
  margin-left: 40px;
}
.RevenueChkBox {
  width: 28px;
  height: 28px;
  border: solid 0.5px rgba(217, 217, 217, 1);
  float: left;
}
.RevenueChkedBox {
  width: 28px;
  height: 28px;
  float: left;
  object-fit: contain;
}
.RevenueChkTag {
  height: 28px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  font-weight: 300;
  line-height: 28px;
  margin-left: 50px;
}
</style>
