<template>
  <div>
    <div class="main-navi">
      <router-link class="logo" to="/">
        <img src="@/images/logo-icon@2x.png" />
      </router-link>
      <div class="menu">
        <a v-if="!isAuth" class="join" @click.prevent="movePage('terms')" href>JOIN</a>
        <router-link v-else class="join" to="/MypageManager">MYPAGE</router-link>
        <a v-if="!isAuth" class="login" @click.prevent="movePage('login')" href>LOGIN</a>
        <a v-else class="login" @click="logout" href>LOGOUT</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

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
<style>
.main-navi {
  width: 100%;
  height: 82px;
  border-bottom: solid 0.5px #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.logo {
  width: 154.6px;
}
.logo img {
  width: 154.6px;
  height: 31px;
  object-fit: contain;
}

.join {
  width: 45px;
  height: 19px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  letter-spacing: 5px;
  color: #000000;
  margin-right: 10px;
}
.login {
  width: 62px;
  height: 19px;
  font-family: NanumBarunGothicUltraLightOTF;
  font-size: 16px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  letter-spacing: 5px;
  color: #000000;
}
</style>
