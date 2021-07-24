<template>
  <section class="doctor-center">
    <header class="doctor-center-header">
      <h1 class="center-title">환자 관리하기</h1>
      <button class="doctor-client-download">클라이언트 다운로드</button>
    </header>
    <article class="doctor-center-content">
      <div class="patient-list-box">
        <div class="patient-search-box">
          <input type="text" v-model="search" placeholder="검색" />
        </div>
        <div class="patient-list-text">검색 결과</div>
        <ul>
          <li
            :class="{
              nomalList: selectIndex !== index,
              selectedList: selectIndex === index,
            }"
            v-for="(i, index) in chargePatient"
            :key="index"
            @click.prevent="selectList(index)"
          >
            <div :class="{ index: false, lastIndex: true }">
              {{ index + 1 }}
            </div>
            <div :class="{ name: false, lastName: true }">{{ i.name }}</div>
            <div :class="{ sex: false, lastSex: true }">
              {{ i.gender.slice(0, 1) }}
            </div>
            <div :class="{ age: false, lastAge: true }">
              {{ 2019 - Number(i.age.slice(0, 4)) - 1 }}
            </div>
          </li>
        </ul>
        <button
          class="patient-list-button"
          @click.prevent="patientRegist = !patientRegist"
        >
          추가
        </button>
        <button class="patient-list-button">삭제</button>
      </div>
      <div class="patient-info-box">
        <h3 class="patient-info-text-title">환자 정보</h3>
        <div class="patient-info-text">
          <p class="name">
            이름
            <span class="info-blank"></span>
            {{ name }}
          </p>
          <p class="sex">
            성별
            <span class="info-blank"></span>
            {{ sex }}
          </p>
          <p class="age">
            나이
            <span class="info-blank"></span>
            {{ age }}
          </p>
          <p class="pd">
            사시각
            <span style="margin-right: 51.9px"></span>
            {{ angle }}
          </p>
          <p class="etc">
            <span>기타 사항</span>
            <textarea v-model="etc"></textarea>
          </p>
          <div class="info-box-button" @click="patientDataUpdate()">저장</div>
        </div>
        <div class="doc-controller">
          <button @click="chartNoMin" class="doc-lt">&lt;</button>
          <button @click="chartNoPlus" class="doc-rt">&gt;</button>
        </div>
        <div class="doctorpatient-chart">
          <doctor-p-d-chart v-if="chartNo === 1" />
          <doctor-range-chart v-else-if="chartNo === 2" />
          <doctor-focus-chart v-else-if="chartNo === 3" />
          <doctor-training-chart v-else-if="chartNo === 4" />
        </div>
      </div>
    </article>
    <PatientRegister
      @modal-close="patientRegist = false"
      v-if="patientRegist"
      @regist="RegistFunc"
    />
  </section>
</template>
<script>
import PatientRegister from "@/components/DoctorCenter/PatientRegister";
import DoctorPDChart from "@/components/DoctorCenter/DoctorPDChart.vue";
import DoctorRangeChart from "@/components/DoctorCenter/DoctorRangeChart.vue";
import DoctorFocusChart from "@/components/DoctorCenter/DoctorFocusChart.vue";
import DoctorTrainingChart from "@/components/DoctorCenter/DoctorTrainingChart.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  components: {
    PatientRegister,
    DoctorPDChart,
    DoctorRangeChart,
    DoctorFocusChart,
    DoctorTrainingChart,
  },
  computed: {
    ...mapState(["DocPrescription"]),
  },
  watch: {
    id() {
      this.PATIENT_CHART(this.name).then((data) => {
        this.name = data.name;
        this.age = data.age;
        this.sex = data.gender;
        this.etc = data.desc;
        this.CHANGE_PRESCRIPTION(data.prescription);
        this.angle = `L:${data.leftPD.horizontal},${data.leftPD.vertical} R:${data.rightPD.horizontal},${data.rightPD.vertical}`;
        this.CHANGE_DOCLIST(data.pdlist);
        this.CHANGE_DOCRANGE(data.rangesList);
        this.CHANGE_DOCPLAY(data.playLogs);
        this.chartNo = 1;
      });
    },
    search() {
      if (this.search === "") {
        this.selectIndex = -1;
        return;
      }
      let i = -1;
      while (true) {
        if (this.chargePatient[++i].name.indexOf(this.search) !== -1) {
          this.selectList(i);
          break;
        }
        if (i >= this.chargePatient.length - 1) {
          this.selectIndex = -1;
          break;
        }
      }
    },
  },
  created() {
    this.PATIENT_REFER().then((data) => {
      this.chargePatient = data;
    });
  },
  data() {
    return {
      chartNo: 0,
      selectIndex: -1,
      chargePatient: [],
      name: "",
      patientName: "",
      sex: "",
      age: "",
      angle: "",
      etc: "",
      search: "",
      id: "",
      totalPlayTime: 0,
      averagePlayTime: 0,
      patientRegist: false,
    };
  },
  methods: {
    ...mapActions([
      "PATIENT_REFER",
      "PATIENT_REGIST",
      "PATIENT_CHART",
      "PATIENT_CHARTUPDATE",
    ]),
    ...mapMutations([
      "CHANGE_PRESCRIPTION",
      "CHANGE_DOCLIST",
      "CHANGE_DOCRANGE",
      "CHANGE_DOCPLAY",
    ]),
    RegistFunc(id) {
      this.PATIENT_REGIST(id).then((_) => {
        this.PATIENT_REFER().then((data) => {
          this.chargePatient = data;
        });
      });
      this.patientRegist = !this.patientRegist;
    },
    selectList(index) {
      this.selectIndex = index;
      this.id = this.chargePatient[index].id;
      this.name = this.chargePatient[index].name;
    },
    chartNoPlus() {
      if (this.chartNo === 4) {
        this.chartNo = 1;
        return;
      }
      this.chartNo++;
    },
    chartNoMin() {
      if (this.chartNo === 1) {
        this.chartNo = 4;
        return;
      }
      this.chartNo--;
    },
    patientDataUpdate() {
      const data = this.DocPrescription;
      data.desc = this.etc;
      const input = {
        id: this.id,
        prescription: data,
      };
      this.PATIENT_CHARTUPDATE(input);
    },
  },
};
</script>
<style>
.doctor-center {
  min-height: calc(100vh - 191px);
  padding: 30px;
  width: 70%;
  margin: 0 auto;
}
.doctor-center-header {
  position: relative;
  margin-bottom: 20px;
}
.center-title {
  height: 37px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 32px;
  line-height: 37px;
}
.doctor-client-download {
  width: 208px;
  height: 37px;
  box-shadow: 0 3px 12px 0 #4b74ff;
  background-color: #4b74ff;
  border-radius: 30px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  text-align: center;
  color: #fcfcfc;
  line-height: 37px;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
}
.doctor-center-content {
  display: flex;
}
.patient-list-box {
  width: 274px;
  height: 100%;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  padding: 20px;
}
.patient-info-box {
  flex: 1;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
}
.patient-search-box {
  width: 230px;
  height: 50px;
  border-radius: 60px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: relative;
  padding: 10px 50px;
}

