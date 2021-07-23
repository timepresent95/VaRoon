<template>
  <article class="login-artice">
    <form @submit.prevent="onSubmit">
      <div>
        <h1 class="login-text">로그인</h1>
        <h2 class="id-text">ID</h2>
        <div class="id-input" @click.prevent="setfocus('id')">
          <input type="text" v-model="id" placeholder="6~13자 영문 소문자, 숫자 입력" ref="id" />
        </div>
        <h2 class="pass-text">Password</h2>
        <div class="pass-input" @click.prevent="setfocus('pass')">
          <input
            type="password"
            v-model="pw"
            placeholder="영문, 숫자, 특수문자 조합. 8~12자 내외"
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
  </article>
</template>
<script>
import { auth, setAuthInHeader } from "@/api";
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
.login-artice {
  height: calc(100vh - 191px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
}
.login-text {
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  font-weight: normal;
  text-align: center;
}
.id-text {
  width: 19px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  font-weight: normal;
}
.pass-text {
  width: 86px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  font-weight: normal;
  margin-top: 1rem;
}
.id-input {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
}

.pass-input {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
}

.login-artice input {
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
}
.login-button-box {
  height: 148px;
  width: 416px;
}
.login-btn {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  background-color: #a6a6a6;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 1.6;
  outline: none;
  text-align: center;
  color: #ffffff;
  border: none;
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
