<template>
  <div class="error-content">
    <div class="image-404-content">
      <img class="image-404" src="@/images/error-illust-img@2x.png" />
    </div>
    <p class="error-text">찾을 수 없는 페이지를 요청하셨습니다.</p>
    <router-link to="/">
      <div class="error-home-btn">Home</div>
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
.error-content {
  width: 100%;
  height: calc(100vh - 191px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
}
.image-404-content {
  width: 822px;
  height: 411px;
}
.image-404 {
  width: 822px;
  height: 411px;
  object-fit: contain;
}
.error-text {
  height: 32px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  text-align: center;
  color: #000000;
  margin: 20px 0;
}
.error-home-btn {
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