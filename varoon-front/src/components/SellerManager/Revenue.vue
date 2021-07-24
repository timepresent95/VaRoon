<template>
  <div class="selling-revenue-content">
    <h1 class="revenue-title">Revenue</h1>
    <p class="revenue-total-cost">
      총 수익
      <span class="revenue-cost">{{ totalCost }}</span> 원
    </p>
    <div class="revenue-chart">
      <VueApexCharts
        ref="revenueChart"
        class="revenue-line-chart"
        type="line"
        width="770"
        height="477"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
      <div class="revenue-check">
        <div @click="first = !first" class="RevenueChk1">
          <div @click="clickCheckBox('다크 소울 3')" class="revenue-chk-box">
            <img
              @click="clickCheckBox('다크 소울 3')"
              class="revenue-chked-box"
              src="@/images/checkbox-checked-img@2x.png"
              v-if="first"
            />
          </div>
          <p class="revenue-chk-tag">다크 소울 3</p>
        </div>
        <div @click="second = !second" class="RevenueChk1">
          <div @click="clickCheckBox('Civilization 4')" class="revenue-chk-box">
            <img
              @click="clickCheckBox('다크 소울 3')"
              class="revenue-chked-box"
              src="@/images/checkbox-checked-img@2x.png"
              v-if="second"
            />
          </div>
          <p class="revenue-chk-tag">Civilization 4</p>
        </div>
        <div @click="third = !third" class="RevenueChk1">
          <div @click="clickCheckBox('Ark Evolved')" class="revenue-chk-box">
            <img
              @click="clickCheckBox('다크 소울 3')"
              class="revenue-chked-box"
              src="@/images/checkbox-checked-img@2x.png"
              v-if="third"
            />
          </div>
          <p class="revenue-chk-tag">Ark Evolved</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    VueApexCharts,
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
              position: "top",
            },
          },
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month",
          },
        },
        markers: {
          size: 6,
        },
      },
      series: [
        {
          name: "다크 소울 3",
          data: [8, 10, 23, 36, 32, 32, 33],
        },
        {
          name: "Civilization 4",
          data: [12, 11, 14, 18, 17, 21, 13],
        },
        {
          name: "Ark Evolved",
          data: [30, 21, 24, 28, 17, 11, 23],
        },
      ],
    };
  },
  methods: {
    clickCheckBox(idx) {
      this.$refs.revenueChart.toggleSeries(idx);
    },
  },
};
</script>
<style>
.selling-revenue-content {
  position: relative;
  left: 308px;
  background-color: #ffffff;
  min-height: calc(100% - 191px);
  padding: 30px;
}
.revenue-title {
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  font-weight: normal;
}
.revenue-total-cost {
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 36px;
  margin: 10px 0;
}
.revenue-cost {
  color: #4b74ff;
  font-weight: bold;
}
.revenue-chart {
  width: 770px;
  height: 477px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}
.revenue-check {
  display: flex;
}
.RevenueChk1 {
  margin-top: 37px;
  margin-left: 40px;
  display: flex;
  align-items: center;
}
.revenue-chk-box {
  width: 28px;
  height: 28px;
  border: solid 0.5px rgba(217, 217, 217, 1);
  overflow: hidden;
}
.revenue-chked-box {
  width: 27px;
  height: 27px;
  object-fit: contain;
  transform: translate(-0.5px, -0.5px);
}
.revenue-chk-tag {
  height: 28px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 28px;
  margin-left: 10px;
}
</style>
