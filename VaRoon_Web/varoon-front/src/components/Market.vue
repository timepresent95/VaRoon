<template>
  <div>
    <h1>VR 마켓</h1>
    <input>
    <button>검색</button>
    <Recommend/>
    <SearchResult/>
  </div>
</template>
<script>
import Recommend from './Recommend.vue'
import SearchResult from './SearchResult.vue'

export default {
  components:{
    Recommend,
    SearchResult
  }

}
</script>
<style>

</style>
