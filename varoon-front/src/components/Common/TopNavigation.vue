<template>
  <header class="top-navigation">
    <div class="content mbox px-12 py-8">
      <router-link class="logo" to="/">
        <img src="../../images/logo-icon.png" alt="logo"/>
      </router-link>
      <nav class="text-body1">
        <router-link v-if="isAuth" to="/MypageManager">MY PAGE</router-link>
        <router-link v-else :to="{name: 'join-terms'}">JOIN</router-link>
        <button v-if="isAuth" @click="logout">SIGN OUT</button>
        <router-link v-else :to="{name: 'sign-in'}">SIGN IN</router-link>
      </nav>
    </div>
  </header>
</template>
<script>
import {mapMutations, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuth"])
  },
  methods: {
    ...mapMutations(["LOGOUT", "CHANGE_LOGIN_COMPONENT"]),
    logout() {
      this.LOGOUT();
      this.$router.push("/loginManager").catch(e => {
        if (e._name !== "NavigationDuplicated") console.error(e);
      });
    },
    movePage(index) {
      this.CHANGE_LOGIN_COMPONENT(index);
      this.$router.push("/loginManager").catch(e => {
        if (e._name !== "NavigationDuplicated") console.error(e);
      });
    },
    refresh() {
      location.reload();
    }
  }
};
</script>
<style scoped lang="scss">
.top-navigation {
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .logo img {
    width: 154px;
    height: 31px;
  }

  nav > * {
    &:first-child {
      margin-right: 12px;
    }

    @extend .text-body1;
  }
}
</style>
