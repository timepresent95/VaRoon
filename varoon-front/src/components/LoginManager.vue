<template>
  <div>
    <div class="Head">
      <router-link to="/">BI</router-link>
    </div>
    <div class="menu-bar">
      <a
        href
        :class="{'bold': changeFontWeigth('login')}"
        @click.prevent="CHANGE_COMPONENT('login')"
      >로그인</a>
      <div>/</div>
      <a
        href
        :class="{'bold': changeFontWeigth('terms')}"
        @click.prevent="CHANGE_COMPONENT('terms')"
      >회원가입</a>
      <div>/</div>
      <a
        href
        :class="{'bold': changeFontWeigth('findAccount')}"
        @click.prevent="CHANGE_COMPONENT('findAccount')"
      >아이디/비밀번호 찾기</a>
    </div>
    <hr />
    <Login v-if="component === 'login'" />
    <Terms v-else-if="component === 'terms'" />
    <Regist v-else-if="component === 'regist'" />
    <Welcome v-else-if="component === 'welcome'" />
    <FindAccount v-else-if="component === 'findAccount'" />
  </div>
</template>
<script>
import Login from "./Login.vue";
import Terms from "./Terms.vue";
import Regist from "./Regist.vue";
import Welcome from "./Welcome.vue";
import FindAccount from "./FindAccount.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Login,
    Terms,
    Regist,
    Welcome,
    FindAccount
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["component"])
  },
  methods: {
    ...mapMutations(["CHANGE_COMPONENT"]),
    changeFontWeigth(index) {
      if (this.component === index) return true;
    }
  }
};
</script>
<style>
.Head {
  height: 50px;
  margin-left: 50%;
}
.Head a {
  text-decoration: none;
  color: black;
  font-size: 50px;
  text-align: center;
  width: 50px;
  height: 50px;
}
.menu-bar {
  height: 100px;
  margin-left: 30%;
}
.menu-bar div,
.menu-bar a {
  text-decoration: none;
  float: left;
  padding: 0 10px;
  color: black;
  line-height: 100px;
}
.menu-bar .bold {
  font-weight: bolder;
}
</style>