.patient-search-box::before {
  content: "";
  background-image: url("../images/search-icon@2x.png");
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  object-fit: contain;
}

.patient-search-box input {
  width: 130px;
  height: 30px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  color: #6f6f6f;
  outline: none;
  border: none;
}
.patient-list-box .patient-list-text {
  width: 70px;
  height: 20px;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  line-height: 2.5;
  text-align: left;
  color: #000000;
}

.patient-list-box ul {
  height: 442px;
}

.patient-list-box .nomalList {
  height: 35px;
  width: 232.5px;
  list-style: none;
}

.patient-list-box .nomalList:hover {
  background-color: rgba(75, 116, 255, 0.24);
}

.patient-list-box .selectedList {
  height: 35px;
  width: 232.5px;
  list-style: none;
  background-color: rgba(75, 116, 255, 0.24);
}

.patient-list-box li .index {
  width: 43.1px;
  height: 35px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
}

.patient-list-box li .lastIndex {
  width: 43.1px;
  height: 35px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
  border-bottom: solid 0.5px #d9d9d9;
}

.patient-list-box li .name {
  height: 35px;
  width: 112px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
}

.patient-list-box li .lastName {
  height: 35px;
  width: 112px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-bottom: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
}

.patient-list-box li .sex {
  height: 35px;
  width: 39px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
}

.patient-list-box li .lastSex {
  height: 35px;
  width: 39px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-bottom: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
}

.patient-list-box li .age {
  height: 35px;
  width: 35.9px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
  border-right: solid 0.5px #d9d9d9;
}
.patient-list-box li .lastAge {
  height: 35px;
  width: 35.9px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-bottom: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
  border-right: solid 0.5px #d9d9d9;
}

.patient-list-box .patient-list-button {
  height: 20px;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  text-align: left;
  color: #4b74ff;
  margin-right: 27px;
  cursor: pointer;
  display: inline;
  background-color: inherit;
  border: none;
}

.patient-info-text {
  padding: 40px 52px;
  border-bottom: solid 0.5px #e2e2e2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  grid-template-rows: repeat(2, 23px) 1fr 50px;
}
.patient-info-text .info-blank {
  margin-right: 63.9px;
}
.patient-info-text-title {
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  margin-left: 20px;
  font-weight: normal;
  margin-top: 20px;
}
.patient-info-text .etc {
  grid-row: 3/3;
  grid-column: 1/-1;
  display: flex;
}
.patient-info-text .etc span {
  flex: 0 0 80px;
}
.patient-info-text .etc textarea {
  height: 60px;
  flex: 1;
  overflow: scroll;
}
.patient-info-box .info-box-button {
  width: 248.1px;
  height: 50px;
  border-radius: 3px;
  border: solid 2px #4b74ff;
  background-color: #4b74ff;
  font-size: 16px;
  font-family: NanumBarunGothicOTF;
  line-height: 49.3px;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  margin: 0 auto;
  grid-column: 1/-1;
}
.doc-controller {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
}
.doc-lt {
  font-size: 36px;
  color: #4b74ff;
  cursor: pointer;
  background-color: inherit;
  border: none;
}
.doc-rt {
  font-size: 36px;
  color: #4b74ff;
  cursor: pointer;
  background-color: inherit;
  border: none;
}
</style>
