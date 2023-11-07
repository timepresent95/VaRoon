<template>
  <header class="top-navigation">
    <div class="content mbox px-12 py-8">
      <router-link class="logo" to="/">
        <img src="@/images/logo-icon.png" alt="varoon logo"/>
      </router-link>
      <nav class="text-body1">
        <router-link v-if="auth === null" :to="{name: 'join-terms'}">JOIN</router-link>
        <router-link v-else to="/MypageManager">MY PAGE</router-link>
        <router-link v-if="auth === null" :to="{name: 'sign-in'}">SIGN IN</router-link>
        <button v-else @click="onClickSignOut">SIGN OUT</button>
      </nav>
    </div>
  </header>
</template>
<script setup>
import {inject} from "vue";

const {auth, signOut} = inject('auth');

function onClickSignOut() {
  signOut();
}
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
