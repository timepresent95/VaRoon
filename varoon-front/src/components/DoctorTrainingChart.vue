<template>
  <div>
    <div>
      <div class="Setting">
        <div class="mainEye">주시안 선택</div>
        <ul>
          <input type="radio" value="rightEye" v-model="mainEye" />
          <span>우안</span>
        </ul>
        <ul>
          <input type="radio" value="leftEye" v-model="mainEye" />
          <span>좌안</span>
        </ul>
      </div>
      <div class="trangingChartIn">
        <div class="traingingBoxLine"></div>
        <div class="traingingBox">
          <div class="boxId">프리즘 치료</div>
          <div class="slider">
            <div class="sliderDescript">수평 프리즘</div>
            <div class="sliderContain">{{horizontalPrizm[0]}}</div>
            <div class="sliderContain">
              <vue-slider
                :min="-20"
                :max="20"
                :width="380.5"
                :enable-cross="false"
                v-model="horizontalPrizm"
              ></vue-slider>
            </div>
            <div class="sliderContain">{{horizontalPrizm[1]}}</div>
            <div class="unit1">(PD)</div>
          </div>
          <div class="slider">
            <div class="sliderDescript">수직 프리즘</div>
            <div class="sliderContain">{{verticalPrizm[0]}}</div>
            <div class="sliderContain">
              <vue-slider :min="-100" :width="380.5" :enable-cross="false" v-model="verticalPrizm"></vue-slider>
            </div>
            <div class="sliderContain">{{verticalPrizm[1]}}</div>
            <div class="unit2">(PD)</div>
          </div>
        </div>
        <div class="traingingBoxLine"></div>
        <!-- <div class="traingingBox">
          <div class="boxId">양안시 협응 훈련</div>
          <div class="sliderM">
            <div class="sliderDescript">차별송출 개체 수</div>
            <div class="sliderContain">{{object[0]}}</div>
            <div class="sliderContain">
              <vue-slider :width="380.5" :enable-cross="false" v-model="object"></vue-slider>
            </div>
            <div class="sliderContain">{{object[1]}}</div>
            <div class="unit3">(개)</div>
          </div>
        </div>
        <div class="traingingBoxLine"></div>-->
        <div class="traingingBox">
          <div class="boxId">약시안 강화 치료</div>
          <div class="sliderM">
            <div class="sliderDescript">흐림 정도</div>
            <div class="sliderContain">{{blur[0]}}</div>
            <div class="sliderContain">
              <vue-slider :width="380.5" :enable-cross="false" v-model="blur"></vue-slider>
            </div>
            <div class="sliderContain">{{blur[1]}}</div>
            <div class="unit4">(%)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlider from "vue-slider-component";
import { mapActions, mapState, mapMutations } from "vuex";

import "vue-slider-component/theme/default.css";

export default {
  components: {
    VueSlider
  },
  watch: {
    mainEye() {
      this.prescription.mainEye = this.mainEye;
      this.CHANGE_PRESCRIPTION(this.prescription);
    },
    blur() {
      this.prescription.blurMin = this.blur[0];
      this.prescription.blurMax = this.blur[1];
      this.CHANGE_PRESCRIPTION(this.prescription);
    },
    horizontalPrizm() {
      this.prescription.horizontalMin = this.horizontalPrizm[0];
      this.prescription.horizontalMax = this.horizontalPrizm[1];
      this.CHANGE_PRESCRIPTION(this.prescription);
    },
    verticalPrizm() {
      this.prescription.verticalMin = this.verticalPrizm[0];
      this.prescription.verticalMax = this.verticalPrizm[1];
      this.CHANGE_PRESCRIPTION(this.prescription);
    },
    object() {
      this.prescription.objectMin = this.object[0];
      this.prescription.objectMax = this.object[1];
      this.CHANGE_PRESCRIPTION(this.prescription);
    }
  },
  computed: {
    ...mapState(["DocPrescription"])
  },
  created() {
    this.horizontalPrizm = [
      this.DocPrescription.horizontalMin,
      this.DocPrescription.horizontalMax
    ];
    this.verticalPrizm = [
      this.DocPrescription.verticalMin,
      this.DocPrescription.verticalMax
    ];
    this.object = [
      this.DocPrescription.objectMin,
      this.DocPrescription.objectMax
    ];
    this.blur = [this.DocPrescription.blurMin, this.DocPrescription.blurMax];
    this.mainEye = this.DocPrescription.mainEye;
    this.prescription = this.DocPrescription;
  },
  data() {
    return {
      horizontalPrizm: [0, 0],
      verticalPrizm: [0, 0],
      object: [0, 0],
      blur: [0, 0],
      prescription: {
        blurMax: 0,
        blurMin: 0,
        horizontalMax: 0,
        horizontalMin: 0,
        mainEye: null,
        objectMax: 0,
        objectMin: 0,
        verticalMax: 0,
        verticalMin: 0
      },
      mainEye: null
    };
  },
  methods: {
    ...mapMutations(["CHANGE_PRESCRIPTION"])
  }
};
</script>
<style>
/* 이름바꿀것 */
.Setting {
  width: 867px;
  height: 154px;
  border-radius: 3px;
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
  float: left;
  margin-right: 100px;
}
.Setting span {
  padding-left: 22px;
}
.trangingChartIn {
  float: left;
  width: 867px;
  height: 403px;
  border-radius: 3px;
  background-color: #ffffff;
}
.traingingBox {
  width: 867px;
  height: 204px;
  border-radius: 3px;
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
.sliderDescript {
  height: 19px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
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
.traingingBoxLine {
  width: 764.9px;
  height: 0;
  border: solid 0.5px #e2e2e2;
  position: relative;
  left: 51px;
}

.sliderM {
  height: 50px;
  padding-top: 50px;
}
.unit1 {
  position: absolute;
  top: 238px;
  left: 680px;
}
.unit2 {
  position: absolute;
  top: 308px;
  left: 680px;
}
.unit3 {
  position: absolute;
  top: 473px;
  left: 680px;
}
.unit4 {
  position: absolute;
  top: 473px;
  /* top: 678px; */
  left: 680px;
}
</style>
