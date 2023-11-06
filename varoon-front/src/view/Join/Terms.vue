<template>
  <div class="terms">
    <h1 class="text-h1 text-center">회원 가입</h1>
    <img class="load-map mt-40" src="@/images/join/join-step-one.png" alt="join step one"/>
    <div class="content mt-20">
      <div class="all-accept checkbox-wrapper pb-12">
        <img class="checkbox mr-12" alt="checkbox" :src="getCheckImageUrl(isAllAgreed)" @click="onclickCheckAll"/>
        <p class="text-body1 text-p1" @click="onclickCheckAll">전체 동의</p>
      </div>
      <div class="term-wrapper mt-20">
        <div class="checkbox-wrapper mr-auto">
          <img class="checkbox mr-12" alt="checkbox" :src="getCheckImageUrl(isAgreeTerms)"
               @click="() => {isAgreeTerms = !isAgreeTerms}"/>
          <p class="text-body1" @click="() => {isAgreeTerms = !isAgreeTerms}">이용약관 동의(필수)</p>
        </div>
        <p class="term text-body1 mt-8 px-16 py-8">
          <b>제 1조(목적)</b> <br/>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32.
        </p>
      </div>
      <div class="term-wrapper mt-20">
        <div class="checkbox-wrapper">
          <img class="checkbox mr-12" alt="checkbox" :src="getCheckImageUrl(isAgreeInformationGathering)"
               @click="() => {isAgreeInformationGathering = !isAgreeInformationGathering}"/>
          <p class="text-body1" @click="() => {isAgreeInformationGathering = !isAgreeInformationGathering}">개인정보 수집 및
            이용에 대한 안내 (필수)</p>
        </div>
        <p class="term text-body1 mt-8 px-16 py-8">
          <b>제 1조 (개인정보 수집,이용 목적)</b><br/>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
    <router-link :to="{name: 'join-information'}" custom v-slot="{navigate}">
      <button class="next-button text-body1 mt-40 ml-auto py-8 px-12" :class="{'next-button-active': isAllAgreed}"
              @click="onclickGoNext(navigate)">
        다음
      </button>
    </router-link>
  </div>
</template>
<script setup>
import {computed, ref} from 'vue'
import {useRoute} from "vue-router";

const emit = defineEmits(['setStep'])
const route = useRoute();

const isAgreeTerms = ref(false);
const isAgreeInformationGathering = ref(false);
const isAllAgreed = computed(() => isAgreeTerms.value && isAgreeInformationGathering.value)

function getCheckImageUrl(flag) {
  return flag ? new URL('@/images/common/round-check-selected.png', import.meta.url) : new URL("@/images/common/round-check.png", import.meta.url)
}

function onclickCheckAll() {
  const isAllAgreedStatus = isAllAgreed.value;
  isAgreeTerms.value = !isAllAgreedStatus;
  isAgreeInformationGathering.value = !isAllAgreedStatus;
}

function onclickGoNext(navigate) {
  if (isAllAgreed.value) {
    console.log(route.name)
    emit('setStep', route.name)
    sessionStorage.setItem('varoon-join-step', route.name);
    navigate()
  }
}

</script>
<style scoped lang="scss">
.terms {
  display: flex;
  flex-direction: column;
  align-items: center;

  .load-map {
    max-width: 400px;
    width: 100%;
    object-fit: contain;
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;

    img, p {
      cursor: pointer;
    }

    img {
      width: 20px;
      object-fit: contain;
    }
  }

  .all-accept {
    border-bottom: solid 1px $g2;
  }

  .term-wrapper {
    .term {
      height: 130px;
      overflow-y: scroll;
      border: solid 1px $g2;
      border-radius: 4px;
    }
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
    }
  }

}
</style>
