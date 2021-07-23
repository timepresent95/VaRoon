<template>
  <section class="welcome">
    <h1 class="welcomTitle">회원가입</h1>
    <img class="loadMap" src="@/images/join-step-three@2x.png" />
    <img class="congratulation" src="@/images/join-illust-img@2x.png" />
    <p class="welcom-mention1">축하합니다.</p>
    <p class="welcom-mention2">회원가입이 완료되었습니다</p>
    <button class="welcomNext" @click.prevent="CHANGE_LOGIN_COMPONENT('login')">로그인 페이지로 이동</button>
  </section>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["CHANGE_LOGIN_COMPONENT"])
  }
};
</script>
<style>
.welcome{
  min-height: calc(100vh - 191px);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.welcomTitle {
  width: 115px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
}
.loadMap {
  width: 400px;
  height: 72px;
  object-fit: contain;
}
.congratulation {
  width: 281px;
  height: 278px;
  object-fit: contain;
}
.welcom-mention1 {
  height: 32px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  text-align: center;
  color: #000000;
}
.welcom-mention2 {
  height: 23px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  color: #c2c2c2;
}
.welcomNext {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
}
</style>
