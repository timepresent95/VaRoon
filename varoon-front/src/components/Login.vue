<template>
  <div class="input">
    <form @submit.prevent="onSubmit">
      <div>
        <input
          class="form-control"
          type="text"
          v-model="id"
          autofocus
          placeholder="아이디(6~13자 영문 소문자, 숫자 입력)"
        />
        <input
          class="form-control"
          type="password"
          v-model="pw"
          placeholder="비밀번호(영문, 숫자, 특수문자 조합. 8~12자 내외)"
        />
      </div>
      <div>
        <button
          class="btn"
          :class="{'btn-success': !invalidForm}"
          type="submit"
          :disabled="invalidForm"
        >Log In</button>
      </div>
    </form>
  </div>
</template>
<script>
import { auth, setAuthInHeader } from "../api";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      id: "",
      pw: "",
      error: "",
      rPath: ""
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
    onSubmit() {
      this.LOGIN({ id: this.id, pw: this.pw })
        .then(data => {
          this.$router.push(this.rPath);
        })
        .catch(err => {
          this.error = err.data.error;
        });
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
.input button {
  height: 70px;
  margin: 3px 25px;
}
.input input {
  width: 300px;
}
</style>
