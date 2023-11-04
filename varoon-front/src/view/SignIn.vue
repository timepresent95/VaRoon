<template>
  <section class="sign-in mbox pt-40">
    <h1 class="text-h1">로그인</h1>
    <form class="mt-40">
      <label>
        ID
        <input class="text-body1 px-16 py-12 mt-4" type="text" v-model="id" placeholder="아이디를 입력해주세요"/>
      </label>
      <label class="mt-12">
        Password
        <input class="text-body1 px-16 py-12 mt-4" type="password" v-model="password" placeholder="비밀번호를 입력해주세요."/>
      </label>
      <button
        class="text-body1 px-16 py-12 mt-40"
        type="submit"
        :disabled="invalidForm"
      >
        로그인
      </button>
    </form>
    <router-link class="find-link text-g3 mt-12" to="/">아이디 / 비밀번호 찾기</router-link>
  </section>
</template>

<script setup>
import {ref} from 'vue';

const id = ref("");
const password = ref("");
</script>

<style scoped lang="scss">
.sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  form {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      width: 100%;
      display: flex;
      flex-direction: column;

      input {
        border: solid 1px $g2;
        border-radius: 4px;
      }
    }

    button {
      width: 100%;
      background-color: $g2;
      border-radius: 4px;
      outline: none;
      border: none;
      color: $w1;
    }
  }

  .find-link {
    text-decoration: underline;
  }
}
</style>
