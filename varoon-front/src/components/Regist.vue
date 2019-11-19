<template>
  <div>
    <div class="registTitle">회원가입</div>
    <img class="loadMap" src="../images/join-step-two@2x.png" />
    <div class="registBoundLine"></div>
    <div class="registBox">
      <div class="registCategory">
        <div class="categoryTitle">성명</div>
        <input
          class="categoryInput"
          type="text"
          v-model="name"
          autofocus
          placeholder="강태우"
          maxlength="20"
        />
        <div class="error_box">{{nameCheck}}</div>
      </div>
      <div class="registCategory">
        <div class="categoryTitle">생년월일</div>
        <div>
          <input class="yearInput" type="text" v-model="year" placeholder="YYYY" />
          <input class="monthInput" type="text" v-model="month" placeholder="MM" />
          <input class="dayInput" type="text" v-model="date" placeholder="DD" />
        </div>
        <div class="error_box">{{birthCheck}}</div>
      </div>
      <div class="registCategory">
        <div class="categoryTitle">성별</div>
        <button
          :class="{'sexBox': gender !== 'male', 'selectedSexBox': gender === 'male'}"
          @click.prevent="selectSex('male')"
        >남성</button>
        <button
          :class="{'sexBox' : gender !== 'female', 'selectedSexBox' : gender === 'female'}"
          @click.prevent="selectSex('female')"
        >여성</button>
        <div class="error_box">{{genderCheck}}</div>
      </div>
      <div class="registCategory">
        <div class="categoryTitle">E-mail</div>
        <input class="categoryInput" type="text" v-model="email" placeholder="soma@soma.com" />
        <div class="error_box">{{mailCheck}}</div>
      </div>
      <div style="margin-bottom: 61px"></div>
      <div class="registCategory">
        <div class="categoryTitle">아이디</div>
        <input class="categoryInput" type="text" v-model="id" placeholder="soma" />
        <div class="error_box">{{idCheck}}</div>
      </div>
      <div v-if="checkId === true" class="canUseId">* 사용 가능한 ID 입니다</div>
      <div v-else-if="checkId === false" class="cantUseId">* 사용 불가능한 ID 입니다</div>
      <div class="checkDuplicate" @click.prevent="checkDuplicate">아이디 중복 확인</div>
      <div class="registCategory">
        <div class="categoryTitle">비밀번호</div>
        <input
          class="categoryInput"
          type="password"
          v-model="password"
          placeholder="soma123"
          maxlength="16"
        />
        <div class="error_box">{{passwordCheck2}}</div>
      </div>
      <div class="registCategory">
        <div class="categoryTitle">비밀번호 확인</div>
        <input
          class="categoryInput"
          type="password"
          v-model="passwordCheck"
          placeholder="soma123"
          maxlength="16"
        />
        <div class="error_box" :class="{success_box: !passwordCheckCheck}">{{passwordCheckCheck}}</div>
      </div>
      <div class="registCategory">
        <div class="categoryTitle">직업 선택</div>
        <button
          :class="{'roleBox' : role !== 'ROLE_Seller', 'selectedRoleBox' : role === 'ROLE_Seller'}"
          @click.prevent="selectRole('ROLE_Seller')"
        >판매자</button>
        <button
          :class="{'roleBox' : role !== 'ROLE_Patien', 'selectedRoleBox' : role === 'ROLE_Patien'}"
          @click.prevent="selectRole('ROLE_Patien')"
        >환자</button>
        <button
          :class="{'roleBox' : role !== 'ROLE_Doctor', 'selectedRoleBox' : role === 'ROLE_Doctor'}"
          @click.prevent="selectRole('ROLE_Doctor')"
        >의사</button>
        <div class="error_box">{{roleCheck}}</div>
      </div>
    </div>
    <button
      class="registBtn"
      @click.prevent="regist"
      :class="{'registBtn-success': !invalidForm}"
      :disabled="invalidForm"
    >가입하기</button>
  </div>
