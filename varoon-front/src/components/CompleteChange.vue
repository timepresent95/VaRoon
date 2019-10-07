<template>
  <div>
    <div class="completeChangeTitle">비밀번호 찾기</div>
    <img class="passComplete" src="../images/password-illust-img@2x.png" />
    <div class="completeChangeDescript1">비밀번호 변경이 완료되었습니다</div>
    <div class="completeChangeDescript2">아래 버튼을 눌러 다시 로그인 하세요</div>
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
.completeChangeTitle {
  width: 179px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
  color: #000000;
  position: absolute;
  top: 100px;
  left: 871px;
}
.passComplete {
  width: 460px;
  height: 297px;
  object-fit: contain;
  opacity: 0.97;
  position: absolute;
  top: 205px;
  left: 730px;
}
.completeChangeDescript1 {
  width: 363px;
  height: 32px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  text-align: center;
  color: #000000;
  position: absolute;
  top: 552px;
  left: 779px;
}
.completeChangeDescript2 {
  width: 290px;
  height: 23px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  color: #c2c2c2;
  position: absolute;
  top: 598px;
  left: 815px;
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
  position: absolute;
  top: 709px;
  left: 752px;
}
</style>
