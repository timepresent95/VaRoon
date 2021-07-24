<template>
  <section class="mypage-manager">
    <h1 class="mypage-title">마이페이지</h1>
    <MyPageCheck v-if="mypageComponent === 'check'" />
    <MyPa v-else />
  </section>
</template>
<script>
import MyPa from "@/components/MyPa.vue";
import MyPageCheck from "@/components/MypageCheck.vue";

import { mapState } from "vuex";

export default {
  components: {
    MyPageCheck,
    MyPa,
  },
  computed: {
    ...mapState(["mypageComponent"]),
  },
};
</script>
<style>
.mypage-manager {
  min-height: calc(100vh - 191px);
  text-align: center;
  padding-top: 30px;
}
.mypage-title {
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  font-weight: normal;
  margin-bottom: 30px;
}
</style>
