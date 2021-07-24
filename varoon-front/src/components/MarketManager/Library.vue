<template>
  <div class="library-content">
    <h1 class="library-title">구매 내역</h1>
    <ul class="library-ul">
      <li>
        <div class="library-img">
          <img
            src="@/images/50.jpg"
            @click.prevent="CHANGE_MARKET_COMPONENT('game')"
          />
        </div>
        <div class="library-tag">Monster Hunt World 3</div>
        <div class="library-time">
          플레이시간
          <span class="library-blue">2시간 30분</span>
        </div>
      </li>
      <li>
        <div class="library-img">
          <img
            src="@/images/51.jpg"
            @click.prevent="CHANGE_MARKET_COMPONENT('game')"
          />
        </div>
        <div class="library-tag">Ark Survival Evalution</div>
        <div class="library-time">
          플레이시간
          <span class="library-blue">1시간 30분</span>
        </div>
      </li>
      <li>
        <div class="library-img">
          <img
            src="@/images/52.jpg"
            @click.prevent="CHANGE_MARKET_COMPONENT('game')"
          />
        </div>
        <div class="library-tag">Dota UnderLoads</div>
        <div class="library-time">
          플레이시간
          <span class="library-blue">2시간 50분</span>
        </div>
      </li>
      <li>
        <div class="library-img">
          <img
            src="@/images/54@2x.png"
            @click.prevent="CHANGE_MARKET_COMPONENT('game')"
          />
        </div>
        <div class="library-tag">Tekken 7</div>
        <div class="library-time">
          플레이시간
          <span class="library-blue">1시간 10분</span>
        </div>
      </li>
      <li>
        <div class="library-img">
          <img
            src="@/images/55@2x.png"
            @click.prevent="CHANGE_MARKET_COMPONENT('game')"
          />
        </div>
        <div class="library-tag">Tekken 7 Rematch Edition</div>
        <div class="library-time">
          플레이시간
          <span class="library-blue">2시간 20분</span>
        </div>
      </li>
      <li>
        <div class="library-img">
          <img
            src="@/images/56@2x.png"
            @click.prevent="CHANGE_MARKET_COMPONENT('game')"
          />
        </div>
        <div class="library-tag">AceCombat Skies UnKwon</div>
        <div class="library-time">
          플레이시간
          <span class="library-blue">1시간 20분</span>
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
      playTime: 0,
    };
  },
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"]),
  },
};
</script>
<style>
.library-content {
  min-height: calc(100vh - 221px);
}
.library-content h1,
.library-content h2,
.library-content h3 {
  font-weight: normal;
}
.library-title {
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
}
.library-ul {
  list-style: none;
  margin-top: 20px;
}
.library-ul li {
  height: 121px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.library-img img {
  width: 188px;
  height: 121px;
  object-fit: fill;
  cursor: pointer;
}
.library-tag {
  font-family: NanumBarunGothicOTF;
  font-size: 28px;
  margin-left: 36px;
}
.library-time {
  width: 240px;
  height: 27px;
  font-family: NanumBarunGothicOTF;
  font-size: 24px;
}
.library-blue {
  color: #4b74ff;
  margin-left: 10px;
}
</style>
