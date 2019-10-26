<template>
  <div class="marketBox">
    <div class="marketSearchBar">
      <img class="searchIcon" src="../images/search-icon@2x.png" />
      <input type="text" v-model="search" autofocus placeholder="VR 컨텐츠의 이름을 검색해보세요!" />
    </div>
    <Recommend v-if="!search" />
    <SearchResult v-else />
  </div>
</template>
<script>
import Recommend from "./Recommend.vue";
import SearchResult from "./SearchResult.vue";

export default {
  data() {
    return {
      search: ""
    };
  },
  components: {
    Recommend,
    SearchResult
  }
};
</script>
<style>
.marketBox {
  width: 1620px;
  position: relative;
  left: 308px;
  background-color: #ffffff;
}
.marketSearchBar {
  width: 1160px;
  height: 64px;
  border-radius: 60px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: absolute;
  left: 72px;
  top: 56px;
}
.searchIcon {
  width: 25px;
  height: 25px;
  object-fit: contain;
  position: relative;
  left: 34px;
  top: 20px;
}
.marketSearchBar input {
  width: 251px;
  height: 20px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  font-weight: 200;
  color: #d9d9d9;
  border: 0px;
  line-height: 3.56;
  outline: none;
  position: absolute;
  left: 94px;
  top: 22px;
}
</style>
