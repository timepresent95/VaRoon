<template>
  <div class="sdk-contents">
    <h1 class="down-title">SDK 다운로드</h1>
    <div class="sdk-down-box">
      <h3 class="sdk-box-tag">VaRoon SDK 1.1</h3>
      <button class="sdk-box-btn">Download</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.sdk-contents {
  padding-top: 30px;
  flex: 1;
}
.down-title {
  font-size: 32px;
  font-family: NanumBarunGothicOTF;
  font-weight: normal;
}
.sdk-down-box {
  width: 80%;
  height: 276px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 10px 60px 0 rgba(217, 217, 217, 0.43);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.sdk-box-tag {
  height: 46px;
  font-family: NanumBarunGothicOTF;
  font-size: 40px;
  text-align: center;
  font-weight: normal;
}
.sdk-box-btn {
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: rgba(75, 116, 255, 1);
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  border: none;
  margin-top: 30px;
}
</style>
