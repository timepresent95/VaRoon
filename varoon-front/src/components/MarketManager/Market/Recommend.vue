<template>
  <div class="market-recommend">
    <h3 class="recommend-title">VaRoon 에디터 추천</h3>
    <ul class="editor-recommend">
      <li>
        <img src="../../../images/main/visual-function-training.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
      </li>
      <li>
        <img src="@/images/UTube.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
      </li>
      <li>
        <img src="@/images/52.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
      </li>
    </ul>
    <h3 class="upload-title">최신 업로드</h3>
    <ul class="market-upload">
      <li>
        <img src="@/images/53.jpg" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
      </li>
      <li>
        <img src="@/images/54@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
      </li>
      <li>
        <img src="@/images/55@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
      </li>
    </ul>
    <h3 class="popular-title">최신 인기</h3>
    <ul class="market-popular">
      <li>
        <img src="@/images/56@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
      </li>
      <li>
        <img src="@/images/57@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
      </li>
      <li>
        <img src="@/images/58@2x.png" @click.prevent="CHANGE_MARKET_COMPONENT('game')" />
      </li>
    </ul>
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
.market-recommend {
  width: 100%;
  background-color: #f7f7f7;
  margin: 30px 0 ;
  padding: 20px;
}
.market-recommend h3 {
  font-weight: normal;
  font-family: NanumBarunGothicOTF;
  font-size: 26px;
}
.market-recommend ul {
  width: 100%;
  list-style: none;
  display: flex;
  overflow-x: scroll;
  padding: 30px 0;
}
.market-recommend ul:not(:last-child) {
  margin-bottom: 20px;
}
.market-recommend ul::-webkit-scrollbar {
  display: unset;
  width: 10px;
}
.market-recommend ul::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.market-recommend ul::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
.market-recommend ul::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.market-recommend li:not(:last-child) {
  margin-right: 10px;
}
.market-recommend img {
  width: 448px;
  height: 290px;
  object-fit: fill;
  cursor: pointer;
}
</style>
