<template>
  <div>
    <div class="currentTitle">
      <span style="font-family: NanumBarunGothicOTF">{{ name }}</span>
      <span>님의</span>
      <span>{{ pageName }}</span>
      <span>차트입니다</span>
    </div>
    <div class="patientNavi">
      <div
        :class="{
          offBtn: patientComponent !== 'pd',
          onBtn: patientComponent === 'pd',
        }"
        @click.prevent="CHANGE_PATIENT_COMPONENT('pd')"
      >
        사시각
      </div>
      <div
        :class="{
          offBtn: patientComponent !== 'range',
          onBtn: patientComponent === 'range',
        }"
        @click.prevent="CHANGE_PATIENT_COMPONENT('range')"
      >
        안근능력
      </div>
      <div
        :class="{
          offBtn: patientComponent !== 'focus',
          onBtn: patientComponent === 'focus',
        }"
        @click.prevent="CHANGE_PATIENT_COMPONENT('focus')"
      >
        경과
      </div>
      <div
        :class="{
          offBtn: patientComponent !== 'training',
          onBtn: patientComponent === 'training',
        }"
        @click.prevent="CHANGE_PATIENT_COMPONENT('training')"
      >
        훈련정보
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      patientName: "가나다",
    };
  },
  computed: {
    ...mapState(["patientComponent", "name"]),
    pageName() {
      if (this.patientComponent === "pd") return "사시각";
      else if (this.patientComponent === "range") return "안근능력";
      else if (this.patientComponent === "focus") return "집중도";
      else if (this.patientComponent === "training") return "훈련정보";
    },
  },
  methods: {
    ...mapMutations(["CHANGE_PATIENT_COMPONENT"]),
  },
};
</script>
<style>
.currentTitle {
  position: absolute;
  left: 380px;
  top: 43px;
}
.currentTitle span {
  width: 400px;
  height: 37px;
  font-size: 32px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  font-family: NanumBarunGothicUltraLightOTF;
}
.patientNavi {
  height: 74px;
  position: absolute;
  left: 380px;
  top: 123px;
}
.patientNavi div {
  width: 274px;
  height: 74px;
  border-radius: 3px;
  float: left;
  margin-right: 21px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  line-height: 74px;
  text-align: center;
}
.onBtn {
  background-color: #4b74ff;
  box-shadow: 0 0 10px 0 #4b74ff;
  color: #ffffff;
}
.offBtn {
  background-color: #ffffff;
  color: #4b74ff;
  box-shadow: 0 0 10px 0 rgba(217, 217, 217, 0.43);
}
</style>
