<template>
  <section class="market-search">
    <div class="search-bar-wrapper mt-20 ">
      <img class="mr-16" src="@/images/market/search-icon.png" alt="search icon"/>
      <input
        class="search-bar text-body1"
        type="text"
        v-model="searchInput"
        placeholder="VR 컨텐츠의 이름을 검색해보세요!"
      />
    </div>
    <Recommend v-if="searchInput === ''" :recommends="recommends"/>
    <SearchResult v-else :searchInput="searchInput" :results="searchResults"/>
  </section>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue'
import Recommend from "@/components/VRMarket/List/Recommend.vue";
import SearchResult from "@/components/VRMarket/List/SearchResult.vue";

//TODO: 서버를 통해 데이터를 받아오는 로직으로 변경 필요. suspense 사용
import MockGames from "@/assets/mock/games";

const searchInput = ref('');
const recommends = ref([]);
const searchResults = ref([]);

onMounted(() => {
  recommends.value = MockGames.recommends;
})

watch(searchInput, () => {
  searchResults.value = MockGames.randomGames;
})

</script>
<style scoped lang="scss">
.market-search {
  width: 100%;

  .search-bar-wrapper {
    border: solid 1px $g2;
    border-radius: 8px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 16px;

    &:focus-within {
      border: solid 1px $p1;
    }

    img {
      content: 'hi';
      width: 25px;
      height: 25px;
      display: block;
    }

    .search-bar {
      flex: 1;
      border: none;
      outline: none;
    }
  }
}
</style>
