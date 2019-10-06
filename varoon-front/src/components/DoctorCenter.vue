<template>
  <div class="DoctorCenterMainBox">
    <div class="centerTitle">환자 관리하기</div>
    <div>
      <a href class="doctorClientDownLoad">클라이언트 다운로드</a>
    </div>
    <div class="patientListBox">
      <div class="patientSearchBox">
        <img src="../images/search-icon@2x.png" />
        <input type="text" placeholder="검색" />
      </div>
      <div class="patientListText">검색 결과</div>
      <ul>
        <li
          :class="{'nomalList':selectIndex !== index, 'selectedList':selectIndex === index}"
          v-for="(i, index) in chargePatient"
          :key="index"
          @click.prevent="selectList(index)"
        >
          <div :class="{'index': false, 'lastIndex': true}">{{index+1}}</div>
          <div :class="{'name': false, 'lastName': true}">{{i.name}}</div>
          <div :class="{'sex': false, 'lastSex': true}">{{i.gender}}</div>
          <div :class="{'age': false, 'lastAge': true}">{{2019-Number(i.age.slice(0,4))+1}}</div>
        </li>
      </ul>
      <div class="patientListButton" @click.prevent="patientRegist = !patientRegist">추가</div>
      <div class="patientListButton">삭제</div>
    </div>
    <div class="patientInfoBox">
      <div class="patientInfoText">
        <div class="patientInfoTextTitle">환자 정보</div>
        <div class="name">이름{{name}}</div>
        <div class="sex">성별{{sex}}</div>
        <div class="age">나이{{2019-Number(age.slice(0,4))+1}}</div>
        <div class="PD">사시각{{angle}}</div>
        <div class="etc">기타 특이사항{{etc}}</div>
        <div class="infoBoxButton">저장</div>
      </div>
      <div class="patientInfochart"></div>
    </div>
    <PatientRegister v-if="patientRegist" @regist="RegistFunc" />
  </div>
</template>
<script>
/*
TODO:

  검색기능 추가

  특이사항 기능 추가

  기타 환자 서버와 연동기능 추가
*/
import PatientRegister from "./PatientRegister";
import { mapActions } from "vuex";

export default {
  components: {
    PatientRegister
  },
  watch: {
    id() {
      console.log(this.id);
      this.PATIENT_CHART(this.id).then(data => {
        console.log(data);
      });
    }
  },
  created() {
    this.PATIENT_REFER().then(data => {
      console.log(data);
      this.chargePatient = data;
      this.name = this.chargePatient[0].name;
      this.age = this.chargePatient[0].age;
      this.sex = this.chargePatient[0].gender;
      this.id = this.chargePatient[0].id;
    });
  },
  data() {
    return {
      selectIndex: 0,
      chargePatient: [],
      name: "",
      patientName: "",
      sex: "",
      age: "",
      angle: [0, 0],
      etc: "",
      id: "",
      totalPlayTime: 0,
      averagePlayTime: 0,
      patientRegist: false
    };
  },
  methods: {
    ...mapActions(["PATIENT_REFER", "PATIENT_REGIST", "PATIENT_CHART"]),
    RegistFunc(id) {
      this.PATIENT_REGIST(id).then(_ => {
        this.PATIENT_REFER().then(data => {
          this.chargePatient = data;
        });
      });
    },
    selectList(index) {
      this.selectIndex = index;
      this.name = this.chargePatient[index].name;
      this.age = this.chargePatient[index].age;
      this.sex = this.chargePatient[index].gender;
      this.id = this.chargePatient[index].id;
    }
  }
};
</script>
<style>
.DoctorCenterMainBox {
  height: 1080px;
  background-color: #fcfcfc;
}
.centerTitle {
  width: 178px;
  height: 37px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 32px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  position: absolute;
  left: 380px;
  top: 43px;
}
.doctorClientDownLoad {
  width: 208px;
  height: 41px;
  box-shadow: 0 3px 12px 0 #4b74ff;
  background-color: #4b74ff;
  border-radius: 30px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fcfcfc;
  line-height: 41px;
  position: absolute;
  left: 1332px;
  top: 39px;
}
.patientListBox {
  width: 274px;
  height: 794.2px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  position: absolute;
  left: 380px;
  top: 123px;
}
.patientInfoBox {
  width: 867px;
  height: 879px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  position: absolute;
  left: 673px;
  top: 123px;
}
.patientSearchBox {
  width: 230px;
  height: 50px;
  border-radius: 60px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: relative;
  top: 36px;
  left: 22px;
}

