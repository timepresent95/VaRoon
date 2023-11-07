<template>
  <section class="sign-in mbox px-16 pt-20">
    <h1 class="text-h1b text-center">로그인</h1>
    <p class="my-20 text-body1 text-g3 text-center" v-if="$env === 'development'">테스트 환경을 사용중입니다.<br/> 아무 값이나 입력후 로그인
      버튼을 누르면 로그인이 진행됩니다.</p>
    <form class="mt-20">
      <label class="text-h4">
        아이디
        <input type="text" class="text-body1 mt-12 py-8 px-12" v-model="id" placeholder="아이디를 입력해주세요"/>
      </label>
      <label class="text-h4 mt-20">
        비밀번호
        <input type="password" class="text-body1 mt-12 py-8 px-12" v-model="password" placeholder="비밀번호를 입력해주세요."/>
      </label>
    </form>
    <button
      class="sign-in-button text-body1 text-w1 py-8 px-12 mt-40"
      :class="{'sign-in-button-active': isFilled}"
      @click="onclickSignIn"
    >
      로그인
    </button>
    <router-link class="find-link text-body1 text-p1 text-center mt-8 mx-auto" to="/find">아이디 / 비밀번호 찾기</router-link>
  </section>
</template>

<script setup>
import {computed, inject, ref} from 'vue';


const id = ref("");
const password = ref("");
const isFilled = computed(() => id.value.trim() !== '' && password.value.trim() !== '')
const {signIn} = inject('auth');

function onclickSignIn() {
  if (!isFilled.value) {
    return;
  }
  signIn(id, password);
}
</script>

<style scoped lang="scss">
.sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  form {
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      width: 100%;
      display: flex;
      flex-direction: column;

      input {
        border: solid 1px $g4;
        border-radius: 4px;
        width: 100%;
      }
    }
  }

  .sign-in-button {
    width: 100%;
    max-width: 380px;
    background-color: $g3;
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: initial;

    &-active {
      background-color: $p1;
      cursor: pointer;
      box-shadow: 0 3px 10px 0 rgba($p1, 0.6);
    }
  }

  .find-link {
    text-decoration: underline;
  }
}
</style>
