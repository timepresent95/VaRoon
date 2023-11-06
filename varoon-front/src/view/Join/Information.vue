<template>
  <section class="information mx-auto">
    <h1 class="text-h1 text-center">회원 가입</h1>
    <img class="load-map mt-40" src="@/images/join/join-step-two.png" alt="join step two"/>
    <div class="content">
      <form>
        <div class="name-wrapper text-h4 mt-20">
          <h4 class="text-h4">이름</h4>
          <input type="text" class="text-body1 mt-12 py-8 px-12" placeholder="이름을 입력하세요" v-model="information.name"/>
        </div>
        <div class="birthday-wrapper mt-20">
          <h4 class="text-h4">생년월일</h4>
          <div class="birthday mt-12">
            <input type="number" max="2023" min="1" class="year text-body1 mr-8 py-8 px-12" placeholder="YYYY"
                   v-model="information.birthday.year"/>
            <input type="number" max="12" min="1" class="month text-body1 mr-8 py-8 px-12" placeholder="MM"
                   v-model="information.birthday.month"/>
            <input type="number" max="31" min="1" class="date text-body1 mr-8 py-8 px-12" placeholder="DD"
                   v-model="information.birthday.date"/>
          </div>
        </div>
        <div class="gender-wrapper mt-20">
          <h4 class="text-h4">성별</h4>
          <div class="gender mt-12" @change="onclickGender">
            <input type="radio" name="gender" value="male" id="male"/>
            <label class="text-body1 text-center px-12 py-8" for="male">
              남성
            </label>
            <input type="radio" name="gender" value="female" id="female"/>
            <label class="text-body1 text-center px-12 py-8" for="female">
              여성
            </label>
          </div>
        </div>
        <div class="email-wrapper text-h4 mt-20">
          <h4 class="text-h4">이메일</h4>
          <input type="text" class="text-body1 mt-12 py-8 px-12" placeholder="이름을 입력하세요" v-model="information.email"/>
        </div>
        <div class="password-wrapper text-h4 mt-20">
          <h4 class="text-h4">비밀번호</h4>
          <input type="text" class="text-body1 mt-12 py-8 px-12" placeholder="이름을 입력하세요"
                 v-model="information.password"/>
        </div>
        <div class="password-confirm-wrapper text-h4 mt-20">
          <h4 class="text-h4">비밀번호 확인</h4>
          <input type="text" class="text-body1 mt-12 py-8 px-12" placeholder="이름을 입력하세요"
                 v-model="information.passwordConfirm"/>
        </div>
        <div class="use-wrapper text-h4 mt-20">
          <h4 class="text-h4">가입 목적</h4>
          <div class="use mt-12" @change="onclickUse">
            <input type="radio" name="use" value="doctor" id="doctor" :checked="information.type === 'doctor'"/>
            <label class="text-body1 text-center px-12 py-8" for="doctor">
              의사
            </label>
            <input type="radio" name="use" value="patient" id="patient" :checked="information.type === 'patient'"/>
            <label class="text-body1 text-center px-12 py-8" for="patient">
              환자
            </label>
            <input type="radio" name="use" value="seller" id="seller" :checked="information.type === 'seller'"/>
            <label class="text-body1 text-center px-12 py-8" for="seller">
              판매자
            </label>
          </div>
        </div>
      </form>
    </div>
    <div class="button-wrapper">
      <button class="prev-button text-body1 mt-40 mr-12 py-8 px-12" @click="router.go(-1)">
        이전
      </button>
      <router-link :to="{name: 'join-complete'}" custom v-slot="{navigate}">
        <button class="next-button text-body1 mt-40 py-8 px-12" :class="{'next-button-active': isFilled}"
                @click="onclickGoNext(navigate)">
          다음
        </button>
      </router-link>
    </div>
  </section>
</template>
<script setup>
import {reactive, computed, onMounted} from 'vue'
import {useRouter, useRoute} from 'vue-router'

const props = defineProps({step: {type: String, required: true}})
const emit = defineEmits(['setStep'])
const router = useRouter();
const route = useRoute();

const information = reactive({
  name: '',
  birthday: {year: '', month: '', date: ''},
  gender: '',
  email: '',
  password: '',
  passwordConfirm: '',
  type: ''
});

const isFilled = computed(() => information.password === information.passwordConfirm &&
  Object.entries(information).every(([key, value]) => key === 'birthday' ? value.year !== '' && value.month !== '' && value.date !== '' : value !== ''))

function onclickGender(e) {
  switch (e.target.value) {
    case 'male':
      information.gender = 'male';
      break;
    case 'female':
      information.gender = 'female';
      break;
    default:
      return;
  }
}

function onclickUse(e) {
  switch (e.target.value) {
    case 'doctor':
      information.type = 'doctor';
      break;
    case 'patient':
      information.type = 'patient';
      break;
    case 'seller':
      information.type = 'seller';
      break;
    default:
      return;
  }
}

function onclickGoNext(navigate) {
  if (isFilled.value) {
    emit('setStep', route.name)
    sessionStorage.setItem('varoon-join-step', route.name);
    navigate()
  }
}

onMounted(() => {
  if (props.step !== 'join-terms') {
    router.replace({name: 'join-terms'})
  }
})
</script>
<style scoped lang="scss">
.information {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;

  .load-map {
    max-width: 400px;
    width: 100%;
    object-fit: contain;
  }

  .content {
    width: 100%;


    input {
      width: 100%;
      border: solid 1px $g3;
      border-radius: 4px;

      &::placeholder {
        color: $g3;
      }
    }

    .birthday {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .gender {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;

      label {
        width: 100%;
        border: solid 1px $g3;
        border-radius: 4px;
        color: $g3;
        cursor: pointer;
      }

      input {
        display: none;
      }

      input[type="radio"]:checked + label {
        border: none;
        background-color: $p1;
        color: $w1;
      }
    }

    .use {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;

      label {
        width: 100%;
        border: solid 1px $g3;
        border-radius: 4px;
        color: $g3;
        cursor: pointer;
      }

      input {
        display: none;
      }

      input[type="radio"]:checked + label {
        border: none;
        background-color: $p1;
        color: $w1;
      }
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;

    .prev-button {
      width: 200px;
      border: solid 1px $b80;
      border-radius: 4px;
    }

    .next-button {
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
}

</style>
