<template>
  <div>
    <ul>
      <li @click.prevent="CHANGE_MARKET_COMPONENT('game')">
        <img class="congratulation" src="http://placehold.it/75x75" />
        검색 결과 1
      </li>
      <li>
        <img class="congratulation" src="http://placehold.it/75x75" />
        검색 결과 2
      </li>
      <li>
        <img class="congratulation" src="http://placehold.it/75x75" />
        검색 결과 3
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["CHANGE_MARKET_COMPONENT"]),
  }
}
</script>
<style>

</style>
