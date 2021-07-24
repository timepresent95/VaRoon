<template>
  <div>
    <div>
      <div class="Setting">
        <div class="mainEye">주시안</div>
        <ul>
          <input type="radio" value="rightEye" disabled v-model="trainingChartData.mainEye" />
          <span>우안</span>
        </ul>
        <ul>
          <input type="radio" value="leftEye" disabled v-model="trainingChartData.mainEye" />
          <span>좌안</span>
        </ul>
      </div>
      <div class="trangingChartIn">
        <div class="traingingBox">
          <div class="boxId">프리즘 치료</div>
          <div class="slider">
            <div class="sliderDescript">수평 프리즘</div>
            <div class="sliderContain">{{horizontalPrizm[0]}}</div>
            <div class="sliderContain">
              <vue-slider
                :width="380.5"
                :min="-20"
                :max="20"
                :enable-cross="false"
                v-model="horizontalPrizm"
                :disabled="true"
              ></vue-slider>
            </div>
            <div class="sliderContain">{{horizontalPrizm[1]}}</div>
            <div class="unit1">(PD)</div>
          </div>
          <div class="slider">
            <div class="sliderDescript">수직 프리즘</div>
            <div class="sliderContain">{{verticalPrizm[0]}}</div>
            <div class="sliderContain">
              <vue-slider
                :min="-20"
                :max="20"
                :width="380.5"
                :enable-cross="false"
                v-model="verticalPrizm"
                :disabled="true"
              ></vue-slider>
            </div>
            <div class="sliderContain">{{verticalPrizm[1]}}</div>
            <div class="unit2">(PD)</div>
          </div>
        </div>
        <!-- <div class="traingingBox">
          <div class="boxId">양안시 협응 훈련</div>
          <div class="sliderM">
            <div class="sliderDescript">차별송출 개체 수</div>
            <div class="sliderContain">{{object[0]}}</div>
            <div class="sliderContain">
              <vue-slider
                :width="380.5"
                :max="20"
                :enable-cross="false"
                v-model="object"
                :disabled="true"
              ></vue-slider>
            </div>
            <div class="sliderContain">{{object[1]}}</div>
          </div>
          <div class="unit3">(개)</div>
        </div>-->
        <div class="traingingBox">
          <div class="boxId">약시안 강화 치료</div>
          <div class="sliderM">
            <div class="sliderDescript">흐림 정도</div>
            <div class="sliderContain">{{blur[0]}}</div>
            <div class="sliderContain">
              <vue-slider :width="380.5" :enable-cross="false" v-model="blur" :disabled="true"></vue-slider>
            </div>
            <div class="sliderContain">{{blur[1]}}</div>
          </div>
          <div class="unit4">(%)</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlider from "vue-slider-component";
import { mapActions } from "vuex";

import "vue-slider-component/theme/default.css";

export default {
  components: {
    VueSlider
  },
  computed: {
    horizontalPrizm() {
      return [
        this.trainingChartData.horizontalMin,
        this.trainingChartData.horizontalMax
      ];
    },
    verticalPrizm() {
      return [
        this.trainingChartData.verticalMin,
        this.trainingChartData.verticalMax
      ];
    },
    object() {
      return [
        this.trainingChartData.objectMin,
        this.trainingChartData.objectMax
      ];
    },
    blur() {
      return [this.trainingChartData.blurMin, this.trainingChartData.blurMax];
    }
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
        verticalMin: 0
      }
    };
  },
  methods: {
    ...mapActions(["TRAINING_CHART"])
  },
  created() {
    this.TRAINING_CHART().then(data => {
      console.log(data);
      this.trainingChartData = { ...data };
    });
  }
};
</script>
<style>
/* 이름바꿀것 */
.Setting {
  width: 274px;
  height: 404px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  float: left;
  margin-right: 21px;
}
.mainEye {
  width: 87px;
  height: 20px;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.5;
  letter-spacing: normal;
  color: #000000;
  position: relative;
  top: 36px;
  left: 49.1px;
}
.Setting ul {
  margin-top: 20px;
  position: relative;
  top: 60px;
  left: 49.1px;
}
.Setting span {
  padding-left: 22px;
}
.trangingChartIn {
  float: left;
  width: 867px;
  height: 404px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}
.traingingBox {
  width: 867px;
  height: 202px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}

.traingingBox .boxId {
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  position: relative;
  left: 50px;
  top: 36.5px;
}
.slider {
  height: 50px;
  padding-top: 20px;
}
.sliderM {
  height: 50px;
  padding-top: 50px;
}
.sliderDescript {
  height: 19px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  float: left;
  position: relative;
  left: 50px;
  top: 40px;
  margin-right: 31px;
}
.sliderContain {
  float: left;
  position: relative;
  left: 50px;
  top: 40px;
  margin-right: 31px;
}
.unit1 {
  position: absolute;
  top: 83px;
  left: 950px;
}
.unit2 {
  position: absolute;
  top: 153px;
  left: 950px;
}
.unit3 {
  position: absolute;
  top: 318px;
  left: 980px;
}
.unit4 {
  position: absolute;
  top: 318px;
  /* top: 521px; */
  left: 930px;
}
</style>
