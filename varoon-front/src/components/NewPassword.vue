<template>
  <div>
    <div class="findPassTitle">비밀번호 찾기</div>
    <div class="myId">
      아이디
      <span style="margin-right: 245px"></span>
      {{id}}
    </div>
    <div class="newPassTitle">새 비밀번호</div>
    <div class="newPassInput">
      <input type="text" autofocus placeholder="영문, 숫자, 특수 문자 조합, 8-12자 내외" />
    </div>
    <div class="passCheckTitle">새 비밀번호 확인</div>
    <div class="checkPassInput">
      <input type="text" placeholder="비밀번호와 일치해야 합니다" />
    </div>
    <button class="nextBtn">다음</button>
  </div>
</template>
<script>
/*
  서버연결해야함

  id 연결해야함
*/
export default {
  data() {
    return {
      id: ""
    };
  }
};
</script>
<style>
.findPassTitle {
  width: 179px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
  color: #000000;
  position: absolute;
  top: 100px;
  left: 885px;
}
.myId {
  width: 500px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #a6a6a6;
  position: absolute;
  top: 207px;
  left: 752px;
}
.newPassTitle {
  width: 135px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
  position: absolute;
  top: 262px;
  left: 752px;
}

.passCheckTitle {
  width: 135px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
  position: absolute;
  top: 389px;
  left: 752px;
}

.newPassInput {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 295px;
  left: 752px;
}

.checkPassInput {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  top: 422px;
  left: 752px;
}

.newPassInput input,
.checkPassInput input {
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
  top: 528px;
  left: 752px;
}
</style>

