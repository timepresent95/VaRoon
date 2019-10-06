<template>
  <div class="input">
    <form @submit.prevent="onSubmit">
      <div>
        <div class="login-text">로그인</div>
        <div class="id-text">ID</div>
        <div class="id-input" @click.prevent="setfocus('id')">
          <input type="text" v-model="id" placeholder="아이디(6~13자 영문 소문자, 숫자 입력)" ref="id" />
        </div>
        <div class="pass-text">Password</div>
        <div class="pass-input" @click.prevent="setfocus('pass')">
          <input
            type="password"
            v-model="pw"
            placeholder="비밀번호(영문, 숫자, 특수문자 조합. 8~12자 내외)"
            ref="pass"
          />
        </div>
      </div>
      <a href class="ling-find" @click.prevent="CHANGE_LOGIN_COMPONENT('findAccount')">아이디/비밀번호 찾기</a>
      <div class="login-button-box">
        <button
          class="login-btn"
          :class="{'can-login': !invalidForm}"
          type="submit"
          :disabled="invalidForm"
        >로그인</button>
        <button class="join-btn" @click.prevent="CHANGE_LOGIN_COMPONENT('terms')">회원가입</button>
      </div>
    </form>
  </div>
</template>
<script>
import { auth, setAuthInHeader } from "../api";
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      id: "",
      pw: "",
      error: "",
      rPath: "",
      curFocus: "id"
    };
  },
  created() {
    this.rPath = this.$route.query.rPath || "/";
  },
  watch: {
    error() {
      alert("삭제된 계정입니다. 이메일을 확인해주세요");
    }
  },
  computed: {
    invalidForm() {
      return !this.id || !this.pw;
    }
  },
  methods: {
    ...mapActions(["LOGIN"]),
    ...mapMutations(["CHANGE_LOGIN_COMPONENT"]),

    onSubmit() {
      this.LOGIN({ id: this.id, pw: this.pw })
        .then(data => {
          this.$router.push(this.rPath);
        })
        .catch(err => {
          this.error = err.data.error;
        });
    },
    setfocus(data) {
      if (data === "id") this.$refs.id.focus();
      else this.$refs.pass.focus();
    }
  }
};
</script>
<style>
.input {
  margin-left: 40%;
  height: auto;
  overflow: hidden;
}
.input div {
  margin: 10px 0px;
  float: left;
}
.login-text {
  width: 86px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
  color: #000000;
  position: absolute;
  top: 100px;
  left: 917px;
}
.id-text {
  width: 19px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
  position: absolute;
  top: 207px;
  left: 752px;
}
.pass-text {
  width: 86px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
  position: absolute;
  top: 334px;
  left: 752px;
}
.id-input {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 240px;
  left: 752px;
}

.pass-input {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 367px;
  left: 752px;
}

.input input {
  outline: none;
  border: none;
  margin-top: 24px;
  margin-left: 19px;
  font-size: 16px;
  width: 330px;
  font-family: NanumBarunGothicUltraLightOTF;
}
.ling-find {
  width: 140px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  line-height: 2.81;
  text-align: center;
  color: #a6a6a6;
  text-decoration-line: underline;
  position: absolute;
  top: 449px;
  left: 1028px;
}
.login-button-box {
  height: 148px;
  width: 416px;
  position: absolute;
  top: 512px;
  left: 752px;
}
.login-btn {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  background-color: #a6a6a6;
  font-family: NanumBarunGothicOTF;
  box-shadow: 0 3px 10px 0 rgba(94, 94, 94, 0.6);
  font-size: 20px;
  line-height: 1.6;
  outline: none;
  text-align: center;
  color: #ffffff;
}
.can-login {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 1.6;
  outline: none;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.join-btn {
  margin-top: 20px;
  width: 416px;
  height: 64px;
  border-radius: 3px;
  border: solid 1px #4b74ff;
  background-color: #ffffff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  outline: none;
  cursor: pointer;
  color: #4b74ff;
}
</style>
