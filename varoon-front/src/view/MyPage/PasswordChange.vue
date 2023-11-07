<template>
  <section class="password-change mx-auto">
    <div class="input-wrapper">
      <h4 class="text-h4">기존 비밀번호</h4>
      <input type="text" class="text-body1 mt-12 py-8 px-12" placeholder="이름을 입력하세요"
             v-model="prevPassword"/>
    </div>
    <div class="input-wrapper mt-20">
      <h4 class="text-h4">변경할 비밀번호</h4>
      <input type="text" class="text-body1 mt-12 py-8 px-12" placeholder="이름을 입력하세요"
             v-model="newPassword"/>
    </div>
    <div class="input-wrapper mt-20">
      <h4 class="text-h4">변경할 비밀번호 확인</h4>
      <input type="text" class="text-body1 mt-12 py-8 px-12" placeholder="이름을 입력하세요"
             v-model="newPasswordConfirm"/>
    </div>
    <router-link :to="{name: 'my-page-password-change-completed'}" custom v-slot="{navigate}">
      <button class="change-button text-body1 mt-40 py-8 px-12" :class="{'change-button-active': isFilled}"
              @click="navigate">
        변경하기
      </button>
    </router-link>
  </section>
</template>
<script setup>
import {computed, ref} from "vue";

const prevPassword = ref('');
const newPassword = ref('');
const newPasswordConfirm = ref('');
const isFilled = computed(() => prevPassword.value !== '' && newPassword.value !== '' && newPasswordConfirm.value !== '')
</script>
<style scoped lang="scss">
.password-change {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;

  .input-wrapper {
    width: 100%;

    input {
      width: 100%;
      border: solid 1px $g3;
      border-radius: 4px;

      &::placeholder {
        color: $g3;
      }
    }
  }

  .change-button {
    width: 200px;
    color: $w1;
    border-radius: 4px;
    background-color: $g3;
    cursor: initial;

    &-active {
      background-color: $p1;
      cursor: pointer;
      box-shadow: 0 3px 10px 0 rgba($p1, 0.6);
    }
  }
}
</style>
