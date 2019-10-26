<template>
  <div class="mypageManager">
    <div class="mypageTitle">마이페이지</div>
    <MyPageCheck v-if="mypageComponent === 'check'" />
    <MyPa v-else />
  </div>
</template>
<script>
import MyPa from "./MyPa.vue";
import MyPageCheck from "./MypageCheck.vue";

import { mapState } from "vuex";

export default {
  components: {
    MyPageCheck,
    MyPa
  },
  computed: {
    ...mapState(["mypageComponent"])
  }
};
</script>
<style>
.mypageManager {
  height: 998px;
}
.mypageTitle {
  width: 143px;
  height: 37px;
  font-family: NanumBarunGothicOTF;
  font-size: 32px;
  position: absolute;
  top: 100px;
  left: 889px;
}
</style>
