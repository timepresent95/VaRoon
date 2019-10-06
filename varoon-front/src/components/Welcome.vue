<template>
  <div>
    <img class="loadMap" src="http://placehold.it/321x100" />
    <img class="congratulation" src="http://placehold.it/321x100" />
    회원가입이 완료되었습니다.
    <button @click.prevent="CHANGE_LOGIN_COMPONENT('login')">로그인 페이지로 이동</button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["CHANGE_LOGIN_COMPONENT"])
  }
};
</script>
<style>
</style>
