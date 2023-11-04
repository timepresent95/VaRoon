<template>
  <nav class="navigation">
    <router-link v-for="{name, title} in navigationInfo" :key="name" :to="{name}"
                 class="text-h4b px-4 pb-4" :class="{'text-p1 current-link': name===route.name}">
      {{ title }}
    </router-link>
  </nav>
</template>
<script setup>
import {useRoute} from 'vue-router'

const route = useRoute();

const navigationInfo = [
  {name: 'vr-market-search', title: 'VR 마켓'},
  {name: 'vr-market-cart', title: '장바구니'},
  {name: 'vr-market-library', title: '구매내역'},
  {name: 'vr-market-client-download', title: '클라이언트 다운로드'},
]

</script>
<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: space-around;

  .current-link {
    border-bottom: solid 2px $p1;
  }
}
</style>
