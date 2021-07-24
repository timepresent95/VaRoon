<template>
  <div class="mypa-content">
    <div class="mypa-name">
      <h3 class="title">이름</h3>
      <p class="content">{{ name }}</p>
    </div>
    <div class="mypa-id">
      <h3 class="title">아이디</h3>
      <p class="content">{{ id }}</p>
    </div>
    <div class="mypa-new-pass">
      <div class="title">새 비밀번호</div>
      <input
        type="password"
        autofocus
        placeholder="영문, 숫자, 특수 문자 조합, 8-12자 내외"
      />
    </div>
    <div class="mypa-new-passcheck">
      <div class="title">새 비밀번호 확인</div>
      <input type="password" placeholder="비밀번호와 일치해야 합니다" />
    </div>
    <div class="mypa-button">확인</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["name", "id"]),
  },
};
</script>
<style>
.mypa-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mypa-content h3 {
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  color: #a6a6a6;
  font-weight: normal;
  margin-right: 30px;
}
.mypa-name {
  margin-bottom: 32px;
  display: flex;
}
.mypa-id {
  margin-bottom: 40px;
  display: flex;
}
.mypa-name p,
.mypa-id p {
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  color: #a6a6a6;
}
.mypa-new-pass,
.mypa-new-passcheck {
  margin-bottom: 32px;
}
.mypa-new-pass .title,
.mypa-new-passcheck .title {
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  margin-bottom: 10px;
}
.mypa-new-pass input,
.mypa-new-passcheck input {
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
.mypa-button {
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
  cursor: pointer;
}
</style>
