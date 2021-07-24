<template>
  <nav class="patient-left">
    <p class="current-title">
      <span style="font-family: NanumBarunGothicOTF">{{ name }}</span>
      <span>님의</span>
      <span>{{ pageName }}</span>
      <span>차트입니다</span>
    </p>
    <ul class="patient-navi">
      <li
        :class="{
          'off-btn': patientComponent !== 'pd',
          'on-btn': patientComponent === 'pd',
        }"
        @click.prevent="CHANGE_PATIENT_COMPONENT('pd')"
      >
        사시각
      </li>
      <li
        :class="{
          'off-btn': patientComponent !== 'range',
          'on-btn': patientComponent === 'range',
        }"
        @click.prevent="CHANGE_PATIENT_COMPONENT('range')"
      >
        안근능력
      </li>
      <li
        :class="{
          'off-btn': patientComponent !== 'focus',
          'on-btn': patientComponent === 'focus',
        }"
        @click.prevent="CHANGE_PATIENT_COMPONENT('focus')"
      >
        경과
      </li>
      <li
        :class="{
          'off-btn': patientComponent !== 'training',
          'on-btn': patientComponent === 'training',
        }"
        @click.prevent="CHANGE_PATIENT_COMPONENT('training')"
      >
        훈련정보
      </li>
    </ul>
  </nav>
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
.current-title {
  text-align: center;
  margin-bottom: 20px;
}
.current-title span {
  width: 400px;
  height: 37px;
  font-size: 32px;
  font-family: NanumBarunGothicUltraLightOTF;
}
.patient-navi {
  height: 74px;
  display: flex;
  justify-content: center;
}
.patient-navi li {
  width: 274px;
  height: 74px;
  border-radius: 3px;
  margin-right: 21px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 74px;
  text-align: center;
}
.on-btn {
  background-color: #4b74ff;
  box-shadow: 0 0 10px 0 #4b74ff;
  color: #ffffff;
}
.off-btn {
  background-color: #ffffff;
  color: #4b74ff;
  box-shadow: 0 0 10px 0 rgba(217, 217, 217, 0.43);
}
</style>
