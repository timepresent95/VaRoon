<template>
  <div>
    <div class="findIdTitle">비밀번호 찾기</div>
    <div class="idTitle">아이디</div>
    <div class="idInput">
      <input type="text" autofocus placeholder="사용하는 아이디를 입력하세요" />
    </div>
    <div class="passNameTitle">이름</div>
    <div class="passNameInput">
      <input type="text" autofocus placeholder="이름을 입력하세요" />
    </div>
    <div class="passEmailTitle">이메일</div>
    <div class="passEmailInput">
      <input type="text" placeholder="등록된 이메일과 같아야 인증번호가 발송됩니다" />
    </div>
    <div class="passCheckNum">
      <input type="text" placeholder="인증번호 4자리" />
    </div>
    <button class="passCheckNumBtn">인증번호 받기</button>
    <button class="passNextBtn">다음</button>
    <button class="passChangeComponent" @click.prevent="CHANGE_FIND_COMPONENT('id')">아이디 찾기</button>
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

.idTitle {
  width: 54px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
  position: absolute;
  top: 200px;
  left: 752px;
}
.passNameTitle {
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

.passEmailTitle {
  width: 54px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
  position: absolute;
  top: 461px;
  left: 752px;
}

.idInput {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 240px;
  left: 752px;
}
.passNameInput {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 367px;
  left: 752px;
}

.passEmailInput {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 494px;
  left: 752px;
}

.passCheckNum {
  width: 264px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 569px;
  left: 752px;
}

.idInput input,
.passNameInput input,
.passEmailInput input {
  outline: none;
  border: none;
  margin-top: 24px;
  margin-left: 19px;
  font-size: 16px;
  width: 300px;
  font-family: NanumBarunGothicUltraLightOTF;
}
.passCheckNum input {
  outline: none;
  border: none;
  margin-top: 24px;
  margin-left: 19px;
  font-size: 16px;
  width: 200px;
  font-family: NanumBarunGothicUltraLightOTF;
}

.passCheckNumBtn {
  width: 140px;
  height: 62px;
  border-radius: 3px;
  border: solid 2px #4b74ff;
  position: absolute;
  top: 569px;
  left: 1028px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  line-height: 2.81;
  text-align: center;
  color: #4b74ff;
}
.passNextBtn {
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
  top: 675px;
  left: 752px;
}
.passChangeComponent {
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
  top: 759px;
  left: 752px;
}
</style>

