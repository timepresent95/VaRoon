<template>
  <div class="market-box">
    <div class="market-search-bar">
      <input
        type="text"
        v-model="search"
        autofocus
        placeholder="VR 컨텐츠의 이름을 검색해보세요!"
      />
    </div>
    <Recommend v-if="!search" />
    <SearchResult v-else :searchName="search" />
  </div>
</template>
<script>
import Recommend from "@/components/MarketManager/Market/Recommend.vue";
import SearchResult from "@/components/MarketManager/Market/SearchResult.vue";

export default {
  data() {
    return {
      search: "",
    };
  },
  components: {
    Recommend,
    SearchResult,
  },
};
</script>
<style>
.market-box {
  max-width: 100%;
  background-color: #ffffff;
}
.market-search-bar {
  width: 50%;
  height: 64px;
  border-radius: 60px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  position: relative;
  padding-left: 50px;
}
.market-search-bar input {
  width: calc(100% - 50px);
  height: 64px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 18px;
  color: #d9d9d9;
  background-color: transparent;
  border: none;
  line-height: 3.56;
  outline: none;
}
.market-search-bar::before {
  content: "";
  background-image: url("../../images/search-icon@2x.png");
  background-size: 25px 25px;
  display: inline-block;
  width: 25px;
  height: 25px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}
</style>
