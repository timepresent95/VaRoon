<template>
  <div>
    <div class="welcomTitle">회원가입</div>
    <img class="loadMap" src="../images/join-step-three@2x.png" />
    <img class="congratulation" src="../images/join-illust-img@2x.png" />
    <div class="welcomMention1">축하합니다.</div>
    <div class="welcomMention2">회원가입이 완료되었습니다</div>
    <button class="welcomNext" @click.prevent="CHANGE_LOGIN_COMPONENT('login')">로그인 페이지로 이동</button>
  </div>
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
.welcomTitle {
  width: 115px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  text-align: center;
  position: absolute;
  top: 100px;
  left: 903px;
}
.loadMap {
  width: 400px;
  height: 72px;
  object-fit: contain;
  position: absolute;
  top: 165px;
  left: 760px;
}
.congratulation {
  width: 281px;
  height: 278px;
  object-fit: contain;
  position: absolute;
  top: 313px;
  left: 820px;
}
.welcomMention1 {
  width: 138px;
  height: 32px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  text-align: center;
  color: #000000;
  position: absolute;
  top: 648px;
  left: 891px;
}
.welcomMention2 {
  width: 218px;
  height: 23px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  color: #c2c2c2;
  position: absolute;
  top: 694px;
  left: 851px;
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
  position: absolute;
  top: 805px;
  left: 752px;
}
</style>
