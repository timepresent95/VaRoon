<template>
  <div class="login_manager">
    <!-- <div class="menu-bar">
      <a
        href
        :class="{'bold': changeFontWeigth('login')}"
        @click.prevent="CHANGE_LOGIN_COMPONENT('login')"
      >로그인</a>
      <div>/</div>
      <a
        href
        :class="{'bold': changeFontWeigth('terms')}"
        @click.prevent="CHANGE_LOGIN_COMPONENT('terms')"
      >회원가입</a>
      <div>/</div>
      <a
        href
        :class="{'bold': changeFontWeigth('findAccount')}"
        @click.prevent="CHANGE_LOGIN_COMPONENT('findAccount')"
      >아이디/비밀번호 찾기</a>
    </div>-->
    <Login v-if="loginComponent === 'login'" />
    <Terms v-else-if="loginComponent === 'terms'" />
    <Regist v-else-if="loginComponent === 'regist'" />
    <Welcome v-else-if="loginComponent === 'welcome'" />
    <FindAccount v-else-if="loginComponent === 'findAccount'" />
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Terms from "@/components/Terms.vue";
import Regist from "@/components/Regist.vue";
import Welcome from "@/components/Welcome.vue";
import FindAccount from "@/components/FindAccount.vue";

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
    ...mapState(["loginComponent"])
  },
  methods: {
    ...mapMutations(["CHANGE_LOGIN_COMPONENT"]),
    changeFontWeigth(index) {
      if (this.loginComponent === index) return true;
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
.login_manager {
  height: 1300px;
}
</style>
