<template>
  <div class="ErrorContent">
    <div class="Image404Box">
      <img class="Image404" src="@/images/error-illust-img@2x.png" />
    </div>
    <div class="ErrorText">찾을 수 없는 페이지를 요청하셨습니다.</div>
    <router-link to="/">
      <div class="ErrorHomeBtn">Home</div>
    </router-link>
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
.ErrorContent {
  width: 1920px;
  height: 1724px;
}
.Image404Box {
  position: absolute;
  top: 131px;
  left: 548.4px;
  width: 822px;
  height: 411px;
}
.Image404 {
  width: 822px;
  height: 411px;
  object-fit: contain;
}
.ErrorText {
  height: 32px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  text-align: center;
  color: #000000;
  position: absolute;
  top: 631px;
  left: 740px;
}
.ErrorHomeBtn {
  position: absolute;
  top: 731px;
  left: 740px;
  width: 416px;
  height: 64px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(75, 116, 255, 0.6);
  background-color: #4b74ff;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  line-height: 64px;
  outline: none;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
</style>