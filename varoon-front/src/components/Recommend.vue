<template>
  <div class="marketRecommend">
    <div>
      <div class="recommendTitle">VaRoon 에디터 추천</div>
      <ul>
        <li>
          <img src="../images/dif.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </li>
        <li>
          <img src="../images/UTube.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </li>
        <li>
          <img src="../images/52.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </li>
      </ul>
    </div>
    <div class="marketUpload">
      <div class="uploadTitle">최신 업로드</div>
      <ul>
        <li>
          <img src="../images/53.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </li>
        <li>
          <img src="../images/54@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </li>
        <li>
          <img src="../images/55@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </li>
      </ul>
    </div>
    <div class="marketPopular">
      <div class="popularTitle">최신 인기</div>
      <ul>
        <li>
          <img src="../images/56@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </li>
        <li>
          <img src="../images/57@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </li>
        <li>
          <img src="../images/58@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"])
  }
};
</script>
<style>
.marketRecommend {
  width: 1619px;
  height: 539px;
  background-color: #f7f7f7;
  position: absolute;
  top: 185px;
}
.recommendTitle {
  height: 30px;
  font-family: NanumBarunGothicOTF;
  font-size: 26px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  position: absolute;
  left: 79px;
  top: 67px;
}
.marketRecommend ul {
  list-style: none;
}
.marketRecommend li {
  float: left;
  margin-right: 20px;
}
.marketRecommend img {
  width: 448px;
  height: 290px;
  object-fit: fill;
  position: relative;
  cursor: pointer;
  top: 142px;
}
.marketUpload {
  width: 1619px;
  height: 539px;
  background-color: #ffffff;
  position: absolute;
  left: 0px;
  top: 540px;
}
.uploadTitle {
  width: 122px;
  height: 30px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 26px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  position: absolute;
  left: 79px;
  top: 67px;
}
.marketPopular {
  width: 1619px;
  height: 539px;
  background-color: #ffffff;
  position: absolute;
  top: 1000px;
}
.popularTitle {
  width: 99px;
  height: 30px;
  font-family: NanumBarunGothicLightOTF;
  font-size: 26px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.46;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  position: absolute;
  left: 79px;
  top: 67px;
}
</style>