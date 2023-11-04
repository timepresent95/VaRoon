<template>
  <div class="vr-market mbox pt-12 px-16">
    <navigation class="pb-12"/>
    <router-view/>
  </div>
</template>
<script setup>
import Navigation from '@/components/VRMarket/Navigation';
</script>
<style scoped lang="scss">
.vr-market {
  width: 100%;
}
</style>
