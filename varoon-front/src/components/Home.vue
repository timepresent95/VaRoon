<template>
  <div>
    <div class="author">{{author}}</div>
    <div class="homeDscript">
      <div>원하는</div>
      <div id="emphasis">카테고리</div>
      <div>를</div>
      <div>선택해주세요</div>
    </div>
    <div class="homeDscript2">VR 컨텐츠 또는 치료 경과를 확인해보세요</div>
    <div class="here">
      <router-link to="/MarketManager">
        <img class="pageImg" id="first" src="../images/home-vrmarket-img@2x.png" />
        <div class="overlay1"></div>
      </router-link>
      <router-link v-if="role === 'ROLE_Patient'" to="/PatientCenter">
        <img class="pageImg" id="second" src="../images/home-mediboard-img@2x.png" />
        <div class="overlay2"></div>
      </router-link>
      <router-link v-else to="/SellerManager">
        <img class="pageImg" id="second" src="../images/home-salescenter-img@2x.png" />
        <div class="overlay2"></div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      author: "For User"
    };
  },
  computed: {
    ...mapState(["role"])
  },
  methods: {
    refresh() {
      location.reload();
    }
  },
  mounted() {
    if (this.role == "ROLE_Doctor") this.$router.push("/DoctorCenter");
  }
};
</script>
<style>
.author {
  top: 52px;
  left: 380px;
  position: relative;
  width: 63px;
  height: 19px;
  font-family: NanumBarunGothicBoldOTF;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4b74ff;
}

.homeDscript {
  top: 70px;
  left: 380px;
  position: relative;
  width: 236px;
  height: 82px;
  font-size: 0px;
}

.homeDscript div {
  display: inline-block;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 32px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}
.homeDscript #emphasis {
  color: #4b74ff;
  display: inline-block;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
}

.homeDscript2 {
  position: relative;
  top: 82px;
  left: 380px;
  width: 266px;
  height: 19px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #bdbdbd;
}

.pageImg {
  margin-top: 123px;
  margin-bottom: 96px;
  width: 454px;
  height: 637.1px;
  opacity: 0.48;
  border-radius: 3px;
  background-color: #ffffff;
}

.overlay1 {
  width: 454px;
  height: 637.1px;
  background: rgba(75, 116, 255, 0);
  overflow: hidden;
  z-index: 2;
  position: absolute;
  top: 243px;
  left: 376px;
  border-radius: 3px;
  transition: all 1s;
}
.overlay1:hover,
.overlay2:hover {
  background: rgba(75, 116, 255, 0.25);
}
.overlay2 {
  width: 454px;
  height: 637.1px;
  background: rgba(75, 116, 255, 0);
  overflow: hidden;
  z-index: 2;
  position: absolute;
  top: 243px;
  left: 875px;
  border-radius: 3px;
  transition: all 1s;
}

.pageImg#first {
  margin-left: 376px;
}

.pageImg#second {
  margin-left: 42.2px;
}
</style>