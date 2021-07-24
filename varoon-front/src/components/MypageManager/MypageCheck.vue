<template>
  <div class="my-page-check">
    <h2 class="mypage-check-title">현재 비밀번호</h2>
    <p>
      <input
        class="mypage-check-input"
        v-model="inputPassword"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
    </p>
    <button class="mypage-check-button" @click="checkPass">확인</button>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      inputPassword: null,
    };
  },
  computed: {
    ...mapState(["mypageComponent", "id"]),
  },
  methods: {
    ...mapActions(["LOGIN"]),
    ...mapMutations(["CHANGE_MY_COMPONENT"]),
    checkPass() {
      const id = this.id;
      const pw = this.inputPassword;
      this.LOGIN({ id, pw })
        .then((_) => {
          this.CHANGE_MY_COMPONENT("pa");
        })
        .catch((_) => {
          alert("worng password");
        });
    },
  },
};
</script>
<style>
.my-page-check {
  text-align: center;
}
.mypage-check-title {
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 30px;
}
.mypage-check-input {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  line-height: 62px;
  padding: 10px 20px;
}
.mypage-check-button {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  border: none;
  margin-top: 30px;
  cursor: pointer;
}
</style>
