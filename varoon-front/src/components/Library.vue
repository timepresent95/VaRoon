<template>
  <div class="libraryContent">
    <div class="libraryTitle">구매 내역</div>
    <ul class="libraryUl">
      <li>
        <div class="libraryImg">
          <img src="../images/50.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="libraryTag">Monster Hunt World 3</div>
        <div class="libraryTime">
          플레이시간
          <span class="libraryBlue">2시간 30분</span>
        </div>
      </li>
      <li>
        <div class="libraryImg">
          <img src="../images/51.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="libraryTag">Ark Survival Evalution</div>
        <div class="libraryTime">
          플레이시간
          <span class="libraryBlue">1시간 30분</span>
        </div>
      </li>
      <li>
        <div class="libraryImg">
          <img src="../images/52.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="libraryTag">Dota UnderLoads</div>
        <div class="libraryTime">
          플레이시간
          <span class="libraryBlue">2시간 50분</span>
        </div>
      </li>
      <li>
        <div class="libraryImg">
          <img src="../images/54@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="libraryTag">Tekken 7</div>
        <div class="libraryTime">
          플레이시간
          <span class="libraryBlue">1시간 10분</span>
        </div>
      </li>
      <li>
        <div class="libraryImg">
          <img src="../images/55@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="libraryTag">Tekken 7 Rematch Edition</div>
        <div class="libraryTime">
          플레이시간
          <span class="libraryBlue">2시간 20분</span>
        </div>
      </li>
      <li>
        <div class="libraryImg">
          <img src="../images/56@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
        </div>
        <div class="libraryTag">AceCombat Skies UnKwon</div>
        <div class="libraryTime">
          플레이시간
          <span class="libraryBlue">1시간 20분</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      gameId: "VR게임 제목",
      playTime: 0
    };
  },
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"])
  }
};
</script>
<style>
.libraryContent {
  width: 1612px;
  height: 1724px;
  position: absolute;
  left: 308px;
}
.libraryTitle {
  width: 122px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  position: absolute;
  left: 75px;
  top: 64px;
}
.libraryUl {
  list-style: none;
  position: absolute;
  left: 75px;
  top: 153px;
}
.libraryUl li {
  height: 121px;
  width: 1250px;
  margin-bottom: 30px;
}
.libraryImg img {
  width: 188px;
  height: 121px;
  object-fit: fill;
  float: left;
  cursor: pointer;
}
.libraryTag {
  height: 32px;
  width: 500px;
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  float: left;
  margin-left: 36px;
  margin-top: 44.5px;
}
.libraryTime {
  width: 240px;
  height: 27px;
  font-family: NanumBarunGothicOTF;
  font-size: 24px;
  float: left;
  margin-left: 214px;
  margin-top: 44.5px;
}
.libraryBlue {
  color: #4b74ff;
  margin-left: 10px;
}
</style>
