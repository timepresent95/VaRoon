<template>
  <div class="sales-center mbox pt-12 px-16">
    <inner-top-navigation :paths="paths" class="pb-12"/>
    <router-view/>
  </div>
</template>
<script setup>
import InnerTopNavigation from "@/components/Common/InnerTopNavigation";

const paths = [
  {
    name: 'sales-center-my',
    title: "나의 컨텐츠"
  },
  {
    name: 'sales-center-registration',
    title: "컨텐츠 등록"
  },
  {
    name: 'sales-center-revenue',
    title: "수익 차트"
  },
]

</script>
<style scoped lang="scss">
.sales-center {
  width: 100%;
  :deep(.empty-content) {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
