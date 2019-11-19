<template>
  <div id="app">
    <span class="fontDown1">가</span>
    <span class="fontDown2">가</span>
    <span class="fontDown3">가</span>
    <span class="fontDown4">가</span>
    <TopNavi />
    <router-view class="container"></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import TopNavi from "./components/TopNavi.vue";

export default {
  name: "app",
  components: {
    Footer,
    TopNavi
  },
  data() {
    return {};
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
@font-face {
  font-family: "NanumBarunGothicOTF";
  src: url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothic.woff2")
      format("woff2"),
    url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothic.woff")
      format("woff"),
    url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothic.ttf")
      format("truetype");
  font-style: normal;
}

@font-face {
  font-family: "NanumBarunGothicUltraLightOTF";
  src: url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothicUltraLight.woff2")
      format("woff2"),
    url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothicUltraLight.woff")
      format("woff"),
    url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothicUltraLight.ttf")
      format("truetype");
  font-style: normal;
}

@font-face {
  font-family: "NanumBarunGothicLightOTF";
  src: url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothicLight.woff2")
      format("woff2"),
    url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothicLight.woff")
      format("woff"),
    url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothicLight.ttf")
      format("truetype");
  font-style: normal;
}

@font-face {
  font-family: "NanumBarunGothicBoldOTF";
  src: url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothicBold.woff2")
      format("woff2"),
    url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothicBold.woff")
      format("woff"),
    url("https://varoon.s3.ap-northeast-2.amazonaws.com/Fonts/NanumBarunGothicBold.ttf")
      format("truetype");
  font-style: normal;
}
body,
#app {
  width: 1920px;
  height: 100%;
  margin: 0px;
}
.container {
  flex-grow: 1;
  position: relative;
}
a {
  text-decoration: none;
}
.fontDown1 {
  cursor: default;
  position: absolute;
  color: rgba(255, 255, 255, 1);
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 20px;
}
.fontDown2 {
  cursor: default;
  position: absolute;
  color: rgba(255, 255, 255, 1);
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
}
.fontDown3 {
  cursor: default;
  position: absolute;
  color: rgba(255, 255, 255, 1);
  font-family: NanumBarunGothicLightOTF;
  font-size: 20px;
}
.fontDown4 {
  cursor: default;
  position: absolute;
  color: rgba(255, 255, 255, 1);
  font-family: NanumBarunGothicBoldOTF;
  font-size: 20px;
}
</style>