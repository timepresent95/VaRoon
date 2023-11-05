<template>
  <section class="join mbox px-16 pt-20">
    <router-view :step="step" @setStep="setStep"/>
  </section>
</template>
<script setup>
import {ref} from 'vue';
import {onBeforeRouteLeave} from 'vue-router';

const step = ref(sessionStorage.getItem('varoon-join-step') ?? '')

function setStep(name) {
  step.value = name;
}

onBeforeRouteLeave(() => {
  sessionStorage.removeItem('varoon-join-step')
})
</script>
<style scoped lang="scss">
.join {
  width: 100%;
}
</style>