.patientSearchBox img {
  width: 22px;
  height: 22px;
  position: relative;
  top: 14px;
  left: 18px;
}

.patientSearchBox input {
  width: 130px;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: 3.56;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  position: absolute;
  left: 56.7px;
  top: 16px;
  outline: none;
  border: none;
}
.patientListBox .patientListText {
  width: 70px;
  height: 20px;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.5;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  position: relative;
  top: 81px;
  left: 49.1px;
}

.patientListBox ul {
  position: relative;
  top: 121px;
  left: 22px;
  height: 442px;
}

.patientListBox .nomalList {
  height: 35px;
  width: 232.5px;
  list-style: none;
}

.patientListBox .nomalList:hover {
  background-color: rgba(75, 116, 255, 0.24);
}

.patientListBox .selectedList {
  height: 35px;
  width: 232.5px;
  list-style: none;
  background-color: rgba(75, 116, 255, 0.24);
}

.patientListBox li .index {
  float: left;
  width: 43.1px;
  height: 35px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
}

.patientListBox li .lastIndex {
  float: left;
  width: 43.1px;
  height: 35px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
  border-bottom: solid 0.5px #d9d9d9;
}

.patientListBox li .name {
  float: left;
  height: 35px;
  width: 112px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
}

.patientListBox li .lastName {
  float: left;
  height: 35px;
  width: 112px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-bottom: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
}

.patientListBox li .sex {
  float: left;
  height: 35px;
  width: 39px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
}

.patientListBox li .lastSex {
  float: left;
  height: 35px;
  width: 39px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-bottom: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
}

.patientListBox li .age {
  float: left;
  height: 35px;
  width: 35.9px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
  border-right: solid 0.5px #d9d9d9;
}
.patientListBox li .lastAge {
  float: left;
  height: 35px;
  width: 35.9px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  line-height: 35px;
  border-top: solid 0.5px #d9d9d9;
  border-bottom: solid 0.5px #d9d9d9;
  border-left: solid 0.5px #d9d9d9;
  border-right: solid 0.5px #d9d9d9;
}

.patientListBox .patientListButton {
  height: 20px;
  font-family: NanumBarunGothicOTF;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4b74ff;
  position: relative;
  top: 200px;
  left: 143.1px;
  float: left;
  margin-right: 27px;
  cursor: pointer;
}

.patientInfoText {
  width: 766.9px;
  height: 296.5px;
  margin-top: 40px;
  margin-left: 52px;
  border-bottom: solid 0.5px #e2e2e2;
}
.patientInfoTextTitle {
  width: 76px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.25;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.patientInfoText .name {
  position: absolute;
  left: 52.1px;
  top: 99px;
}
.patientInfoText .sex {
  position: absolute;
  left: 52.1px;
  top: 138px;
}
.patientInfoText .age {
  position: absolute;
  left: 444.1px;
  top: 99px;
}
.patientInfoText .PD {
  position: absolute;
  left: 444.1px;
  top: 139px;
}
.patientInfoText .etc {
  position: absolute;
  left: 52.1px;
  top: 177px;
}
.patientInfoBox .infoBoxButton {
  position: absolute;
  left: 310px;
  top: 260px;
  width: 248.1px;
  height: 49.3px;
  border-radius: 3px;
  border: solid 2px #4b74ff;
  background-color: #ffffff;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  line-height: 49.3px;
  text-align: center;
  color: #4b74ff;
}
</style>
