<template>
  <div class="mypaContext">
    <div class="mypaName">
      <div class="title">이름</div>
      <div class="content">{{name}}</div>
    </div>
    <div class="mypaID">
      <div class="title">아이디</div>
      <div class="content">{{id}}</div>
    </div>
    <div class="mypaNewPass">
      <div class="title">새 비밀번호</div>
      <input type="password" autofocus placeholder="영문, 숫자, 특수 문자 조합, 8-12자 내외" />
    </div>
    <div class="mypaNewPassCheck">
      <div class="title">새 비밀번호 확인</div>
      <input type="password" placeholder="비밀번호와 일치해야 합니다" />
    </div>
    <div class="mypaButton">확인</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["name", "id"])
  }
};
</script>
<style>
.mypaContext {
  position: relative;
  top: 207px;
  left: 752px;
  width: 1920px;
}
.mypaName {
  width: 416px;
  height: 23px;
  margin-bottom: 32px;
}
.mypaName .title {
  width: 36px;
  float: left;
}
.mypaID .title {
  width: 54px;
  float: left;
}
.mypaName .content {
  width: 380px;
  text-align: right;
}
.mypaID .content {
  width: 380px;
  text-align: right;
}
.mypaName div,
.mypaID div {
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  color: #a6a6a6;
}
.mypaID {
  width: 416px;
  margin-bottom: 40px;
  height: 23px;
}
.mypaNewPass,
.mypaNewPassCheck {
  height: 95px;
  margin-bottom: 32px;
}
.mypaNewPass .title,
.mypaNewPassCheck .title {
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  margin-bottom: 10px;
}
.mypaNewPass input,
.mypaNewPassCheck input {
  width: 397px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  line-height: 62px;
  text-align: left;
  padding-left: 19px;
}
.mypaButton {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: rgb(75, 116, 255);
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  margin-top: 44px;
}
</style>
