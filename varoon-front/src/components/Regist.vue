<template>
  <div>
    <img class="loadMap" src="http://placehold.it/321x100" />
    <div>
      <h3>
        <label for="id">이름</label>
      </h3>
      <div class="input_regist">
        <input
          class="form-control"
          type="text"
          v-model="name"
          autofocus
          placeholder="강태우"
          maxlength="20"
        />
      </div>
      <div class="error_box">{{nameCheck}}</div>
    </div>
    <div>
      <h3>
        <label for="id">생년월일</label>
      </h3>
      <div>
        <input class="form-control" type="text" v-model="year" placeholder="년" />
        <input class="form-control" type="text" v-model="month" placeholder="월" />
        <input class="form-control" type="text" v-model="date" placeholder="일" />
      </div>
      <div class="error_box">{{birthCheck}}</div>
    </div>
    <div>
      <h3>
        <label for="id">성별</label>
      </h3>
      <input type="radio" value="male" v-model="gender" /> 남성
      <input type="radio" value="female" v-model="gender" /> 여성
      <div class="error_box">{{genderCheck}}</div>
    </div>
    <h3>
      <label for="id">E-mail</label>
    </h3>
    <div class="input_regist">
      <input class="form-control" type="text" v-model="email" placeholder="soma@soma.com" />
    </div>
    <div class="error_box">{{mailCheck}}</div>
    <h3>
      <label for="id">ID</label>
    </h3>
    <div class="input_regist">
      <input class="form-control" type="text" v-model="id" placeholder="soma" />
    </div>
    <div class="error_box">{{idCheck}}</div>
    <button  class="btn" :class="{'btn-success': !invalidId}" @click.prevent='checkDuplicate' 
          :disabled="invalidId">중복확인</button>
    <h3>
      <label for="id">비밀번호</label>
    </h3>
    <div class="input_regist">
      <input
        class="form-control"
        type="password"
        v-model="password"
        placeholder="soma123"
        maxlength="16"
      />
    </div>
    <div class="error_box">{{passwordCheck2}}</div>
    <h3>
      <label for="id">비밀번호 확인</label>
    </h3>
    <div class="input_regist">
      <input
        class="form-control"
        type="password"
        v-model="passwordCheck"
        placeholder="soma123"
        maxlength="16"
      />
    </div>
    <div class="error_box" :class="{success_box: !passwordCheckCheck}">{{passwordCheckCheck}}</div>
    <h3>
      <label for="id">가입 요청</label>
    </h3>
    <input type="radio" value="seller" v-model="role" /> 판매자
    <input type="radio" value="patient" v-model="role" /> 환자
    <input type="radio" value="doctor" v-model="role" />
 의사
    <div class="error_box">{{roleCheck}}</div>

    <button
      class="btn"
      @click.prevent="regist"
      :class="{'btn-success': !invalidForm}"
      :disabled="invalidForm"
    >가입</button>
  </div>
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
      else return null;
    },
    invalidId() {
      return !!this.idCheck
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
    ...mapActions(["CHECK_DUPLICATE", "REGIST"]),
    checkDuplicate(){
      if(!this.CHECK_DUPLICATE(this.id).result)
        alert('중복된 ID가 있습니다.')
      else
        alert('사용 가능한 ID 입니다.')
    },
    regist(ab){
      this.REGIST({
        birth: '',
        email: this.email,
        gender: this.gender,
        id: this.id,
        name: this.name,
        pw: this.pw,
        role: this.role
      })
      this.CHANGE_LOGIN_COMPONENT('welcome')
    }
  }
};
</script>
<style>
.input_regist {
  width: 300px;
}
.error_box {
  display: block;
  float: left;
  margin: 9px 0;
  font-size: 12px;
  line-height: 14px;
  color: red;
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
