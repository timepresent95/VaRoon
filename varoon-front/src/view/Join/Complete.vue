<template>
  <section class="complete mx-auto">
    <h1 class="text-h1 text-center">회원 가입</h1>
    <img class="load-map mt-40" src="/images/join/join-step-three.png" alt="join step three"/>
    <img class="welcome mt-40" src="/images/join-illust-img@2x.png" alt="welcome"/>
    <p class="text-body1b mt-20">환영합니다.</p>
    <p class="text-body2 mt-4">회원가입이 완료되었습니다</p>
    <router-link :to="{name: 'main'}" custom v-slot="{navigate}">
      <button class="next-button text-body1 mt-40 mx-auto py-8 px-12" @click="navigate">
        메인 화면으로
      </button>
    </router-link>
  </section>
</template>
<script setup>
import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

const props = defineProps({step: {type: String, required: true}})
const emit = defineEmits(['setStep'])
const router = useRouter();
const route = useRoute();

onMounted(() => {
  if(props.step !== 'join-information') {
    router.replace({name: 'join-terms'})
  }
})
</script>
<style scoped lang="scss">
.complete {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;

  .load-map {
    max-width: 400px;
    width: 100%;
    object-fit: contain;
  }

  .welcome {
    max-width: 200px;
    width: 100%;
    object-fit: contain;
  }

  .next-button {
    width: 200px;
    color: $w1;
    border-radius: 4px;
    background-color: $p1;
    cursor: pointer;
    box-shadow: 0 3px 10px 0 rgba($p1, 0.6);
  }
}
</style>
