<template>
  <article class="trainig-chart">
    <div class="setting">
      <div class="main-eye">주시안</div>
      <input
        type="radio"
        value="rightEye"
        disabled
        v-model="trainingChartData.mainEye"
      />
      <span>우안</span>
      <br />
      <input
        type="radio"
        value="leftEye"
        disabled
        v-model="trainingChartData.mainEye"
      />
      <span>좌안</span>
    </div>
    <div class="tranging-chart-in">
      <div class="trainging-box">
        <div class="box-id">프리즘 치료</div>
        <div class="slider">
          <div class="slider-descript">수평 프리즘</div>
          <div class="slider-contain">{{ horizontalPrizm[0] }}</div>
          <div class="slider-contain">
            <vue-slider
              :width="380.5"
              :min="-20"
              :max="20"
              :enable-cross="false"
              v-model="horizontalPrizm"
              :disabled="true"
            ></vue-slider>
          </div>
          <div class="slider-contain">{{ horizontalPrizm[1] }}</div>
        </div>
        <div class="slider">
          <div class="slider-descript">수직 프리즘</div>
          <div class="slider-contain">{{ verticalPrizm[0] }}</div>
          <div class="slider-contain">
            <vue-slider
              :min="-20"
              :max="20"
              :width="380.5"
              :enable-cross="false"
              v-model="verticalPrizm"
              :disabled="true"
            ></vue-slider>
          </div>
          <span class="slider-contain">{{ verticalPrizm[1] }}</span>
        </div>
      </div>
      <div class="trainging-box">
        <div class="box-id">약시안 강화 치료</div>
        <div class="slider-m">
          <div class="slider-descript">흐림 정도</div>
          <span class="slider-contain">{{ blur[0] }}</span>
          <div class="slider-contain">
            <vue-slider
              :width="380.5"
              :enable-cross="false"
              v-model="blur"
              :disabled="true"
            ></vue-slider>
          </div>
          <span class="slider-contain">{{ blur[1] }}</span>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import VueSlider from "vue-slider-component";
import { mapActions } from "vuex";

import "vue-slider-component/theme/default.css";

export default {
  components: {
    VueSlider,
  },
  computed: {
    horizontalPrizm() {
      return [
        this.trainingChartData.horizontalMin,
        this.trainingChartData.horizontalMax,
      ];
    },
    verticalPrizm() {
      return [
        this.trainingChartData.verticalMin,
        this.trainingChartData.verticalMax,
      ];
    },
    object() {
      return [
        this.trainingChartData.objectMin,
        this.trainingChartData.objectMax,
      ];
    },
    blur() {
      return [this.trainingChartData.blurMin, this.trainingChartData.blurMax];
    },
  },
  data() {
    return {
      value: [0, 50],
      trainingChartData: {
        blurMax: 0,
        blurMin: 0,
        horizontalMax: 0,
        horizontalMin: 0,
        mainEye: "right",
        objectMax: 0,
        objectMin: 0,
        verticalMax: 0,
        verticalMin: 0,
      },
    };
  },
  methods: {
    ...mapActions(["TRAINING_CHART"]),
  },
  created() {
    this.TRAINING_CHART().then((data) => {
      console.log(data);
      this.trainingChartData = { ...data };
    });
  },
};
</script>
<style>
.trainig-chart {
  display: flex;
  margin: 30px auto;
  width: 1162px;
}
.setting {
  width: 274px;
  height: 404px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  margin-right: 21px;
  padding: 20px;
}
.main-eye {
  width: 87px;
  height: 20px;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  line-height: 2.5;
  margin-bottom: 20px;
}
.setting span {
  padding-left: 22px;
}
.tranging-chart-in {
  padding: 20px;
  width: 867px;
  height: 404px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}
.trainging-box {
  width: 867px;
  height: 202px;
  border-radius: 3px;
}

.trainging-box .box-id {
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  margin-top: 10px;
}
.slider {
  height: 50px;
  margin-top: 30px;
}
.slider-m {
  height: 50px;
  margin-top: 20px;
}
.slider-descript {
  height: 19px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  margin-right: 31px;
}
</style>
