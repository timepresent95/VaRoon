<template>
  <div class="sellingConContent">
    <div class="sellingConTitle">컨텐츠 관리</div>
    <ul>
      <li>
        <div class="sellingConImg">
          <router-link to="/MarketManager">
            <img src="../images/52.jpg" @click="CHANGE_MARKET_COMPONENT('game')" />
          </router-link>
        </div>
        <div class="sellingConMidBox">
          <div class="sellingConAge">15세 이상 가능 / 사시, 복시</div>
          <div class="sellingConTag">Dota UnderLoads</div>
        </div>
        <div class="sellingConCost">43,000원</div>
      </li>
      <li>
        <div class="sellingConImg">
          <router-link to="/MarketManager">
            <img src="../images/51.jpg" @click="CHANGE_MARKET_COMPONENT('game')" />
          </router-link>
        </div>
        <div class="sellingConMidBox">
          <div class="sellingConAge">15세 이상 가능 / 사시, 복시</div>
          <div class="sellingConTag">Ark Survival Evolved</div>
        </div>
        <div class="sellingConCost">43,000원</div>
      </li>
      <li>
        <div class="sellingConImg">
          <router-link to="/MarketManager">
            <img src="../images/55@2x.png" @click="CHANGE_MARKET_COMPONENT('game')" />
          </router-link>
        </div>
        <div class="sellingConMidBox">
          <div class="sellingCon18">18세 이상 가능 / 사시</div>
          <div class="sellingConTag">Taken7 Rematch Edition</div>
        </div>
        <div class="sellingConCost">43,000원</div>
      </li>
      <li>
        <div class="sellingConImg">
          <router-link to="/MarketManager">
            <img src="../images/54@2x.png" @click="CHANGE_MARKET_COMPONENT('game')" />
          </router-link>
        </div>
        <div class="sellingConMidBox">
          <div class="sellingConAge">15세 이상 가능 / 복시</div>
          <div class="sellingConTag">Taken7</div>
        </div>
        <div class="sellingConCost">43,000원</div>
      </li>
      <li>
        <div class="sellingConImg">
          <router-link to="/MarketManager">
            <img src="../images/58@2x.png" @click="CHANGE_MARKET_COMPONENT('game')" />
          </router-link>
        </div>
        <div class="sellingConMidBox">
          <div class="sellingConAge">15세 이상 가능 / 사시, 복시</div>
          <div class="sellingConTag">Atlas BlackWood</div>
        </div>
        <div class="sellingConCost">43,000원</div>
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
    ...mapMutations(["CHANGE_MARKET_COMPONENT"])
  }
};
</script>
<style>
.sellingConContent {
  width: 1620px;
  position: relative;
  left: 308px;
  background-color: #ffffff;
  height: 1080px;
}
.sellingConTitle {
  width: 150px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  position: absolute;
  left: 75px;
  top: 64px;
}
.sellingConContent ul {
  list-style: none;
  position: absolute;
  left: 75px;
  top: 153px;
}
.sellingConContent li {
  height: 121px;
  width: 1250px;
  margin-bottom: 30px;
}
.sellingConImg {
  float: left;
}
.sellingConImg img {
  width: 188px;
  height: 121px;
  object-fit: fill;
  float: left;
  cursor: pointer;
}
.sellingConMidBox {
  height: 121px;
  width: 500px;
  float: left;
  margin-left: 36px;
}
.sellingConAge {
  width: 177px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: bold;
  margin-top: 34.5px;
  color: #4b74ff;
}
.sellingConTag {
  height: 32px;
  width: 500px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  font-weight: 300;
  margin-top: 10px;
}
.sellingConCost {
  width: 240px;
  height: 27px;
  font-family: NanumBarunGothicOTF;
  font-size: 24px;
  float: left;
  margin-left: 214px;
  margin-top: 44.5px;
}
.sellingCon18 {
  width: 177px;
  height: 19px;
  font-family: NanumBarunGothicOTF;
  font-size: 16px;
  font-weight: bold;
  margin-top: 34.5px;
  color: #ff4b4b;
}
</style>
