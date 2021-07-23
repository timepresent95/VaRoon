<template>
  <div class="complete-change">
    <p class="complete-change__title">비밀번호 찾기</p>
    <img class="pass-complete" src="@/images/password-illust-img@2x.png" />
    <p class="complete-change-description1">비밀번호 변경이 완료되었습니다</p>
    <p class="complete-change-description2">아래 버튼을 눌러 다시 로그인 하세요</p>
    <button @click.prevent="goLogin" class="completeChangeBtn">로그인 하기</button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["CHANGE_LOGIN_COMPONENT", "CHANGE_FIND_COMPONENT"]),
    goLogin() {
      this.CHANGE_LOGIN_COMPONENT("login");
      this.CHANGE_FIND_COMPONENT("id");
    }
  }
};
</script>
<style>
.complete-change{
  min-height: calc(100vh - 191px);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.complete-change__title {
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
}
.pass-complete {
  width: 460px;
  height: 297px;
  object-fit: contain;
  opacity: 0.97;
  margin: 20px 0;
}
.complete-change-description1 {
  height: 32px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  text-align: center;
  color: #000000;
}
.complete-change-description2 {
  height: 23px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 20px;
  text-align: center;
  color: #c2c2c2;
}
.completeChangeBtn {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  border: none;
}
</style>
