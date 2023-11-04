<template>
  <div class="selling-con-content">
    <h1 class="selling-con-title">컨텐츠 관리</h1>
    <ul>
      <li>
        <router-link class="selling-con-img" to="/MarketManager">
          <img src="../../images/mock/cover9.jpg" @click="CHANGE_MARKET_COMPONENT('game')" />
        </router-link>
        <div class="selling-con-mid-box">
          <div class="selling-con-age">15세 이상 가능 / 사시, 복시</div>
          <div class="selling-con-tag">Dota UnderLoads</div>
        </div>
        <div class="selling-con-cost">43,000원</div>
      </li>
      <li>
        <router-link class="selling-con-img" to="/MarketManager">
          <img src="../../images/mock/cover8.jpg" @click="CHANGE_MARKET_COMPONENT('game')" />
        </router-link>
        <div class="selling-con-mid-box">
          <div class="selling-con-age">15세 이상 가능 / 사시, 복시</div>
          <div class="selling-con-tag">Ark Survival Evolved</div>
        </div>
        <div class="selling-con-cost">43,000원</div>
      </li>
      <li>
        <router-link class="selling-con-img" to="/MarketManager">
          <img
            src="../../images/mock/cover3.png"
            @click="CHANGE_MARKET_COMPONENT('game')"
          />
        </router-link>
        <div class="selling-con-mid-box">
          <div class="selling-con-18">18세 이상 가능 / 사시</div>
          <div class="selling-con-tag">Taken7 Rematch Edition</div>
        </div>
        <div class="selling-con-cost">43,000원</div>
      </li>
      <li>
        <router-link class="selling-con-img" to="/MarketManager">
          <img
            src="../../images/mock/cover2.png"
            @click="CHANGE_MARKET_COMPONENT('game')"
          />
        </router-link>
        <div class="selling-con-mid-box">
          <div class="selling-con-age">15세 이상 가능 / 복시</div>
          <div class="selling-con-tag">Taken7</div>
        </div>
        <div class="selling-con-cost">43,000원</div>
      </li>
      <li>
        <router-link class="selling-con-img" to="/MarketManager">
          <img
            src="../../images/mock/cover6.png"
            @click="CHANGE_MARKET_COMPONENT('game')"
          />
        </router-link>
        <div class="selling-con-mid-box">
          <div class="selling-con-age">15세 이상 가능 / 사시, 복시</div>
          <div class="selling-con-tag">Atlas BlackWood</div>
        </div>
        <div class="selling-con-cost">43,000원</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"]),
  },
};
</script>
<style>
.selling-con-content {
  background-color: #ffffff;
  min-height: calc(100vh - 191px);
  padding: 30px;
}
.selling-con-title {
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  font-weight: normal;
  margin-bottom: 20px;
}
.selling-con-content ul {
  list-style: none;
}
.selling-con-content li {
  height: 121px;
  margin-bottom: 30px;
  display: flex;
}
.selling-con-img {
  float: left;
}
.selling-con-img img {
  width: 188px;
  height: 121px;
  object-fit: fill;
  cursor: pointer;
}
.selling-con-mid-box {
  height: 121px;
  width: 500px;
  margin-left: 36px;
}
.selling-con-age {
  width: 177px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: bold;
  margin-top: 34.5px;
  color: #4b74ff;
}
.selling-con-tag {
  height: 32px;
  width: 500px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  font-weight: 300;
  margin-top: 10px;
}
.selling-con-cost {
  width: 240px;
  height: 27px;
  font-family: NanumBarunGothicOTF;
  font-size: 24px;
  margin-left: 214px;
  margin-top: 44.5px;
}
.selling-con-18 {
  width: 177px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: bold;
  margin-top: 34.5px;
  color: #ff4b4b;
}
</style>
