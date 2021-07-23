<template>
  <div class="new-password">
    <h1 class="find-pass-title">비밀번호 찾기</h1>
      <p class="my-id">
        아이디: {{id}}
      </p>
    <div>
      <h2 class="new-pass-title">새 비밀번호</h2>
      <div class="new-pass-input">
        <input type="text" autofocus placeholder="영문, 숫자, 특수 문자 조합, 8-12자 내외" />
      </div>
    </div>
    <div>
      <h2 class="pass-check-title">새 비밀번호 확인</h2>
      <div class="check-pass-input">
        <input type="text" placeholder="비밀번호와 일치해야 합니다" />
      </div>
    </div>
    <button class="next-btn">다음</button>
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
.new-password {
  min-height: calc(100vh - 191px);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.new-password h1,
.new-password h2 {
  font-weight: normal;
}

.new-password > div {
  margin-bottom: 10px;
}
.find-pass-title {
  width: 179px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
  color: #000000;
}
.my-id {
  width: 416px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #a6a6a6;
}
.new-pass-title {
  width: 135px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
}

.pass-check-title {
  width: 135px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: left;
  color: #000000;
}

.new-pass-input {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
}

.check-pass-input {
  width: 416px;
  height: 62px;
  border-radius: 3px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
}

.new-pass-input input,
.check-pass-input input {
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
  border: none;
}
</style>