</template>
<script>
/*
TODO:

    이메일, 성명, 생년월일 유효성 검사 (. 뒤에 글자, 이름에 숫자 x)

    로드맵 이미지 추가할것

    아이디 확인 이미지 추가할것

*/
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      year: "",
      month: "",
      date: "",
      gender: "",
      email: "",
      id: "",
      checkId: null,
      password: "",
      passwordCheck: "",
      role: ""
    };
  },
  computed: {
    nameCheck() {
      let check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if (this.name.length == 0) return "필수 정보입니다.";
      else null;
    },
    birthCheck() {
      if (
        this.year.length < 4 ||
        this.month.length === 0 ||
        this.date.length === 0
      )
        return "필수 정보입니다.";
      else if (
        !/[0-9]/.test(this.year) ||
        !/[0-9]/.test(this.month) ||
        !/[0-9]/.test(this.date) ||
        Number(this.date) > 31 ||
        Number(this.month) > 12
      )
        return "옳은 값을 입력해 주세요";
      else return null;
    },
    mailCheck() {
      if (this.email.length == 0) return "필수 정보입니다.";
      else if (!this.email.includes("@") || !this.email.includes("."))
        return "정확한 이메일을 입력해주세요!";
      else return null;
    },
    genderCheck() {
      if (this.gender == "") return "필수 정보입니다.";
    },
    idCheck() {
      if (this.id.length == 0) return "필수 정보입니다.";
      else if (
        this.id.length < 5 ||
        /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(this.id) ||
        /[~!@#$%^&*()_+|<>?:{}]/.test(this.id)
      )
        return "5~20자의 영문 소문자, 숫자만 사용 가능합니다.";
      else if (this.checkId === null) return "중복확인을 해주세요";
      else if (!this.checkId) return "중복된 아이디입니다.";
      else return null;
    },
    invalidId() {
      return !!this.idCheck;
    },
    passwordCheck2() {
      if (this.password.length == 0) return "필수 정보입니다.";
      else if (
        this.password.length < 8 ||
        /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(this.password) ||
        !/[~!@#$%^&*()_+|<>?:{}]/.test(this.password) ||
        !/[a-z]/.test(this.password) ||
        !/[A-Z]/.test(this.password) ||
        !/[0-9]/.test(this.password)
      )
        return "8~16자 영문 대 소 문자, 숫자, 특수문자를 사용하세요.";
      else return null;
    },
    passwordCheckCheck() {
      if (this.password.length == 0 || this.password === this.passwordCheck)
        return null;
      else return "입력한 비밀번호와 불일치합니다";
    },
    roleCheck() {
      if (this.role == "") return "필수 정보입니다.";
    },
    invalidForm() {
      return (
        this.nameCheck ||
        this.birthCheck ||
        this.mailCheck ||
        this.genderCheck ||
        this.idCheck ||
        this.passwordCheck2 ||
        this.passwordCheckCheck ||
        this.roleCheck
      );
    }
  },
  methods: {
    ...mapMutations(["CHANGE_LOGIN_COMPONENT"]),
    ...mapActions(["CHECK_DUPLICATE", "REGIST_FUNC"]),
    checkDuplicate() {
      this.CHECK_DUPLICATE(this.id).then(data => {
        if (data.result === false) this.checkId = true;
        else this.checkId = false;
      });
    },
    regist() {
      this.REGIST_FUNC({
        birth: this.year + "." + this.month + "." + this.date,
        email: this.email,
        gender: this.gender,
        id: this.id,
        name: this.name,
        pw: this.pw,
        role: this.role
      }).then(data => {
        if (data.result === false) alert("회원가입 실패");
        else if (data.result === true) this.CHANGE_LOGIN_COMPONENT("welcome");
      });
    },
    selectSex(input) {
      this.gender = input;
    },
    selectRole(input) {
      this.role = input;
    }
  }
};
</script>
<style>
.registTitle {
  width: 115px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
  color: #000000;
  position: absolute;
  top: 100px;
  left: 903px;
}
.loadMap {
  width: 400px;
  height: 72px;
  object-fit: contain;
  position: absolute;
  top: 165px;
  left: 760px;
}
.registBoundLine {
  width: 636px;
  height: 0;
  border: solid 0.5px #e2e2e2;
  position: absolute;
  top: 275.7px;
  left: 642px;
}
.registBox {
  position: absolute;
  width: 1000px;
  top: 328px;
  left: 642px;
}
.registCategory {
  height: 62px;
  margin-bottom: 27px;
}
.categoryTitle {
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
  padding: 19.5px 0px;
}
.categoryInput {
  width: 468px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  font-size: 16px;
  left: 160px;
  padding-left: 30px;
}
.yearInput {
  width: 203px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  position: absolute;
  left: 160px;
  background-color: #ffffff;
  text-align: center;
  font-size: 16px;
}
.monthInput {
  width: 135px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  text-align: center;
  left: 375px;
  font-size: 16px;
}
.dayInput {
  width: 136px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  text-align: center;
  left: 522px;
  font-size: 16px;
}

.selectedSexBox {
  outline: none;
  position: relative;
  left: 122px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  color: #4b74ff;
  width: 243px;
  height: 62px;
  border-radius: 3px;
  border: solid 2px #4b74ff;
  background-color: #ffffff;
  margin-right: 12px;
  float: left;
}

.sexBox {
  margin-right: 12px;
  position: relative;
  left: 122px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  color: #c2c2c2;
  outline: none;
  width: 243px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  float: left;
}
.registCategory div {
  float: left;
}
.checkDuplicate {
  width: 127px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: right;
  color: #4b74ff;
  text-decoration-line: underline;
  position: relative;
  left: 500px;
  cursor: pointer;
  margin-bottom: 27px;
}
.selectedRoleBox {
  width: 158px;
  height: 62px;
  border-radius: 3px;
  border: solid 2px #4b74ff;
  background-color: #ffffff;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  text-align: center;
  color: #4b74ff;
  position: relative;
  left: 82px;
  margin-right: 12px;
  outline: none;
  float: left;
}
.roleBox {
  float: left;
  outline: none;
  margin-right: 12px;
  position: relative;
  left: 82px;
  width: 158px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  color: #c2c2c2;
}
.input_regist {
  width: 300px;
}
.registBtn {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 #e2e2e2;
  background-color: #c2c2c2;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  left: 752px;
  top: 1189px;
  outline: none;
}
.registBtn-success {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  left: 752px;
  top: 1189px;
  outline: none;
}
.canUseId {
  width: 152px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.81;
  letter-spacing: normal;
  text-align: left;
  color: #4b74ff;
  position: relative;
  left: 165px;
}
.cantUseId {
  width: 170px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.81;
  letter-spacing: normal;
  text-align: left;
  color: #ff4b4b;
  position: relative;
  left: 165px;
}
.error_box {
  position: absolute;
  left: 736px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4b74ff;
  padding: 22.5px 0px;
}
.success_box {
  display: block;
  float: left;
  margin: 9px 0;
  font-size: 12px;
  line-height: 14px;
  color: green;
}
</style>
