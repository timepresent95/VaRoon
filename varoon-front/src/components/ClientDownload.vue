<template>
  <div class="clientContent">
    <div class="clientTitle">클라이언트 다운로드</div>
    <div class="clientDownBox">
      <div class="clientDownTag">VaRoon Client 1.1</div>
      <div class="clientDownButton">Download</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gameId: "VR게임 제목",
      playTime: 0
    };
  }
};
</script>
<style>
.clientContent {
  width: 1612px;
  height: 1724px;
  position: absolute;
  left: 308px;
}
.clientTitle {
  width: 265px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  position: absolute;
  top: 64px;
  left: 75px;
}
.clientDownBox {
  width: 1164px;
  height: 276px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  position: absolute;
  top: 152px;
  left: 75px;
}
.clientDownTag {
  width: 322px;
  height: 46px;
  font-family: NanumBarunGothicOTF;
  font-size: 40px;
  text-align: center;
  position: absolute;
  top: 65px;
  left: 421px;
}
.clientDownButton {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: rgb(75, 116, 255);
  text-align: center;
  position: absolute;
  top: 147px;
  left: 374px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 64px;
  color: #ffffff;
  cursor: pointer;
}
</style>
