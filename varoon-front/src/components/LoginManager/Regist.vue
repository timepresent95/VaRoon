<template>
  <article class="regist">
    <h1 class="regist-title">회원가입</h1>
    <img class="load-map" src="@/images/join-step-two@2x.png" />
    <div class="regist-bound-line"></div>
    <div class="regist-box">
      <div class="regist-category">
        <h2 class="category-title">성명</h2>
        <input
          class="category-input"
          type="text"
          v-model="name"
          autofocus
          placeholder="이름을 입력해주세요"
          maxlength="20"
        />
        <p class="error_box">{{ nameCheck }}</p>
      </div>
      <div class="regist-category">
        <h2 class="category-title">생년월일</h2>
        <input
          class="yearInput"
          type="text"
          v-model="year"
          placeholder="YYYY"
        />
        <input
          class="monthInput"
          type="text"
          v-model="month"
          placeholder="MM"
        />
        <input class="dayInput" type="text" v-model="date" placeholder="DD" />
        <p class="error_box">{{ birthCheck }}</p>
      </div>
      <div class="regist-category">
        <h2 class="category-title">성별</h2>
        <button
          :class="{
            sexBox: gender !== 'male',
            selectedSexBox: gender === 'male',
          }"
          @click.prevent="selectSex('male')"
        >
          남성
        </button>
        <button
          :class="{
            sexBox: gender !== 'female',
            selectedSexBox: gender === 'female',
          }"
          @click.prevent="selectSex('female')"
        >
          여성
        </button>
        <p class="error_box">{{ genderCheck }}</p>
      </div>
      <div class="regist-category">
        <h2 class="category-title">E-mail</h2>
        <input
          class="category-input"
          type="text"
          v-model="email"
          placeholder="soma@soma.com"
        />
        <p class="error_box">{{ mailCheck }}</p>
      </div>
      <div class="regist-category">
        <h2 class="category-title">아이디</h2>
        <input
          class="category-input"
          type="text"
          v-model="id"
          placeholder="soma"
        />
        <p class="error_box">{{ idCheck }}</p>
        <button
          v-if="this.checkId === null"
          class="check-duplicate"
          @click.prevent="checkDuplicate"
        >
          아이디 중복 확인
        </button>
        <p v-if="checkId" class="can-use-id">* 사용 가능한 ID 입니다</p>
        <p v-else-if="checkId === false" class="cant-use-id">
          * 사용 불가능한 ID 입니다
        </p>
      </div>
      <div class="regist-category">
        <h2 class="category-title">비밀번호</h2>
        <input
          class="category-input"
          type="password"
          v-model="password"
          placeholder="soma123"
          maxlength="16"
        />
        <p class="error_box">{{ passwordCheck2 }}</p>
      </div>
      <div class="regist-category">
        <h2 class="category-title">비밀번호 확인</h2>
        <input
          class="category-input"
          type="password"
          v-model="passwordCheck"
          placeholder="soma123"
          maxlength="16"
        />
        <p class="error_box" :class="{ success_box: !passwordCheckCheck }">
          {{ passwordCheckCheck }}
        </p>
      </div>
      <div class="regist-category">
        <h2 class="category-title">직업 선택</h2>
        <button
          :class="{
            'role-box': role !== 'ROLE_Seller',
            'selected-role-box': role === 'ROLE_Seller',
          }"
          @click.prevent="selectRole('ROLE_Seller')"
        >
          판매자
        </button>
        <button
          :class="{
            'role-box': role !== 'ROLE_Patien',
            'selected-role-box': role === 'ROLE_Patien',
          }"
          @click.prevent="selectRole('ROLE_Patien')"
        >
          환자
        </button>
        <button
          :class="{
            'role-box': role !== 'ROLE_Doctor',
            'selected-role-box': role === 'ROLE_Doctor',
          }"
          @click.prevent="selectRole('ROLE_Doctor')"
        >
          의사
        </button>
        <p class="error_box">{{ roleCheck }}</p>
      </div>
    </div>
    <button
      class="regist-btn"
      @click.prevent="regist"
      :class="{ 'regist-btn-success': !invalidForm }"
      :disabled="invalidForm"
    >
      가입하기
    </button>
  </article>
</template>
<script>
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
      role: "",
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
    },
  },
  methods: {
    ...mapMutations(["CHANGE_LOGIN_COMPONENT"]),
    ...mapActions(["CHECK_DUPLICATE", "REGIST_FUNC"]),
    checkDuplicate() {
      this.CHECK_DUPLICATE(this.id).then((data) => {
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
        role: this.role,
      }).then((data) => {
        if (data.result === false) alert("회원가입 실패");
        else if (data.result === true) this.CHANGE_LOGIN_COMPONENT("welcome");
      });
    },
    selectSex(input) {
      this.gender = input;
    },
    selectRole(input) {
      this.role = input;
    },
  },
};
</script>
<style>
.regist {
  min-height: calc(100vh - 191px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
}
.regist-title {
  width: 115px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
  font-weight: normal;
}
.load-map {
  width: 400px;
  height: 72px;
  object-fit: contain;
}
.regist-bound-line {
  width: 636px;
  height: 0;
  border: solid 0.5px #e2e2e2;
  margin: 10px 0;
}
h2 {
  font-weight: normal;
}
.regist-category {
  margin-bottom: 27px;
}
.category-title {
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
  margin-bottom: 5px;
}
.category-input {
  width: 468px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  font-size: 16px;
  padding: 0 20px;
}
.yearInput {
  width: 203px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
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
  text-align: center;
  font-size: 16px;
}
.dayInput {
  width: 136px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  text-align: center;
  font-size: 16px;
}

.selectedSexBox {
  outline: none;
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
}

.sexBox {
  margin-right: 12px;
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
}
.check-duplicate {
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  color: #4b74ff;
  text-decoration-line: underline;
  cursor: pointer;
  margin-bottom: 27px;
  background-color: inherit;
  outline: none;
  border: none;
}
.selected-role-box {
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
  margin-right: 12px;
  outline: none;
}
.role-box {
  outline: none;
  margin-right: 12px;
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
.regist-btn {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 #e2e2e2;
  background-color: #c2c2c2;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  outline: none;
  border: none;
}
.regist-btn-success {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  outline: none;
  border: none;
}
.can-use-id {
  width: 152px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  line-height: 2.81;
  text-align: left;
  color: #4b74ff;
}
.cant-use-id {
  width: 170px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  line-height: 2.81;
  text-align: left;
  color: #ff4b4b;
}
.error_box {
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  text-align: left;
  display: block;
  color: #4b74ff;
  padding-top: 10px;
}
.success_box {
  display: block;
  margin: 9px 0;
  font-size: 12px;
  line-height: 14px;
  color: green;
}
</style>
