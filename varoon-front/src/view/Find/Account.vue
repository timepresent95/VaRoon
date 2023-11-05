<template>
  <section class="find-account mx-auto">
    <h1 class="text-h1b text-center">아이디 찾기</h1>
    <form class="mt-20">
      <label class="name text-h4">
        이름
        <input type="text" class="text-body1 mt-12 py-8 px-12" placeholder="이름을 입력하세요" v-model="name"/>
      </label>
      <label class="email text-h4 mt-20">
        이메일
        <input type="text" class="text-body1 mt-12 py-8 px-12" placeholder="이메일을 입력하세요" v-model="email"/>
      </label>
    </form>
    <div class="certification-number mt-40" v-show="showCertification">
      <input type="text" maxlength="4" class="text-body1 mr-12 py-8 px-12" placeholder="인증번호 4자리"
             v-model="certificationNumber"/>
      <button class="certification-number-get text-body1 text-p1 py-8 px-12 mr-12" @click="getCertificationNumber">인증번호
        받기
      </button>
      <button class="certification-number-verify text-body1 text-w1 py-8 px-12"
              :class="{'certification-number-verify-active': filledCertificationNumber}"
              @click="verifyCertificationNumber">인증번호
        확인
      </button>
    </div>
    <p class="text-body3 text-g3 mt-8" v-show="showCertification">등록된 이메일과 일치할 경우에만 인증번호가 발송됩니다.</p>
    <button class="confirm-button text-body1 text-w1 py-8 px-12 mt-40"
            :class="{'confirm-button-active': isCertificated}">
      확인
    </button>
    <router-link :to="{name: 'find-password'}" class="link-find-password text-body1 text-p1 text-center mt-8 mx-auto">
      비밀번호 찾기
    </router-link>
  </section>
</template>
<script setup>
import {computed, ref} from 'vue';

const name = ref('')
const email = ref('')
const certificationNumber = ref('')
const isCertificated = ref(false)
const filledCertificationNumber = computed(() => certificationNumber.value.length === 4);
const showCertification = computed(() => name.value.trim() !== '' && email.value.trim() !== '')

function getCertificationNumber() {
  alert('테스트 환경에서는 인증번호를 받을 수 없습니다.')
}

function verifyCertificationNumber() {
  if (!filledCertificationNumber.value) {
    return;
  }
  alert('테스트 환경에서는 인증번호를 확인할 수 없습니다.')
}

</script>
<style scoped lang="scss">
.find-account {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 380px;

  input {
    border: solid 1px $g4;
    border-radius: 4px;
    width: 100%;
  }

  form {
    label {
      display: flex;
      flex-direction: column;
    }
  }

  .certification-number {
    display: flex;

    &-get {
      border: solid 1px $p1;
    }

    &-verify {
      background-color: $g3;
      cursor: initial;

      &-active {
        cursor: pointer;
        background-color: $p1;
      }
    }

    button {
      border-radius: 4px;
      white-space: nowrap;
    }
  }

  .confirm-button {
    width: 100%;
    border-radius: 4px;
    background-color: $g3;
    cursor: initial;

    &-active {
      cursor: pointer;
      background-color: $p1;
    }
  }

  .link-find-password {
    text-decoration: underline;
  }
}
</style>
