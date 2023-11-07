<template>
  <section class="my-page mbox px-16 pt-20">
    <inner-top-navigation v-if="route.name !== 'my-page-password-change-completed'" :paths="paths" class="pb-12"/>
    <router-view/>
  </section>
</template>
<script setup>
import InnerTopNavigation from '@/components/Common/InnerTopNavigation';
import {useRoute} from 'vue-router';
const route = useRoute();

const paths = [
  {name: 'my-page-information', title: '내 정보'},
  {name: 'my-page-password-change', title: '비밀번호 변경'},
]
</script>
<style scoped lang="scss">
.my-page {
  width: 100%;
}
</style>
