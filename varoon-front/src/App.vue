<template>
  <div id="app">
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
  src: url("~/Fonts/NanumBarunGothic.otf") format("otf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "NanumBarunGothicUltraLightOTF";
  src: url("~/Fonts/NanumBarunGothicUltraLight.otf") format("otf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "NanumBarunGothicLightOTF";
  src: url("~/Fonts/NanumBarunGothicLight.otf") format("otf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "NanumBarunGothicBoldOTF";
  src: url("~/Fonts/NanumBarunGothicBold.otf") format("otf");
  font-weight: normal;
  font-style: normal;
}
body,
#app {
  width: 1929px;
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
</style>