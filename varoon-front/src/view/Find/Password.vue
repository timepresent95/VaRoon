<template>
  <section class="find-password mx-auto">
    <h1 class="text-h1b text-center">비밀번호 찾기</h1>
    <form class="mt-20">
      <label class="account text-h4">
        아이디
        <input type="text" class="text-body1 mt-12 py-8 px-12" placeholder="아이디를 입력하세요" v-model="account"/>
      </label>
      <label class="name text-h4 mt-20">
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
    <router-link :to="{name: 'find-account'}" class="link-find-account text-body1 text-p1 text-center mt-8 mx-auto">
      아이디 찾기
    </router-link>
  </section>
</template>
<script setup>
import {computed, ref} from 'vue';

const account = ref('')
const name = ref('')
const email = ref('')
const certificationNumber = ref('')
const isCertificated = ref(false)
const filledCertificationNumber = computed(() => certificationNumber.value.length === 4);
const showCertification = computed(() => account.value.trim() !== '' && name.value.trim() !== '' && email.value.trim() !== '')
</script>
<style scoped lang="scss">
.find-password {
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
      box-shadow: 0 3px 10px 0 rgba($p1, 0.6);
    }
  }

  .link-find-account {
    text-decoration: underline;
  }
}
</style>

