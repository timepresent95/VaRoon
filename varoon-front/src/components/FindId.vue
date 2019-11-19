<template>
  <div>
    <div class="findIdTitle">아이디 찾기</div>
    <div class="nameTitle">이름</div>
    <div class="nameInput">
      <input type="text" autofocus placeholder="이름을 입력하세요" />
    </div>
    <div class="emailTitle">이메일</div>
    <div class="emailInput">
      <input type="text" placeholder="등록된 이메일과 같아야 인증번호가 발송됩니다" />
    </div>
    <div class="checkNum">
      <input type="text" placeholder="인증번호 4자리" />
    </div>
    <button class="checkNumBtn">인증번호 받기</button>
    <button class="nextBtn">다음</button>
    <button class="changeComponent" @click.prevent="CHANGE_FIND_COMPONENT('pass')">비밀번호 찾기</button>
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
.findIdTitle {
  width: 150px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
  color: #000000;
  position: absolute;
  top: 100px;
  left: 885px;
}

.nameTitle {
  width: 36px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
  position: absolute;
  top: 200px;
  left: 752px;
}

.emailTitle {
  width: 54px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
  position: absolute;
  top: 334px;
  left: 752px;
}

.nameInput {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 240px;
  left: 752px;
}

.emailInput {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 367px;
  left: 752px;
}

.checkNum {
  width: 264px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 442px;
  left: 752px;
}

.nameInput input,
.emailInput input {
  outline: none;
  border: none;
  margin-top: 24px;
  margin-left: 19px;
  font-size: 16px;
  width: 300px;
  font-family: NanumBarunGothicUltraLightOTF;
}
.checkNum input {
  outline: none;
  border: none;
  margin-top: 24px;
  margin-left: 19px;
  font-size: 16px;
  width: 200px;
  font-family: NanumBarunGothicUltraLightOTF;
}

.checkNumBtn {
  width: 140px;
  height: 62px;
  border-radius: 3px;
  border: solid 2px #4b74ff;
  position: absolute;
  top: 442px;
  left: 1028px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  line-height: 2.81;
  text-align: center;
  color: #4b74ff;
}
.nextBtn {
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
  position: absolute;
  top: 548px;
  left: 752px;
}
.changeComponent {
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
  position: absolute;
  top: 632px;
  left: 752px;
}
</style>
