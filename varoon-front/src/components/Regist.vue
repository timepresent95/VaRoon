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
        <input
        class="form-control"
        type="text"
        v-model="year"
        placeholder="년"
      />
      <input
        class="form-control"
        type="text"
        v-model="month"
        placeholder="월"
      />
      <input
        class="form-control"
        type="text"
        v-model="date"
        placeholder="일"
      />
      </div>
      <div class="error_box">{{birthCheck}}</div>
    </div>
    <div>
      <h3>
        <label for="id">성별</label>
      </h3>
      <input type="radio" value="male" v-model="sex"> 남성
      <input type="radio" value="female" v-model="sex"> 여성
      <div class="error_box">{{sexCheck}}</div>
    </div>
    <h3>
      <label for="id">E-mail</label>
    </h3>
    <div class="input_regist">
      <input
        class="form-control"
        type="text"
        v-model="email"
        placeholder="soma@soma.com"
      />
    </div> 
    <div class="error_box">{{mailCheck}}</div>
    <h3>
      <label for="id">ID</label>
    </h3>
    <div class="input_regist">
      <input
        class="form-control"
        type="text"
        v-model="id"
        placeholder="soma"
      />
    </div> 
    <div class="error_box">{{idCheck}}</div>
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
    <input type="radio" value="seller" v-model="author"> 판매자
    <input type="radio" value="patient" v-model="author"> 환자
    <input type="radio" value="doctor" v-model="author"> 의사

    <div class="error_box">{{authorCheck}}</div>
    
    <button  class="btn" @click.prevent="CHANGE_COMPONENT('welcome')"
    :class="{'btn-success': !invalidForm}"
        :disabled="invalidForm"
        >가입</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      name: "",
      year: "",
      month: "",
      date: "",
      sex: "",
      email: "",
      id: "",
      password: "",
      passwordCheck: "",
      author: "",
    }
  },
  computed: {
    ...mapState(["component"]),
    nameCheck(){
      let check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
      if(this.name.length == 0)
        return "필수 정보입니다."
      else null;
    },
    birthCheck(){
      if(this.year.length < 4 || this.month.length === 0 || this.date.length === 0)
        return "필수 정보입니다."
      else if(!/[0-9]/.test(this.year) || !/[0-9]/.test(this.month) || !/[0-9]/.test(this.date) || Number(this.date) > 31 || Number(this.month) > 12)
        return "옳은 값을 입력해 주세요"
      else return null;
    },
    mailCheck(){
      if(this.email.length == 0)
        return "필수 정보입니다."
      else if(!this.email.includes('@') || !this.email.includes('.')) return "정확한 이메일을 입력해주세요!"
      else return null;
    },
    sexCheck(){
      if(this.sex == '')
        return "필수 정보입니다."
    },
    idCheck(){
      if(this.id.length == 0)
        return "필수 정보입니다."
      else if(this.id.length < 5 || /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(this.id) || /[~!@#$%^&*()_+|<>?:{}]/.test(this.id)) return "5~20자의 영문 소문자, 숫자만 사용 가능합니다."
      else return null;
    },
    passwordCheck2(){
      if(this.password.length == 0)
        return "필수 정보입니다."
      else if(this.password.length < 8 || /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(this.password) || !/[~!@#$%^&*()_+|<>?:{}]/.test(this.password) || 
              !/[a-z]/.test(this.password) || !/[A-Z]/.test(this.password) || !/[0-9]/.test(this.password)) return "8~16자 영문 대 소 문자, 숫자, 특수문자를 사용하세요."
      else return null;
    },
    passwordCheckCheck(){
      if(this.password.length == 0 || this.password === this.passwordCheck) return null
      else return "입력한 비밀번호와 불일치합니다"
    },
    authorCheck(){
      if(this.author == '')
        return "필수 정보입니다."
    },
    invalidForm(){
      return this.nameCheck || this.birthCheck || this.mailCheck || this.sexCheck || this.idCheck || this.passwordCheck2 || this.passwordCheckCheck || this.authorCheck
    }
  },
  methods: {
    ...mapMutations(["CHANGE_COMPONENT"]),
    
  },
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
