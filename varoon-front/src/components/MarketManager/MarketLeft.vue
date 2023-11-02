<template>
  <div class="market-left">
    <h3 class="vr-box-title">VR</h3>
    <ul>
      <li
        class="left-marker"
        @click.prevent="CHANGE_MARKET_COMPONENT('market')"
        :class="{ 'market-select': marketComponent === 'market' }"
      >
        VR 마켓
      </li>
    </ul>
    <div class="left-line1"></div>
    <h3 class="my-box-title">MY</h3>
    <ul>
      <li
        class="left-cart"
        :class="{ 'market-select': marketComponent === 'cart' }"
        @click.prevent="CHANGE_MARKET_COMPONENT('cart')"
      >
        장바구니
      </li>
      <li
        class="left-library"
        @click.prevent="CHANGE_MARKET_COMPONENT('library')"
        :class="{ 'market-select': marketComponent === 'library' }"
      >
        구매내역
      </li>
      <li
        class="left-client"
        @click.prevent="CHANGE_MARKET_COMPONENT('client')"
        :class="{ 'market-select': marketComponent === 'client' }"
      >
        클라이언트 다운로드
      </li>
    </ul>
    <div class="left-line2"></div>
    <h3 class="more-box-title">MORE</h3>
    <router-link
      class="left-link"
      to="/PatientCenter"
      v-if="role === 'ROLE_Patient'"
    >
      <img class="left-link-img" src="@/images/mediboard-btn@2x.png" />
    </router-link>
    <router-link class="left-link" to="/SellerManager" v-else>
      <img class="left-link-img" src="../../images/services/sales-center.png" />
    </router-link>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      link: "판매자 센터 or 메디보드",
    };
  },
  computed: {
    ...mapState(["marketComponent", "role"]),
  },
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"]),
    changeFontWeigth(index) {
      if (this.marketComponent === index) return true;
    },
  },
};
</script>
<style>
.market-left {
  height: calc(100vh - 191px);
  position: fixed;
  top: 82px;
  left: 0;
  background-color: inherit;
  padding: 40px 10px;
}
.market-left li {
  padding-left: 4px;
  height: 30px;
  line-height: 30px;
}
.market-left ul {
  padding-bottom: 10px;
}
.vr-box-title {
  margin-bottom: 20px;
  width: 29px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-weight: 400;
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  color: #bcbcbc;
}
.left-marker {
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  cursor: pointer;
}
.market-select {
  color: #4b74ff;
  position: relative;
}
.market-select::before {
  content: "";
  float: right;
  display: block;
  width: 4px;
  height: 30px;
  background-color: #4b74ff;
  margin-right: 4px;
}
.marketUnSelect {
  color: #000000;
}
.left-line1 {
  width: 251.9px;
  height: 0;
  border: solid 0.5px #a3a3a3;
}
.my-box-title {
  margin: 10px 0;
  width: 34px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-weight: 400;
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  color: #bcbcbc;
}
.left-cart {
  cursor: pointer;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  text-align: left;
}
.left-library {
  cursor: pointer;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  text-align: left;
}
.left-client {
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  cursor: pointer;
  text-align: left;
}
.left-line2 {
  width: 251.9px;
  height: 0;
  border: solid 0.5px #a3a3a3;
}
.more-box-title {
  margin: 10px 0;
  width: 70px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-weight: 400;
  font-size: 20px;
  text-align: left;
  color: #bcbcbc;
}
.left-link {
  width: 220px;
  height: 220.8px;
  display: block;
  margin: 0;
  position: relative;
  z-index: 0;
}
.left-link-img {
  width: 220px;
  height: 220.8px;
  object-fit: cover;
}
.left-link:hover::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 220px;
  height: 220.8px;
  background: rgba(75, 116, 255, 0.25);
  z-index: 2;
  visibility: visible;
}
</style>
