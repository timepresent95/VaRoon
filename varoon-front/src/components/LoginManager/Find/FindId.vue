<template>
  <div class="find-id">
    <h1 class="find-id__title">아이디 찾기</h1>
    <div>
      <h2 class="name-title">이름</h2>
      <div class="name-input">
        <input type="text" autofocus placeholder="이름을 입력하세요" />
      </div>
    </div>
    <div>
      <h2 class="email-title">이메일</h2>
      <div class="email-input">
        <input type="text" placeholder="등록된 이메일과 같아야 인증번호가 발송됩니다" />
      </div>
    </div>
    <div class="check-num-content">
      <div class="check-num">
        <input type="text" placeholder="인증번호 4자리" />
      </div>
      <button class="check-num-btn">인증번호 받기</button>
    </div>
    <button class="next-btn">다음</button>
    <button class="change-component" @click.prevent="CHANGE_FIND_COMPONENT('pass')">비밀번호 찾기</button>
  </div>
</template>
<script>
/*
  TODO:

    서버랑 연결해야함
*/
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["CHANGE_FIND_COMPONENT"])
  }
};
</script>
<style>
.find-id {
  min-height: calc(100vh - 191px);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.find-id h1,
.find-id h2 {
  font-weight: normal;
}

.find-id > div {
  margin-bottom: 10px;
}

.find-id__title {
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
}

.name-title {
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
}

.email-title {
  width: 54px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
}

.name-input {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
}

.email-input {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
}

.check-num {
  width: 264px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
}

.name-input input,
.email-input input {
  outline: none;
  border: none;
  margin-top: 24px;
  margin-left: 19px;
  font-size: 16px;
  width: 300px;
  font-family: NanumBarunGothicUltraLightOTF;
}

.check-num-content {
  display: flex;
}

.check-num input {
  outline: none;
  border: none;
  margin-top: 24px;
  font-size: 16px;
  width: 200px;
  padding: 0 20px;
  font-family: NanumBarunGothicUltraLightOTF;
}

.check-num-btn {
  width: 140px;
  height: 62px;
  border-radius: 3px;
  border: solid 2px #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  line-height: 2.81;
  text-align: center;
  color: #4b74ff;
  margin-left: 13px;
}
.next-btn {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  color: #ffffff;
  margin-bottom: 10px;
  border: none;
}
.change-component {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  border: solid 1px #4b74ff;
  background-color: #ffffff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  color: #4b74ff;
}
</style>
