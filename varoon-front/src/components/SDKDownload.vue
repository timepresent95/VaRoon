<template>
  <div class="sdkContents">
    <div class="downTitle">SDK 다운로드</div>
    <div class="sdkDownBox">
      <div class="sdkBoxTag">VaRoon SDK 1.1</div>
      <div class="sdkBoxBtn">Download</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.sdkContents {
  width: 1620px;
  position: relative;
  left: 308px;
  background-color: #ffffff;
  height: 1080px;
}
.downTitle {
  width: 184px;
  height: 37px;
  font-size: 32px;
  position: absolute;
  top: 64px;
  left: 75px;
}
.sdkDownBox {
  width: 1164px;
  height: 276px;
  border-radius: 3px;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  background-color: #ffffff;
  position: absolute;
  top: 152px;
  left: 75px;
}
.sdkBoxTag {
  width: 295px;
  height: 46px;
  font-family: NanumBarunGothicOTF;
  font-size: 40px;
  text-align: center;
  position: absolute;
  top: 65px;
  left: 435px;
}
.sdkBoxBtn {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: rgba(75, 116, 255, 1);
  position: absolute;
  top: 147px;
  left: 374px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
</style>
