<template>
  <section class="login_manager">
    <Login v-if="loginComponent === 'login'" />
    <Terms v-else-if="loginComponent === 'terms'"/>
    <Regist v-else-if="loginComponent === 'regist'" />
    <Welcome v-else-if="loginComponent === 'welcome'" />
    <FindAccount v-else-if="loginComponent === 'findAccount'" />
  </section>
</template>
<script>
import Login from "@/components/LoginManager/Login.vue";
import Terms from "@/components/LoginManager/Terms.vue";
import Regist from "@/components/LoginManager/Regist.vue";
import Welcome from "@/components/LoginManager/Welcome.vue";
import FindAccount from "@/components/LoginManager/FindAccount.vue";

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
