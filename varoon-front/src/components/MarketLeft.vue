<template>
  <div class="marketLeft">
    <div class="vrBoxTitle">VR</div>
    <div class="leftCurrentVR" v-if="marketComponent ==='market'"></div>
    <div class="leftMarket" @click.prevent="CHANGE_MARKET_COMPONENT('market')">
      <div :class="{'marketSelect' : marketComponent ==='market'}">VR 마켓</div>
    </div>
    <div class="leftLine1"></div>
    <div class="myBoxTitle">MY</div>
    <div class="leftCart" @click.prevent="CHANGE_MARKET_COMPONENT('cart')">
      <div :class="{'marketSelect' : marketComponent ==='cart'}">장바구니</div>
    </div>
    <div class="leftCurrentBox" v-if="marketComponent ==='cart'"></div>
    <div class="leftLibrary" @click.prevent="CHANGE_MARKET_COMPONENT('library')">
      <div :class="{'marketSelect' : marketComponent ==='library'}">구매내역</div>
    </div>
    <div class="leftCurrentLibrary" v-if="marketComponent ==='library'"></div>
    <div class="leftClient" @click.prevent="CHANGE_MARKET_COMPONENT('client')">
      <div :class="{'marketSelect' : marketComponent ==='client'}">클라이언트 다운로드</div>
    </div>
    <div class="leftCurrentClient" v-if="marketComponent ==='client'"></div>
    <div class="leftLine2"></div>
    <div class="moreBoxTitle">MORE</div>

    <router-link to="/PatientCenter" v-if="role === 'ROLE_Patient'">
      <img class="leftLinkImg" src="../images/mediboard-btn@2x.png" />
      <div class="overlay1"></div>
    </router-link>
    <router-link to="/SellerManager" v-else>
      <img class="leftLinkImg" src="../images/home-salescenter-img@2x.png" />
      <div class="overlay1"></div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      link: "판매자 센터 or 메디보드"
    };
  },
  computed: {
    ...mapState(["marketComponent", "role"])
  },
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"]),
    changeFontWeigth(index) {
      if (this.marketComponent === index) return true;
    }
  }
};
</script>
<style>
.marketLeft {
  width: 308px;
  height: 1724px;
  background-color: #fcfcfc;
  float: left;
}
.leftCurrentVR {
  width: 0;
  height: 28.5px;
  border: solid 4px #4b74ff;
  position: absolute;
  top: 115px;
}
.leftCurrentBox {
  width: 0;
  height: 28.5px;
  border: solid 4px #4b74ff;
  position: absolute;
  top: 302px;
}
.leftCurrentLibrary {
  width: 0;
  height: 28.5px;
  border: solid 4px #4b74ff;
  position: absolute;
  top: 350px;
}
.leftCurrentClient {
  width: 0;
  height: 28.5px;
  border: solid 4px #4b74ff;
  position: absolute;
  top: 395px;
}
.vrBoxTitle {
  width: 29px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-weight: 400;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #bcbcbc;
  position: absolute;
  top: 66px;
  left: 40px;
}
.leftMarket {
  width: 59px;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  position: absolute;
  left: 40px;
  cursor: pointer;
  top: 123px;
}
.marketSelect {
  color: #4b74ff;
}
.marketUnSelect {
  color: #000000;
}
.leftLine1 {
  width: 251.9px;
  height: 0;
  border: solid 0.5px #a3a3a3;
  position: absolute;
  top: 209px;
  left: 21.9px;
}
.myBoxTitle {
  width: 34px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-weight: 400;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #bcbcbc;
  position: absolute;
  top: 250px;
  left: 40px;
}
.leftCart {
  position: absolute;
  top: 307px;
  left: 40px;
  cursor: pointer;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
}
.leftLibrary {
  position: absolute;
  top: 355px;
  left: 40px;
  width: 68px;
  cursor: pointer;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;

  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
}
.leftClient {
  position: absolute;
  top: 403px;
  left: 40px;
  width: 149px;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;

  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  cursor: pointer;
  text-align: left;
}
.leftLine2 {
  width: 251.9px;
  height: 0;
  border: solid 0.5px #a3a3a3;
  position: absolute;
  top: 496px;
  left: 21.9px;
}
.moreBoxTitle {
  width: 70px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-weight: 400;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #bcbcbc;
  position: absolute;
  top: 537px;
  left: 40px;
}
.leftLinkImg {
  width: 220px;
  height: 220.8px;
  object-fit: cover;
  position: absolute;
  top: 594px;
  left: 40px;
}
.overlay1 {
  width: 220px;
  height: 220.8px;
  object-fit: cover;
  position: absolute;
  top: 594px;
  left: 40px;
  transition: all 1s;
  background: rgba(75, 116, 255, 0);
  z-index: 2;
}
.overlay1:hover {
  background: rgba(75, 116, 255, 0.25);
}
</style>
