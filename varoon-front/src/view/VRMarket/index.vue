<template>
  <div class="vr-market mbox pt-12 px-16">
    <inner-top-navigation :paths="paths" class="pb-12"/>
    <router-view/>
  </div>
</template>
<script setup>
import InnerTopNavigation from '@/components/Common/InnerTopNavigation';

const paths = [
  {name: 'vr-market-search', title: 'VR 마켓'},
  {name: 'vr-market-cart', title: '장바구니'},
  {name: 'vr-market-library', title: '구매내역'},
  {name: 'vr-market-client-download', title: '클라이언트 다운로드'},
]
</script>
<style scoped lang="scss">
.vr-market {
  width: 100%;
}
</style>
