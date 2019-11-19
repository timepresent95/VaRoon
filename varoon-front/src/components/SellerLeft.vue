<template>
  <div class="SellerLeftBox">
    <div class="sellerCenterBox">
      <div class="sellerCenterTitle">판매 센터</div>
      <div class="sellerCurSDK" v-if="sellingComponent === 'sdk'"></div>
      <div class="sellerSDKTag" @click.prevent="CHANGE_SELLING_COMPONENT('sdk')">
        <div :class="{'sellerBlue' : sellingComponent === 'sdk'}">SDK 다운</div>
      </div>
      <div class="sellerCurResist" v-if="sellingComponent === 'resist'"></div>
      <div class="sellerResistTag" @click.prevent="CHANGE_SELLING_COMPONENT('resist')">
        <div :class="{'sellerBlue' : sellingComponent === 'resist'}">컨텐츠 업로드</div>
      </div>
      <div class="sellerCurContents" v-if="sellingComponent === 'contents'"></div>
      <div class="sellerContentsTag" @click.prevent="CHANGE_SELLING_COMPONENT('contents')">
        <div :class="{'sellerBlue' : sellingComponent === 'contents'}">컨텐츠 관리</div>
      </div>
      <div class="sellerCurRevenue" v-if="sellingComponent === 'revenue'"></div>
      <div class="sellerRevenueTag" @click.prevent="CHANGE_SELLING_COMPONENT('revenue')">
        <div :class="{'sellerBlue' : sellingComponent === 'revenue'}">Revenue</div>
      </div>
    </div>
    <div class="sellerLine"></div>
    <div class="sellerMoreBox">
      <div class="sellerMoreTAG">MORE</div>
      <router-link to="/MarketManager">
        <img class="sellerLinkImg" src="../images/home-vrmarket-img@2x.png" />
        <div class="sellerLinkHover"></div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      link: "VR마켓"
    };
  },
  computed: {
    ...mapState(["sellingComponent"])
  },
  methods: {
    ...mapMutations(["CHANGE_SELLING_COMPONENT"])
  }
};
</script>
<style>
.SellerLeftBox {
  width: 301px;
  height: 1080px;
  background-color: #fcfcfc;
  float: left;
}
.sellerCenterBox {
  width: 301px;
  height: 360px;
}
.sellerCenterTitle {
  width: 76px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  color: #bcbcbc;
  position: absolute;
  top: 66px;
  left: 40px;
}
.sellerCurSDK {
  width: 0;
  height: 28.5px;
  border: solid 4px #4b74ff;
  position: absolute;
  top: 120px;
}
.sellerCurResist {
  width: 0;
  height: 28.5px;
  border: solid 4px #4b74ff;
  position: absolute;
  top: 167px;
}
.sellerCurContents {
  width: 0;
  height: 28.5px;
  border: solid 4px #4b74ff;
  position: absolute;
  top: 215px;
}
.sellerCurRevenue {
  width: 0;
  height: 28.5px;
  border: solid 4px #4b74ff;
  position: absolute;
  top: 260px;
}
.sellerSDKTag {
  width: 103px;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  position: absolute;
  top: 127px;
  left: 40px;
}
.sellerResistTag {
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-weight: 200;
  position: absolute;
  top: 171px;
  left: 40px;
}
.sellerContentsTag {
  width: 100px;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-weight: 200;
  position: absolute;
  top: 219px;
  left: 40px;
}
.sellerRevenueTag {
  width: 100px;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-weight: 200;
  position: absolute;
  top: 267px;
  left: 40px;
}
.sellerBlue {
  color: #4b74ff;
}
.sellerLine {
  width: 251.9px;
  height: 0;
  border: solid 0.5px #a3a3a3;
  position: absolute;
  left: 21.9px;
}
.sellerMoreBox {
  position: absolute;
  top: 360px;
  width: 301px;
  height: 400px;
}
.sellerMoreTAG {
  width: 70px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  color: #bcbcbc;
  position: absolute;
  left: 40px;
  top: 41px;
}
.sellerLinkImg {
  width: 220px;
  height: 220px;
  position: absolute;
  left: 40px;
  top: 98px;
}
.sellerLinkHover {
  width: 220px;
  height: 220px;
  transition: all 1s;
  background: rgba(75, 116, 255, 0);
  z-index: 2;
  position: absolute;
  left: 40px;
  top: 98px;
}
.sellerLinkHover:hover {
  background: rgba(75, 116, 255, 0.25);
}
</style>
