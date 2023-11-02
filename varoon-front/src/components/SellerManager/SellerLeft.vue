<template>
  <div class="seller-left">
    <h3 class="seller-center-title">판매 센터</h3>
    <ul>
      <li
        class="seller-sdk-tag"
        @click.prevent="CHANGE_SELLING_COMPONENT('sdk')"
        :class="{ 'seller-selected': sellingComponent === 'sdk' }"
      >
        SDK 다운
      </li>
      <li
        class="seller-resist-tag"
        @click.prevent="CHANGE_SELLING_COMPONENT('resist')"
        :class="{ 'seller-selected': sellingComponent === 'resist' }"
      >
        컨텐츠 업로드
      </li>
      <li
        class="seller-contents-tag"
        @click.prevent="CHANGE_SELLING_COMPONENT('contents')"
        :class="{ 'seller-selected': sellingComponent === 'contents' }"
      >
        컨텐츠 관리
      </li>
      <li
        class="seller-revenue-tag"
        @click.prevent="CHANGE_SELLING_COMPONENT('revenue')"
        :class="{ 'seller-selected': sellingComponent === 'revenue' }"
      >
        Revenue
      </li>
    </ul>
    <div class="seller-line"></div>
    <div class="seller-more-box">
      <div class="seller-more-tag">MORE</div>
      <router-link class="left-link" to="/MarketManager">
        <img class="seller-link-img" src="../../images/services/vr-market.png" />
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      link: "VR마켓",
    };
  },
  computed: {
    ...mapState(["sellingComponent"]),
  },
  methods: {
    ...mapMutations(["CHANGE_SELLING_COMPONENT"]),
  },
};
</script>
<style>
.seller-left {
  background-color: #fcfcfc;
  min-width: 271.89px;
  margin-right: 30px;
}
.seller-left {
  padding: 40px 10px;
}
.seller-left ul {
  padding-bottom: 10px;
}
.seller-left li {
  padding-left: 4px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}
.seller-center-title {
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  color: #bcbcbc;
  font-weight: normal;
  margin-bottom: 30px;
}
.seller-sdk-tag {
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
}
.seller-resist-tag {
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-weight: 200;
}
.seller-contents-tag {
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-weight: 200;
}
.seller-revenue-tag {
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-weight: 200;
}
.seller-selected {
  color: #4b74ff;
  position: relative;
}
.seller-selected::before {
  content: "";
  float: right;
  display: block;
  width: 4px;
  height: 30px;
  background-color: #4b74ff;
  margin-right: 4px;
}
.seller-line {
  width: 100%;
  height: 0;
  border: solid 0.5px #a3a3a3;
}

.seller-more-tag {
  margin: 10px 0;
  width: 70px;
  height: 23px;
  font-family: NanumBarunGothicOTF;
  font-size: 20px;
  color: #bcbcbc;
}
.seller-link-img {
  width: 220px;
  height: 220px;
}
.left-link {
  width: 220px;
  height: 220.8px;
  display: block;
  margin: 0;
  position: relative;
  z-index: 0;
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
