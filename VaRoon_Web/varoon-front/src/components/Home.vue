<template>
  <div>
    <a href="" @click="refresh"> <img class="congratulation" src="http://placehold.it/25x25" /> </a>
    {{author}}
    원하는 카테고리를 선택해주세요
    <router-link to="/">
      <img class="congratulation" src="http://placehold.it/321x100" />
    </router-link>
    <router-link to="/">
      <img class="congratulation" src="http://placehold.it/321x100" />
    </router-link>
  </div>
</template>
<script>
export default {
  data(){
    return{
      author:'For User'
    }
  },
  methods: {
    refresh() {
      location.reload();
    },
  },
}
</script>
<style>

</style>
